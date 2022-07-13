'use strict';

//Imports
const OBSWebSocket = require('obs-websocket-js');

//Ours
const nodecg = require('./util/nodecg-api-context').get();

//Replicants
const obs = nodecg.Replicant('obs');
const slippi = nodecg.Replicant('slippi');
const tournament = nodecg.Replicant('tournament');

//Statics
const obsWebSocket = new OBSWebSocket();

//Dynamics
var isConnecting = false;
var waitSceneTimer = null;
var sceneSwitchTimer = null;


//Utils
function checkAndSetNewScene(sceneName) {

	if (sceneName && obs.value.scenes.activeScene && sceneName != obs.value.scenes.activeScene) {

		//Cancel any existing pending scene switches
		if (sceneSwitchTimer) {
			clearTimeout(sceneSwitchTimer);
			sceneSwitchTimer = null;
		}

		//Delay scene switch if desired by the bundle config
		let delay = nodecg.bundleConfig.obs && nodecg.bundleConfig.obs.scenes && sceneName in nodecg.bundleConfig.obs.scenes ? nodecg.bundleConfig.obs.scenes[sceneName].delay : null;

		if (typeof (delay) == "number" && delay > 0) {

			sceneSwitchTimer = setTimeout(() => {
				obs.value.scenes.activeScene = sceneName;
			}, Math.round(delay * 1000));
		}
		else {
			obs.value.scenes.activeScene = sceneName;
		}
	}
}

function checkSceneSwitchConditions() {

	let targetScene = "";

	if (!tournament.value.autoScore && !slippi.value.gameInfo.finished) {
		targetScene = "Handwarmer";
	}
	else if (tournament.value.autoScore && !slippi.value.gameInfo.finished) {
		targetScene = "Tournament";
	}
	else if (slippi.value.gameInfo.finished && tournament.value.matchScored && obs.value.scenes.activeScene && obs.value.scenes.activeScene != "Wait") {

		//Skip stats scenes in Doubles mode as there are no stats available, go straight to Wait Scene
		if (slippi.value.gameInfo.isTeams) {
			targetScene = "Wait";
		}
		else {

			//If enabled, start Wait Scene timer no matter what if needed in Singles mode
			if (!waitSceneTimer) {

				let switchEnabled = nodecg.bundleConfig.obs && nodecg.bundleConfig.obs.scenes && "Wait" in nodecg.bundleConfig.obs.scenes && "autoSwitch" in nodecg.bundleConfig.obs.scenes["Wait"] ? nodecg.bundleConfig.obs.scenes["Wait"].autoSwitch : true;

				if (switchEnabled) {
					waitSceneTimer = setTimeout(() => {
						checkAndSetNewScene("Wait");
					}, obs.value.scenes.waitTime);
				}
			}

			if (obs.value.scenes.activeScene != "Game End" && obs.value.scenes.activeScene != "Set End") {

				if (tournament.value.scores[0].score < (tournament.value.bestOf / 2) && tournament.value.scores[1].score < (tournament.value.bestOf / 2)) {
					targetScene = "Game End";
				}
				else if (tournament.value.scores[0].score > (tournament.value.bestOf / 2) || tournament.value.scores[1].score > (tournament.value.bestOf / 2)) {
					targetScene = "Set End";
				}
			}
		}
	}

	//Account for adjustment logic from user config
	if (targetScene) {
		let switchEnabled = nodecg.bundleConfig.obs && nodecg.bundleConfig.obs.scenes && targetScene in nodecg.bundleConfig.obs.scenes && "autoSwitch" in nodecg.bundleConfig.obs.scenes[targetScene] ? nodecg.bundleConfig.obs.scenes[targetScene].autoSwitch : true;

		if (!switchEnabled) {

			let gameEnabled = "Game End" in nodecg.bundleConfig.obs.scenes && "autoSwitch" in nodecg.bundleConfig.obs.scenes["Game End"] ? nodecg.bundleConfig.obs.scenes["Game End"].autoSwitch : true;
			let setEnabled = "Set End" in nodecg.bundleConfig.obs.scenes && "autoSwitch" in nodecg.bundleConfig.obs.scenes["Set End"] ? nodecg.bundleConfig.obs.scenes["Set End"].autoSwitch : true;

			//Swap to another fitting end scene if possible
			if (targetScene == "Game End" && setEnabled) {
				targetScene = "Set End";
			}
			else if (targetScene == "Set End" && gameEnabled) {
				targetScene = "Game End";
			}
			else {
				//Block the switch if disabled entirely
				targetScene = "";
			}
		}
	}

	return targetScene;
}

function autoDetermineCorrectScene(sceneNameOverride = "") {

	if (isConnecting || !obs.value.connection.connected)
		return;

	if (!obs.value.scenes.autoSwitch)
		return;

	let newScene = sceneNameOverride === "" ? checkSceneSwitchConditions() : sceneNameOverride;
	checkAndSetNewScene(newScene);
}

//Replicant Listeners
obs.on('change', (newVal, oldVal) => {

	if (!newVal)
		return;

	if (!newVal.scenes.activeScene)
		return;

	if (isConnecting || !obs.value.connection.connected)
		return;

	//User forced scene takes priority (ToDo: this is executed silently too often)
	if (!oldVal || newVal.scenes.activeScene != oldVal.scenes.activeScene) {

		obsWebSocket.send('SetCurrentScene', { 'scene-name': newVal.scenes.activeScene }).catch(ex => {
			console.log("OBS failure to force scene:", ex);

			//Fix scene
			obsWebSocket.send('GetCurrentScene').then(data => {

				if (data.status === 'ok') {
					console.log(`OBS reset active scene: ${data.name}`);
					obs.value.scenes.activeScene = data.name;
				}
			}).catch(ex => {
				console.log("OBS failure to query backup scene:", ex);
			});
		});
	} else {
		//Auto checks second priority
		autoDetermineCorrectScene();
	}
});

slippi.on('change', (newVal, oldVal) => {

	if (!newVal)
		return;

	//Cancel/Reset Wait Scene Timer if a new game starts
	if (waitSceneTimer && !newVal.gameInfo.finished) {
		clearTimeout(waitSceneTimer);
		waitSceneTimer = null;
	}

	autoDetermineCorrectScene();
});

tournament.on('change', (newVal, oldVal) => {

	if (!newVal)
		return;

	autoDetermineCorrectScene();
});

//OBS Listeners
//Events
obsWebSocket.on('SwitchScenes', (data) => {
	console.log(`OBS new active scene: ${data.sceneName}`);
	obs.value.scenes.activeScene = data.sceneName;
});

//Native
obsWebSocket.on('ConnectionOpened', (data) => {
	obs.value.connection.connected = true;
	isConnecting = false;
	console.log("OBS connection opened");
});

obsWebSocket.on('ConnectionClosed', (data) => {
	obs.value.connection.connected = false;
	console.log("OBS connection closed");
});

obsWebSocket.on('AuthenticationSuccess', (data) => {
	console.log("OBS auth ok");
});

obsWebSocket.on('AuthenticationFailure', (data) => {
	console.log("OBS auth failure");
});

//NodeCG Listeners
nodecg.listenFor('obs_connect', () => {

	if (isConnecting || obs.value.connection.connected)
		return;

	isConnecting = true;

	obsWebSocket.connect({ address: `${obs.value.connection.address}:${obs.value.connection.port}`, password: obs.value.connection.password }).then(() => {

		//Get active scene once upon successful connection
		obsWebSocket.send('GetCurrentScene').then(data => {

			if (data.status === 'ok') {
				console.log(`OBS first active scene: ${data.name}`);
				obs.value.scenes.activeScene = data.name;
			}
		}).catch(ex => {
			console.log("OBS failure to query scene:", ex);
		});
	}).catch(ex => {
		console.log("OBS failure to connect:", ex);
		isConnecting = false;
	});
});

nodecg.listenFor('obs_disconnect', () => {

	if (isConnecting || !obs.value.connection.connected)
		return;

	obsWebSocket.disconnect();
});

nodecg.listenFor('obs_autoSetScene', (data) => {
	autoDetermineCorrectScene(data.sceneName);
});


//Auto try to connect on boot if connection status was last true
if (obs.value.connection.connected) {
	obs.value.connection.connected = false;
	nodecg.sendMessage("obs_connect");
}

'use strict';

// Native
const fs = require('fs');
const path = require('path');

const { SlpLiveStream, SlpRealTime, getStageName, getStageShortName, getCharacterName, getCharacterShortName, getCharacterColorName, bitmaskToButtons } = require("@vinceau/slp-realtime");
const { ConnectionStatus, ConnectionEvent, Ports, SlpFileWriterEvent } = require("@slippi/slippi-js");

//Ours
const nodecg = require('./util/nodecg-api-context').get();
const TimeObject = require("./util/time-object");
const { computeSlpStats } = require("./stats");

//Replicants
const slippi = nodecg.Replicant('slippi');

//Statics
const slippi_matchTimer = "08:00";
const slippi_frameRate = 60;
const slippi_consoleNickname = "unknown";

var globalStream = null;
var realTimeSubs = [];

//Create timer
slippi.value.gameInfo.timer = new TimeObject(slippi.value.gameInfo.timer.rawFrames, slippi_frameRate);

//Get slp recording path
var slippi_recordingsPath;

if (!nodecg.bundleConfig.slpDumpPath || nodecg.bundleConfig.slpDumpPath.inBundle) {
	let targetPath = nodecg.bundleConfig.slpDumpPath ? nodecg.bundleConfig.slpDumpPath.path : "slpDumps";
	slippi_recordingsPath = path.resolve(process.env.NODECG_ROOT, `bundles/${nodecg.bundleName}/${targetPath}/`);
}
else {
	slippi_recordingsPath = path.resolve(nodecg.bundleConfig.slpDumpPath.path);
}

console.log("Use SLP recording path:", slippi_recordingsPath);

//Ensure the slp recording folder exists
if (!fs.existsSync(slippi_recordingsPath))
	fs.mkdirSync(slippi_recordingsPath, { recursive: true });


//Utils
function cleanupConnection() {

	for (let sub of realTimeSubs) {
		sub.unsubscribe();
	}

	realTimeSubs = [];
}

function getCharacterObject(characterId, characterColor) {
	return {
		id: characterId,
		fullName: getCharacterName(characterId),
		shortName: getCharacterShortName(characterId),
		costumeId: characterColor,
		costumeName: getCharacterColorName(characterId, characterColor)
	};
}

function findActiveTeams(players) {

	let activeTeams = [];

	for (let player of players) {

		if (activeTeams.indexOf(player.teamId) == -1) {
			activeTeams.push(player.teamId);
		}
	}

	activeTeams.sort((a, b) => (a - b));

	return activeTeams;
}

function buttonsToBoolObject(buttons) {

	let buttonMap = {
		A: false,
		B: false,
		X: false,
		Y: false,
		Z: false,
		L: false,
		R: false,
		START: false,
		D_UP: false,
		D_RIGHT: false,
		D_DOWN: false,
		D_LEFT: false
	};

	for (let button of buttons) {
		buttonMap[button] = true;
	}

	return buttonMap;
}

//Main functions
function runConnection() {

	cleanupConnection();

	const realtime = new SlpRealTime();
	realtime.setStream(globalStream);

	realTimeSubs.push(realtime.game.start$.subscribe((startState) => {
		console.log("Game has started:", startState);

		//Set status
		slippi.value.gameInfo.started = true;
		slippi.value.gameInfo.finished = false;

		//Set team info
		slippi.value.gameInfo.isTeams = startState.isTeams;
		slippi.value.gameInfo.activeTeams = startState.isTeams ? findActiveTeams(startState.players) : [];

		//Set stage
		slippi.value.gameInfo.stage.id = startState.stageId;
		slippi.value.gameInfo.stage.fullName = getStageName(startState.stageId);
		slippi.value.gameInfo.stage.shortName = getStageShortName(startState.stageId);

		//Reset elapsed frames
		slippi.value.gameInfo.elapsedFrames = 0;

		//Init timer
		let timerStartFrames = TimeObject.parseSeconds(slippi_matchTimer) * slippi_frameRate;
		TimeObject.setFrames(slippi.value.gameInfo.timer, timerStartFrames, slippi_frameRate);

		//Set players
		let playerInfoArray = [];
		let playerId = 0;

		for (let player of startState.players) {

			let slippiPlayer = {
				id: playerId++,
				index: player.playerIndex,
				port: player.port,
				teamId: startState.isTeams ? player.teamId : -1,
				character: getCharacterObject(player.characterId, player.characterColor),
				stockCountStart: player.startStocks,
				stockCountNow: player.startStocks,
				tag: player.nametag,
				display: player.displayName,
				connect: player.connectCode,
				damage: 0,
				controller: {
					mainStickX: 0,
					mainStickY: 0,
					cStickX: 0,
					cStickY: 0,
					rawButtons: 0,
					leftTrigger: 0,
					rightTrigger: 0,
					pressedButtons: {
						A: false,
						B: false,
						X: false,
						Y: false,
						Z: false,
						L: false,
						R: false,
						START: false,
						D_UP: false,
						D_RIGHT: false,
						D_DOWN: false,
						D_LEFT: false
					}
				}
			};

            //Slippi automatically has the players sorted by port/index
			playerInfoArray.push(slippiPlayer);
		}

		slippi.value.playerInfo = playerInfoArray;

		nodecg.sendMessage("tournament_autoGameStart", startState);
	}));

	realTimeSubs.push(realtime.game.end$.subscribe((endState) => {
		console.log("Game has ended:", endState);

		//Set status
		slippi.value.gameInfo.finished = true;

		nodecg.sendMessage("tournament_autoGameEnd", { endState, finalFrame: endState.lastFrame });
	}));

	realTimeSubs.push(realtime.stock.percentChange$.subscribe((event) => {

		let player = slippi.value.playerInfo.find(player => player.index === event.playerIndex);
		player.damage = Math.floor(event.percent);
		//console.log(`player ${player.id + 1} percent: ${event.percent}`);
	}));

	realTimeSubs.push(realtime.stock.countChange$.subscribe((event) => {

		let player = slippi.value.playerInfo.find(player => player.index === event.playerIndex);
		player.stockCountNow = event.stocksRemaining;
		console.log(`player ${player.id + 1} stocks change: ${event.stocksRemaining}`);
	}));

	/*
	realTimeSubs.push(realtime.stock.playerSpawn$.subscribe((stock) => {
		console.log(`player ${stock.playerIndex + 1} spawned with ${stock.count} stocks remaining`);
	}));
	*/

	realTimeSubs.push(realtime.game.rawFrames$.subscribe((frame) => {

		if (!frame.isTransferComplete)
			return;

		//Update frame count and then the timer data
		if (frame.frame > 0 && frame.frame > slippi.value.gameInfo.elapsedFrames) { //Ignore countdown

			let elapsedFrames = frame.frame - slippi.value.gameInfo.elapsedFrames;
			slippi.value.gameInfo.elapsedFrames = frame.frame;

			TimeObject.decrement(slippi.value.gameInfo.timer, elapsedFrames);
		} 

		//Per player checks
		for (let framePlayer of frame.players) {

			if (!framePlayer || !("post" in framePlayer))
				continue;

			let player = slippi.value.playerInfo.find(player => player.index === framePlayer.post.playerIndex);

			if (!player)
				continue;

			//Detect real time character changes (Sheik <--> Zelda)
			//Zelda to Sheik: 0x12 --> 0x13 (internal: 0x13 ---> 0x07)
			if (player.character.id == 0x12 && framePlayer.post.internalCharacterId == 0x07) {
				player.character = getCharacterObject(0x13, player.character.costumeId);
			}
			//Sheik to Zelda: 0x13 --> 0x12 (internal: 0x07 ---> 0x13)
			else if (player.character.id == 0x13 && framePlayer.post.internalCharacterId == 0x13) {
				player.character = getCharacterObject(0x12, player.character.costumeId);
			}

			//Update controller sticks every time
			player.controller.mainStickX = framePlayer.pre.joystickX;
			player.controller.mainStickY = framePlayer.pre.joystickY;

			player.controller.cStickX = framePlayer.pre.cStickX;
			player.controller.cStickY = framePlayer.pre.cStickY;

			player.controller.leftTrigger = framePlayer.pre.physicalLTrigger;
			player.controller.rightTrigger = framePlayer.pre.physicalRTrigger;

			//Only update button inputs if the bitmask changed
			if (framePlayer.pre.physicalButtons != player.controller.rawButtons) {

				player.controller.rawButtons = framePlayer.pre.physicalButtons;

				let pressedButtons = bitmaskToButtons(framePlayer.pre.physicalButtons);
				player.controller.pressedButtons = buttonsToBoolObject(pressedButtons);

				//console.log("Button inputs changed, now:", player.controller);
			}

			//Update misc data every time
			player.misc = {
				isFollower: framePlayer.post.isFollower,
				actionStateId: framePlayer.post.actionStateId,
				positionX: framePlayer.post.positionX,
				positionY: framePlayer.post.positionY,
				facingDirection: framePlayer.post.facingDirection,
				shieldSize: framePlayer.post.shieldSize,
				lastAttackLanded: framePlayer.post.lastAttackLanded,
				currentComboCount: framePlayer.post.currentComboCount,
				lastHitBy: framePlayer.post.lastHitBy,
				actionStateCounter: framePlayer.post.actionStateCounter,
				miscActionState: framePlayer.post.miscActionState,
				isAirborne: framePlayer.post.isAirborne,
				lastGroundId: framePlayer.post.lastGroundId,
				jumpsRemaining: framePlayer.post.jumpsRemaining,
				lCancelStatus: framePlayer.post.lCancelStatus,
				hurtboxCollisionState: framePlayer.post.hurtboxCollisionState,
				selfInducedSpeeds: {
					airX: framePlayer.post.selfInducedSpeeds.airX,
					y: framePlayer.post.selfInducedSpeeds.y,
					attackX: framePlayer.post.selfInducedSpeeds.attackX,
					attackY: framePlayer.post.selfInducedSpeeds.attackY,
					groundX: framePlayer.post.selfInducedSpeeds.groundX
				}
			};
		}
	}));
}

async function connectToSlippi(type = "dolphin", address = "0.0.0.0", slpPort = 1667) {

	slippi.value.connection.type = type;
	slippi.value.connection.address = address;
	slippi.value.connection.port = slpPort;
	slippi.value.connection.connected = false;

	//type: "dolphin" or "console"
	console.log(`Attempt to connect to slippi on port: ${slpPort}`);

	let fileOptions = {
		outputFiles: true,
		folderPath: slippi_recordingsPath,
		consoleNickname: slippi_consoleNickname
	};

	const stream = new SlpLiveStream(type, fileOptions);

	stream.connection.on(ConnectionEvent.ERROR, (err) => {
		//Silently ignore errors for now
		//console.error(err);
	});

	stream.connection.once(ConnectionEvent.CONNECT, () => {

		const connType = type === "dolphin" ? "Slippi Dolphin" : "Slippi relay";

		stream.connection.on(ConnectionEvent.STATUS_CHANGE, (status) => {

			console.log("Status change");

			if (status === ConnectionStatus.CONNECTED) {
				console.log(`Connected to ${connType}`);

				slippi.value.connection.connected = true;
				runConnection();

			} else if (status === ConnectionStatus.DISCONNECTED) {
				slippi.value.connection.connected = false;
				cleanupConnection();

				console.log(`Disconnected from ${connType}`);
			}
		});
	});

	stream.on(SlpFileWriterEvent.FILE_COMPLETE, filePath => {
		console.log("Dumped a SLP recording to:", filePath);
		nodecg.sendMessage("stats_finishGame", filePath);
	});

	globalStream = stream;
	await stream.start(address, slpPort);
}

function disconnectFromSlippi() {

	//Just cleanup in case no connection exists
	if (!globalStream) {
		slippi.value.connection.connected = false;
		cleanupConnection();
	}

	if (globalStream && "connection" in globalStream && slippi.value.connection.connected) {
		globalStream.connection.disconnect();
	}

	globalStream = null;
}


//Listeners
nodecg.listenFor('slippi_connect', (params) => {

	if (globalStream && "connection" in globalStream && slippi.value.connection.connected)
		return;

	//Dolphin. Auto assume address and port
	if (params.type === "dolphin") {
		connectToSlippi(params.type, "127.0.0.1", Ports.DEFAULT).catch(ex => console.error("Failed to connect to Slippi Dolphin:", ex));
	}
	else { //Relay
		connectToSlippi(params.type, params.address, params.port).catch(ex => console.error("Failed to connect to Slippi Relay:", ex));
	}
});

nodecg.listenFor('slippi_disconnect', () => {
	disconnectFromSlippi();
});


//TEST
async function test() {

	const device = "dolphin";
	const consolePort = 2000;

	if (device == "dolphin") {

		try {
			await connectToSlippi("dolphin", "127.0.0.1", Ports.DEFAULT);
		} catch (err) {
			console.error("Failed to connect to Dolphin! Is Slippi Dolphin running?", err);
		}
	}
	else { //console
		try {
			console.log(`Connecting on port: ${consolePort}`);
			await connectToSlippi("relay", "0.0.0.0", consolePort);
		} catch (err) {
			console.error(`Failed to connect to port ${consolePort}! Is the relay running?`, err);
		}
	}
}

//test();

//Auto try to connect on boot if connection status was last true (using last known data)
if (slippi.value.connection.connected) {
	disconnectFromSlippi();
	nodecg.sendMessage("slippi_connect", { type: slippi.value.connection.type, address: slippi.value.connection.address, port: slippi.value.connection.port });
}

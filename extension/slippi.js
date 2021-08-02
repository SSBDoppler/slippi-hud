'use strict';

const { SlpLiveStream, SlpRealTime, getStageName, getStageShortName, getCharacterName, getCharacterShortName, getCharacterColorName, bitmaskToButtons } = require("@vinceau/slp-realtime");
const { ConnectionStatus, ConnectionEvent, Ports } = require("@slippi/slippi-js");

//Ours
const nodecg = require('./util/nodecg-api-context').get();
const TimeObject = require("./util/time-object");

const slippi = nodecg.Replicant('slippi');

//Statics
const slippi_matchTimer = "08:00";
const slippi_frameRate = 60;

var globalStream = null;
var realTimeSubs = [];

//Create timer
slippi.value.gameInfo.timer = new TimeObject(slippi.value.gameInfo.timer.rawFrames, slippi_frameRate);

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
		slippi.value.playerInfo = [];

		for (let player of startState.players) {

			let slippiPlayer = {
				port: player.port,
				character: getCharacterObject(player.characterId, player.characterColor),
				stockCountStart: player.startStocks,
				stockCountNow: player.startStocks,
				tag: player.nametag,
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

			slippi.value.playerInfo.push(slippiPlayer);
			//Maybe ToDo: Maybe sort this by index (port) for safety

			nodecg.sendMessage("tournament_autoGameStart", startState);
		}
	}));

	realTimeSubs.push(realtime.game.end$.subscribe((endState) => {
		console.log("Game has ended:", endState);

		//Set status
		slippi.value.gameInfo.finished = true;

		nodecg.sendMessage("tournament_autoGameEnd", { endState, finalFrame: endState.lastFrame });
	}));

	realTimeSubs.push(realtime.stock.percentChange$.subscribe((event) => {
		slippi.value.playerInfo[event.playerIndex].damage = Math.floor(event.percent);
		//console.log(`player ${event.playerIndex + 1} percent: ${event.percent}`);
	}));

	realTimeSubs.push(realtime.stock.countChange$.subscribe((event) => {
		slippi.value.playerInfo[event.playerIndex].stockCountNow = event.stocksRemaining;
		console.log(`player ${event.playerIndex + 1} stocks change: ${event.stocksRemaining}`);
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
		for (let i = 0; i < frame.players.length; i++) {

			let player = frame.players[i];

			//Detect real time character changes (Sheik <--> Zelda)
			//Zelda to Sheik: 0x12 --> 0x13 (internal: 0x13 ---> 0x07)
			if (slippi.value.playerInfo[i].character.id == 0x12 && player.post.internalCharacterId == 0x07) {
				slippi.value.playerInfo[i].character = getCharacterObject(0x13, slippi.value.playerInfo[i].character.costumeId);
			}
			//Sheik to Zelda: 0x13 --> 0x12 (internal: 0x07 ---> 0x13)
			else if (slippi.value.playerInfo[i].character.id == 0x13 && player.post.internalCharacterId == 0x13) {
				slippi.value.playerInfo[i].character = getCharacterObject(0x12, slippi.value.playerInfo[i].character.costumeId);
			}

			//Update controller sticks every time
			slippi.value.playerInfo[i].controller.mainStickX = player.pre.joystickX;
			slippi.value.playerInfo[i].controller.mainStickY = player.pre.joystickY;

			slippi.value.playerInfo[i].controller.cStickX = player.pre.cStickX;
			slippi.value.playerInfo[i].controller.cStickY = player.pre.cStickY;

			slippi.value.playerInfo[i].controller.leftTrigger = player.pre.physicalLTrigger;
			slippi.value.playerInfo[i].controller.rightTrigger = player.pre.physicalRTrigger;

			//Only update button inputs if the bitmask changed
			if (player.pre.physicalButtons != slippi.value.playerInfo[i].controller.rawButtons) {

				slippi.value.playerInfo[i].controller.rawButtons = player.pre.physicalButtons;

				let pressedButtons = bitmaskToButtons(player.pre.physicalButtons);
				slippi.value.playerInfo[i].controller.pressedButtons = buttonsToBoolObject(pressedButtons);

				//console.log("Button inputs changed, now:", slippi.value.playerInfo[i].controller);
			}
		}


		//console.log("player 1 buttons:", frame.players[0].pre.buttons);
		//console.log("player 2 buttons:", frame.players[1].pre.buttons);
	}));
}

async function connectToSlippi(type = "dolphin", address = "0.0.0.0", slpPort = 1667) {

	slippi.value.connection.type = type;
	slippi.value.connection.address = address;
	slippi.value.connection.port = slpPort;
	slippi.value.connection.connected = false;

	//type: "dolphin" or "console"
	console.log(`Attempt to connect to slippi on port: ${slpPort}`);

	const stream = new SlpLiveStream(type);

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

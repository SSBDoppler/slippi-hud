'use strict';

// Ours
const nodecg = require('./util/nodecg-api-context').get();

const players = nodecg.Replicant('players');

//Statics
const playerCount = 2;

//Ensure we have enough player objects
if (players.value.length < playerCount) {

	for (let i = players.value.length; i < playerCount; i++) {
		let player = {
			id: i,
			slippiIndex: i,
			name: "",
			sponsor: ""
		};

		players.value.push(player);
	}
}

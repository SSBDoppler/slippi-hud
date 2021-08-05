'use strict';

// Ours
const nodecg = require('./util/nodecg-api-context').get();

const tournament = nodecg.Replicant('tournament');
const slippi = nodecg.Replicant('slippi');

//Statics
const minScoreCount = 2;

//Ensure enough score entries exist
if (tournament.value.scores.length < minScoreCount) {

	for (let i = tournament.value.scores.length; i < minScoreCount; i++) {

		let playerScore = createPlayerScoreEntry();
		tournament.value.scores.push(playerScore);
	}
}

//Utils
function createPlayerScoreEntry() {

	return {
		score: 0,
		rawResults: []
	};
}

function determineWinner(data) {

	//Score match based on rules:
	/*
	-GAME:
		-Both players have 0 stocks: do nothing (need replay)
		-One player has more than 0 stocks: winner

	-TIME:
		-Both players have identical stocks and identical damage rounded down: do nothing (need replay)
		-One player has more stocks than the other or less damage rounded down: winner

	-LRAS:
		-The one who didn't LRAS: winner
	*/

	let winnerPlayer;

	switch (data.endState.gameEndMethod) {

		case 1: { //TIME

			winnerPlayer = data.finalFrame.players.reduce((a, b) => {

				//Stock Count
				if (a.post.stocksRemaining > b.post.stocksRemaining) {
					return a;
				}
				if (a.post.stocksRemaining < b.post.stocksRemaining) {
					return b;
				}

				//Least damage
				if (Math.floor(a.post.percent) < Math.floor(b.post.percent)) {
					return a;
				}
				if (Math.floor(a.post.percent) > Math.floor(b.post.percent)) {
					return b;
				}

				//Tied
				return null;
			});

			break;
		}
		case 2: { //GAME

			winnerPlayer = data.finalFrame.players.reduce((a, b) => {

				//Stock Count
				if (a.post.stocksRemaining > 0) {
					return a;
				}
				if (b.post.stocksRemaining > 0) {
					return b;
				}

				//Tied
				return null;
			});

			break;
		}
		case 7: { //No Contest
			let loserIndex = data.endState.lrasInitiatorIndex;

			//Find first player who isn't the loser index
			winnerPlayer = data.finalFrame.players.find(player => {
				if (player.post.playerIndex == loserIndex)
					return false;
				else
					return true;
			});

			break;
		}
	}

	if (winnerPlayer) {
		return winnerPlayer.post.playerIndex;
	}
	else {
		return -1;
	}
}

//Listeners
nodecg.listenFor('tournament_resetScores', (playerCount) => {

	//Clear array, then create fresh entries
	tournament.value.scores = [];

	for (let i = 0; i < playerCount; i++) {

		let playerScore = createPlayerScoreEntry();
		tournament.value.scores.push(playerScore);
	}
});

//For Slippi API
nodecg.listenFor('tournament_autoGameStart', (data) => {

	if (!tournament.value.autoScore)
		return;

	//Ensure enough player entries exist
	let missingPlayers = data.players.length - tournament.value.scores.length;

	if (missingPlayers > 0) {

		for (let i = 0; i < missingPlayers; i++) {
			let playerScore = createPlayerScoreEntry();
			tournament.value.scores.push(playerScore);
		}
	}
});

nodecg.listenFor('tournament_autoGameEnd', (data) => {

	if (!tournament.value.autoScore)
		return;

	let winnerIndex = determineWinner(data);

	console.log("Winner id:", winnerIndex);

	//Exit early if we have a tie
	if (winnerIndex == -1)
		return;

	//Find the real index
	let winnerPlayer = slippi.value.playerInfo.find(player => player.index === winnerIndex);

	//Add +1 to the winner
	tournament.value.scores[winnerPlayer.id].score++;

	//Add raw result to every player
	for (let framePlayer of data.finalFrame.players) {

		if (!framePlayer || !("post" in framePlayer))
			continue;

		let player = slippi.value.playerInfo.find(player => player.index === framePlayer.post.playerIndex);

		if (!player)
			continue;

		let score = framePlayer.post.playerIndex == winnerIndex ? 1 : 0;
		tournament.value.scores[player.id].rawResults.push(score);
	}

	console.log("New score is:", tournament.value.scores);
});

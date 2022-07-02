'use strict';

// Ours
const nodecg = require('./util/nodecg-api-context').get();

const tournament = nodecg.Replicant('tournament');
const slippi = nodecg.Replicant('slippi');

//Statics
const minScoreCount = 2;
const minCommentatorCount = 2;
const resetScoreTimeout = 10 * 1000;

//Ensure enough score entries exist
if (!tournament.value.scores)
	tournament.value.scores = [];

if (tournament.value.scores.length < minScoreCount) {

	for (let i = tournament.value.scores.length; i < minScoreCount; i++) {

		let playerScore = createPlayerScoreEntry();
		tournament.value.scores.push(playerScore);
	}
}

//Ensure enough commentator entries exist
if (!tournament.value.commentators)
	tournament.value.commentators = [];

if (tournament.value.commentators.length < minCommentatorCount) {

	for (let i = tournament.value.commentators.length; i < minCommentatorCount; i++) {

		let commentator = createCommentatorEntry();
		commentator.id = i;

		tournament.value.commentators.push(commentator);
	}
}

//Utils
function createPlayerScoreEntry() {

	return {
		score: 0,
		rawResults: []
	};
}

function createCommentatorEntry() {

	return {
		id: -1,
		name: "",
		info: ""
	};
}

function determineWinner(data) {

	//Score match based on rules:
	//Singles:
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

	//Doubles:
	/*
	-GAME:
		-Both teams have 0 total stocks: do nothing (need replay)
		-One team has more than 0 total stocks: winner

	-TIME:
		-Both teams have identical total stocks and identical total damage rounded down: do nothing (need replay)
		-One team has more total stocks than the other or less total damage rounded down: winner

	-LRAS:
		-The team where no member performed LRAS: winner
	*/

	let winnerPlayer = null;

	switch (data.endState.gameEndMethod) {

		case 1: { //TIME

			let compareSets = [];

			if (slippi.value.gameInfo.isTeams) { //Doubles

				compareSets = Array(slippi.value.gameInfo.activeTeams.length).fill(null);

				for (let i = 0; i < data.finalFrame.players.length; i++) {

					let player = data.finalFrame.players[i];

					if (!player || !("post" in player))
						continue;

					let playerInfo = slippi.value.playerInfo.find(playerInfoElem => playerInfoElem.index === player.post.playerIndex);

					if (!playerInfo)
						continue;

                    //Get player teamId and lookup its index in sorted activeTeams. This is the target teamId
					let playerTeamId = playerInfo.teamId;
					let teamId = slippi.value.gameInfo.activeTeams.findIndex(teamIdElem => teamIdElem === playerTeamId);

					if (teamId < 0)
						continue;

					if (!compareSets[teamId]) {
						compareSets[teamId] = {
							index: teamId,
							stocksRemaining: player.post.stocksRemaining,
							percent: Math.floor(player.post.percent)
						};
					} else {
						compareSets[teamId].stocksRemaining += player.post.stocksRemaining;
						compareSets[teamId].percent += Math.floor(player.post.percent);
					}
				}

			} else { //Singles

				data.finalFrame.players.forEach((player) => {

					if (!player || !("post" in player)) {	
						compareSets.push(null);
					}

					let set = {
						index: player.post.playerIndex,
						stocksRemaining: player.post.stocksRemaining,
						percent: Math.floor(player.post.percent)
					};

					compareSets.push(set);
				});
			}
				
			winnerPlayer = compareSets.reduce((a, b) => {

				if (!a)
					return b;

				if (!b)
					return a;

				//Stock Count
				if (a.stocksRemaining > b.stocksRemaining) {
					return a;
				}
				if (a.stocksRemaining < b.stocksRemaining) {
					return b;
				}

				//Least damage
				if (a.percent < b.percent) {
					return a;
				}
				if (a.percent > b.percent) {
					return b;
				}

				//Tied
				return null;
			});

			break;
		}
		case 2: //GAME
		case 3: { //ToDo: What is '3'? Team GAME?

			let compareSets = [];

			if (slippi.value.gameInfo.isTeams) { //Doubles

				compareSets = Array(slippi.value.gameInfo.activeTeams.length).fill(null);

				for (let i = 0; i < data.finalFrame.players.length; i++) {

					let player = data.finalFrame.players[i];

					if (!player || !("post" in player))
						continue;

					let playerInfo = slippi.value.playerInfo.find(playerInfoElem => playerInfoElem.index === player.post.playerIndex);

					if (!playerInfo)
						continue;

					//Get player teamId and lookup its index in sorted activeTeams. This is the target teamId
					let playerTeamId = playerInfo.teamId;
					let teamId = slippi.value.gameInfo.activeTeams.findIndex(teamIdElem => teamIdElem === playerTeamId);

					if (teamId < 0)
						continue;

					if (!compareSets[teamId]) {
						compareSets[teamId] = {
							index: teamId,
							stocksRemaining: player.post.stocksRemaining,
						};
					} else {
						compareSets[teamId].stocksRemaining += player.post.stocksRemaining;
					}
				}

			} else { //Singles

				data.finalFrame.players.forEach((player) => {

					if (!player || !("post" in player)) {					
						compareSets.push(null);
					}

					let set = {
						index: player.post.playerIndex,
						stocksRemaining: player.post.stocksRemaining
					};

					compareSets.push(set);
				});
			}

			winnerPlayer = compareSets.reduce((a, b) => {

				if (!a)
					return b;

				if (!b)
					return a;

				//Stock Count
				if (a.stocksRemaining > 0) {
					return a;
				}
				if (b.stocksRemaining > 0) {
					return b;
				}

				//Tied
				return null;
			});

			break;
		}
		case 7: { //No Contest

			let loserIndex = data.endState.lrasInitiatorIndex;

			if (slippi.value.gameInfo.isTeams) { //Doubles

				//Find the local teamId of the loser and let the other team win
				let playerInfo = slippi.value.playerInfo.find(player => player.index === loserIndex);

				if (playerInfo) {

					let playerTeamId = playerInfo.teamId;
					let loserTeamId = slippi.value.gameInfo.activeTeams.findIndex(teamIdElem => teamIdElem === playerTeamId);

					if (loserTeamId > -1) {

						let winningTeamId = loserTeamId > 0 ? loserTeamId - 1 : loserTeamId + 1;
						winnerPlayer = { index: winningTeamId };
					}
				}
			} else { //Singles

				//Find first player who isn't the loser index
				winnerPlayer = data.finalFrame.players.find(player => {

					if (!player || !player.post || player.post.playerIndex == loserIndex)
						return false;
					else
						return true;
				});

				if (winnerPlayer)
					winnerPlayer = { index: winnerPlayer.post.playerIndex };
			}

			break;
		}
	}

	if (winnerPlayer) {
		return winnerPlayer.index;
	}
	else {
		return -1;
	}
}

//Listeners
nodecg.listenFor('tournament_resetScores', () => {

	//Clear array, then create fresh entries
	tournament.value.scores = [];
	tournament.value.matchScored = false;

	let scoreTargetLength = 2;

	//Force to team count instead of player count if team mode is true
	if (slippi.value.gameInfo.started == true) {
		scoreTargetLength = slippi.value.gameInfo.isTeams ? slippi.value.gameInfo.activeTeams.length : slippi.value.playerInfo.length;
	}

	for (let i = 0; i < scoreTargetLength; i++) {
		let playerScore = createPlayerScoreEntry();
		tournament.value.scores.push(playerScore);
	}
});

//For Slippi API
nodecg.listenFor('tournament_autoGameStart', (data) => {

	tournament.value.matchScored = false;

	//Auto switch to the correct mode on game start
	tournament.value.isTeams = data.isTeams;

	if (!tournament.value.autoScore)
		return;

	//Ensure enough score entries exist
	let scoreTargetLength = data.isTeams ? slippi.value.gameInfo.activeTeams.length : data.players.length;
	let missingPlayers = scoreTargetLength - tournament.value.scores.length;

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

	//console.log("Winner id:", winnerIndex);

	//Exit early if we have a tie
	if (winnerIndex == -1)
		return;

	//In teams mode, winnerIndex is already the final score id
	let winnerId = winnerIndex;

	if (!slippi.value.gameInfo.isTeams) {
		//Find the real index
		let winnerPlayer = slippi.value.playerInfo.find(player => player.index === winnerIndex);

		if (!winnerPlayer)
			return;

		winnerId = winnerPlayer.id;
	}

	//Protect against invalid wins crashing the app
	if (tournament.value.scores.length <= winnerId)
		return;

	//Add +1 to the winner
	tournament.value.scores[winnerId].score++;

	//Add raw result to every team in doubles mode
	if (slippi.value.gameInfo.isTeams) {

		for (let i = 0; i < slippi.value.gameInfo.activeTeams.length; i++) {

			//Protect against invalid wins crashing the app
			if (tournament.value.scores.length <= i)
				break;

			let score = i == winnerId ? 1 : 0;
			tournament.value.scores[i].rawResults.push(score);
		}
	}
	else {
		//Add raw result to every player in singles mode
		for (let player of slippi.value.playerInfo) {

			if (!player)
				continue;

			//Protect against invalid wins crashing the app
			if (tournament.value.scores.length <= player.id)
				continue;

			let score = player.index == winnerIndex ? 1 : 0;

			if (score == 1) {
				console.log("Push 1 score to:", player.index, "winnerIndex:", winnerIndex);
			}

			tournament.value.scores[player.id].rawResults.push(score);
		}
	}

	console.log("New score is:", tournament.value.scores);
	nodecg.sendMessage("tournament_playerWonGame", winnerId);

	//Reset scores automatically once someone wins
	if (tournament.value.scores[winnerId].score > (tournament.value.bestOf / 2)) {

		nodecg.sendMessage("tournament_playerWonBestOf", winnerId);

		setTimeout(() => {
			nodecg.sendMessage("tournament_resetScores");
		}, resetScoreTimeout);
	}

	tournament.value.matchScored = true;
});

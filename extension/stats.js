'use strict';

//Native

//Ours
const nodecg = require('./util/nodecg-api-context').get();
const { computeSlpStats } = require("slp-stats-nodecg");

//Replicants
const stats = nodecg.Replicant('stats');
const tournament = nodecg.Replicant('tournament');

//Statics
const extraStats = nodecg.bundleConfig.extraStats ? nodecg.bundleConfig.extraStats : [];


//Utils
function getMatchCount() {
	let count = 0;

	if (tournament.value.scores) {

		for (let playerScore of tournament.value.scores) {
			count += playerScore.score;
		}
	}

	return count;
}

function setIsFinished() {
	return tournament.value.scores[0].score > (tournament.value.bestOf / 2) || tournament.value.scores[1].score > (tournament.value.bestOf / 2);
}

function checkSetFinished() {

	let matchCount = getMatchCount();

	if (matchCount > 0 && setIsFinished() && stats.value.activeSetFileList && stats.value.activeSetFileList.length >= matchCount) {

		let setParams = computeSlpStats(stats.value.activeSetFileList, extraStats);

		//Clean set list
		stats.value.activeSetFileList = [];

		if (!setParams) {
			console.error("Incomplete or missing slp recording, skip generating set stats");
			return;
		}

		stats.value.latestSet = setParams;
	}
}

//Listeners
nodecg.listenFor('stats_finishGame', (filePath) => {

	//Note: Delay here is necessary as LRAS game endings delay the slp file flushing
	setTimeout(() => {
		let latestGameParams = computeSlpStats([filePath], extraStats);

		if (!latestGameParams) {
			console.error("Incomplete slp recording, skip generating game stats");
			return;
		}

		stats.value.latestGame = latestGameParams;

		if (!stats.value.activeSetFileList) {
			stats.value.activeSetFileList = [filePath];
		}
		else {
			stats.value.activeSetFileList.push(filePath);
		}

		checkSetFinished();
	}, 100);
});

nodecg.listenFor('tournament_playerWonGame', () => {
	checkSetFinished();
});

nodecg.listenFor('tournament_resetScores', () => {
	//Clean set list
	stats.value.activeSetFileList = [];
});

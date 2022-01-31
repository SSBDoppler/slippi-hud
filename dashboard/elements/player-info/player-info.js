import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './player-info-template.js';

//Replicants
const slippi = nodecg.Replicant('slippi');
const players = nodecg.Replicant('players');
const tournament = nodecg.Replicant('tournament');

export class PlayerInfo extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			players: { type: Array },
			scores: { type: Array },
			autoScoreEnabled: { type: Boolean }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.players = [];
		this.scores = [];
		this.autoScoreEnabled = false;

		const replicants =
			[
				slippi,
				players,
				tournament
			];

		let numDeclared = 0;
		replicants.forEach(replicant => {
			replicant.once('change', () => {
				numDeclared++;

				// Start the loop once all replicants are declared
				if (numDeclared >= replicants.length) {

					players.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						if (!oldVal) {
							this.players = JSON.parse(JSON.stringify(newVal));
						}
						else {
							let oldString = JSON.stringify(oldVal);
							let newString = JSON.stringify(newVal);

							if (oldString != newString) {
								this.players = JSON.parse(newString);
							}
						}
					});

					tournament.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						if (!oldVal) {
							this.scores = JSON.parse(JSON.stringify(newVal.scores));
						}
						else {
							let oldString = JSON.stringify(oldVal.scores);
							let newString = JSON.stringify(newVal.scores);

							if (oldString != newString) {
								this.scores = JSON.parse(newString);
							}
						}

						this.autoScoreEnabled = newVal.autoScore;
					});
				}
			});
		});

	}

	_playerIndexChange(event) {

		let portName = event.target.value;

		let newIndex = portName === "Lower" ? 0 : 1; 
 
		if (newIndex < 0 || newIndex >= players.value.length)
			return;

		//console.log("New index:", newIndex, "from:", event.target.id);

		let playerIndex = Number.parseInt(event.target.id.split("_")[1]);

		let oldSlippiIndex = players.value[playerIndex].slippiIndex;

		players.value[playerIndex].slippiIndex = newIndex;

		//Check if another player already uses that index, if so swap automatically
		for (let i = 0; i < players.value.length; i++) {

			//Skip self
			if (i == playerIndex)
				continue;

			if (players.value[i].slippiIndex == newIndex) {
				players.value[i].slippiIndex = oldSlippiIndex;
				break;
			}
		}
	}

	_playerNameChange(event) {
		let newName = event.target.value;

		//console.log("New name:", newName, "from:", event.target.id);

		let playerIndex = Number.parseInt(event.target.id.split("_")[1]);

		players.value[playerIndex].name = newName;
	}

	_sponsorNameChange(event) {
		let newSponsor = event.target.value;

		//console.log("New sponsor:", newSponsor, "from:", event.target.id);

		let playerIndex = Number.parseInt(event.target.id.split("_")[1]);

		players.value[playerIndex].sponsor = newSponsor;
	}

	/*
	_swapNamesButtonClicked() {

		//ToDo: Hardcoded for now...
		let oldPlayer1Name = players.value[0].name;

		players.value[0].name = players.value[1].name;
		players.value[1].name = oldPlayer1Name;
	}
	*/

	_scoreChange(event) {
		let newScore = Number.parseInt(event.target.value);

		if (newScore < 0 || newScore > 100)
			return;

		let scoreIndex = Number.parseInt(event.target.id.split("_")[1]);

		//console.log("New score:", newScore, "for index:", scoreIndex);
		let oldScore = tournament.value.scores[players.value[scoreIndex].slippiIndex].score;
		tournament.value.scores[players.value[scoreIndex].slippiIndex].score = newScore;

		//If a score was manually increased after a match is done, count this as "matchScored"
		if (slippi.value.gameInfo.finished && newScore > oldScore)
			tournament.value.matchScored = true;
	}

	/*
	_swapScoresButtonClicked(event) {
		let oldScore = tournament.value.scores[0];

		tournament.value.scores[0] = tournament.value.scores[1];
		tournament.value.scores[1] = oldScore;
	}
	*/

	_resetScoresButtonClicked(event) {
		nodecg.sendMessage("tournament_resetScores", 2);
	}

	_autoScoreRadioChange(event) {
		if (event.target.value == "true") {
			tournament.value.autoScore = true;
		}
		else {
			tournament.value.autoScore = false;
		}
	}
}

customElements.define('player-info', PlayerInfo);

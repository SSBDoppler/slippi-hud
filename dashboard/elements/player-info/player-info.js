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
			gameMode: { type: String },
			gameModeEnabled: { type: Boolean },
			teamCount: { type: Number },
			availableTeams: { type: Array },
			teamIdToName: { type: Array },
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

		this.gameMode = "singles";
		this.gameModeEnabled = true;
		this.teamCount = 2;
		this.availableTeams = [0, 1, 2];
		this.teamIdToName = ["Red", "Blue", "Green"];
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

					slippi.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						let changed = false;

						if (!oldVal) {
							changed = true;
						} else if (oldVal.gameInfo.started != newVal.gameInfo.started || oldVal.gameInfo.finished != newVal.gameInfo.finished
							|| oldVal.gameInfo.isTeams != newVal.gameInfo.isTeams
							|| JSON.stringify(oldVal.gameInfo.activeTeams) != JSON.stringify(newVal.gameInfo.activeTeams)) {
							changed = true;
						}

						if (!changed)
							return;

						this.gameModeEnabled = newVal.gameInfo.started && !newVal.gameInfo.finished ? false : true;

						//Note: In doubles, ensure to use actual team count and available teams. If not available, assume 2 for now and all teams are available
						if (newVal.gameInfo.started && !newVal.gameInfo.finished && newVal.gameInfo.isTeams) {
							this.teamCount = newVal.gameInfo.activeTeams.length;
							this.availableTeams = JSON.parse(JSON.stringify(newVal.gameInfo.activeTeams));
						} else {
							this.teamCount = 2;
							this.availableTeams = [0, 1, 2];
						}
					});

					players.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						let players = [];

						if (!oldVal) {
							players = JSON.parse(JSON.stringify(newVal));
						}
						else {
							let oldString = JSON.stringify(oldVal);
							let newString = JSON.stringify(newVal);

							if (oldString != newString) {
								players = JSON.parse(newString);
							}
							else {
								return;
							}
						}

						this.refreshPlayerArray(players, tournament.value.isTeams);
					});

					tournament.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						let changed = false;

						if (!oldVal) {
							changed = true;
						}
						else {
							let oldString = JSON.stringify(oldVal.scores);
							let newString = JSON.stringify(newVal.scores);

							if (oldString != newString) {
								changed = true;
							} else if (oldVal.isTeams != newVal.isTeams || oldVal.autoScoreEnabled != newVal.autoScoreEnabled) {
								changed = true;
							}
						}

						if (!changed)
							return;

						if (newVal.isTeams)
							this.gameMode = "doubles";
						else
							this.gameMode = "singles";

						//Refresh player array on isTeams change
						if (!oldVal || oldVal.isTeams != newVal.isTeams) {

							if (players && players.value && players.value.length > 0) {
								let playerClone = JSON.parse(JSON.stringify(players.value));
								this.refreshPlayerArray(playerClone, newVal.isTeams);
							}
						}

						this.scores = JSON.parse(JSON.stringify(newVal.scores));
						this.autoScoreEnabled = newVal.autoScore;
					});
				}
			});
		});

	}

	updated(changedProperties) {

		let self = this;

		this.renderRoot.querySelectorAll('.teamId').forEach(item => {

			item.renderer = function (root) {

				console.log("Render Player Info");

				//Check if there is a list-box generated with the previous renderer call to update its content instead of recreation
				if (root.firstChild) {
					return;
				}

				//Create the <vaadin-list-box>
				const listBox = window.document.createElement('vaadin-list-box');

				if (self.availableTeams) {

					self.availableTeams.forEach(function (teamId) {
						const vaadinItem = window.document.createElement('vaadin-item');
						let teamName = self.teamIdToName[teamId];
						vaadinItem.textContent = teamName;
						vaadinItem.setAttribute('value', teamId.toString());

						listBox.appendChild(vaadinItem);
					});
				}

				//Add the list box
				root.appendChild(listBox);
			};
		});
	}

	refreshPlayerArray(players, isTeams) {

		//Note: Slice array to actual player count. If not available, assume 2 in singles and 4 in doubles for now		
		let playerCount = isTeams ? 4 : 2;

		if (slippi.value.gameInfo.started && !slippi.value.gameInfo.finished && slippi.value.playerInfo.length > 0) {
			playerCount = slippi.value.playerInfo.length;
		}

		players = players.slice(0, playerCount);
		this.players = players;
	}

	_gameModeChange(event) {

		let modeName = event.target.value;
		tournament.value.isTeams = modeName === "doubles" ? true : false;
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

	_pronounsChange(event) {
		let newPronouns = event.target.value;

		//console.log("New pronouns:", newPronouns, "from:", event.target.id);

		let playerIndex = Number.parseInt(event.target.id.split("_")[1]);

		players.value[playerIndex].pronouns = newPronouns;
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
		let winnerIndex = players.value[scoreIndex].slippiIndex;
		let oldScore = tournament.value.scores[winnerIndex].score;
		tournament.value.scores[winnerIndex].score = newScore;

		//If a score was manually increased after a match is done, count this as "matchScored" and as a game win for this player
		if (slippi.value.gameInfo.finished && newScore > oldScore) {

			//Delay message to allow replicant changes to propagate first
			setTimeout(() => {
				nodecg.sendMessage("tournament_playerWonGame", winnerIndex);
			}, 100);

			tournament.value.matchScored = true;
		}
	}

	/*
	_swapScoresButtonClicked(event) {
		let oldScore = tournament.value.scores[0];

		tournament.value.scores[0] = tournament.value.scores[1];
		tournament.value.scores[1] = oldScore;
	}
	*/

	_resetScoresButtonClicked(event) {
		nodecg.sendMessage("tournament_resetScores");
	}

	_swapDataButtonClicked(event) {

		//Swap in pairs of 2
		if (players.value.length > 0) {

			for (let i = 0; i < players.value.length; i++) {

				let player1 = players.value[i];
				i++;

				if (i < players.value.length) {
					let player2 = players.value[i];
					let player1Copy = JSON.parse(JSON.stringify(player1));

					player1.name = player2.name;
					player1.pronouns = player2.pronouns;
					player1.sponsor = player2.sponsor;

					player2.name = player1Copy.name;
					player2.pronouns = player1Copy.pronouns;
					player2.sponsor = player1Copy.sponsor;
				}
			}
		}
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

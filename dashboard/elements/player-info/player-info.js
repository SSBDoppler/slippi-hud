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

						//Verify currently selected team ids are available
						if (newVal.gameInfo.isTeams) {

							if (players && players.value) {

								for (let n = 0; n < players.value.length; n++) {

									let player = players.value[n];

									//Ensure all players always have a proper team set as best as possible in doubles mode
									if ((player.teamId >= 0 && this.availableTeams.indexOf(player.teamId) == -1) || (player.teamId == -1 && this.availableTeams.length > 0)) {

										//Pick first available teamId that isn't used yet as a fallback
										let availableTeam = this.availableTeams.find(teamId => {

											let isTeamIdUsed = players.value.find(otherPlayer => {
												if (otherPlayer.teamId == teamId)
													return true;

												return false;
											});

											if (isTeamIdUsed)
												return false;

											return true;
										});

										//Use the first available team as a final fallback
										if (availableTeam == undefined && this.availableTeams.length > 0) {
											availableTeam = this.availableTeams[0];
										}

										if (availableTeam == undefined) {
											player.teamId = -1;
										}
										else {
											player.teamId = availableTeam;
											console.log("Team auto picked:", player);

											//Auto force every other member
											let nextTeamMemberOffset = (n % 2) == 0 ? 1 : -1;
											players.value[n + nextTeamMemberOffset].teamId = availableTeam;

											console.log("Team auto picked 2nd:", players.value[n + nextTeamMemberOffset]);
										}
									}
								}
							}
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

	_getTeamScore(id) {

		let firstTeamMemberIndex = id * 2;

		if (!players || !players.value || players.value.length <= firstTeamMemberIndex)
			return 0;

		let teamInternalId = players.value[firstTeamMemberIndex].teamId;

		if (teamInternalId < 0)
			return 0;

		let teamId = slippi.value.gameInfo.activeTeams.findIndex(teamIdElem => teamIdElem === teamInternalId);

		if (teamId < 0)
			return 0;

		if (!tournament || !tournament.value || tournament.value.scores.length <= teamId)
			return 0;

		return tournament.value.scores[teamId].score;
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
		if (tournament.value.isTeams) { //Doubles: Only allow swap with same team members

			let teamMemberOffset = playerIndex % 2;
			let otherTeamMemberIndex = teamMemberOffset == 0 ? playerIndex + 1 : playerIndex - 1;

			if (players.value[otherTeamMemberIndex].slippiIndex == newIndex) {
				players.value[otherTeamMemberIndex].slippiIndex = oldSlippiIndex;
			}
		} else { //Singles: Swap first player that has the same port

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
	}

	_teamIdChange(event) {

		if (!event.target.value)
			return;

		let teamIndex = Number.parseInt(event.target.id.split("_")[1]);
		let teamId = Number.parseInt(event.target.value);

		if (typeof (teamId) != "number" || teamId < 0 || this.availableTeams.length <= teamIndex || this.availableTeams.indexOf(teamId) == -1 || players.value.length <= ((teamIndex * 2) + 1)) {
			event.target.value = "";
			return;
		}

		let oldTeamId = players.value[teamIndex * 2].teamId;

		players.value[teamIndex * 2].teamId = teamId;
		players.value[(teamIndex * 2) + 1].teamId = teamId;

		//Check if another team already uses that id, if so swap automatically
		for (let i = 0; i < players.value.length; i++) {

			//Skip self
			if (i == teamIndex * 2 || i == (teamIndex * 2) + 1)
				continue;

			//Swap all players that have the same id
			if (players.value[i].teamId == teamId) {
				players.value[i].teamId = oldTeamId;
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

	_scoreChange(event) {
		let newScore = Number.parseInt(event.target.value);

		if (newScore < 0 || newScore > 100)
			return;

		let scoreType = event.target.id.split("_")[0];
		let scoreIndex = Number.parseInt(event.target.id.split("_")[1]);
		let winnerIndex;

		if (scoreType == "teamScore") { //Doubles

			let firstTeamMemberIndex = scoreIndex * 2;

			if (players.value.length <= firstTeamMemberIndex) {
				event.target.value = 0;
				return;
			}

			let teamInternalId = players.value[firstTeamMemberIndex].teamId;

			if (teamInternalId < 0) {
				event.target.value = 0;
				return;
			}		

			let teamId = slippi.value.gameInfo.activeTeams.findIndex(teamIdElem => teamIdElem === teamInternalId);

			if (teamId < 0) {
				event.target.value = 0;
				return;
			}

			winnerIndex = teamId;

		} else { //Singles
			//console.log("New score:", newScore, "for index:", scoreIndex);
			winnerIndex = players.value[scoreIndex].slippiIndex;		
		}

		let oldScore = tournament.value.scores[winnerIndex].score;
		tournament.value.scores[winnerIndex].score = newScore;

		//If a score was manually increased after a match is done, count this as "matchScored" and as a game win for this player/team
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

		if (players.value.length > 0) {

			for (let i = 0; i < players.value.length; i++) {

				//If teams have been fully swapped, advanced to next team
				if (tournament.value.isTeams && i > 0 && i % 2 == 0) {
					i += 2;
				}

				if (i >= players.value.length)
					break;

				let player1 = players.value[i];

				//Singles: Swap in pairs of 2, Doubles: Swap the teams with each other
				let secondIndex = i + (tournament.value.isTeams ? 2 : 1)

				if (secondIndex < players.value.length) {
					let player2 = players.value[secondIndex];
					let player1Copy = JSON.parse(JSON.stringify(player1));

					player1.name = player2.name;
					player1.pronouns = player2.pronouns;
					player1.sponsor = player2.sponsor;

					player2.name = player1Copy.name;
					player2.pronouns = player1Copy.pronouns;
					player2.sponsor = player1Copy.sponsor;
				}

				i = i + (tournament.value.isTeams ? 0 : 1);
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

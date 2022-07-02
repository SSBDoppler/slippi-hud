import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

//Replicants
const slippi = nodecg.Replicant('slippi');
const players = nodecg.Replicant('players');
const tournament = nodecg.Replicant('tournament');
const templates = nodecg.Replicant('templates');
const stats = nodecg.Replicant('stats');

//Global vars
var style = null;
var template = null;

//Global functions
function supportsDynamicImport() {
	try {
		new Function('import("")');
		return true;
	} catch (err) {
		return false;
	}
}


//Class
export class SlippiHud extends LitElement {

	static get styles() {

		if (this.ready && style)
			return style.call(this);
		else
			return css``;
	}

	static get properties() {
		return {
			ready: { type: Boolean },
			graphic: { type: String },
			generalData: { type: Object },
			playerData: { type: Array },
			statData: { type: Object }
		};
	}

	render() {

		if (this.ready && template)
			return template.call(this);
		else
			return html``;
	}

	constructor() {

		super();

		this.generalData = {
			tournament: {},
			slippi: {}
		};

		this.statData = {
			latestGame: {},
			latestSet: {}
		};

		this.playerData = [];

		this.readyCount = 0;
		this.ready = false;

		this.graphicAttributeSet = false;
		this.templatesRepReady = false;
		this.graphic = "";
		
		const replicants =
			[
				slippi,
				players,
				tournament,
				templates,
				stats
			];

		this.neededReadyCount = replicants.length - 1;

		let numDeclared = 0;
		let numUpdated = 0;

		replicants.forEach(replicant => {
			replicant.once('change', () => {
				numDeclared++;

				// Start the loop once all replicants are declared
				if (numDeclared >= replicants.length) {

					slippi.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						this.updateSlippiData(newVal);

						this.readyCheck();
						this.requestUpdate();
					});

					players.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						this.checkPlayerCount(newVal.length);

						for (let player of newVal) {
							this.playerData[player.id].player = JSON.parse(JSON.stringify(player));
						}

						//Need to update slippi data in case the assignment index changed
						this.updateSlippiData(slippi.value);

						this.readyCheck();
						this.requestUpdate();
					});

					tournament.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						this.checkPlayerCount(newVal.scores.length);

						this.generalData.tournament = JSON.parse(JSON.stringify(newVal));

						for (let i = 0; i < players.value.length; i++) {

							let player = players.value[i];
							let playerDataIndex = player.slippiIndex;

							if (slippi.value.gameInfo.isTeams) { //Doubles

								let playerTeamId = player.teamId;

								if (typeof (playerTeamId) == "number" && playerTeamId > -1) {

									//Find local teamId from activeTeams. This is the score teamId						
									let localTeamId = slippi.value.gameInfo.activeTeams.findIndex(teamId => teamId === playerTeamId);

									if (localTeamId > -1 && this.playerData.length > i && newVal.scores.length > localTeamId) {
										this.playerData[i].score = JSON.parse(JSON.stringify(newVal.scores[localTeamId]));
									}
								}
							} else { //Singles

								//Only apply if we have data for this player and score entry
								if (this.playerData.length > playerDataIndex && newVal.scores.length > i) {
									this.playerData[playerDataIndex].score = JSON.parse(JSON.stringify(newVal.scores[i]));
								}	
							}					
						}

						this.readyCheck();
						this.requestUpdate();
					});

					templates.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						if (oldVal && oldVal.activeTemplate.name == newVal.activeTemplate.name)
							return;

						if (!supportsDynamicImport()) { //No dynamic module support available
							console.error("Dynamic module loading support is NOT available! Can not load template file!");
							alert("Your browser is not supported. Please use one of the following: Firefox 67+, Chrome 63+, Edge Chromium Branch, Opera 50+, Safari 11.1+");
							return;
						}

						this.templatesRepReady = true;
						this.changeTemplate(newVal);					
					});

					stats.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						this.statData.latestGame = JSON.parse(JSON.stringify(newVal.latestGame));
						this.statData.latestSet = JSON.parse(JSON.stringify(newVal.latestSet));

						this.readyCheck();
						this.requestUpdate();
					});
				}
			});
		});
	}

	attributeChangedCallback(name, oldval, newval) {

		super.attributeChangedCallback(name, oldval, newval);

		//Wait until graphic attribute has been set by HTML
		if (name === "graphic") {

			if (!this.graphicAttributeSet) {
				this.graphicAttributeSet = true;

				//If template rep already was ready and had to wait for the attribute, load template now
				if (this.templatesRepReady)
					this.changeTemplate(templates.value);
			}
		}
	}

	readyCheck() {

		if (this.ready)
			return;

		if (this.readyCount < this.neededReadyCount)
			this.readyCount++;
		else {
			this.ready = true;
		}
	}

	updateSlippiData(newVal) {

		this.checkPlayerCount(newVal.playerInfo.length);

		this.generalData.slippi = JSON.parse(JSON.stringify(newVal.gameInfo));

		for (let i = 0; i < players.value.length; i++) {
			let player = players.value[i];
			let playerInfoIndex = player.slippiIndex;

			if (newVal.gameInfo.isTeams) { //Doubles

				//Create sub array of playerInfo that matches the teamId of player
				let teamMembers = newVal.playerInfo.filter(elem => elem.teamId === player.teamId && elem.teamId > -1);

				if (teamMembers && teamMembers.length > 1 && teamMembers.length > playerInfoIndex) {
					//Sort by port number first
					teamMembers.sort((a, b) => (a.port - b.port));
					
					this.playerData[i].slippi = JSON.parse(JSON.stringify(teamMembers[playerInfoIndex]));			
				}
			} else { //Singles

				//Only apply if we have data for this player
				if (newVal.playerInfo.length > playerInfoIndex) {
					this.playerData[i].slippi = JSON.parse(JSON.stringify(newVal.playerInfo[playerInfoIndex]));
				}
			}
		}
	}

	checkPlayerCount(count) {

		if (this.playerData.length < count) {

			for (let i = this.playerData.length; i < count; i++) {

				let dataObject = {
					player: {},
					slippi: {},
					score: {}
				};

				this.playerData.push(dataObject);
			}
		}
	}

	changeTemplate(newVal) {

		if (!this.graphicAttributeSet)
			return;

		var templatePath = `./${this.graphic}/${newVal.activeTemplate.name}`;
		var self = this;

		console.log("Load template:", templatePath);

		//Import template module
		(new Function(`return import("${templatePath}")`))().then(module => {

			style = module.style;
			template = module.template;

			console.log("Loaded template module:", newVal.activeTemplate.name);

			self.readyCheck();
			self.requestUpdate();

		}).catch(ex => { //Load failure
			console.log(ex);
			alert("Template load error!");
			alert(ex);
		});
	}
}

customElements.define('slippi-hud', SlippiHud);

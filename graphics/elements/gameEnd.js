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
export class TestHud extends LitElement {

	static get styles() {

		if (this.ready && style)
			return style.call(this);
		else
			return css``;
	}

	static get properties() {
        return {
            ready: { type: Boolean },
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
		
		const replicants =
			[
				slippi,
				players,
				tournament,
				templates,
				stats
			];

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
							this.playerData[players.value[i].slippiIndex].score = JSON.parse(JSON.stringify(newVal.scores[i]));
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

						var self = this;

						console.log("Load template:", `./gameEnd/${newVal.activeTemplate.name}`);
						
						//Import template module
						(new Function(`return import("./gameEnd/${newVal.activeTemplate.name}")`))().then(module => {

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

	readyCheck() {

		if (this.ready)
			return;

		if (this.readyCount < 3)
			this.readyCount++;
		else
			this.ready = true;
	}

	updateSlippiData(newVal) {

		this.checkPlayerCount(newVal.playerInfo.length);

		this.generalData.slippi = JSON.parse(JSON.stringify(newVal.gameInfo));

		for (let i = 0; i < players.value.length; i++) {
			let player = players.value[i];
			this.playerData[i].slippi = JSON.parse(JSON.stringify(newVal.playerInfo[player.slippiIndex]));
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
}

customElements.define('test-hud', TestHud);

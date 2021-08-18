import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './templates/slippi-hud-template.js';

//Replicants
const slippi = nodecg.Replicant('slippi');
const players = nodecg.Replicant('players');
const tournament = nodecg.Replicant('tournament');

export class TestHud extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			ready: { type: Boolean },
			generalData: { type: Object },
			playerData: { type: Array }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.generalData = {
			tournament: {},
			slippi: {}
		};

		this.playerData = [];

		this.readyCount = 0;
		this.ready = false;
		
		const replicants =
			[
				slippi,
				players,
				tournament
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
				}
			});
		});

	}

	readyCheck() {

		if (this.ready)
			return;

		if (this.readyCount < 2)
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
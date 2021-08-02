import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './player-info-template.js';

//Replicants
const players = nodecg.Replicant('players');

export class PlayerInfo extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			players: { type: Array }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.players = [];

		const replicants =
			[
				players
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
				}
			});
		});

	}

	_playerIndexChange(event) {
		let newIndex = Number.parseInt(event.target.value);

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

	_swapNamesButtonClicked() {

		//ToDo: Hardcoded for now...
		let oldPlayer1Name = players.value[0].name;

		players.value[0].name = players.value[1].name;
		players.value[1].name = oldPlayer1Name;
	}
}

customElements.define('player-info', PlayerInfo);

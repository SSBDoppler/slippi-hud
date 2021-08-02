import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './tournament-info-template.js';

//Replicants
const tournament = nodecg.Replicant('tournament');

export class TournamentInfo extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			tournyName: { type: String },
			tournyRound: { type: String },
			inputDisplayEnabled: { type: Boolean }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.tournyName = "";
		this.tournyRound = "";
		this.inputDisplayEnabled = false;

		const replicants =
			[
				tournament
			];

		let numDeclared = 0;
		replicants.forEach(replicant => {
			replicant.once('change', () => {
				numDeclared++;

				// Start the loop once all replicants are declared
				if (numDeclared >= replicants.length) {

					tournament.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						this.tournyName = newVal.name;
						this.tournyRound = newVal.round;
						this.inputDisplayEnabled = newVal.inputDisplay;
					});
				}
			});
		});

	}

	_tournyNameChange(event) {
		let newName = event.target.value;
		tournament.value.name = newName;
	}

	_tournyRoundChange(event) {
		let newRound = event.target.value;
		tournament.value.round = newRound;
	}

	_inputDisplayCheckboxChange(event) {
		tournament.value.inputDisplay = event.target.checked;
	}
}

customElements.define('tournament-info', TournamentInfo);

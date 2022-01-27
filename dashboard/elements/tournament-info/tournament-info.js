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
			tournyBestOf: { type: String },
			commentators: { type: Array },
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
		this.tournyBestOf = "";
		this.commentators = [];
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
						this.tournyBestOf = newVal.bestOf.toString();
						this.inputDisplayEnabled = newVal.inputDisplay;

						if (!oldVal) {
							this.commentators = JSON.parse(JSON.stringify(newVal.commentators));
						}
						else {
							let oldString = JSON.stringify(oldVal.commentators);
							let newString = JSON.stringify(newVal.commentators);

							if (oldString != newString) {
								this.commentators = JSON.parse(newString);
							}
						}
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

	_tournyBestOfChange(event) {
		let newBestOf = Number.parseInt(event.target.value);
		tournament.value.bestOf = newBestOf;
	}

	_commentatorNameChange(event) {
		let newName = event.target.value;

		//console.log("New comm name:", newName, "from:", event.target.id);

		let commentatorIndex = Number.parseInt(event.target.id.split("_")[1]);

		tournament.value.commentators[commentatorIndex].name = newName;
	}

	_inputDisplayCheckboxChange(event) {
		tournament.value.inputDisplay = event.target.checked;
	}
}

customElements.define('tournament-info', TournamentInfo);

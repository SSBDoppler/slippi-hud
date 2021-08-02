import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './match-scores-template.js';

//Replicants
const tournament = nodecg.Replicant('tournament');

export class MatchScores extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			leftScore: { type: Number },
			rightScore: { type: Number },
			autoScoreEnabled: { type: Boolean }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.leftScore = 0;
		this.rightScore = 0;
		this.autoScoreEnabled = false;

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

						this.leftScore = tournament.value.scores[0].score;
						this.rightScore = tournament.value.scores[1].score;
						this.autoScoreEnabled = newVal.autoScore;
					});
				}
			});
		});

	}

	_scoreChange(event) {
		let newScore = Number.parseInt(event.target.value);

		if (newScore < 0 || newScore > 100)
			return;

		let scoreIndex = Number.parseInt(event.target.id.split("_")[1]);

		//console.log("New score:", newScore, "for index:", scoreIndex);

		tournament.value.scores[scoreIndex].score = newScore;
	}

	_swapScoresButtonClicked(event) {
		let oldScore = tournament.value.scores[0];

		tournament.value.scores[0] = tournament.value.scores[1];
		tournament.value.scores[1] = oldScore;
	}

	_resetScoresButtonClicked(event) {
		nodecg.sendMessage("tournament_resetScores", 2);
	}

	_autoScoreCheckboxChange(event) {
		tournament.value.autoScore = event.target.checked;
	}
}

customElements.define('match-scores', MatchScores);

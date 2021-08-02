import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './match-timer-template.js';

//Replicants
const slippi = nodecg.Replicant('slippi');

export class MatchTimer extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			time: { type: String }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.time = "";

		const replicants =
			[
				slippi
			];

		let numDeclared = 0;
		replicants.forEach(replicant => {
			replicant.once('change', () => {
				numDeclared++;

				// Start the loop once all replicants are declared
				if (numDeclared >= replicants.length) {

					slippi.on('change', newVal => {

						if (!newVal)
							return;

						this.time = slippi.value.gameInfo.timer.formatted;
					});
				}
			});
		});

	}
}

customElements.define('match-timer', MatchTimer);

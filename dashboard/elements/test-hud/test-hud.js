import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './test-hud-template.js';

//Replicants
const slippi = nodecg.Replicant('slippi');

export class TestHud extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			name: { type: String },
			test: { type: String },
			timer: { type: String }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.test = "lol";
		this.timer = "";

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

						//console.log("value change, now:", newVal);
						//this.test = newVal.test;

						this.timer = slippi.value.gameInfo.timer.formatted;
					});

					//nodecg.listenFor('resetTwitchPlayer', this._resetTwitchPlayer);
				}
			});
		});

	}

	_clickHandler() {
		//slippi.value.test = "yep";
	}
}

customElements.define('test-hud', TestHud);

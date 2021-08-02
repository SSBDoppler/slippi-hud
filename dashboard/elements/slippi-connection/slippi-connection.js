import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './slippi-connection-template.js';

//Replicants
const slippi = nodecg.Replicant('slippi');

export class SlippiConnection extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			connected: { type: Boolean },
			connectionType: { type: String },
			port: { type: Number }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.connected = false;
		this.connectionType = "Dolphin";
		this.port = 1667;

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

						this.connected = newVal.connection.connected;
						this.connectionType = newVal.connection.type === "dolphin" ? "Dolphin" : "Console Relay";
						this.port = newVal.connection.port;
					});

					//nodecg.listenFor('resetTwitchPlayer', this._resetTwitchPlayer);
				}
			});
		});

	}

	firstUpdated() {
		//const typeCombo = this.renderRoot.querySelector("#connection-type");
		//typeCombo.items = ['Dolphin', 'Console Relay'];
	}

	_connectionTypeChange(event) {
		this.connectionType = event.target.value;
	}

	_connectButtonClicked() {
	
		//Dolphin
		if (this.connectionType === "Dolphin") {
			nodecg.sendMessage("slippi_connect", { type: "dolphin" });
		}
		else { //Relay
			let port = Number.parseInt(this.renderRoot.querySelector("#port").value);
			nodecg.sendMessage("slippi_connect", { type: "relay", address: "0.0.0.0", port: port });
		}
	}

	_disconnectButtonClicked() {
		nodecg.sendMessage("slippi_disconnect");
	}
}

customElements.define('slippi-connection', SlippiConnection);

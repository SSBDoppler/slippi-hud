import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './obs-connection-template.js';

//Replicants
const obs = nodecg.Replicant('obs');

export class OBSConnection extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			connected: { type: Boolean },
			address: { type: String },
			port: { type: Number },
			password: { type: String },
			activeScene: { type: String },
			waitTime: { type: Number },
			autoSwitchEnabled: { type: Boolean }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.connected = false;
		this.address = "localhost";
		this.port = 4444;
		this.password = "";
		this.activeScene = "";
		this.waitTime = 0;
		this.autoSwitchEnabled = false;


		const replicants =
			[
				obs
			];

		let numDeclared = 0;
		replicants.forEach(replicant => {
			replicant.once('change', () => {
				numDeclared++;

				// Start the loop once all replicants are declared
				if (numDeclared >= replicants.length) {

					obs.on('change', newVal => {

						if (!newVal)
							return;

						this.connected = newVal.connection.connected;
						this.address = newVal.connection.address;
						this.port = newVal.connection.port;
						this.password = newVal.connection.password;

						this.activeScene = newVal.scenes.activeScene;
						this.waitTime = newVal.scenes.waitTime / 1000;
						this.autoSwitchEnabled = newVal.scenes.autoSwitch;
					});
				}
			});
		});

	}

	firstUpdated() {
	}

	_addressChange(event) {
		let newAddress = event.target.value;
		obs.value.connection.address = newAddress;
	}

	_portChange(event) {
		let newPort = Number.parseInt(event.target.value);
		obs.value.connection.port = newPort;
	}

	_passwordChange(event) {
		let newPassword = event.target.value;
		obs.value.connection.password = newPassword;
	}

	_waitTimeChange(event) {
		let newWaitTime = Number.parseInt(event.target.value);
		obs.value.scenes.waitTime = newWaitTime * 1000;
	}

	_activeSceneChange(event) {
		console.log("Switch scene to:", event.target.value);
		obs.value.scenes.activeScene = event.target.value;
	}

	_autoSwitchCheckboxChange(event) {
		obs.value.scenes.autoSwitch = event.target.checked;
	}

	_connectButtonClicked() {
		nodecg.sendMessage("obs_connect");
	}

	_disconnectButtonClicked() {
		nodecg.sendMessage("obs_disconnect");
	}
}

customElements.define('obs-connection', OBSConnection);

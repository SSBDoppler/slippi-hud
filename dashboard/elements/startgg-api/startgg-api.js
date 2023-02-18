import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './startgg-api-template.js';

//Replicants
const startgg = nodecg.Replicant('startgg');

//Global vars
var ready = false;


//Class
export class StartggApi extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			tourneySyncEnabled: { type: Boolean },
			tournamentSlug: { type: String },
			selectedQueueIndex: { type: String },
			boAutomationEnabled: { type: Boolean },
			boIntegerThreshold: { type: Number },
			topSelectedEventIndex: { type: String }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.tourneySyncEnabled = false;
		this.tournamentSlug = "";
		this.selectedQueueIndex = "";

		//Bo Automation
		this.boAutomationEnabled = false;
		this.boIntegerThreshold = 0;

		//Top 8 Generation
		this.topSelectedEventIndex = "";

		const replicants =
			[
				startgg
			];

		let numDeclared = 0;
		replicants.forEach(replicant => {
			replicant.once('change', () => {
				numDeclared++;

				// Start the loop once all replicants are declared
				if (numDeclared >= replicants.length) {

					startgg.on('change', newVal => {

						if (!newVal)
							return;

						this.tourneySyncEnabled = newVal.tournamentSyncEnabled;
						this.tournamentSlug = newVal.tournamentSlug;

						if (newVal.selectedQueue < 0)
							this.selectedQueueIndex = "";
						else
							this.selectedQueueIndex = newVal.selectedQueue.toString();

						//Bo Automation
						this.boAutomationEnabled = newVal.boAutomationEnabled;
						this.boIntegerThreshold = newVal.boIntegerThreshold;

						//Top 8 Generation
						if (newVal.selectedEvent < 0)
							this.topSelectedEventIndex = "";
						else
							this.topSelectedEventIndex = newVal.selectedEvent.toString();

						this.requestUpdate();
						ready = true;
					});
				}
			});
		});

	}

	updated(changedProperties) {

		this.renderRoot.querySelector('#selectedQueue').renderer = function (root) {

			//Check if there is a list-box generated with the previous renderer call to update its content instead of recreation
			if (root.firstChild) {
				return;
			}

			//Create the <vaadin-list-box>
			const listBox = window.document.createElement('vaadin-list-box');

			if (ready && startgg && startgg.value && startgg.value.availableQueues) {

				let index = 0;

				startgg.value.availableQueues.forEach(function (queue) {
					const vaadinItem = window.document.createElement('vaadin-item');
					vaadinItem.textContent = queue.streamName;
					vaadinItem.setAttribute('value', index.toString());

					listBox.appendChild(vaadinItem);
					index++;
				});
			}

			//Add the list box
			root.appendChild(listBox);
		};
	}

	_tourneySyncEnabledCheckboxChange(event) {
		startgg.value.tournamentSyncEnabled = event.target.checked;
	}

	_tournamentSlugChange(event) {
		let newEventURL = event.target.value;
		let eventSlug = newEventURL;

		//Extract slug from Event URL if needed
		if (newEventURL.includes("start.gg/tournament/") || newEventURL.includes("smash.gg/tournament/")) {
			eventSlug = newEventURL.substr(newEventURL.indexOf("tournament/"));
			eventSlug = eventSlug.substr(eventSlug.indexOf("/") + 1);

			if (eventSlug.includes("/"))
				eventSlug = eventSlug.substr(0, eventSlug.indexOf("/"));
		}

		startgg.value.tournamentSlug = eventSlug;
		event.target.value = eventSlug; //Ensures text box updates even if the rep value stays the same
	}

	_selectedQueueChange(event) {
		let targetQueueIndex = Number.parseInt(event.target.value);
		startgg.value.selectedQueue = targetQueueIndex;
	}

	_forceUpdateButtonClicked() {
		nodecg.sendMessage("api_startgg_refresh");
	}

	//Bo Automation
	_boAutomationEnabledCheckboxChange(event) {

		//Clear threshold on new activations to avoid instant changes of best of setting
		if (!startgg.value.boAutomationEnabled && event.target.checked) {
			startgg.value.boIntegerThreshold = -1;
		}

		startgg.value.boAutomationEnabled = event.target.checked;
	}

	_boThresholdValueChange(event) {
		let newValue = Number.parseInt(event.target.value);

		if (newValue < -1 || newValue > 255)
			return;

		startgg.value.boIntegerThreshold = newValue;
	}

	//Top 8 Generation
	_topSelectedEventChanged(event) {
		let targetEventIndex = Number.parseInt(event.target.value);
		startgg.value.selectedEvent = targetEventIndex;
	}

	_topGenerateButtonClicked() {
		alert("Not yet supported!");
	}
}

customElements.define('startgg-api', StartggApi);

import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './startgg-api-template.js';

//Replicants
const startgg = nodecg.Replicant('startgg');
const standings = nodecg.Replicant('standings');

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
			topSelectedEventIndex: { type: String },
			topStandingsGenerating: { type: Boolean },
			availableStandingEntries: { type: Array },
			selectedStandingEntries: { type: Array },
			standingEditDialogOpened: { type: Boolean }
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
		this.topStandingsGenerating = false;

		//Standing Edit Dialog
		this.availableStandingEntries = [];
		this.selectedStandingEntries = [];

		this.standingEditDialogOpened = false;
		this.standingEditDialogEntry = {};

		//Replicants
		const replicants =
			[
				startgg,
				standings
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
						if (!("selectedEvent" in newVal) || newVal.selectedEvent < 0)
							this.topSelectedEventIndex = "";
						else
							this.topSelectedEventIndex = newVal.selectedEvent.toString();

						this.requestUpdate();
						ready = true;
					});

					standings.on('change', newVal => {

						if (!newVal)
							return;

						//Test: Example data
						/*
						if (newVal.length == 0) {

							console.log("Init rep data");

							standings.value = [
								{
									placement: 1,
									name: "Doppler",
									isTeam: false,
									character: "10,20,30,40,50,60",
                                    costume: 0,
									twitter: "SSBDoppler"
								},
								{
									placement: 2,
									name: "Hbox",
									isTeam: false,
									character: "20,15",
                                    costume: 1,
									twitter: "LiquidHbox"
								},
								{
									placement: 10,
									name: "dragonbane0",
									isTeam: false,
									character: "2,0,3",
                                    costume: 5,
									twitter: "dragonbane0"
								},
								{
									placement: 99,
									name: "Mew2King",
									isTeam: false,
									character: "1,0",
                                    costume: 3,
									twitter: "MVG_Mew2King"
								}
							];

							return;
						}
						*/

						this.availableStandingEntries = JSON.parse(JSON.stringify(newVal));

						//Tag all entries with an index for consistent lookup later
						for (let i = 0; i < this.availableStandingEntries.length; i++)
							this.availableStandingEntries[i]._index = i;

						//Sort by placement ascending
						this.availableStandingEntries.sort((a, b) => {

							if (a.placement < b.placement) {
								return -1;
							}
							else if (a.placement > b.placement) {
								return 1;
							}

							return 0;
						});
						
						//Clean other values and force close dialog if it was opened, then re-render
						this.selectedStandingEntries = [];
						this.standingEditDialogOpened = false;
						this.standingEditDialogEntry = {};

						this.requestUpdate();
					});
				}
			});
		});

	}

	updated(changedProperties) {

		let self = this;

		//Stream Queues
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

		//Events
		this.renderRoot.querySelector('#eventSelector').renderer = function (root) {

			//Check if there is a list-box generated with the previous renderer call to update its content instead of recreation
			if (root.firstChild) {
				return;
			}

			//Create the <vaadin-list-box>
			const listBox = window.document.createElement('vaadin-list-box');

			if (ready && startgg && startgg.value && startgg.value.availableEvents) {

				let index = 0;

				startgg.value.availableEvents.forEach(function (event) {
					const vaadinItem = window.document.createElement('vaadin-item');
					vaadinItem.textContent = event.name;
					vaadinItem.setAttribute('value', index.toString());

					listBox.appendChild(vaadinItem);
					index++;
				});
			}

			//Add the list box
			root.appendChild(listBox);
		};

		//Standing Edit Dialog
		this.renderRoot.querySelector('#standingEditor').renderer = function (root, dialog) {

			//HTML
			root.innerHTML = `
			<vaadin-vertical-layout theme="spacing" style="width: 300px; max-width: 100%; align-items: stretch; margin-top: 0;">

				<h2 style="margin: 0; font-size: 1.4em; font-weight: bold;">
					Edit Standing
				</h2>

				<vaadin-vertical-layout style="align-items: stretch; margin-top: 0;">
					<vaadin-text-field id="name" label="Name" value="${self.standingEditDialogEntry.name}"></vaadin-text-field>
	                <vaadin-horizontal-layout style="align-items: stretch;">
					    <vaadin-text-field id="character" label="Character" value="${self.standingEditDialogEntry.character}"></vaadin-text-field>
	                    <vaadin-integer-field id="costume" style="margin-left: 5px; max-width: 103px;" label="Costume" value="${self.standingEditDialogEntry.costume}" has-controls min="0", max="5"></vaadin-integer-field>
				    </vaadin-horizontal-layout>
					<vaadin-text-field id="twitter" label="Twitter" value="${self.standingEditDialogEntry.twitter}"></vaadin-text-field>
                    <vaadin-integer-field id="placement" label="Placement" value="${self.standingEditDialogEntry.placement}" has-controls min="-1", max="1000"></vaadin-integer-field>
				</vaadin-vertical-layout>

				<vaadin-horizontal-layout style="align-items: stretch; margin-top: 0.11em;">
					<vaadin-button id="closeButton" style="align-self: center; margin-left: auto; margin-right: auto;">
						Cancel
					</vaadin-button>
					<vaadin-button theme="primary" id="saveButton" style="align-self: center; margin-left: auto; margin-right: auto;">
						Save
					</vaadin-button>
				</vaadin-horizontal-layout>
    
			</vaadin-vertical-layout>
			`;

			//Events
			root.querySelector('#closeButton').addEventListener("click", self._standingsEditClose.bind(self));
			root.querySelector('#saveButton').addEventListener("click", self._standingsEditSave.bind(self)); 
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

		this.topStandingsGenerating = true;

		nodecg.sendMessage('api_startgg_generateTopStandings', 0, (error, result) => {

			this.topStandingsGenerating = false;

			if (error) {
				console.error(error);
				alert(error.message);
				return;
			}

			alert("Standings generated!");
		});
	}

	_standingsSelectionChanged(e) {
		const item = e.detail.value;
		this.selectedStandingEntries = item ? [item] : [];

		if (!item)
			return;

		this.standingEditDialogEntry = item;
		this.standingEditDialogOpened = true;
	}

	//Standing Edit Dialog
	_standingsEditClose() {
		this.standingEditDialogOpened = false;
	}

	_standingsEditSave(event) {
		console.log("Save dialog");
	
		//Save data
		let dialogRoot = event.currentTarget.parentElement.parentElement;
		let updateIndex = this.standingEditDialogEntry._index;

		let newPlacementString = dialogRoot.querySelector('#placement').value;
		let newPlacement = Number.parseInt(newPlacementString);

		if (Number(newPlacementString) == newPlacement) {

			//Check placement integer (skip if identical to old value)
			if (newPlacement != this.standingEditDialogEntry.placement) {

				if (newPlacement < -1)
					newPlacement = -1;

				if (newPlacement > 1000)
					newPlacement = 1000;

				//If placement is still different after checks, update it
				if (newPlacement != this.standingEditDialogEntry.placement) {

					//Check if new placement is in another entry and if so give it the old placement (swap)
					let firstSamePlacement = null;

					for (let i = 0; i < standings.value.length; i++) {

						if (standings.value[i].placement == newPlacement) {

							//Multiple identical placements exist, do nothing in that case
							if (firstSamePlacement != null) {
								firstSamePlacement = null;
								break;
							}

							firstSamePlacement = i;
						}
					}

					//Swap placements if only one other placement with this new placement exists (can't be -1)
					if (firstSamePlacement != null && newPlacement != -1) {
						standings.value[firstSamePlacement].placement = standings.value[updateIndex].placement;
					}

					standings.value[updateIndex].placement = newPlacement;
				}
			}
		}
		else {
			alert("Invalid placement number entered!");
		}

		let newName = dialogRoot.querySelector('#name').value;

		if (newName != standings.value[updateIndex].name)
			standings.value[updateIndex].name = newName;

		let newChar = dialogRoot.querySelector('#character').value;

		if (newChar != standings.value[updateIndex].character)
            standings.value[updateIndex].character = newChar;

        let newCostumeString = dialogRoot.querySelector('#costume').value;
        let newCostume = Number.parseInt(newCostumeString);

        if (Number(newCostumeString) == newCostume && newCostume != standings.value[updateIndex].costume)
            standings.value[updateIndex].costume = newCostume;

		let newTwitter = dialogRoot.querySelector('#twitter').value;

		if (newTwitter != standings.value[updateIndex].twitter)
			standings.value[updateIndex].twitter = newTwitter;


		this.standingEditDialogOpened = false;
	}

	_standingsEditOpenStatusChanged(event) {
		this.standingEditDialogOpened = event.detail.value;

		//Clear edit entry and selection again upon dialog close
		if (!this.standingEditDialogOpened) {
			this.standingEditDialogEntry = {};
			this.selectedStandingEntries = [];
		}
	}
}

customElements.define('startgg-api', StartggApi);

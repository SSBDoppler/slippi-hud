import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { style, template } from './template-selector-template.js';

//Replicants
const templates = nodecg.Replicant('templates');

//Global vars
var ready = false;


//Class
export class TemplateSelector extends LitElement {

	static get styles() {
		return style.call(this);
	}

	static get properties() {
		return {
			selectedTemplateIndex: { type: String }
		}
	}

	render() {
		return template.call(this);
	}

	constructor() {

		super();

		this.selectedTemplateIndex = "0";

		const replicants =
			[
				templates
			];

		let numDeclared = 0;
		replicants.forEach(replicant => {
			replicant.once('change', () => {
				numDeclared++;

				// Start the loop once all replicants are declared
				if (numDeclared >= replicants.length) {

					templates.on('change', (newVal, oldVal) => {

						if (!newVal)
							return;

						let activeTemplateIndex = templates.value.availableTemplates.findIndex(template => {
							return template.fileName === newVal.activeTemplate.name;
						});

						if (activeTemplateIndex != -1) {
							this.selectedTemplateIndex = activeTemplateIndex.toString();
							console.log("now active:", templates.value.availableTemplates[activeTemplateIndex].fileName);
						}
						
						this.requestUpdate();
						ready = true;
					});
				}
			});
		});
	}

	updated(changedProperties) {

		this.renderRoot.querySelector('#template').renderer = function (root) {

			console.log("Render");

			//Check if there is a list-box generated with the previous renderer call to update its content instead of recreation
			if (root.firstChild) {
				return;
			}

			//Create the <vaadin-list-box>
			const listBox = window.document.createElement('vaadin-list-box');

			if (ready && templates && templates.value && templates.value.availableTemplates) {

				let index = 0;

				templates.value.availableTemplates.forEach(function (template) {
					const vaadinItem = window.document.createElement('vaadin-item');
					vaadinItem.textContent = template.fileName;
					vaadinItem.setAttribute('value', index.toString());

					listBox.appendChild(vaadinItem);
					index++;
				});
			}

			//Add the list box
			root.appendChild(listBox);
		};
	}

	_templateChange(event) {

		let targetTemplateIndex = Number.parseInt(event.target.value);
		let selectedTemplate = templates.value.availableTemplates[targetTemplateIndex];

		if (selectedTemplate) {
			console.log("Use template:", selectedTemplate.fileName);
			templates.value.activeTemplate.index = targetTemplateIndex;
			templates.value.activeTemplate.name = selectedTemplate.fileName;
		}
	}
}

customElements.define('template-selector', TemplateSelector);

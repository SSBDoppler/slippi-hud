import { html, css } from 'lit';

import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/iron-icons.js';

import '@vaadin/vaadin-template-renderer';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-combo-box'
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-integer-field.js';
import '@vaadin/vaadin-text-field/vaadin-number-field.js';
import '@vaadin/vaadin-text-field/vaadin-password-field.js';
import '@vaadin/vaadin-select';

export const style = function () {
return css`

:host {

}

#layout {
  height: 240px;
}

#updateButton {
  margin-top: 15px;
}

`;
}

export const template = function() {
return html`

<vaadin-vertical-layout id="layout">
  <vaadin-checkbox id="syncEnabledCheckbox" theme="slippi-style" ?checked=${this.syncEnabled} @change=${this._syncEnabledCheckboxChange}>Enable</vaadin-checkbox>
  <vaadin-text-field id="tournamentSlug" theme="slippi-style" label="Tournament Slug" ?disabled=${!this.syncEnabled} value=${this.tournamentSlug} clear-button-visible @change=${this._tournamentSlugChange}></vaadin-text-field>
  <vaadin-select id="selectedQueue" theme="slippi-style" label="Selected Stream Queue" ?disabled=${!this.syncEnabled} value=${this.selectedQueueIndex} @change=${this._selectedQueueChange}></vaadin-select>
  <vaadin-button id="updateButton" theme="primary" @click=${this._forceUpdateButtonClicked}>Force Update</vaadin-button>
</vaadin-vertical-layout>
`;
}

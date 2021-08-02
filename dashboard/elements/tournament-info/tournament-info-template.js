import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

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
import '@vaadin/vaadin-select';


export const style = function () {
return css`

:host {
  --vaadin-text-field-default-width: 20em;
}

#tournyName {
  margin-left: auto;
  margin-right: auto;
}

#tournyRound {
  margin-left: auto;
  margin-right: auto;
}

#inputDisplayCheckbox {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

`;
}

export const template = function() {
return html`

<vaadin-vertical-layout id="layout">
  <vaadin-text-field id="tournyName" theme="slippi-style" label="Name" value=${this.tournyName} clear-button-visible @change=${this._tournyNameChange}></vaadin-text-field>
  <vaadin-text-field id="tournyRound" theme="slippi-style" label="Round" value=${this.tournyRound} clear-button-visible @change=${this._tournyRoundChange}></vaadin-text-field>
  <vaadin-checkbox id="inputDisplayCheckbox" theme="slippi-style" ?checked=${this.inputDisplayEnabled} @change=${this._inputDisplayCheckboxChange}>Enable Input Display</vaadin-checkbox>
</vaadin-vertical-layout>
`;
}

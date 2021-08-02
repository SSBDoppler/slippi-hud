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
}

.leftScore {
  margin-left: auto;
  margin-right: auto;
}

.rightScore {
  margin-left: auto;
  margin-right: auto;
}

#swapScoresButton {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

#resetScoresButton {
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: red;
}

#autoScoreCheckbox {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

`;
}

export const template = function () {
return html`

<vaadin-vertical-layout id="layout">
  <vaadin-integer-field id="score_0" class="leftScore" theme="slippi-style" label="Left Score" value=${this.leftScore} has-controls min="0" max="100" @change=${this._scoreChange}></vaadin-integer-field>
  <vaadin-integer-field id="score_1" class="rightScore" theme="slippi-style" label="Right Score" value=${this.rightScore} has-controls min="0" max="100" @change=${this._scoreChange}></vaadin-integer-field>
  <vaadin-button id="swapScoresButton" theme="primary" @click=${this._swapScoresButtonClicked}>Swap Scores</vaadin-button>
  <vaadin-button id="resetScoresButton" theme="primary" @click=${this._resetScoresButtonClicked}>Reset Scores</vaadin-button>
  <vaadin-checkbox id="autoScoreCheckbox" theme="slippi-style" ?checked=${this.autoScoreEnabled} @change=${this._autoScoreCheckboxChange}>Enable Auto Scoring</vaadin-checkbox>
</vaadin-vertical-layout>
`;
}

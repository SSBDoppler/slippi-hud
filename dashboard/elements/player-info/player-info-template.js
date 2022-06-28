import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/iron-icons.js';

import '@vaadin/vaadin-template-renderer';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';
import '@vaadin/vaadin-button';
import "@vaadin/vaadin-radio-button/vaadin-radio-group.js";
import "@vaadin/vaadin-radio-button/vaadin-radio-button.js";
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

#layout {
  height: 320px;
}

#lowerButtonsLayout {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

.playerIndex {
  width: 110px;
  margin-left: 7px;
}

.playerName {
  margin-left: 20px;
}

.playerPronouns {
  width: 150px;
  margin-left: 20px;
}

.sponsorName {
  width: 145px;
  margin-left: 20px;
}

.playerScore {
  margin-left: 20px;
}

#resetScoresButton {
  background-color: red;
}

#swapDataButton {
  margin-left: 10px;
  margin-right: auto;
}

#autoScoreCheckbox {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

`;
}

export const template = function() {
return html`

<vaadin-vertical-layout id="layout">
  ${repeat(this.players, (item) => item.id, (item, index) => html`

    <vaadin-horizontal-layout>
	  <vaadin-select id=${'index_' + index} class="playerIndex" theme="slippi-style" label="Port" value=${item.slippiIndex == 0 ? "Lower" : "Higher"} @change=${this._playerIndexChange}>
        <template>
          <vaadin-list-box>
            <vaadin-item>Lower</vaadin-item>
            <vaadin-item>Higher</vaadin-item>
          </vaadin-list-box>
        </template>
      </vaadin-select>
      <vaadin-text-field id=${'name_' + index} class="playerName" theme="slippi-style" label="Name" value=${item.name} clear-button-visible @change=${this._playerNameChange}></vaadin-text-field>
      <vaadin-text-field id=${'pronouns_' + index} class="playerPronouns" theme="slippi-style" label="Pronouns" value=${item.pronouns} clear-button-visible @change=${this._pronounsChange}></vaadin-text-field>
      <vaadin-text-field id=${'sponsor_' + index} class="sponsorName" theme="slippi-style" label="Sponsor" value=${item.sponsor} clear-button-visible @change=${this._sponsorNameChange}></vaadin-text-field>
      <vaadin-integer-field id=${'score_' + index} class="playerScore" theme="slippi-style" label="Score" value=${this.scores[item.slippiIndex].score} has-controls min="0" max="100" @change=${this._scoreChange}></vaadin-integer-field>
    </vaadin-horizontal-layout>
  `)}

  <vaadin-horizontal-layout id="lowerButtonsLayout">
    <vaadin-button id="resetScoresButton" theme="primary" @click=${this._resetScoresButtonClicked}>Reset Scores</vaadin-button>
    <vaadin-button id="swapDataButton" theme="primary" @click=${this._swapDataButtonClicked}>Swap Data</vaadin-button>
  </vaadin-horizontal-layout>
  <vaadin-radio-group id="autoScoreCheckbox" theme="slippi-style" label="Auto Scoring" value=${this.autoScoreEnabled} @change=${this._autoScoreRadioChange}>
    <vaadin-radio-button value="false" theme="slippi-style">Hand-Warmer</vaadin-radio-button>
    <vaadin-radio-button value="true" theme="slippi-style">Tournament</vaadin-radio-button>
  </vaadin-radio-group>
</vaadin-vertical-layout>
`;
}

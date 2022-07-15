import { html, css } from 'lit';
import { map } from 'lit/directives/map.js';
import { repeat } from 'lit/directives/repeat.js';
import { range } from 'lit/directives/range.js';

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
  height: 500px;
}

#modeSelectCheckbox {
  margin-left: auto;
  margin-right: auto;
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

.teamId {
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

.teamPaddingTop {
  margin-bottom: 10px;
}

.teamPaddingBottom {
  margin-bottom: 30px;
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

  <vaadin-radio-group id="modeSelectCheckbox" theme="slippi-style" label="Mode" ?disabled=${!this.gameModeEnabled} value=${this.gameMode} @change=${this._gameModeChange}>
    <vaadin-radio-button value="singles" theme="slippi-style">Singles</vaadin-radio-button>
    <vaadin-radio-button value="doubles" theme="slippi-style">Doubles</vaadin-radio-button>
  </vaadin-radio-group>

  ${this.gameMode == "singles" ? html`
	${repeat(this.players, (item) => item.id, (item, index) => html`
      <vaadin-horizontal-layout>
	    <vaadin-select id=${'index_' + item.id} class="playerIndex" theme="slippi-style" label="Port" value=${item.slippiIndex == 0 ? "Lower" : "Higher"} @change=${this._playerIndexChange}>
          <template>
            <vaadin-list-box>
              <vaadin-item>Lower</vaadin-item>
              <vaadin-item>Higher</vaadin-item>
            </vaadin-list-box>
          </template>
        </vaadin-select>
        <vaadin-text-field id=${'name_' + item.id} class="playerName" theme="slippi-style" label="Name" value=${item.name} clear-button-visible @change=${this._playerNameChange}></vaadin-text-field>
        <vaadin-text-field id=${'pronouns_' + item.id} class="playerPronouns" theme="slippi-style" label="Pronouns" value=${item.pronouns} clear-button-visible @change=${this._pronounsChange}></vaadin-text-field>
        <vaadin-text-field id=${'sponsor_' + item.id} class="sponsorName" theme="slippi-style" label="Sponsor" value=${item.sponsor} clear-button-visible @change=${this._sponsorNameChange}></vaadin-text-field>
        <vaadin-integer-field id=${'score_' + item.id} class="playerScore" theme="slippi-style" label="Score" value=${this.scores[item.slippiIndex].score} has-controls min="0" max="100" @change=${this._scoreChange}></vaadin-integer-field>
      </vaadin-horizontal-layout>
    `)}

  ` : html`
    ${map(range(this.teamCount), (i) => html`
      <span style="font-size: 20px; font-weight:bold">Team ${i + 1}</span>
      <vaadin-horizontal-layout>
	    <vaadin-select id=${'teamId_' + i} class="teamId" theme="slippi-style" label="ID" value=${this.players[i * 2].teamId} @change=${this._teamIdChange}></vaadin-select>
        <vaadin-integer-field id=${'teamScore_' + i} class="playerScore" theme="slippi-style" label="Score" value=${this._getTeamScore(i)} has-controls min="0" max="100" @change=${this._scoreChange}></vaadin-integer-field>
      </vaadin-horizontal-layout>

	  <span class="teamPaddingTop"></span>
      <span style="font-weight:bold">Players:</span>
      ${repeat(this.players.slice(i * 2, (i * 2) + 2), (item) => item.id, (item, index) => html`
        <vaadin-horizontal-layout>
	      <vaadin-select id=${'index_' + item.id} class="playerIndex" theme="slippi-style" label="Port" value=${item.slippiIndex == 0 ? "Lower" : "Higher"} @change=${this._playerIndexChange}>
            <template>
              <vaadin-list-box>
                <vaadin-item>Lower</vaadin-item>
                <vaadin-item>Higher</vaadin-item>
              </vaadin-list-box>
            </template>
          </vaadin-select>
          <vaadin-text-field id=${'name_' + item.id} class="playerName" theme="slippi-style" label="Name" value=${item.name} clear-button-visible @change=${this._playerNameChange}></vaadin-text-field>
          <vaadin-text-field id=${'pronouns_' + item.id} class="playerPronouns" theme="slippi-style" label="Pronouns" value=${item.pronouns} clear-button-visible @change=${this._pronounsChange}></vaadin-text-field>
          <vaadin-text-field id=${'sponsor_' + item.id} class="sponsorName" theme="slippi-style" label="Sponsor" value=${item.sponsor} clear-button-visible @change=${this._sponsorNameChange}></vaadin-text-field>
        </vaadin-horizontal-layout>
      `)}
       <span class="teamPaddingBottom"></span>
    `)}
  `}
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

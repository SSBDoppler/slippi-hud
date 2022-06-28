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

#layout {
  height: 400px;
}

#tournyName {
  margin-left: auto;
  margin-right: auto;
}

#tournyRound {
  margin-left: auto;
  margin-right: auto;
}

#tournyBestOf {
  margin-left: auto;
  margin-right: auto;
}

#commentatorLayout {
  height: 80px;
}

.commentatorName {
  width: 180px;
  margin-left: 10px;
  margin-right: auto;
}

.commentatorInfo {
  width: 180px;
  margin-left: 10px;
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
  <vaadin-select id="tournyBestOf" theme="slippi-style" label="Best of #" value=${this.tournyBestOf} @change=${this._tournyBestOfChange}>
        <template>
          <vaadin-list-box>
            <vaadin-item>1</vaadin-item>
            <vaadin-item>3</vaadin-item>
			<vaadin-item>5</vaadin-item>
          </vaadin-list-box>
        </template>
  </vaadin-select>
    ${repeat(this.commentators, (item) => item.id, (item, index) => html`
	  <vaadin-horizontal-layout id="commentatorLayout">
        <vaadin-text-field id=${'commentatorName_' + index} class="commentatorName" theme="slippi-style" label=${'Commentator Name (' + '#' + (index + 1) + ')'} value=${item.name} clear-button-visible @change=${this._commentatorNameChange}></vaadin-text-field>
	    <vaadin-text-field id=${'commentatorInfo_' + index} class="commentatorInfo" theme="slippi-style" label=${'Info'} value=${item.info} clear-button-visible @change=${this._commentatorInfoChange}></vaadin-text-field>
      </vaadin-horizontal-layout>
    `)}
  <vaadin-checkbox id="inputDisplayCheckbox" theme="slippi-style" ?checked=${this.inputDisplayEnabled} @change=${this._inputDisplayCheckboxChange}>Enable Input Display</vaadin-checkbox>
</vaadin-vertical-layout>
`;
}

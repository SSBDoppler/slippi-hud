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

#layout {
  height: 250px;
}

.playerIndex {
  margin-left: 20px;
}

.playerName {
  margin-left: 20px;
}

#swapNamesButton {
  margin-top: 30px;
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
      <vaadin-integer-field id=${'index_' + index} class="playerIndex" theme="slippi-style" label="Index" value=${item.slippiIndex} has-controls min="0" max=${this.players.length - 1} @change=${this._playerIndexChange}></vaadin-integer-field>
      <vaadin-text-field id=${'name_' + index} class="playerName" theme="slippi-style" label="Name" value=${item.name} clear-button-visible @change=${this._playerNameChange}></vaadin-text-field>
    </vaadin-horizontal-layout>
  `)}

  <vaadin-button id="swapNamesButton" theme="primary" @click=${this._swapNamesButtonClicked}>Swap Names</vaadin-button>
</vaadin-vertical-layout>
`;
}

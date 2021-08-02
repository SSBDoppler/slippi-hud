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
import '@vaadin/vaadin-select';

export const style = function () {
return css`

:host {

}

#connectButton {
  margin-top: 15px;
}

#disconnectButton {
  margin-top: 15px;
  background-color: red;
}

`;
}

export const template = function() {
return html`

<vaadin-vertical-layout>
  <vaadin-select id="connection-type" theme="slippi-style" label="Connection Type" value=${this.connectionType} @change=${this._connectionTypeChange}>
    <template>
      <vaadin-list-box>
        <vaadin-item>Dolphin</vaadin-item>
        <vaadin-item>Console Relay</vaadin-item>
      </vaadin-list-box>
    </template>
  </vaadin-select>
  <vaadin-integer-field id="port" theme="slippi-style" label="Port" ?disabled=${this.connectionType === 'Dolphin'} value=${this.port}></vaadin-integer-field>
  ${this.connected ? html`
     <vaadin-button id="disconnectButton" theme="primary" @click=${this._disconnectButtonClicked}>Disconnect</vaadin-button>
     ` : html`
     <vaadin-button id="connectButton" theme="primary" @click=${this._connectButtonClicked}>Connect</vaadin-button>
     `}
</vaadin-vertical-layout>

`;
}

/*
<p>Hello, ${this.name} rep value is: ${this.test}!</p>
<button @click=${this._clickHandler}>Hit me!</button>
<br/>
 <paper-button id="copyButton">
		<iron-icon icon="content-copy"></iron-icon>
		<span id="copyButton-text">&nbsp; Paper from Module</span>
</paper-button>
 */

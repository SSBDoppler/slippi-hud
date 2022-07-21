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

#connectButton {
  margin-top: 15px;
}

#disconnectButton {
  margin-top: 15px;
  background-color: red;
}

#port {
  width: 192px;
}

#waitTime {
  width: 192px;
}

#autoSwitchCheckbox {
  margin-top: 20px;
}

`;
}

export const template = function() {
return html`

<vaadin-vertical-layout>
  <vaadin-text-field id="address" theme="slippi-style" label="IP" value=${this.address} clear-button-visible @change=${this._addressChange}></vaadin-text-field>
  <vaadin-integer-field id="port" theme="slippi-style" label="Port" value=${this.port} @change=${this._portChange}></vaadin-integer-field>
  <vaadin-password-field id="password" theme="slippi-style" label="Password" value=${this.password} clear-button-visible reveal-button-hidden @change=${this._passwordChange}></vaadin-password-field>
  <vaadin-integer-field id="waitTime" theme="slippi-style" label="Seconds to Wait" value=${this.waitTime} has-controls min="0" max="1800" @change=${this._waitTimeChange}></vaadin-integer-field>
  <vaadin-select id="activeScene" theme="slippi-style" label="Active Scene" value=${this.activeScene} @change=${this._activeSceneChange}>
    <template>
      <vaadin-list-box>
        <vaadin-item>Melee Stream</vaadin-item>
        <vaadin-item>TO: Handwarmer</vaadin-item>
        <vaadin-item>TO: Tournament</vaadin-item>
        <vaadin-item>TO: Game End</vaadin-item>
        <vaadin-item>TO: Set End</vaadin-item>
        <vaadin-item>TO: Wait</vaadin-item>
      </vaadin-list-box>
    </template>
  </vaadin-select>
  <vaadin-checkbox id="autoSwitchCheckbox" theme="slippi-style" ?checked=${this.autoSwitchEnabled} @change=${this._autoSwitchCheckboxChange}>Auto Switch Scenes</vaadin-checkbox>
  ${this.connected ? html`
     <vaadin-button id="disconnectButton" theme="primary" @click=${this._disconnectButtonClicked}>Disconnect</vaadin-button>
     ` : html`
     <vaadin-button id="connectButton" theme="primary" @click=${this._connectButtonClicked}>Connect</vaadin-button>
     `}
</vaadin-vertical-layout>

`;
}

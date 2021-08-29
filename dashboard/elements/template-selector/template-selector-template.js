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

#layout {
  height: 200px;
}

#template {
  width: 240px;
}

`;
}

export const template = function() {
return html`
<vaadin-vertical-layout id="layout">
  <vaadin-select id="template" theme="slippi-style" label="Active Template" value=${this.selectedTemplateIndex} @change=${this._templateChange}></vaadin-select>
</vaadin-vertical-layout>
`;
}

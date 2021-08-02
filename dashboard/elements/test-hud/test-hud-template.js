import { html, css } from 'lit';

import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-styles/paper-styles.js';

import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

export const style = function () {
return css`

:host {
	@apply --layout-vertical;
	@apply --layout-flex-none;
	white-space: nowrap;
}

p {
	color: white
}

paper-button {
	@apply --layout-center-center;
	@apply --layout-flex-none;
	@apply --layout-horizontal;
	border-radius: 0;
	font-size: 14px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	margin: 0 1px;
	min-width: 0;
	padding: 0;
	width: 190px;
	background-color: green;
}

`;
}

export const template = function() {
return html`

<p>Timer: ${this.timer}</p>
<br/>

<div class="form">
  <vaadin-button id="addButton" theme="primary"> Add </vaadin-button>
</div>

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

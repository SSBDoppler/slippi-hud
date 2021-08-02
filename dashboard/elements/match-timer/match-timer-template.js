import { html, css } from 'lit';

import '@polymer/iron-icons/hardware-icons.js';
import '@polymer/iron-icons/iron-icons.js';

import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';

export const style = function () {
return css`

:host {
	@apply --layout-vertical;
	@apply --layout-flex-none;
	white-space: nowrap;
    font-size: 16px;
}

p {
  color: white;
}

.boldText {
  color: white;
  font-size: 20px;
  font-weight: bolder;
}

`;
}

export const template = function() {
return html`

<p>Timer: <span class="boldText">${this.time}</span></p>
`;
}

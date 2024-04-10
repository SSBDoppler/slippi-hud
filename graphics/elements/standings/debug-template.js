import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<div style="font-weight: bold;">Standings</div>
<div>this.standingData[0].placement "${this.standingData[0].placement}"</div>
<div>this.standingData[0].name "${this.standingData[0].name}"</div>
<div>this.standingData[0].character "${this.standingData[0].character}"</div>
<div>this.standingData[0].costume "${this.standingData[0].costume}"</div>
<div>this.standingData[0].twitter "${this.standingData[0].twitter}"</div>
<div>this.standingData[1].placement "${this.standingData[1].placement}"</div>
<div>this.standingData[1].name "${this.standingData[1].name}"</div>
<div>this.standingData[1].character "${this.standingData[1].character}"</div>
<div>this.standingData[1].costume "${this.standingData[1].costume}"</div>
<div>this.standingData[1].twitter "${this.standingData[1].twitter}"</div>
<div>this.standingData[2].placement "${this.standingData[2].placement}"</div>
<div>this.standingData[2].name "${this.standingData[2].name}"</div>
<div>this.standingData[2].character "${this.standingData[2].character}"</div>
<div>this.standingData[2].costume "${this.standingData[2].costume}"</div>
<div>this.standingData[2].twitter "${this.standingData[2].twitter}"</div>
<div>this.standingData[3].placement "${this.standingData[3].placement}"</div>
<div>this.standingData[3].name "${this.standingData[3].name}"</div>
<div>this.standingData[3].character "${this.standingData[3].character}"</div>
<div>this.standingData[3].costume "${this.standingData[3].costume}"</div>
<div>this.standingData[3].twitter "${this.standingData[3].twitter}"</div>
<div>this.standingData[4].placement "${this.standingData[4].placement}"</div>
<div>this.standingData[4].name "${this.standingData[4].name}"</div>
<div>this.standingData[4].character "${this.standingData[4].character}"</div>
<div>this.standingData[4].costume "${this.standingData[4].costume}"</div>
<div>this.standingData[4].twitter "${this.standingData[4].twitter}"</div>
<div>this.standingData[5].placement "${this.standingData[5].placement}"</div>
<div>this.standingData[5].name "${this.standingData[5].name}"</div>
<div>this.standingData[5].character "${this.standingData[5].character}"</div>
<div>this.standingData[5].costume "${this.standingData[5].costume}"</div>
<div>this.standingData[5].twitter "${this.standingData[5].twitter}"</div>
<div>this.standingData[6].placement "${this.standingData[6].placement}"</div>
<div>this.standingData[6].name "${this.standingData[6].name}"</div>
<div>this.standingData[6].character "${this.standingData[6].character}"</div>
<div>this.standingData[6].costume "${this.standingData[6].costume}"</div>
<div>this.standingData[6].twitter "${this.standingData[6].twitter}"</div>
<div>this.standingData[7].placement "${this.standingData[7].placement}"</div>
<div>this.standingData[7].name "${this.standingData[7].name}"</div>
<div>this.standingData[7].character "${this.standingData[7].character}"</div>
<div>this.standingData[7].costume "${this.standingData[7].costume}"</div>
<div>this.standingData[7].twitter "${this.standingData[7].twitter}"</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}

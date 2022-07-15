import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<div style="font-weight: bold;">PLAYER 1</div>
<div>this.playerData[0].slippi.controller.mainStickX "${this.playerData[0].slippi.controller.mainStickX}"</div>
<div>this.playerData[0].slippi.controller.mainStickY "${this.playerData[0].slippi.controller.mainStickY}"</div>
<div>this.playerData[0].slippi.controller.cStickX "${this.playerData[0].slippi.controller.cStickX}"</div>
<div>this.playerData[0].slippi.controller.cStickY "${this.playerData[0].slippi.controller.cStickY}"</div>
<div>this.playerData[0].slippi.controller.rawButtons "${this.playerData[0].slippi.controller.rawButtons}"</div>
<div>this.playerData[0].slippi.controller.leftTrigger "${this.playerData[0].slippi.controller.leftTrigger}"</div>
<div>this.playerData[0].slippi.controller.rightTrigger "${this.playerData[0].slippi.controller.rightTrigger}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.A "${this.playerData[0].slippi.controller.pressedButtons.A}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.B "${this.playerData[0].slippi.controller.pressedButtons.B}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.X "${this.playerData[0].slippi.controller.pressedButtons.X}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.Y "${this.playerData[0].slippi.controller.pressedButtons.Y}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.L "${this.playerData[0].slippi.controller.pressedButtons.L}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.R "${this.playerData[0].slippi.controller.pressedButtons.R}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.START "${this.playerData[0].slippi.controller.pressedButtons.START}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.D_UP "${this.playerData[0].slippi.controller.pressedButtons.D_UP}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.D_RIGHT "${this.playerData[0].slippi.controller.pressedButtons.D_RIGHT}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.D_DOWN "${this.playerData[0].slippi.controller.pressedButtons.D_DOWN}"</div>
<div>this.playerData[0].slippi.controller.pressedButtons.D_LEFT "${this.playerData[0].slippi.controller.pressedButtons.D_LEFT}"</div>
<div style="font-weight: bold;">PLAYER 2</div>
<div>this.playerData[1].slippi.controller.mainStickX "${this.playerData[1].slippi.controller.mainStickX}"</div>
<div>this.playerData[1].slippi.controller.mainStickY "${this.playerData[1].slippi.controller.mainStickY}"</div>
<div>this.playerData[1].slippi.controller.cStickX "${this.playerData[1].slippi.controller.cStickX}"</div>
<div>this.playerData[1].slippi.controller.cStickY "${this.playerData[1].slippi.controller.cStickY}"</div>
<div>this.playerData[1].slippi.controller.rawButtons "${this.playerData[1].slippi.controller.rawButtons}"</div>
<div>this.playerData[1].slippi.controller.leftTrigger "${this.playerData[1].slippi.controller.leftTrigger}"</div>
<div>this.playerData[1].slippi.controller.rightTrigger "${this.playerData[1].slippi.controller.rightTrigger}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.A "${this.playerData[1].slippi.controller.pressedButtons.A}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.B "${this.playerData[1].slippi.controller.pressedButtons.B}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.X "${this.playerData[1].slippi.controller.pressedButtons.X}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.Y "${this.playerData[1].slippi.controller.pressedButtons.Y}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.L "${this.playerData[1].slippi.controller.pressedButtons.L}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.R "${this.playerData[1].slippi.controller.pressedButtons.R}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.START "${this.playerData[1].slippi.controller.pressedButtons.START}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.D_UP "${this.playerData[1].slippi.controller.pressedButtons.D_UP}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.D_RIGHT "${this.playerData[1].slippi.controller.pressedButtons.D_RIGHT}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.D_DOWN "${this.playerData[1].slippi.controller.pressedButtons.D_DOWN}"</div>
<div>this.playerData[1].slippi.controller.pressedButtons.D_LEFT "${this.playerData[1].slippi.controller.pressedButtons.D_LEFT}"</div>
`;

}

export const style = function () {

return css`

:host {
}

div {
	color: green;
}

`;
}

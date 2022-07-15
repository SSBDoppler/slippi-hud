import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<h1>TOURNAMENT</h1>
<div style="font-weight: bold;">GENERAL DATA</div>
<div>this.generalData.tournament.name "${this.generalData.tournament.name}"</div>
<div>this.generalData.tournament.round "${this.generalData.tournament.round}"</div>
<div>this.generalData.tournament.bestOf "${this.generalData.tournament.bestOf}"</div>
<div>this.generalData.tournament.commentators[0].id "${this.generalData.tournament.commentators[0].id}"</div>
<div>this.generalData.tournament.commentators[0].name "${this.generalData.tournament.commentators[0].name}"</div>
<div>this.generalData.tournament.commentators[1].id "${this.generalData.tournament.commentators[1].id}"</div>
<div>this.generalData.tournament.commentators[1].name "${this.generalData.tournament.commentators[1].name}"</div>
<div>this.generalData.tournament.autoScore "${this.generalData.tournament.autoScore}"</div>
<div>this.generalData.tournament.inputDisplay "${this.generalData.tournament.inputDisplay}"</div>
<div>this.generalData.slippi.connected "${this.connectionConnected}"</div>
<div>this.generalData.slippi.type "${this.connectionType}"</div>
<div>this.generalData.slippi.address "${this.connectionAddress}"</div>
<div>this.generalData.slippi.port "${this.connectionPort}"</div>
<div>this.generalData.slippi.started "${this.generalData.slippi.started}"</div>
<div>this.generalData.slippi.finished "${this.generalData.slippi.finished}"</div>
<div>this.generalData.slippi.elapsedFrames "${this.generalData.slippi.elapsedFrames}"</div>
<div>this.generalData.slippi.timer.minutes "${this.generalData.slippi.timer.minutes}"</div>
<div>this.generalData.slippi.timer.seconds "${this.generalData.slippi.timer.seconds}"</div>
<div>this.generalData.slippi.timer.milliseconds "${this.generalData.slippi.timer.milliseconds}"</div>
<div>this.generalData.slippi.timer.formatted "${this.generalData.slippi.timer.formatted}"</div>
<div>this.generalData.slippi.timer.rawFrames "${this.generalData.slippi.timer.rawFrames}"</div>
<div>this.generalData.slippi.timer.framerate "${this.generalData.slippi.timer.framerate}"</div>
<div>this.generalData.slippi.stage.id "${this.generalData.slippi.stage.id}"</div>
<div>this.generalData.slippi.stage.fullName "${this.generalData.slippi.stage.fullName}"</div>
<div>this.generalData.slippi.stage.shortName "${this.generalData.slippi.stage.shortName}"</div>
<div style="font-weight: bold;">PLAYER 1</div>
<div>this.playerData[0].player.name "${this.playerData[0].player.name}"</div>
<div>this.playerData[0].player.sponsor "${this.playerData[0].player.sponsor}"</div>
<div>this.generalData.tournament.scores[this.playerData[0].slippi.id].score "${this.generalData.tournament.scores[this.playerData[0].slippi.id].score}"</div>
<div>this.playerData[0].slippi.id "${this.playerData[0].slippi.id}"</div>
<div>this.playerData[0].slippi.index "${this.playerData[0].slippi.index}"</div>
<div>this.playerData[0].slippi.port "${this.playerData[0].slippi.port}"</div>
<div>this.playerData[0].slippi.character.id "${this.playerData[0].slippi.character.id}"</div>
<div>this.playerData[0].slippi.character.fullName "${this.playerData[0].slippi.character.fullName}"</div>
<div>this.playerData[0].slippi.character.shortName "${this.playerData[0].slippi.character.shortName}"</div>
<div>this.playerData[0].slippi.character.costumeId "${this.playerData[0].slippi.character.costumeId}"</div>
<div>this.playerData[0].slippi.character.costumeName "${this.playerData[0].slippi.character.costumeName}"</div>
<div>this.playerData[0].slippi.stockCountStart "${this.playerData[0].slippi.stockCountStart}"</div>
<div>this.playerData[0].slippi.stockCountNow "${this.playerData[0].slippi.stockCountNow}"</div>
<div>this.playerData[0].slippi.tag "${this.playerData[0].slippi.tag}"</div>
<div>this.playerData[0].slippi.display "${this.playerData[0].slippi.display}"</div>
<div>this.playerData[0].slippi.connect "${this.playerData[0].slippi.connect}"</div>
<div>this.playerData[0].slippi.damage "${this.playerData[0].slippi.damage}"</div>
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
<div>this.playerData[1].player.name "${this.playerData[1].player.name}"</div>
<div>this.playerData[1].player.sponsor "${this.playerData[1].player.sponsor}"</div>
<div>this.generalData.tournament.scores[this.playerData[1].slippi.id].score "${this.generalData.tournament.scores[this.playerData[1].slippi.id].score}"</div>
<div>this.playerData[1].slippi.id "${this.playerData[1].slippi.id}"</div>
<div>this.playerData[1].slippi.index "${this.playerData[1].slippi.index}"</div>
<div>this.playerData[1].slippi.port "${this.playerData[1].slippi.port}"</div>
<div>this.playerData[1].slippi.character.id "${this.playerData[1].slippi.character.id}"</div>
<div>this.playerData[1].slippi.character.fullName "${this.playerData[1].slippi.character.fullName}"</div>
<div>this.playerData[1].slippi.character.shortName "${this.playerData[1].slippi.character.shortName}"</div>
<div>this.playerData[1].slippi.character.costumeId "${this.playerData[1].slippi.character.costumeId}"</div>
<div>this.playerData[1].slippi.character.costumeName "${this.playerData[1].slippi.character.costumeName}"</div>
<div>this.playerData[1].slippi.stockCountStart "${this.playerData[1].slippi.stockCountStart}"</div>
<div>this.playerData[1].slippi.stockCountNow "${this.playerData[1].slippi.stockCountNow}"</div>
<div>this.playerData[1].slippi.tag "${this.playerData[1].slippi.tag}"</div>
<div>this.playerData[1].slippi.display "${this.playerData[1].slippi.display}"</div>
<div>this.playerData[1].slippi.connect "${this.playerData[1].slippi.connect}"</div>
<div>this.playerData[1].slippi.damage "${this.playerData[1].slippi.damage}"</div>
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


`;
}

import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<div style="font-weight: bold;">GENERAL DATA</div>
<div>this.generalData.tournament.name "${this.generalData.tournament.name}"</div>
<div>this.generalData.tournament.round "${this.generalData.tournament.round}"</div>
<div>this.generalData.tournament.bestOf "${this.generalData.tournament.bestOf}"</div>
<div>this.generalData.tournament.commentators[0].id "${this.generalData.tournament.commentators[0].id}"</div>
<div>this.generalData.tournament.commentators[0].id "${this.generalData.tournament.commentators[0].info}"</div>
<div>this.generalData.tournament.commentators[0].name "${this.generalData.tournament.commentators[0].name}"</div>
<div>this.generalData.tournament.commentators[1].id "${this.generalData.tournament.commentators[1].id}"</div>
<div>this.generalData.tournament.commentators[0].id "${this.generalData.tournament.commentators[1].info}"</div>
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
<div>this.generalData.slippi.isTeams "${this.generalData.slippi.isTeams}"</div>
	${this.generalData.slippi.isTeams
? html`
<div style="font-weight: bold;">Doubles</div>

<div style="font-weight: bold;">TEAM 1</div>
${this.playerData[0].slippi.teamId<this.playerData[2].slippi.teamId
? html `
<div>this.generalData.tournament.scores[0].score "${this.generalData.tournament.scores[0].score}"</div>
`
: html `
<div>this.generalData.tournament.scores[1].score "${this.generalData.tournament.scores[1].score}"</div>
`}

<div style="font-weight: bold;">PLAYER 1</div>
<div>this.playerData[0].player.name "${this.playerData[0].player.name}"</div>
<div>this.playerData[0].player.sponsor "${this.playerData[0].player.sponsor}"</div>
<div>this.playerData[0].player.sponsor "${this.playerData[0].player.pronouns}"</div>
<div>this.playerData[0].slippi.id "${this.playerData[0].slippi.id}"</div>
<div>this.playerData[0].slippi.index "${this.playerData[0].slippi.index}"</div>
<div>this.playerData[0].slippi.port "${this.playerData[0].slippi.port}"</div>
<div>this.playerData[0].slippi.teamId "${this.playerData[0].slippi.teamId}"</div>
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
<div>this.playerData[1].player.sponsor "${this.playerData[1].player.pronouns}"</div>
<div>this.playerData[1].slippi.id "${this.playerData[1].slippi.id}"</div>
<div>this.playerData[1].slippi.index "${this.playerData[1].slippi.index}"</div>
<div>this.playerData[1].slippi.port "${this.playerData[1].slippi.port}"</div>
<div>this.playerData[1].slippi.teamId "${this.playerData[1].slippi.teamId}"</div>
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

<div style="font-weight: bold;">TEAM 2</div>

${this.playerData[2].slippi.teamId < this.playerData[0].slippi.teamId
? html `
<div>this.generalData.tournament.scores[0].score "${this.generalData.tournament.scores[0].score}"</div>
`
: html `
<div>this.generalData.tournament.scores[1].score "${this.generalData.tournament.scores[1].score}"</div>
`}
<div style="font-weight: bold;">PLAYER 3</div>
<div>this.playerData[2].player.name "${this.playerData[2].player.name}"</div>
<div>this.playerData[2].player.sponsor "${this.playerData[2].player.sponsor}"</div>
<div>this.playerData[2].player.sponsor "${this.playerData[2].player.pronouns}"</div>
<div>this.playerData[2].slippi.id "${this.playerData[2].slippi.id}"</div>
<div>this.playerData[2].slippi.index "${this.playerData[2].slippi.index}"</div>
<div>this.playerData[2].slippi.port "${this.playerData[2].slippi.port}"</div>
<div>this.playerData[2].slippi.teamId "${this.playerData[2].slippi.teamId}"</div>
<div>this.playerData[2].slippi.character.id "${this.playerData[2].slippi.character.id}"</div>
<div>this.playerData[2].slippi.character.fullName "${this.playerData[2].slippi.character.fullName}"</div>
<div>this.playerData[2].slippi.character.shortName "${this.playerData[2].slippi.character.shortName}"</div>
<div>this.playerData[2].slippi.character.costumeId "${this.playerData[2].slippi.character.costumeId}"</div>
<div>this.playerData[2].slippi.character.costumeName "${this.playerData[2].slippi.character.costumeName}"</div>
<div>this.playerData[2].slippi.stockCountStart "${this.playerData[2].slippi.stockCountStart}"</div>
<div>this.playerData[2].slippi.stockCountNow "${this.playerData[2].slippi.stockCountNow}"</div>
<div>this.playerData[2].slippi.tag "${this.playerData[2].slippi.tag}"</div>
<div>this.playerData[2].slippi.display "${this.playerData[2].slippi.display}"</div>
<div>this.playerData[2].slippi.connect "${this.playerData[2].slippi.connect}"</div>
<div>this.playerData[2].slippi.damage "${this.playerData[2].slippi.damage}"</div>

<div>this.playerData[2].slippi.controller.mainStickX "${this.playerData[2].slippi.controller.mainStickX}"</div>
<div>this.playerData[2].slippi.controller.mainStickY "${this.playerData[2].slippi.controller.mainStickY}"</div>
<div>this.playerData[2].slippi.controller.cStickX "${this.playerData[2].slippi.controller.cStickX}"</div>
<div>this.playerData[2].slippi.controller.cStickY "${this.playerData[2].slippi.controller.cStickY}"</div>
<div>this.playerData[2].slippi.controller.rawButtons "${this.playerData[2].slippi.controller.rawButtons}"</div>
<div>this.playerData[2].slippi.controller.leftTrigger "${this.playerData[2].slippi.controller.leftTrigger}"</div>
<div>this.playerData[2].slippi.controller.rightTrigger "${this.playerData[2].slippi.controller.rightTrigger}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.A "${this.playerData[2].slippi.controller.pressedButtons.A}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.B "${this.playerData[2].slippi.controller.pressedButtons.B}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.X "${this.playerData[2].slippi.controller.pressedButtons.X}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.Y "${this.playerData[2].slippi.controller.pressedButtons.Y}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.L "${this.playerData[2].slippi.controller.pressedButtons.L}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.R "${this.playerData[2].slippi.controller.pressedButtons.R}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.START "${this.playerData[2].slippi.controller.pressedButtons.START}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.D_UP "${this.playerData[2].slippi.controller.pressedButtons.D_UP}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.D_RIGHT "${this.playerData[2].slippi.controller.pressedButtons.D_RIGHT}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.D_DOWN "${this.playerData[2].slippi.controller.pressedButtons.D_DOWN}"</div>
<div>this.playerData[2].slippi.controller.pressedButtons.D_LEFT "${this.playerData[2].slippi.controller.pressedButtons.D_LEFT}"</div>

<div style="font-weight: bold;">PLAYER 4</div>
<div>this.playerData[3].player.name "${this.playerData[3].player.name}"</div>
<div>this.playerData[3].player.sponsor "${this.playerData[3].player.sponsor}"</div>
<div>this.playerData[3].player.sponsor "${this.playerData[3].player.pronouns}"</div>
<div>this.playerData[3].slippi.id "${this.playerData[3].slippi.id}"</div>
<div>this.playerData[3].slippi.index "${this.playerData[3].slippi.index}"</div>
<div>this.playerData[3].slippi.port "${this.playerData[3].slippi.port}"</div>
<div>this.playerData[3].slippi.teamId "${this.playerData[3].slippi.teamId}"</div>
<div>this.playerData[3].slippi.character.id "${this.playerData[3].slippi.character.id}"</div>
<div>this.playerData[3].slippi.character.fullName "${this.playerData[3].slippi.character.fullName}"</div>
<div>this.playerData[3].slippi.character.shortName "${this.playerData[3].slippi.character.shortName}"</div>
<div>this.playerData[3].slippi.character.costumeId "${this.playerData[3].slippi.character.costumeId}"</div>
<div>this.playerData[3].slippi.character.costumeName "${this.playerData[3].slippi.character.costumeName}"</div>
<div>this.playerData[3].slippi.stockCountStart "${this.playerData[3].slippi.stockCountStart}"</div>
<div>this.playerData[3].slippi.stockCountNow "${this.playerData[3].slippi.stockCountNow}"</div>
<div>this.playerData[3].slippi.tag "${this.playerData[3].slippi.tag}"</div>
<div>this.playerData[3].slippi.display "${this.playerData[3].slippi.display}"</div>
<div>this.playerData[3].slippi.connect "${this.playerData[3].slippi.connect}"</div>
<div>this.playerData[3].slippi.damage "${this.playerData[3].slippi.damage}"</div>

<div>this.playerData[3].slippi.controller.mainStickX "${this.playerData[3].slippi.controller.mainStickX}"</div>
<div>this.playerData[3].slippi.controller.mainStickY "${this.playerData[3].slippi.controller.mainStickY}"</div>
<div>this.playerData[3].slippi.controller.cStickX "${this.playerData[3].slippi.controller.cStickX}"</div>
<div>this.playerData[3].slippi.controller.cStickY "${this.playerData[3].slippi.controller.cStickY}"</div>
<div>this.playerData[3].slippi.controller.rawButtons "${this.playerData[3].slippi.controller.rawButtons}"</div>
<div>this.playerData[3].slippi.controller.leftTrigger "${this.playerData[3].slippi.controller.leftTrigger}"</div>
<div>this.playerData[3].slippi.controller.rightTrigger "${this.playerData[3].slippi.controller.rightTrigger}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.A "${this.playerData[3].slippi.controller.pressedButtons.A}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.B "${this.playerData[3].slippi.controller.pressedButtons.B}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.X "${this.playerData[3].slippi.controller.pressedButtons.X}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.Y "${this.playerData[3].slippi.controller.pressedButtons.Y}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.L "${this.playerData[3].slippi.controller.pressedButtons.L}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.R "${this.playerData[3].slippi.controller.pressedButtons.R}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.START "${this.playerData[3].slippi.controller.pressedButtons.START}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.D_UP "${this.playerData[3].slippi.controller.pressedButtons.D_UP}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.D_RIGHT "${this.playerData[3].slippi.controller.pressedButtons.D_RIGHT}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.D_DOWN "${this.playerData[3].slippi.controller.pressedButtons.D_DOWN}"</div>
<div>this.playerData[3].slippi.controller.pressedButtons.D_LEFT "${this.playerData[3].slippi.controller.pressedButtons.D_LEFT}"</div>


`

: html`
<div style="font-weight: bold;">Singles</div>
<div style="font-weight: bold;">PLAYER 1</div>
<div>this.playerData[0].player.name "${this.playerData[0].player.name}"</div>
<div>this.playerData[0].player.sponsor "${this.playerData[0].player.sponsor}"</div>
<div>this.playerData[0].player.sponsor "${this.playerData[0].player.pronouns}"</div>
<div>this.generalData.tournament.scores[0].score "${this.generalData.tournament.scores[0].score}"</div>
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
<div>this.playerData[1].player.sponsor "${this.playerData[1].player.pronouns}"</div>
<div>this.generalData.tournament.scores[1].score "${this.generalData.tournament.scores[1].score}"</div>
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

`
	}
<div style="font-weight: bold;">Game Stats</div>
<div>this.statData.latestGame.gt "${this.statData.latestGame.gt}"</div>
<div>this.statData.latestGame.g1 "${this.statData.latestGame.g1}"</div>
<div style="font-weight: bold;">Low Port Data</div>
<div>this.statData.latestGame.rightColor "${this.statData.latestGame.leftColor}"</div>
<div>this.statData.latestGame.char1 "${this.statData.latestGame.char1}"</div>
<div>this.statData.latestGame.color1 "${this.statData.latestGame.color1}"</div>
<div>this.statData.latestGame.name1 "${this.statData.latestGame.name1}"</div>
<div>this.statData.latestGame.sub1 "${this.statData.latestGame.sub1}"</div>
<div style="font-weight: bold;">Low Port Stats</div>
<div>this.statData.latestGame.mckm1 "${this.statData.latestGame.mckm1}"</div>
<div>this.statData.latestGame.mcno1 "${this.statData.latestGame.mcno1}"</div>
<div>this.statData.latestGame.opk1 "${this.statData.latestGame.opk1}"</div>
<div>this.statData.latestGame.tdd1 "${this.statData.latestGame.tdd1}"</div>
<div>this.statData.latestGame.akp1 "${this.statData.latestGame.akp1}"</div>
<div>this.statData.latestGame.nw1 "${this.statData.latestGame.nw1}"</div>
<div>this.statData.latestGame.ipm1 "${this.statData.latestGame.ipm1}"</div>
<div>this.statData.latestGame.dpo1 "${this.statData.latestGame.dpo1}"</div>
<div>this.statData.latestGame.lc1 "${this.statData.latestGame.lc1}"</div>
<div>this.statData.latestGame.fb1 "${this.statData.latestGame.fb1}"</div>
<div>this.statData.latestGame.ek1 "${this.statData.latestGame.ek1}"</div>
<div>this.statData.latestGame.ld1 "${this.statData.latestGame.ld1}"</div>
<div>this.statData.latestGame.sd1 "${this.statData.latestGame.sd1}"</div>
<div>this.statData.latestGame.hdp1 "${this.statData.latestGame.hdp1}"</div>
<div style="font-weight: bold;">High Port Data</div>
<div>this.statData.latestGame.leftColor "${this.statData.latestGame.leftColor}"</div>
<div>this.statData.latestGame.char2 "${this.statData.latestGame.char2}"</div>
<div>this.statData.latestGame.color2 "${this.statData.latestGame.color2}"</div>
<div>this.statData.latestGame.name2 "${this.statData.latestGame.name2}"</div>
<div>this.statData.latestGame.sub2 "${this.statData.latestGame.sub2}"</div>
<div style="font-weight: bold;">High Port Stats</div>
<div>this.statData.latestGame.mckm2 "${this.statData.latestGame.mckm2}"</div>
<div>this.statData.latestGame.mcno2 "${this.statData.latestGame.mcno2}"</div>
<div>this.statData.latestGame.opk2 "${this.statData.latestGame.opk2}"</div>
<div>this.statData.latestGame.tdd2 "${this.statData.latestGame.tdd2}"</div>
<div>this.statData.latestGame.akp2 "${this.statData.latestGame.akp2}"</div>
<div>this.statData.latestGame.nw2 "${this.statData.latestGame.nw2}"</div>
<div>this.statData.latestGame.ipm2 "${this.statData.latestGame.ipm2}"</div>
<div>this.statData.latestGame.dpo2 "${this.statData.latestGame.dpo2}"</div>
<div>this.statData.latestGame.lc2 "${this.statData.latestGame.lc2}"</div>
<div>this.statData.latestGame.fb2 "${this.statData.latestGame.fb2}"</div>
<div>this.statData.latestGame.ek2 "${this.statData.latestGame.ek2}"</div>
<div>this.statData.latestGame.ld2 "${this.statData.latestGame.ld2}"</div>
<div>this.statData.latestGame.sd2 "${this.statData.latestGame.sd2}"</div>
<div>this.statData.latestGame.hdp2 "${this.statData.latestGame.hdp2}"</div>
<div style="font-weight: bold;">Set Stats</div>
<div>this.statData.latestSet.gt "${this.statData.latestSet.gt}"</div>

<!-- Calling a non-existenat split causes the template to not load so you have to set a conditional checking if it's valid before trying to split -->
${this.statData.latestSet.gt>0
? html `
<div>this.statData.latestSet.g1 "${this.statData.latestSet.g1}</div>
<div>this.statData.latestSet.g1.split(",")[0] "${this.statData.latestSet.g1.split(",")[0]}"</div>
<div>this.statData.latestSet.g1.split(",")[1] "${this.statData.latestSet.g1.split(",")[1]}"</div>
<div>this.statData.latestSet.g1.split(",")[2] "${this.statData.latestSet.g1.split(",")[2]}"</div>
<div>this.statData.latestSet.g1.split(",")[3] "${this.statData.latestSet.g1.split(",")[3]}"</div>
<div>this.statData.latestSet.g1.split(",")[4] "${this.statData.latestSet.g1.split(",")[4]}"</div>
<div>this.statData.latestSet.g1.split(",")[5] "${this.statData.latestSet.g1.split(",")[5]}"</div>
<div>this.statData.latestSet.g1.split(",")[6] "${this.statData.latestSet.g1.split(",")[6]}"</div>
<div>this.statData.latestSet.g1.split(",")[7] "${this.statData.latestSet.g1.split(",")[7]}"</div>
`
:html``}

${this.statData.latestSet.gt>1
? html `
<div>this.statData.latestSet.g2 "${this.statData.latestSet.g2}"</div>
<div>this.statData.latestSet.g2.split(",")[0] "${this.statData.latestSet.g2.split(",")[0]}"</div>
<div>this.statData.latestSet.g2.split(",")[1] "${this.statData.latestSet.g2.split(",")[1]}"</div>
<div>this.statData.latestSet.g2.split(",")[2] "${this.statData.latestSet.g2.split(",")[2]}"</div>
<div>this.statData.latestSet.g2.split(",")[3] "${this.statData.latestSet.g2.split(",")[3]}"</div>
<div>this.statData.latestSet.g2.split(",")[4] "${this.statData.latestSet.g2.split(",")[4]}"</div>
<div>this.statData.latestSet.g2.split(",")[5] "${this.statData.latestSet.g2.split(",")[5]}"</div>
<div>this.statData.latestSet.g2.split(",")[6] "${this.statData.latestSet.g2.split(",")[6]}"</div>
<div>this.statData.latestSet.g2.split(",")[7] "${this.statData.latestSet.g2.split(",")[7]}"</div>
`
:html``}

${this.statData.latestSet.gt>2
? html `
<div>this.statData.latestSet.g3 "${this.statData.latestSet.g3}"</div>
<div>this.statData.latestSet.g3.split(",")[0] "${this.statData.latestSet.g3.split(",")[0]}"</div>
<div>this.statData.latestSet.g3.split(",")[1] "${this.statData.latestSet.g3.split(",")[1]}"</div>
<div>this.statData.latestSet.g3.split(",")[2] "${this.statData.latestSet.g3.split(",")[2]}"</div>
<div>this.statData.latestSet.g3.split(",")[3] "${this.statData.latestSet.g3.split(",")[3]}"</div>
<div>this.statData.latestSet.g3.split(",")[4] "${this.statData.latestSet.g3.split(",")[4]}"</div>
<div>this.statData.latestSet.g3.split(",")[5] "${this.statData.latestSet.g3.split(",")[5]}"</div>
<div>this.statData.latestSet.g3.split(",")[6] "${this.statData.latestSet.g3.split(",")[6]}"</div>
<div>this.statData.latestSet.g3.split(",")[7] "${this.statData.latestSet.g3.split(",")[7]}"</div>
`
:html``}

${this.statData.latestSet.gt>3
? html `
<div>this.statData.latestSet.g4 "${this.statData.latestSet.g4}"</div>
<div>this.statData.latestSet.g4.split(",")[0] "${this.statData.latestSet.g4.split(",")[0]}"</div>
<div>this.statData.latestSet.g4.split(",")[1] "${this.statData.latestSet.g4.split(",")[1]}"</div>
<div>this.statData.latestSet.g4.split(",")[2] "${this.statData.latestSet.g4.split(",")[2]}"</div>
<div>this.statData.latestSet.g4.split(",")[3] "${this.statData.latestSet.g4.split(",")[3]}"</div>
<div>this.statData.latestSet.g4.split(",")[4] "${this.statData.latestSet.g4.split(",")[4]}"</div>
<div>this.statData.latestSet.g4.split(",")[5] "${this.statData.latestSet.g4.split(",")[5]}"</div>
<div>this.statData.latestSet.g4.split(",")[6] "${this.statData.latestSet.g4.split(",")[6]}"</div>
<div>this.statData.latestSet.g4.split(",")[7] "${this.statData.latestSet.g4.split(",")[7]}"</div>
`
:html``}

${this.statData.latestSet.gt>4
? html`
<div>this.statData.latestSet.g5 "${this.statData.latestSet.g5}"</div>
<div>this.statData.latestSet.g5.split(",")[0] "${this.statData.latestSet.g5.split(",")[0]}"</div>
<div>this.statData.latestSet.g5.split(",")[1] "${this.statData.latestSet.g5.split(",")[1]}"</div>
<div>this.statData.latestSet.g5.split(",")[2] "${this.statData.latestSet.g5.split(",")[2]}"</div>
<div>this.statData.latestSet.g5.split(",")[3] "${this.statData.latestSet.g5.split(",")[3]}"</div>
<div>this.statData.latestSet.g5.split(",")[4] "${this.statData.latestSet.g5.split(",")[4]}"</div>
<div>this.statData.latestSet.g5.split(",")[5] "${this.statData.latestSet.g5.split(",")[5]}"</div>
<div>this.statData.latestSet.g5.split(",")[6] "${this.statData.latestSet.g5.split(",")[6]}"</div>
<div>this.statData.latestSet.g5.split(",")[7] "${this.statData.latestSet.g5.split(",")[7]}"</div>
`
:html``}

<div style="font-weight: bold;">Low Port Data</div>
<div>this.statData.latestSet.rightColor "${this.statData.latestSet.leftColor}"</div>
<div>this.statData.latestSet.char1 "${this.statData.latestSet.char1}"</div>
<div>this.statData.latestSet.color1 "${this.statData.latestSet.color1}"</div>
<div>this.statData.latestSet.name1 "${this.statData.latestSet.name1}"</div>
<div>this.statData.latestSet.sub1 "${this.statData.latestSet.sub1}"</div>
<div style="font-weight: bold;">Low Port Stats</div>
<div>this.statData.latestSet.mckm1 "${this.statData.latestSet.mckm1}"</div>
<div>this.statData.latestSet.mcno1 "${this.statData.latestSet.mcno1}"</div>
<div>this.statData.latestSet.opk1 "${this.statData.latestSet.opk1}"</div>
<div>this.statData.latestSet.tdd1 "${this.statData.latestSet.tdd1}"</div>
<div>this.statData.latestSet.akp1 "${this.statData.latestSet.akp1}"</div>
<div>this.statData.latestSet.nw1 "${this.statData.latestSet.nw1}"</div>
<div>this.statData.latestSet.ipm1 "${this.statData.latestSet.ipm1}"</div>
<div>this.statData.latestSet.dpo1 "${this.statData.latestSet.dpo1}"</div>
<div>this.statData.latestSet.lc1 "${this.statData.latestSet.lc1}"</div>
<div>this.statData.latestSet.fb1 "${this.statData.latestSet.fb1}"</div>
<div>this.statData.latestSet.ek1 "${this.statData.latestSet.ek1}"</div>
<div>this.statData.latestSet.ld1 "${this.statData.latestSet.ld1}"</div>
<div>this.statData.latestSet.sd1 "${this.statData.latestSet.sd1}"</div>
<div>this.statData.latestSet.hdp1 "${this.statData.latestSet.hdp1}"</div>
<div style="font-weight: bold;">High Port Data</div>
<div>this.statData.latestSet.leftColor "${this.statData.latestSet.leftColor}"</div>
<div>this.statData.latestSet.char2 "${this.statData.latestSet.char2}"</div>
<div>this.statData.latestSet.color2 "${this.statData.latestSet.color2}"</div>
<div>this.statData.latestSet.name2 "${this.statData.latestSet.name2}"</div>
<div>this.statData.latestSet.sub2 "${this.statData.latestSet.sub2}"</div>
<div style="font-weight: bold;">High Port Stats</div>
<div>this.statData.latestSet.mckm2 "${this.statData.latestSet.mckm2}"</div>
<div>this.statData.latestSet.mcno2 "${this.statData.latestSet.mcno2}"</div>
<div>this.statData.latestSet.opk2 "${this.statData.latestSet.opk2}"</div>
<div>this.statData.latestSet.tdd2 "${this.statData.latestSet.tdd2}"</div>
<div>this.statData.latestSet.akp2 "${this.statData.latestSet.akp2}"</div>
<div>this.statData.latestSet.nw2 "${this.statData.latestSet.nw2}"</div>
<div>this.statData.latestSet.ipm2 "${this.statData.latestSet.ipm2}"</div>
<div>this.statData.latestSet.dpo2 "${this.statData.latestSet.dpo2}"</div>
<div>this.statData.latestSet.lc2 "${this.statData.latestSet.lc2}"</div>
<div>this.statData.latestSet.fb2 "${this.statData.latestSet.fb2}"</div>
<div>this.statData.latestSet.ek2 "${this.statData.latestSet.ek2}"</div>
<div>this.statData.latestSet.ld2 "${this.statData.latestSet.ld2}"</div>
<div>this.statData.latestSet.sd2 "${this.statData.latestSet.sd2}"</div>
<div>this.statData.latestSet.hdp2 "${this.statData.latestSet.hdp2}"</div>
<div style="font-weight: bold;">Standings</div>
<div>this.standingData[0].placement "${this.standingData[0].placement}"</div>
<div>this.standingData[0].name "${this.standingData[0].name}"</div>
<div>this.standingData[0].character "${this.standingData[0].character}"</div>
<div>this.standingData[0].twitter "${this.standingData[0].twitter}"</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}

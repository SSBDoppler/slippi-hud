import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<style>
#cameraname {
	text-align: center;
	top: 5px;
	font-size: 40px;
	width: 305px;
	position: absolute;
}
#cameraleft {
		background: url('./img/slippi-hud/hud/camerabox.png') 0px 0px no-repeat;
		width: 305px;
		height: 305px;
		position: absolute;
		left: 0px;
		bottom: 0px;
}
#cameraright {
		background: url('./img/slippi-hud/hud/camerabox.png') 0px 0px no-repeat;
		width: 305px;
		height: 305px;
		position: absolute;
		right: 0px;
		bottom: 0px;
}

#overlay {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
    font-family: "metropolis black";
	color: white;
}
#player1 {
	position: absolute;
	left: 510px;
	top: 836px;
	width: 300px;
	height: 120px;
}
#player2 {
	position: absolute;
	right: 510px;
	top: 836px;
	width: 300px;
	height: 120px;
}

#p1buttons {
	position: absolute;
	left: 510px;
	top: 956px;
	width: 300px;
	height: 124px;
}

#p2buttons {
	position: absolute;
	right: 510px;
	top: 956px;
	width: 300px;
	height: 124px;
}
#gametext {
	position: absolute;
	top: 10px;
	width: 160px;
}
#game {
	position: absolute;
	background: url('./img/slippi-hud/hud/game.png') 0px 0px no-repeat;
	width: 160px;
	height: 48px;
	top: 908px;
	left: 880px;
	text-align: center;
	font-size: 32px;
}
#Abutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons/a.png') 0px 0px no-repeat;
	width: 44px;
	height: 44px;
	top: 47px;
	left: 195px;
}
#Bbutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons/b.png') 0px 0px no-repeat;
	width: 19px;
	height: 19px;
	top: 93px;
	left: 180px;
}
#Xbutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons/x.png') 0px 0px no-repeat;
	width: 20px;
	height: 32px;
	top: 46px;
	left: 246px;
}
#Ybutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons/y.png') 0px 0px no-repeat;
	width: 32px;
	height: 20px;
	top: 19px;
	left: 194px;
}
#Zbutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons/z.png') 0px 0px no-repeat;
	width: 36px;
	height: 25px;
	top: 7px;
	left: 233px;
}
#Lbutton {
	background: url('./img/slippi-hud/buttons/digital.png') 0px 0px no-repeat;
	width: 15px;
	position: absolute;
	height: 18px;
	top: 3px;
	left: 4px;
}
#Rbutton {
	background: url('./img/slippi-hud/buttons/digital.png') 0px 0px no-repeat;
	width: 15px;
	height: 18px;
	top: 3px;
	position: absolute;
	left: 282px;
}
#DLbutton {
	background: url('./img/slippi-hud/buttons/d.png') 0px 0px no-repeat;
	position: absolute;
	width: 8px;
	height: 8px;
	top: 100px;
	left: 106px;
}
#DRbutton {
	background: url('./img/slippi-hud/buttons/d.png') 0px 0px no-repeat;
	width: 8px;
	height: 8px;
	top: 100px;
	position: absolute;
	left: 124px;
}
#DUbutton {
	background: url('./img/slippi-hud/buttons/d.png') 0px 0px no-repeat;
	width: 8px;
	height: 8px;
	top: 91px;
	position: absolute;
	left: 115px;
}
#DDbutton {
	background: url('./img/slippi-hud/buttons/d.png') 0px 0px no-repeat;
	width: 8px;
	height: 8px;
	top: 109px;
	position: absolute;
	left: 115px;
}
#RTrigger {
	background: url('./img/slippi-hud/buttons/analog.png') 0px 0px no-repeat;
	width: 15px;
	top: 21px;
	left: 282px;
	position: absolute;
}
#LTrigger {
	background: url('./img/slippi-hud/buttons/analog.png') 0px 0px no-repeat;
	width: 15px;
	top: 21px;
	left: 4px;
	position: absolute;
}

.sticks {
	background: url('./img/slippi-hud/buttons/sticks.png') 0px 0px no-repeat;
}

.astick {
	background: url('./img/slippi-hud/buttons/AStick.png') 0px 0px no-repeat;
	height: 31px;
	width: 31px;
}

.cstick {
	background: url('./img/slippi-hud/buttons/CStick.png') 0px 0px no-repeat;
	height: 17px;
	width: 17px;
}

.button {
	height: 124px;
	width: 300px;
}

.true {
	opacity: 1;
}

.false {
	opacity: 0;
}

#stocks {
	position: absolute;
	top: 36px;
	height: 32px;
	overflow: hidden;
}

#stock {
	position: absolute;
	top: -80px;
	width: 32px;
	height: 32px;
}
#dmg {
    position: absolute;
    bottom: 36px;
    right: 24px;
    font-size: 60px;
   -webkit-text-stroke: medium black;
}
#name {
    position: absolute;
    left: 0px;
    top: 78px;
    width: 300px;
    height: 48px;
    text-align: center;
    font-size: 36px;
}
#score {
	background: url('./img/slippi-hud/hud/score.png') 0px 0px;
	height: 32px;
	position: absolute;
	left: 25px;
	top: 2px;
}

.stock-1 {
left: -73px;
}

.stock-2 {
left: -33px;
}

.stock-3 {
left: 7px;
}

.stock-4 {
left: 47px;
}
.port-1 {
	background: url('./img/slippi-hud/hud/port1.png') no-repeat 0px 0px;
	width: 300px;
	height: 120px;;
}

.port-2 {
	background: url('./img/slippi-hud/hud/port2.png') no-repeat 0px 0px;
	width: 300px;
	height: 120px;;
}

.port-3 {
	background: url('./img/slippi-hud/hud/port3.png') no-repeat 0px 0px;
	width: 300px;
	height: 120px;;
}

.port-4 {
	background: url('./img/slippi-hud/hud/port4.png') no-repeat 0px 0px;
	width: 300px;
	height: 120px;;
}

#panels {	
    background: url(./img/slippi-hud/hud/timer.png) no-repeat;
    height: 162px;
    width: 305px;
}

#timer {
    font-size: 45px;
    top: 20px;
    left: 45px;
    position: absolute;
    text-align: left;
}

#tournament {
    position: absolute;
    top: 93px;
    left: 57px;
    width: 192px;
    text-align: center;
    font-size: 18px;	
}

#round {
    position: absolute;
    top: 137px;
    left: 64px;
    width: 178px;
    text-align: center;	
}

#logo {
	position: absolute;
	top: 0px;
	right: 0px;
	background: url(./img/slippi-hud/hud/logo.png) no-repeat;
	width: 305px;
	height: 142px;
}

</style>
	<div id="overlay">
		<div id='logo'></div>
			<div id='cameraleft'>
			<div id='cameraname'>${this.playerData[0].player.name}</div>
		</div>
		<div id='cameraright'>
			<div id='cameraname'>${this.playerData[1].player.name}</div>
		</div>
			<div id="player1" class="port-${this.playerData[0].slippi.port}">
					<div id="stocks" style="width: ${this.playerData[0].slippi.stockCountNow*40}px;">
						<div id="stock" class="stock-1" style="background: url('./img/slippi-hud/stocks/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px;"></div>
						<div id="stock" class="stock-2" style="background: url('./img/slippi-hud/stocks/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px;"></div>
						<div id="stock" class="stock-3" style="background: url('./img/slippi-hud/stocks/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px;"></div>
						<div id="stock" class="stock-4" style="background: url('./img/slippi-hud/stocks/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px;"></div>
					</div>
					<div id="score" style= "width: ${this.playerData[0].score.score*40}px;"></div>
					<div id="dmg" class="damage">${this.playerData[0].slippi.damage}</div>
						<div id="name" class="name">${this.playerData[0].player.name}</div>

			
			</div>
			<div id="player2" class="port-${this.playerData[1].slippi.port}">
					<div id="stocks" style="width: ${this.playerData[1].slippi.stockCountNow*40}px;">
						<div id="stock" class="stock-1" style="background: url('./img/slippi-hud/stocks/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px;"></div>
						<div id="stock" class="stock-2" style="background: url('./img/slippi-hud/stocks/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px;"></div>
						<div id="stock" class="stock-3" style="background: url('./img/slippi-hud/stocks/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px;"></div>
						<div id="stock" class="stock-4" style="background: url('./img/slippi-hud/stocks/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px;"></div>
					</div>
					<div id="score" style= "width: ${this.playerData[1].score.score*40}px;"></div>
					<div id="dmg" class="damage">${this.playerData[1].slippi.damage}</div>
					<div id="name" class="name">${this.playerData[1].player.name}</div>

			</div>
		<div id="panels" class="panel-container">
			<div id="timer">${this.generalData.slippi.timer.formatted}</div>
			<div id="tournament">${this.generalData.tournament.name}</div>
			<div id="round">${this.generalData.tournament.round}</div>
			<div id="game"><div id="gametext">GAME ${this.playerData[1].score.score+this.playerData[0].score.score+1}</div></div>
		</div>
${this.generalData.tournament.inputDisplay
? html`
<div id="p1buttons" class="sticks">
	<div id="p1stick" class="astick" style="position: absolute; top: ${Math.round(40-(this.playerData[0].slippi.controller.mainStickY*17))}px; left: ${Math.round(56+(this.playerData[0].slippi.controller.mainStickX*17))}px"></div>
	<div id="p1cstick" class="cstick"  style="position: absolute; top: ${49-(this.playerData[0].slippi.controller.cStickY*18)}px; left: ${147+(this.playerData[0].slippi.controller.cStickX*18)}px"></div>
	<div id="Abutton" class="${this.playerData[0].slippi.controller.pressedButtons.A}"></div>
	<div id="Bbutton" class="${this.playerData[0].slippi.controller.pressedButtons.B}"></div>
	<div id="Xbutton" class="${this.playerData[0].slippi.controller.pressedButtons.X}"></div>
	<div id="Ybutton" class="${this.playerData[0].slippi.controller.pressedButtons.Y}"></div>
	<div id="Zbutton" class="${this.playerData[0].slippi.controller.pressedButtons.Z}"></div>
	<div id="Rbutton" class="${this.playerData[0].slippi.controller.pressedButtons.R}"></div>
	<div id="Lbutton" class="${this.playerData[0].slippi.controller.pressedButtons.L}"></div>
	<div id="Startbutton" class="${this.playerData[0].slippi.controller.pressedButtons.START}"></div>
	<div id="DUbutton" class="${this.playerData[0].slippi.controller.pressedButtons.D_UP}"></div>
	<div id="DDbutton" class="${this.playerData[0].slippi.controller.pressedButtons.D_DOWN}"></div>
	<div id="DRbutton" class="${this.playerData[0].slippi.controller.pressedButtons.D_RIGHT}"></div>
	<div id="DLbutton" class="${this.playerData[0].slippi.controller.pressedButtons.D_LEFT}"></div>
	<div id="LTrigger" style="height: ${this.playerData[0].slippi.controller.leftTrigger*103}px;"></div>
	<div id="RTrigger" style="height: ${this.playerData[0].slippi.controller.rightTrigger*103}px;"></div>
	<div id="outline" class="button"><img src="./img/slippi-hud/buttons/buttons.png" width="300" height="124"></img></div>
</div>
<div id="p2buttons" class="sticks">
	<div id="p2stick" class="astick" style="position: absolute; top: ${Math.round(40-(this.playerData[1].slippi.controller.mainStickY*17))}px; left: ${Math.round(56+(this.playerData[1].slippi.controller.mainStickX*17))}px"></div>
	<div id="p2cstick" class="cstick"  style="position: absolute; top: ${49-(this.playerData[1].slippi.controller.cStickY*18)}px; left: ${147+(this.playerData[1].slippi.controller.cStickX*18)}px"></div>
	<div id="Abutton" class="${this.playerData[1].slippi.controller.pressedButtons.A}"></div>
	<div id="Bbutton" class="${this.playerData[1].slippi.controller.pressedButtons.B}"></div>
	<div id="Xbutton" class="${this.playerData[1].slippi.controller.pressedButtons.X}"></div>
	<div id="Ybutton" class="${this.playerData[1].slippi.controller.pressedButtons.Y}"></div>
	<div id="Zbutton" class="${this.playerData[1].slippi.controller.pressedButtons.Z}"></div>
	<div id="Rbutton" class="${this.playerData[1].slippi.controller.pressedButtons.R}"></div>
	<div id="Lbutton" class="${this.playerData[1].slippi.controller.pressedButtons.L}"></div>
	<div id="Startbutton" class="${this.playerData[1].slippi.controller.pressedButtons.START}"></div>
	<div id="DUbutton" class="${this.playerData[1].slippi.controller.pressedButtons.D_UP}"></div>
	<div id="DDbutton" class="${this.playerData[1].slippi.controller.pressedButtons.D_DOWN}"></div>
	<div id="DRbutton" class="${this.playerData[1].slippi.controller.pressedButtons.D_RIGHT}"></div>
	<div id="DLbutton" class="${this.playerData[1].slippi.controller.pressedButtons.D_LEFT}"></div>
	<div id="LTrigger" style="height: ${this.playerData[1].slippi.controller.leftTrigger*103}px;"></div>
	<div id="RTrigger" style="height: ${this.playerData[1].slippi.controller.rightTrigger*103}px;"></div>
	<div id="outline" class="button"><img src="./img/slippi-hud/buttons/buttons.png" width="300" height="124"></img></div>
</div>
`
: html``
}
	</div>

`;

}

export const style = function () {

return css`

:host {
}


`;
}

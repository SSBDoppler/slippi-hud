import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
	<div id="overlay">
		<div id="space"></div>
		<div id="players" class="player-left">
			<div id="player1" class="port">
				<div class="playercontainer">
					<div id="p1CSP" class="CSP CSP-${this.playerData[0].slippi.character.id}-${this.playerData[0].slippi.character.costumeId}"></div>
					<div id="p1dmg" class="damage damage-none">${this.playerData[0].slippi.damage}%</div>
					<div id="p1port" class="port port-${this.playerData[0].slippi.port}"></div>
					<div id="p1stocks" class="stockcount-${this.playerData[0].slippi.stockCountNow}">
						<div id="p1stock-1" class="stock stock-${this.playerData[0].slippi.character.id}-${this.playerData[0].slippi.character.costumeId}"></div>
						<div id="p1stock-2" class="stock stock-${this.playerData[0].slippi.character.id}-${this.playerData[0].slippi.character.costumeId}"></div>
						<div id="p1stock-3" class="stock stock-${this.playerData[0].slippi.character.id}-${this.playerData[0].slippi.character.costumeId}"></div>
						<div id="p1stock-4" class="stock stock-${this.playerData[0].slippi.character.id}-${this.playerData[0].slippi.character.costumeId}"></div>
					</div>
						<div id="p1name" class="name">${this.playerData[0].player.name}</div>
					<div id="p1score" class="score">${this.playerData[0].score.score}</div>
				</div>
			</div>
		</div>
		<div id ="players" class="player-right">
					<div id="player2" class="port">
				<div class="playercontainer">
					<div id="p2CSP" class="CSP CSP-${this.playerData[1].slippi.character.id}-${this.playerData[1].slippi.character.costumeId}"></div>
					<div id="p2dmg" class="damage damage-none">${this.playerData[1].slippi.damage}%</div>
					<div id="p2port" class="port port-${this.playerData[1].slippi.port}"></div>
					<div id="p2stocks" class="stockcount-${this.playerData[1].slippi.stockCountNow}">
						<div id="p2stock-1" class="stock stock-${this.playerData[1].slippi.character.id}-${this.playerData[1].slippi.character.costumeId}"></div>
						<div id="p2stock-2" class="stock stock-${this.playerData[1].slippi.character.id}-${this.playerData[1].slippi.character.costumeId}"></div>
						<div id="p2stock-3" class="stock stock-${this.playerData[1].slippi.character.id}-${this.playerData[1].slippi.character.costumeId}"></div>
						<div id="p2stock-4" class="stock stock-${this.playerData[1].slippi.character.id}-${this.playerData[1].slippi.character.costumeId}"></div>
					</div>
					<div id="p2name" class="name">${this.playerData[1].player.name}</div>
					<div id="p2score" class="score">${this.playerData[1].score.score}</div>
				</div>
			</div>
		</div>
		<div id="panels" class="panel-container">
			<div id="panela" class="panel">${this.generalData.slippi.timer.formatted}</div>
			<div id="panelb" class="panel">${this.generalData.tournament.name}</div>
			<div id="panelc" class="panel">GAME ${this.playerData[1].score.score+this.playerData[0].score.score+1}</div>
			<div id="paneld" class="panel">${this.generalData.tournament.round}</div>
		</div>
${this.generalData.tournament.inputDisplay
? html`
<div id="p1buttons" class="buttons">
	<div id="p1stick" class="stick" style="position: absolute; top: ${Math.round(97-(this.playerData[0].slippi.controller.mainStickY*40)+Math.sign(this.playerData[0].slippi.controller.mainStickY)*(Math.abs(this.playerData[0].slippi.controller.mainStickX)*15))}px; left: ${Math.round(49+(this.playerData[0].slippi.controller.mainStickX*40)-Math.sign(this.playerData[0].slippi.controller.mainStickX*40)*(Math.abs(this.playerData[0].slippi.controller.mainStickY)*15))}px"></div>
	<div id="p1cstick" class="cstick"  style="position: absolute; top: ${240-(this.playerData[0].slippi.controller.cStickY*30)+Math.sign(this.playerData[0].slippi.controller.mainStickY)*(Math.abs(this.playerData[0].slippi.controller.cStickX)*10)}px; left: ${246+(this.playerData[0].slippi.controller.cStickX*30)-Math.sign(this.playerData[0].slippi.controller.cStickX)*(Math.abs(this.playerData[0].slippi.controller.cStickY)*10)}px"></div>
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
	<div id="LTrigger" style="width: ${this.playerData[0].slippi.controller.leftTrigger*103}px;"></div>
	<div id="RTrigger" style="width: ${this.playerData[0].slippi.controller.rightTrigger*103}px;"></div>
	<div id="p1buttons" class="button"></div>
</div>
<div id="p2buttons" class="buttons">
	<div id="p2stick" class="stick" style="position: absolute; top: ${Math.round(97-(this.playerData[1].slippi.controller.mainStickY*40)-Math.sign(this.playerData[1].slippi.controller.mainStickY)*(Math.abs(this.playerData[1].slippi.controller.mainStickX)*15))}px; left: ${Math.round(49+(this.playerData[1].slippi.controller.mainStickX*40)-Math.sign(this.playerData[1].slippi.controller.mainStickX*40)*(Math.abs(this.playerData[1].slippi.controller.mainStickY)*15))}px" ></div>
	<div id="p2cstick" class="cstick" style="position: absolute; top: ${Math.round(240-(this.playerData[1].slippi.controller.cStickY*30)-Math.sign(this.playerData[1].slippi.controller.mainStickY)*(Math.abs(this.playerData[1].slippi.controller.cStickX)*10))}px; left: ${Math.round(246+(this.playerData[1].slippi.controller.cStickX*30)-Math.sign(this.playerData[1].slippi.controller.cStickX)*(Math.abs(this.playerData[1].slippi.controller.cStickY)*10))}px"></div>
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
	<div id="LTrigger" style="width: ${this.playerData[1].slippi.controller.leftTrigger*103}px;"></div>
	<div id="RTrigger" style="width: ${this.playerData[1].slippi.controller.rightTrigger*103}px;"></div>
	<div id="p2buttons" class="button"></div>
</div>
`
: html``}
	</div>

`;

}

export const style = function () {

return css`
.stock-22-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -36px -1px;
	width: 24px;
	height: 24px;
}

.stock-22-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -62px -1px;
	width: 24px;
	height: 24px;
}

.stock-22-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -88px -1px;
	width: 24px;
	height: 24px;
}

.stock-22-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -114px -1px;
	width: 24px;
	height: 24px;
}

.stock-22-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -140px -1px;
	width: 24px;
	height: 24px;
}

.stock-8-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -177px -1px;
	width: 24px;
	height: 24px;
}

.stock-8-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -204px -1px;
	width: 24px;
	height: 24px;
}

.stock-8-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -231px -1px;
	width: 24px;
	height: 24px;
}

.stock-8-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -258px -1px;
	width: 24px;
	height: 24px;
}

.stock-8-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -285px -1px;
	width: 24px;
	height: 24px;
}

.stock-7-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -329px -1px;
	width: 24px;
	height: 24px;
}

.stock-7-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -356px -1px;
	width: 24px;
	height: 24px;
}

.stock-7-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -383px -1px;
	width: 24px;
	height: 24px;
}

.stock-7-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -410px -1px;
	width: 24px;
	height: 24px;
}

.stock-5-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -454px -1px;
	width: 24px;
	height: 24px;
}

.stock-5-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -483px -1px;
	width: 24px;
	height: 24px;
}

.stock-5-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -512px -1px;
	width: 24px;
	height: 24px;
}

.stock-5-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -541px -1px;
	width: 24px;
	height: 24px;
}

.stock-12-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -56px -38px;
	width: 24px;
	height: 24px;
}

.stock-12-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -85px -38px;
	width: 24px;
	height: 24px;
}

.stock-12-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -114px -38px;
	width: 24px;
	height: 24px;
}

.stock-12-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -143px -38px;
	width: 24px;
	height: 24px;
}

.stock-12-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -172px -38px;
	width: 24px;
	height: 24px;
}

.stock-17-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -218px -38px;
	width: 24px;
	height: 24px;
}


.stock-17-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -247px -38px;
	width: 24px;
	height: 24px;
}


.stock-17-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -276px -38px;
	width: 24px;
	height: 24px;
}


.stock-17-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -305px -38px;
	width: 24px;
	height: 24px;
}


.stock-17-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -334px -38px;
	width: 24px;
	height: 24px;
}


.stock-17-5 {
	background: url('./img/pillar-box/heads.png') no-repeat -363px -38px;
	width: 24px;
	height: 24px;
}

.stock-1-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -407px -38px;
	width: 24px;
	height: 24px;
}

.stock-1-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -436px -38px;
	width: 24px;
	height: 24px;
}


.stock-1-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -465px -38px;
	width: 24px;
	height: 24px;
}


.stock-1-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -494px -38px;
	width: 24px;
	height: 24px;
}

.stock-1-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -523px -38px;
	width: 24px;
	height: 24px;
}

.stock-0-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -1px -74px;
	width: 24px;
	height: 24px;
}

.stock-0-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -29px -74px;
	width: 24px;
	height: 24px;
}

.stock-0-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -57px -74px;
	width: 24px;
	height: 24px;
}

.stock-0-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -85px -74px;
	width: 24px;
	height: 24px;
}

.stock-0-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -113px -74px;
	width: 24px;
	height: 24px;
}

.stock-0-5 {
	background: url('./img/pillar-box/heads.png') no-repeat -141px -74px;
	width: 24px;
	height: 24px;
}

.stock-25-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -188px -74px;
	width: 24px;
	height: 24px;
}

.stock-25-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -217px -74px;
	width: 24px;
	height: 24px;
}

.stock-25-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -246px -74px;
	width: 24px;
	height: 24px;
}

.stock-25-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -275px -74px;
	width: 24px;
	height: 24px;
}

.stock-25-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -304px -74px;
	width: 24px;
	height: 24px;
}

.stock-20-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -354px -74px;
	width: 24px;
	height: 24px;
}


.stock-20-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -383px -74px;
	width: 24px;
	height: 24px;
}


.stock-20-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -412px -74px;
	width: 24px;
	height: 24px;
}


.stock-20-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -441px -74px;
	width: 24px;
	height: 24px;
}

.stock-2-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -490px -74px;
	width: 24px;
	height: 24px;
}

.stock-2-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -519px -74px;
	width: 24px;
	height: 24px;
}

.stock-2-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -548px -74px;
	width: 24px;
	height: 24px;
}

.stock-2-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -577px -74px;
	width: 24px;
	height: 24px;
}

.stock-11-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -14px -110px;
	width: 24px;
	height: 24px;
}

.stock-11-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -42px -110px;
	width: 24px;
	height: 24px;
}

.stock-11-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -70px -110px;
	width: 24px;
	height: 24px;
}

.stock-11-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -98px -110px;
	width: 24px;
	height: 24px;
}

.stock-14-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -142px -109px;
	width: 24px;
	height: 24px;
}

.stock-14-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -171px -109px;
	width: 24px;
	height: 24px;
}

.stock-14-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -200px -109px;
	width: 24px;
	height: 24px;
}

.stock-14-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -229px -109px;
	width: 24px;
	height: 24px;
}

.stock-4-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -270px -111px;
	width: 24px;
	height: 24px;
}

.stock-4-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -297px -111px;
	width: 24px;
	height: 24px;
}

.stock-4-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -324px -111px;
	width: 24px;
	height: 24px;
}

.stock-4-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -351px -111px;
	width: 24px;
	height: 24px;
}

.stock-4-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -378px -111px;
	width: 24px;
	height: 24px;
}

.stock-4-5 {
	background: url('./img/pillar-box/heads.png') no-repeat -405px -111px;
	width: 24px;
	height: 24px;
}

.stock-16-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -445px -111px;
	width: 24px;
	height: 24px;
}

.stock-16-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -474px -111px;
	width: 24px;
	height: 24px;
}

.stock-16-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -503px -111px;
	width: 24px;
	height: 24px;
}

.stock-16-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -532px -111px;
	width: 24px;
	height: 24px;
}

.stock-16-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -561px -111px;
	width: 24px;
	height: 24px;
}

.stock-18-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -62px -146px;
	width: 24px;
	height: 24px;
}

.stock-18-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -91px -146px;
	width: 24px;
	height: 24px;
}

.stock-18-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -120px -146px;
	width: 24px;
	height: 24px;
}

.stock-18-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -149px -146px;
	width: 24px;
	height: 24px;
}

.stock-18-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -178px -146px;
	width: 24px;
	height: 24px;
}

.stock-19-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -224px -146px;
	width: 24px;
	height: 24px;
}

.stock-19-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -253px -146px;
	width: 24px;
	height: 24px;
}

.stock-19-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -282px -146px;
	width: 24px;
	height: 24px;
}

.stock-19-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -311px -146px;
	width: 24px;
	height: 24px;
}

.stock-19-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -340px -146px;
	width: 24px;
	height: 24px;
}

.stock-6-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -386px -146px;
	width: 24px;
	height: 24px;
}

.stock-6-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -415px -146px;
	width: 24px;
	height: 24px;
}

.stock-6-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -444px -146px;
	width: 24px;
	height: 24px;
}

.stock-6-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -473px -146px;
	width: 24px;
	height: 24px;
}

.stock-6-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -502px -146px;
	width: 24px;
	height: 24px;
}

.stock-21-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -22px -182px;
	width: 24px;
	height: 24px;
}

.stock-21-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -51px -182px;
	width: 24px;
	height: 24px;
}

.stock-21-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -80px -182px;
	width: 24px;
	height: 24px;
}

.stock-21-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -109px -182px;
	width: 24px;
	height: 24px;
}

.stock-21-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -138px -182px;
	width: 24px;
	height: 24px;
}

.stock-24-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -182px -184px;
	width: 24px;
	height: 24px;
}

.stock-24-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -211px -184px;
	width: 24px;
	height: 24px;
}

.stock-24-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -240px -184px;
	width: 24px;
	height: 24px;
}

.stock-24-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -269px -184px;
	width: 24px;
	height: 24px;
}

.stock-13-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -310px -182px;
	width: 24px;
	height: 24px;
}

.stock-13-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -339px -182px;
	width: 24px;
	height: 24px;
}

.stock-13-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -368px -182px;
	width: 24px;
	height: 24px;
}

.stock-13-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -397px -182px;
	width: 24px;
	height: 24px;
}

.stock-15-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -441px -182px;
	width: 24px;
	height: 24px;
}

.stock-15-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -468px -182px;
	width: 24px;
	height: 24px;
}

.stock-15-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -496px -182px;
	width: 24px;
	height: 24px;
}

.stock-15-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -524px -182px;
	width: 24px;
	height: 24px;
}

.stock-15-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -551px -182px;
	width: 24px;
	height: 24px;
}

.stock-10-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -25px -217px;
	width: 24px;
	height: 24px;
}

.stock-10-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -50px -217px;
	width: 24px;
	height: 24px;
}

.stock-10-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -75px -217px;
	width: 24px;
	height: 24px;
}

.stock-10-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -100px -217px;
	width: 24px;
	height: 24px;
}

.stock-3-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -140px -220px;
	width: 24px;
	height: 24px;
}

.stock-3-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -169px -220px;
	width: 24px;
	height: 24px;
}

.stock-3-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -198px -220px;
	width: 24px;
	height: 24px;
}

.stock-3-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -227px -220px;
	width: 24px;
	height: 24px;
}

.stock-9-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -273px -217px;
	width: 24px;
	height: 24px;
}

.stock-9-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -301px -217px;
	width: 24px;
	height: 24px;
}

.stock-9-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -329px -217px;
	width: 24px;
	height: 24px;
}

.stock-9-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -357px -217px;
	width: 24px;
	height: 24px;
}

.stock-9-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -385px -217px;
	width: 24px;
	height: 24px;
}

.stock-23-0 {
	background: url('./img/pillar-box/heads.png') no-repeat -434px -217px;
	width: 24px;
	height: 24px;
}

.stock-23-1 {
	background: url('./img/pillar-box/heads.png') no-repeat -463px -217px;
	width: 24px;
	height: 24px;
}

.stock-23-2 {
	background: url('./img/pillar-box/heads.png') no-repeat -492px -217px;
	width: 24px;
	height: 24px;
}

.stock-23-3 {
	background: url('./img/pillar-box/heads.png') no-repeat -521px -217px;
	width: 24px;
	height: 24px;
}

.stock-23-4 {
	background: url('./img/pillar-box/heads.png') no-repeat -550px -217px;
	width: 24px;
	height: 24px;
}

.stock-none {
	background: url('./img/pillar-box/heads.png') no-repeat 0px 0px;
	width: 0px;
	height: 0px;
	margin: 0px;
}
#p1CSP {
position: absolute;
top: -188px;
right: 0px;
}

#p1dmg {
position: absolute;
top: -113px;
left: 19px;
height: 32px;
width: 128px;
}

#p1name {
position: absolute;
top: 2px;
left: 2px;
height: 30px;
width: 234px;
}

#p1stock-1 {
position: absolute;
top: 36px;
left: 30px;
height: 24px;
width: 24px;
}

#p1stock-2 {
position: absolute;
top: 36px;
left: 81px;
height: 24px;
width: 24px;
}

#p1stock-3 {
position: absolute;
top: 36px;
left: 132px;
height: 24px;
width: 24px;
}

#p1stock-4 {
position: absolute;
top: 36px;
left: 183px;
height: 24px;
width: 24px;
}

#p1score {
position: absolute;
top: 2px;
left: 242px;
height:60px;
width: 61px;
}

#p4CSP {
position: absolute;
top: -188px;
right: 0px;
}

#p4dmg {
position: absolute;
top: -113px;
left: 19px;
height: 32px;
width: 128px;
}

#p4name {
position: absolute;
top: 2px;
left: 2px;
height: 30px;
width: 234px;
}

#p4stock-1 {
position: absolute;
top: 36px;
left: 30px;
height: 24px;
width: 24px;
}

#p4stock-2 {
position: absolute;
top: 36px;
left: 81px;
height: 24px;
width: 24px;
}

#p4stock-3 {
position: absolute;
top: 36px;
left: 132px;
height: 24px;
width: 24px;
}

#p4stock-4 {
position: absolute;
top: 36px;
left: 183px;
height: 24px;
width: 24px;
}

#p4score {
position: absolute;
top: 2px;
left: 242px;
height:60px;
width: 61px;
}

#p3port {
transform: scaleX(-1);
}
#p3CSP {
top: -188px;
position: absolute;
transform: scaleX(-1);
}

#p3dmg {
position: absolute;
top: -113px;
right: 30px;
height: 32px;
width: 128px;
}

#p3name {
position: absolute;
top: 2px;
right: 2px;
height: 30px;
width: 234px;
}

#p3stock-1 {
top: 36px;
right: 30px;
height: 24px;
width: 24px;
position: absolute;
transform: scaleX(-1);
}

#p3stock-2 {
top: 36px;
right: 81px;
height: 24px;
width: 24px;
position: absolute;
transform: scaleX(-1);
}

#p3stock-3 {
top: 36px;
right: 132px;
height: 24px;
width: 24px;
position: absolute;
transform: scaleX(-1);
}

#p3stock-4 {
top: 36px;
right: 183px;
height: 24px;
width: 24px;
position: absolute;
transform: scaleX(-1);
}

#p3score {
position: absolute;
top: 2px;
right: 237px;
height:60px;
width: 61px;
}

#p2CSP {
top: -188px;
position: absolute;
transform: scaleX(-1);
}

#p2port {
transform: scaleX(-1);
}

#p2dmg {
position: absolute;
top: -113px;
right: 30px;
height: 32px;
width: 128px;
}

#p2name {
position: absolute;
top: 2px;
right: 2px;
height: 30px;
width: 234px;
}

#p2stock-1 {
top: 36px;
right: 30px;
height: 24px;
width: 24px;
position: absolute;
transform: scaleX(-1);
}

#p2stock-2 {
top: 36px;
right: 81px;
height: 24px;
width: 24px;
position: absolute;
transform: scaleX(-1);
}

#p2stock-3 {
top: 36px;
right: 132px;
height: 24px;
width: 24px;
position: absolute;
transform: scaleX(-1);
}

#p2stock-4 {
top: 36px;
right: 183px;
height: 24px;
width: 24px;
position: absolute;
transform: scaleX(-1);
}

#p2score {
position: absolute;
top: 2px;
height: 60px;
width: 61px;
}

.port-1 {
background: url(./img/pillar-box/port1.png) no-repeat;
width: 305px;
height: 65px;
}

.port-2 {
background: url(./img/pillar-box/port2.png) no-repeat;
width: 305px;
height: 65px;
}

.port-3 {
background: url(./img/pillar-box/port3.png) no-repeat;
width: 305px;
height: 65px;
}

.port-4 {
background: url(./img/pillar-box/port4.png) no-repeat;
width: 305px;
height: 65px;
}

.name {
color: white;
text-align: center;
font-size: 26px;
}

.score {
text-align: center;
color: white;
font-size: 53px;
}

.tag {

}

.panel {
	Font-family: Metropolis Light;
	Font-size: 30px;
    color: white;
    text-align: center;
}

.damage {
color: white;
font-size: 64px;
}
#overlay {
width: 1920px;
height: 1080px;

}
.player-left {
	background: url('./img/pillar-box/barleft.png') no-repeat;
    width: 305px;
    height: 1080px;
    position: absolute;
    left: 0px;
    top: 0px;

}
.player-right {
    background: url('./img/pillar-box/barright.png') no-repeat;
    width: 305px;
    height: 1080px;
    position: absolute;
    right: 0px;
    top: 0px;

}
#player1 {
    width: 305px;
    height: 65px;
    position: absolute;
    left: 0px;
    top: 365px;

}
#player4 {
    width: 305px;
    height: 65px;
    position: absolute;
    left: 0px;
    bottom: 2px;


}
#player2 {
    width: 305px;
    height: 65px;
    position: absolute;
    right: 0px;
    top: 365px;

}
#player3 {
    width: 305px;
    height: 65px;
    position: absolute;
    right: 0px;
    bottom: 2px;

}
#panela {
	Font-size: 60px;
	text-align: left;
    width: 300px;
    height: 64px;
    position: absolute;
    left: 20px;
    top: 5px;

}
#panelb {
	text-align: center;
    width: 300px;
    height: 64px;
    position: absolute;
    right: 4px;
    top: 12px;

}
#panelc {
	text-align: center;
    width: 300px;
    height: 64px;
    position: absolute;
    Right: 4px;
    top: 670px;

}
#paneld {
	text-align: center;
    width: 300px;
    height: 64px;
    position: absolute;
    left: 4px;
    top: 670px;

}

@keyframes scroll-left {
 0%   { 
 transform: translateX(100%); 		
 }
 100% { 
 transform: translateX(-100%); 
 }
}

.CSP-5-0 {
	background: url('./img/pillar-box/CSP/5.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-5-1 {
	background: url('./img/pillar-box/CSP/5.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-5-2 {
	background: url('./img/pillar-box/CSP/5.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-5-3 {
	background: url('./img/pillar-box/CSP/5.png') no-repeat -409px 0px;
	width: 136px;
	height: 188px;
}

.CSP-22-0 {
	background: url('./img/pillar-box/CSP/22.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-22-1 {
	background: url('./img/pillar-box/CSP/22.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}
.CSP-22-2 {
	background: url('./img/pillar-box/CSP/22.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-22-3 {
	background: url('./img/pillar-box/CSP/22.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-22-4 {
	background: url('./img/pillar-box/CSP/22.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-8-0 {
	background: url('./img/pillar-box/CSP/8.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-8-1 {
	background: url('./img/pillar-box/CSP/8.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-8-2 {
	background: url('./img/pillar-box/CSP/8.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-8-3 {
	background: url('./img/pillar-box/CSP/8.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-8-4 {
	background: url('./img/pillar-box/CSP/8.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-7-0 {
	background: url('./img/pillar-box/CSP/7.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-7-1 {
	background: url('./img/pillar-box/CSP/7.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-7-2 {
	background: url('./img/pillar-box/CSP/7.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-7-3 {
	background: url('./img/pillar-box/CSP/7.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}


.CSP-12-0 {
	background: url('./img/pillar-box/CSP/12.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-12-1 {
	background: url('./img/pillar-box/CSP/12.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-12-2 {
	background: url('./img/pillar-box/CSP/12.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-12-3 {
	background: url('./img/pillar-box/CSP/12.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-12-4 {
	background: url('./img/pillar-box/CSP/12.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-17-0 {
	background: url('./img/pillar-box/CSP/17.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}


.CSP-17-1 {
	background: url('./img/pillar-box/CSP/17.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}


.CSP-17-2 {
	background: url('./img/pillar-box/CSP/17.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}


.CSP-17-3 {
	background: url('./img/pillar-box/CSP/17.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}


.CSP-17-4 {
	background: url('./img/pillar-box/CSP/17.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}


.CSP-17-5 {
	background: url('./img/pillar-box/CSP/17.png') no-repeat -680px 0px;
	width: 136px;
	height: 188px;
}

.CSP-1-0 {
	background: url('./img/pillar-box/CSP/1.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-1-1 {
	background: url('./img/pillar-box/CSP/1.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}


.CSP-1-2 {
	background: url('./img/pillar-box/CSP/1.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}


.CSP-1-3 {
	background: url('./img/pillar-box/CSP/1.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-1-4 {
	background: url('./img/pillar-box/CSP/1.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-0-0 {
	background: url('./img/pillar-box/CSP/0.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-0-1 {
	background: url('./img/pillar-box/CSP/0.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-0-2 {
	background: url('./img/pillar-box/CSP/0.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-0-3 {
	background: url('./img/pillar-box/CSP/0.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-0-4 {
	background: url('./img/pillar-box/CSP/0.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-0-5 {
	background: url('./img/pillar-box/CSP/0.png') no-repeat -680px 0px;
	width: 136px;
	height: 188px;
}

.CSP-25-0 {
	background: url('./img/pillar-box/CSP/25.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-25-1 {
	background: url('./img/pillar-box/CSP/25.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-25-2 {
	background: url('./img/pillar-box/CSP/25.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-25-3 {
	background: url('./img/pillar-box/CSP/25.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-25-4 {
	background: url('./img/pillar-box/CSP/25.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-20-0 {
	background: url('./img/pillar-box/CSP/20.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}


.CSP-20-1 {
	background: url('./img/pillar-box/CSP/20.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}


.CSP-20-2 {
	background: url('./img/pillar-box/CSP/20.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}


.CSP-20-3 {
	background: url('./img/pillar-box/CSP/20.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-2-0 {
	background: url('./img/pillar-box/CSP/2.png') no-repeat -0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-2-1 {
	background: url('./img/pillar-box/CSP/2.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-2-2 {
	background: url('./img/pillar-box/CSP/2.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-2-3 {
	background: url('./img/pillar-box/CSP/2.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-11-0 {
	background: url('./img/pillar-box/CSP/11.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-11-1 {
	background: url('./img/pillar-box/CSP/11.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-11-2 {
	background: url('./img/pillar-box/CSP/11.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-11-3 {
	background: url('./img/pillar-box/CSP/11.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-14-0 {
	background: url('./img/pillar-box/CSP/14.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-14-1 {
	background: url('./img/pillar-box/CSP/14.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-14-2 {
	background: url('./img/pillar-box/CSP/14.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-14-3 {
	background: url('./img/pillar-box/CSP/14.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-4-0 {
	background: url('./img/pillar-box/CSP/4.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-4-1 {
	background: url('./img/pillar-box/CSP/4.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-4-2 {
	background: url('./img/pillar-box/CSP/4.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-4-3 {
	background: url('./img/pillar-box/CSP/4.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-4-4 {
	background: url('./img/pillar-box/CSP/4.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-4-5 {
	background: url('./img/pillar-box/CSP/4.png') no-repeat -680px 0px;
	width: 136px;
	height: 188px;
}

.CSP-16-0 {
	background: url('./img/pillar-box/CSP/16.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-16-1 {
	background: url('./img/pillar-box/CSP/16.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-16-2 {
	background: url('./img/pillar-box/CSP/16.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-16-3 {
	background: url('./img/pillar-box/CSP/16.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-16-4 {
	background: url('./img/pillar-box/CSP/16.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-18-0 {
	background: url('./img/pillar-box/CSP/18.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-18-1 {
	background: url('./img/pillar-box/CSP/18.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-18-2 {
	background: url('./img/pillar-box/CSP/18.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-18-3 {
	background: url('./img/pillar-box/CSP/18.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-18-4 {
	background: url('./img/pillar-box/CSP/18.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-19-0 {
	background: url('./img/pillar-box/CSP/19.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-19-1 {
	background: url('./img/pillar-box/CSP/19.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-19-2 {
	background: url('./img/pillar-box/CSP/19.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-19-3 {
	background: url('./img/pillar-box/CSP/19.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-19-4 {
	background: url('./img/pillar-box/CSP/19.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-6-0 {
	background: url('./img/pillar-box/CSP/6.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-6-1 {
	background: url('./img/pillar-box/CSP/6.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-6-2 {
	background: url('./img/pillar-box/CSP/6.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-6-3 {
	background: url('./img/pillar-box/CSP/6.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-6-4 {
	background: url('./img/pillar-box/CSP/6.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-21-0 {
	background: url('./img/pillar-box/CSP/21.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-21-1 {
	background: url('./img/pillar-box/CSP/21.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-21-2 {
	background: url('./img/pillar-box/CSP/21.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-21-3 {
	background: url('./img/pillar-box/CSP/21.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-21-4 {
	background: url('./img/pillar-box/CSP/21.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-24-0 {
	background: url('./img/pillar-box/CSP/24.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-24-1 {
	background: url('./img/pillar-box/CSP/24.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-24-2 {
	background: url('./img/pillar-box/CSP/24.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-24-3 {
	background: url('./img/pillar-box/CSP/24.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-13-0 {
	background: url('./img/pillar-box/CSP/13.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-13-1 {
	background: url('./img/pillar-box/CSP/13.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-13-2 {
	background: url('./img/pillar-box/CSP/13.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-13-3 {
	background: url('./img/pillar-box/CSP/13.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-15-0 {
	background: url('./img/pillar-box/CSP/15.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-15-1 {
	background: url('./img/pillar-box/CSP/15.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-15-2 {
	background: url('./img/pillar-box/CSP/15.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-15-3 {
	background: url('./img/pillar-box/CSP/15.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-15-4 {
	background: url('./img/pillar-box/CSP/15.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-10-0 {
	background: url('./img/pillar-box/CSP/10.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-10-1 {
	background: url('./img/pillar-box/CSP/10.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-10-2 {
	background: url('./img/pillar-box/CSP/10.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-10-3 {
	background: url('./img/pillar-box/CSP/10.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-3-0 {
	background: url('./img/pillar-box/CSP/3.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-3-1 {
	background: url('./img/pillar-box/CSP/3.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-3-2 {
	background: url('./img/pillar-box/CSP/3.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-3-3 {
	background: url('./img/pillar-box/CSP/3.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-9-0 {
	background: url('./img/pillar-box/CSP/9.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-9-1 {
	background: url('./img/pillar-box/CSP/9.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-9-2 {
	background: url('./img/pillar-box/CSP/9.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-9-3 {
	background: url('./img/pillar-box/CSP/9.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-9-4 {
	background: url('./img/pillar-box/CSP/9.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-23-0 {
	background: url('./img/pillar-box/CSP/23.png') no-repeat 0px 0px;
	width: 136px;
	height: 188px;
}

.CSP-23-1 {
	background: url('./img/pillar-box/CSP/23.png') no-repeat -136px 0px;
	width: 136px;
	height: 188px;
}

.CSP-23-2 {
	background: url('./img/pillar-box/CSP/23.png') no-repeat -272px 0px;
	width: 136px;
	height: 188px;
}

.CSP-23-3 {
	background: url('./img/pillar-box/CSP/23.png') no-repeat -408px 0px;
	width: 136px;
	height: 188px;
}

.CSP-23-4 {
	background: url('./img/pillar-box/CSP/23.png') no-repeat -544px 0px;
	width: 136px;
	height: 188px;
}

.CSP-none {
	background: url('') no-repeat 0px 0px;
	width: 0px;
	height: 0px;
	margin: 0px;
}

#p1stocks {
	position: absolute;
	top: 0px;
	left; 0px;
	overflow: Hidden;
	height: 64px;
}

#p2stocks {
	position: absolute;
	top: 0px;
	right: 0px;
	overflow: hidden;
	height: 64px;
}

.stockcount-0 {
	width: 0px;
}

.stockcount-1 {
	width: 80px;
}

.stockcount-2 {
	width: 130px;
}

.stockcount-3 {
	width: 180px;	
}

.stockcount-4 {
	width: 300px;	
}
.buttons {
	width: 305px;
	height: 305px;
	position: absolute;
	top: 711px;
}
.button {
	background: url('./img/pillar-box/buttons/buttons.png') no-repeat 0px 0px;
	width: 305px;
	height: 305px;
	position: absolute;
}
	
#p1buttons {
	left: 0px;
}
#p2buttons {
	right:0px;
}
#Abutton{
background: url('./img/pillar-box/buttons/A.png') no-repeat;
height: 69px;
width: 69px;
top: 129px;
right: 66px;
position: absolute;
}
#Bbutton{
background: url('./img/pillar-box/buttons/B.png') no-repeat;
position: absolute;
height: 30px;
width: 30px;
top: 203px;
right: 132px;
}
#Xbutton {
    background: url(./img/pillar-box/buttons/X.png) no-repeat;
    position: absolute;
    height: 51px;
    width: 32px;
    top: 127px;
	right: 22px;
}

#Ybutton {
    background: url(./img/pillar-box/buttons/Y.png) no-repeat;
    position: absolute;
    height: 31px;
    width: 51px;
    top: 84px;
    right: 87px;
}

#Zbutton {
    background: url(./img/pillar-box/buttons/Z.png) no-repeat;
    position: absolute;
    height: 39px;
    width: 58px;
    top: 64px;
    right: 18px;
}

#Rbutton {
    background: url(./img/pillar-box/buttons/digital.png) no-repeat;
    position: absolute;
    height: 19px;
    width: 19px;
    top: 17px;
    right: 115px;
}

#Lbutton {
    background: url(./img/pillar-box/buttons/Digital.png) no-repeat;
    position: absolute;
    height: 26px;
    width: 26px;
    top: 17px;
    left: 13px;
}

#Startbutton{
background: url('./img/pillar-box/buttons/start.png') no-repeat;
position: absolute;
height: 20px;
width: 20px;
top: 141px;
right: 158px;
}

#DUbutton {
    background: url(./img/pillar-box/buttons/du.png) no-repeat;
    position: absolute;
    height: 29px;
    width: 14px;
    top: 227px;
    left: 40px;
}

#DDbutton {
    background: url(./img/pillar-box/buttons/dd.png) no-repeat;
    position: absolute;
    height: 29px;
    width: 14px;
    top: 262px;
    left: 40px;
}

#DRbutton {
    background: url(./img/pillar-box/buttons/dr.png) no-repeat;
    position: absolute;
    height: 14px;
    width: 29px;
    top: 252px;
    right: 226px;
}

#DLbutton {
    background: url(./img/pillar-box/buttons/dl.png) no-repeat;
    position: absolute;
    height: 14px;
    width: 29px;
    top: 252px;
    right: 261px;
}

.true {
	opacity: 1;
}

.false {
	opacity: 0;
}

.stick {
	background: url(./img/pillar-box/buttons/stick.png) no-repeat;
	width: 45px;
	height: 45px;

}

.cstick {
	background: url(./img/pillar-box/buttons/cstick.png) no-repeat;	
	width: 34px;
	height: 34px;

}

#LTrigger {
	background: url('./img/pillar-box/buttons/analog.png') no-repeat;	
	height: 19px;
	top: 17px;
	left: 34px;
	position: absolute;
}

#RTrigger {
	background: url('./img/pillar-box/buttons/analog.png') no-repeat;	
	height: 19px;
	top: 17px;
	left: 192px;
	position: absolute;
}


:host {
}


`;
}

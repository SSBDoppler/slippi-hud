import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<style>
#BG {
	position: absolute;
	background: url('./img/backgrounds/pillar-box/BG.png') 0px 0px no-repeat;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
	overflow: hidden;
    font-family: Eurostile;
	font-weight: bold;
}
#FG {
	position: absolute;
	background: url('./img/backgrounds/pillar-box/FG.png') 0px 0px no-repeat;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
}
#P1P {
	position: absolute;
	background: url('./img/backgrounds/pillar-box/LP${this.playerData[0].slippi.port}.png') 0px 0px no-repeat;
	left: 0px;
	top: 489px;
	width: 304px;
	height: 521px;
}
#P2P {
	position: absolute;
	background: url('./img/backgrounds/pillar-box/RP${this.playerData[1].slippi.port}.png') 0px 0px no-repeat;
	left: 1617px;
	top: 488px;
	width: 303px;
	height: 522px;
}
#P1Sponsor {
	position: absolute;
	left: 0px;
	top: 1013px;
	width: 1920px;
	height: 1080px;
}
#P2Sponsor {
	position: absolute;
	left: 1856px;
	top: 1013px;
	width: 1920px;
	height: 1080px;
}
#P1Character {
	position: absolute;
	background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/portrait.png') 0px 0px no-repeat;
	left: 0px;
	top: 822px;
	width: 133px;
	height: 188px;
	transform: ScaleX(-1);
}
#P2Character {
	position: absolute;
	background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/portrait.png') 0px 0px no-repeat;
	left: 1787px;
	top: 822px;
	width: 133px;
	height: 188px;
}
#P1Name {
	position: absolute;
	top: 1010px;
    left: 64px;
    font-size: 30px;
    width: 239px;
    text-align: center;
}
#P2Name {
	position: absolute;
	top: 1010px;
    left: 1617px;
    font-size: 30px;
    width: 239px;
    text-align: center;
}
#Score-true {
	position: absolute;
	top: 949px;
    left: 259px;
    font-size: 60px;
    width: 44px;
    text-align: center;
}
#Score-false {
	position: absolute;
	top: 949px;
    left: 1617px;
    font-size: 60px;
    width: 44px;
    text-align: center;
}
#P1Tag {
	position: absolute;
	top: 1046px;
    left: 64px;
    font-size: 30px;
    width: 239px;
    text-align: center;

}
#P2Tag {
	position: absolute;
	top: 1046px;
    left: 1617px;
    font-size: 30px;
    width: 239px;
    text-align: center;

}
.port-1 {
	color: #ED3636;
    -webkit-text-stroke: thin black;
}

.port-2 {
	color: #4E4EE9;
    -webkit-text-stroke: thin black;
}

.port-3 {
	color: #FFDF1A;
    -webkit-text-stroke: thin black;
}

.port-4 {
	color: #4EB94E;
    -webkit-text-stroke: thin black;
}

.true {
	opacity: 1;
}

.false {
	opacity: 0;
}

</style>

<div id="BG">
	<div id="P1P"></div>
	<div id="P2P"></div>
	<div id="FG"></div>
	
	<div id="P1Name"> ${this.playerData[0].player.name}</div>
	<div id="P1Sponsor"></div>
	<div id="Score-${this.playerData[1].slippi.id > this.playerData[0].slippi.id}">${this.generalData.tournament.scores[0].score}</div>
	<div id="P1Tag" class="port-${this.playerData[0].slippi.port} ${this.playerData[0].slippi.tag != ''}">${this.playerData[0].slippi.tag}</div>
	<div id="P1Tag" class="port-${this.playerData[0].slippi.port} ${this.playerData[0].slippi.tag == ''}">${this.playerData[0].player.pronouns}</div>
	<div id="P1Character"></div>
	
	<div id="P2Name"> ${this.playerData[1].player.name}</div>
	<div id="P2Sponsor"></div>
	<div id="Score-${this.playerData[1].slippi.id < this.playerData[0].slippi.id}">${this.generalData.tournament.scores[1].score}</div>
	<div id="P2Tag" class="port-${this.playerData[1].slippi.port} ${this.playerData[1].slippi.tag != ''}">${this.playerData[1].slippi.tag}</div>
	<div id="P2Tag" class="port-${this.playerData[1].slippi.port} ${this.playerData[1].slippi.tag == ''}">${this.playerData[1].player.pronouns}</div>
	<div id="P2Character"></div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}

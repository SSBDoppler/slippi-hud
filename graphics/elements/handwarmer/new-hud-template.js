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
	width: 1920px;
	height: 1080px;
	background: url('./img/extras/new-hud/ssb2022hwbg.png') no-repeat 0px 0px;
	top: 0px;
	left: 0px;
}

#overlay {
    top: 0px;
	left: 0px;
    background: url('./img/extras/new-hud/handwarmer-ssb2022.png') no-repeat;
    height: 1080px;
    width: 1920px;
    position: absolute;
}

#round {
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(169, 128, 255);
}

#best {
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(169, 128, 255);
}

#com0 {
    position: absolute;
    left: 970px;
    top: 470px;
    width: 500px;
    text-align: left;
	font-size: 25px;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

#info0 {
    position: absolute;
    left: 970px;
    top: 495px;
    width: 500px;
    text-align: left;
	font-size: 20px;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

#com1 {
    position: absolute;
    left: 1270px;
    top: 470px;
    width: 500px;
    text-align: right;
	font-size: 25px;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}
#info1 {
    position: absolute;
    left: 1270px;
    top: 495px;
    width: 500px;
    text-align: right;
	font-size: 20px;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}
#P1Name {
	position: absolute;
    top: 960px;
    left: 970px;
    font-size: 25px;
    width: 500px;
    text-align: left;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}
#P1Pronouns {
	position: absolute;
    top: 985px;
    left: 970px;
    font-size: 20px;
    width: 500px;
    text-align: left;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

#P2Name {
	position: absolute;
	top: 960px;
    left: 1270px;
    font-size: 25px;
    width: 500px;
    text-align: right;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

#P2Pronouns {
	position: absolute;
	top: 985px;
    left: 1270px;
    font-size: 20px;
    width: 500px;
    text-align: right;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

	
#box {
    position: absolute;
    top: 300px;
    text-align: center;
    width: 1242px;
	font-size: 48px;
	text-shadow: 6px 6px 3px rgb(255, 255, 255);
}

#logo {
	position: absolute;
	top: 115px;
	left: 0px;
	background: url(./img/slippi-hud/hud2/slippi_hud2.png) no-repeat;
	width: 305px;
	height: 160px;
}

#ssblogo {
	position: absolute;
	top: 10px;
	left: 220px;
	background: url(./img/slippi-hud/hud2/tournament_logo.png) no-repeat;
	width: 808px;
	height: 314px;
	transform: scale(0.75)
}

.ov_blue {
	filter: hue-rotate(325deg) brightness(105%);
}
	
.ov_red {
	filter: hue-rotate(95deg) brightness(105%);
}

.ov_green {
	filter: hue-rotate(200deg) brightness(105%);
}
	
.ov_violet {
	filter: hue-rotate(0deg);
}

.ov_turquoise {
	filter: hue-rotate(260deg) brightness(105%);
}

.ov_wowzers {
	filter: invert(1) hue-rotate(260deg) brightness(105%);
}
</style>

<div id="BG"></div>
	<div id="ssblogo" class='ov_blue'></div>
	<div id="overlay" class="ov_blue">
	<div id="logo"></div>
	<div id="box" style="left: 10px";>
	<div id="round" class="title">${this.generalData.tournament.round}</div>
	<div id="best" class="title">Best Of ${this.generalData.tournament.bestOf}</div>
</div>
<div id="com0">${this.generalData.tournament.commentators[0].name}</div>
<div id="info0">${this.generalData.tournament.commentators[0].info}</div>
<div id="com1">${this.generalData.tournament.commentators[1].name}</div>
<div id="info1">${this.generalData.tournament.commentators[1].info}</div>
${this.generalData.slippi.isTeams
? html`
<div id="P1Name"> ${this.playerData[0].player.name} & ${this.playerData[1].player.name}</div>
<div id="P1Pronouns">${this.playerData[0].player.pronouns} | ${this.playerData[1].player.pronouns}</div>
<div id="P2Name"> ${this.playerData[2].player.name} & ${this.playerData[3].player.name}</div>
<div id="P2Pronouns">${this.playerData[2].player.pronouns} | ${this.playerData[3].player.pronouns}</div>
`
:html `
<div id="P1Name"> ${this.playerData[0].player.name}</div>
<div id="P1Pronouns">${this.playerData[0].player.pronouns}</div>
<div id="P2Name"> ${this.playerData[1].player.name}</div>
<div id="P2Pronouns">${this.playerData[1].player.pronouns}</div>
`
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

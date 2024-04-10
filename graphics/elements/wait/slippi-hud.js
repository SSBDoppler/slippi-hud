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
	background: url('./img/backgrounds/new-hud/wait.png') no-repeat 0px 0px;
	top: 0px;
	left: 0px;
}

#overlay {
    top: 0px;
	left: 0px;
    background: url('./img/backgrounds/new-hud/wait-ssb2022.png') no-repeat 0px 0px;
    height: 1080px;
    width: 1920px;
    position: absolute;	
}

#round {
	text-transform: uppercase;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
}

#best {
	text-transform: uppercase;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
}

#com0 {
    position: absolute;
    left: 999px;
    top: 515px;
    width: 500px;
    text-align: left;
	font-size: 25px;
	text-transform: uppercase;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

#info0 {
    position: absolute;
    left: 999px;
    top: 540px;
    width: 500px;
    text-align: left;
	font-size: 20px;
	text-transform: uppercase;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

#com1 {
    position: absolute;
    left: 1345px;
    top: 515px;
    width: 500px;
    text-align: right;
	font-size: 25px;
	text-transform: uppercase;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}
#info1 {
    position: absolute;
    left: 1345px;
    top: 540px;
    width: 500px;
    text-align: right;
	font-size: 20px;
	text-transform: uppercase;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

#P1Name {
	position: absolute;
    top: 515px;
    left: 71px;
    font-size: 25px;
    width: 500px;
    text-align: left;
	text-transform: uppercase;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

#P1Pronouns {
	position: absolute;
    top: 540px;
    left: 71px;
    font-size: 20px;
    width: 500px;
    text-align: left;
	text-transform: uppercase;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

#sponsor0 {
    position: absolute;
	left: 10px;
	top: 20px;	
}

#score-true {
	font-size: 75px;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	text-align: center;
	text-shadow: 4px 4px 0px rgb(6, 0, 0);
	-webkit-transform: scale(1.1, 0.8);
    position: absolute;
    left: 72px;
    top: 440px;
    text-align: center;
    width: 60px;
}

#P2Name {
	position: absolute;
	top: 515px;
    left: 427px;
    font-size: 25px;
    width: 500px;
    text-align: right;
	text-transform: uppercase;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}

#P2Pronouns {
	position: absolute;
	top: 540px;
    left: 427px;
    font-size: 20px;
    width: 500px;
    text-align: right;
	text-transform: uppercase;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
	filter: drop-shadow(2px 2px 1px black);
}
#score-false {
	font-size: 75px;
	font-family: "Eurostile";
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	text-align: center;
	text-shadow: 4px 4px 0px rgb(6, 0, 0);
	-webkit-transform: scale(1.1, 0.8);
    position: absolute;
    left: 865px;
    top: 440px;
    text-align: center;
    width: 60px;
}
#sponsor{
	font-size: 22px;
}
#player {
	font-size: 32px;
	}
	
#box {
	position: absolute;
    left: 280px;
    top: 900px;
    text-align: center;
    width: 450px;
    font-size: 42px;
	text-shadow: 6px 6px 3px rgb(0, 0, 0);
}
#logo {
	position: absolute;
	top: 700px;
	left: 1580px;
	background: url(./img/logos/slippi_hud2.png) no-repeat;
	width: 305px;
	height: 160px;
}

#ssblogo {
	position: absolute;
	top: 590px;
	left: 100px;
	background: url(./img/logos/tournament_logo.png) no-repeat;
	width: 808px;
	height: 314px;
	transform: scale(0.9)
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

.title {
    color: #000;
    font-size: 60px;
    text-align: center;
    width: 1920px;
}

</style>

<div id="BG"></div>
	<div id="ssblogo"></div>
	<div id="overlay" class="ov_blue">
	<div id="box" style="left: -455px";>
	<div id="round" class="title">${this.generalData.tournament.round}</div>
	<div id="best" class="title">Best Of ${this.generalData.tournament.bestOf}</div>
</div>
<div id="logo"></div>
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

<div id="score-${this.playerData[0].slippi.id<this.playerData[1].slippi.id}">${this.generalData.tournament.scores[0].score}</div>
<div id="score-${this.playerData[1].slippi.id<this.playerData[0].slippi.id}">${this.generalData.tournament.scores[1].score}</div>

</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}

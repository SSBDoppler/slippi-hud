import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<style>

#container {
	position: absolute;
	left: 0px;
	top: 0px;
	font-family: "Eurostile";
	text-transform: uppercase;
}

#BG {
	position: absolute;
	width: 1920px;
	height: 1080px;
	background: url('./img/backgrounds/new-hud/gameend.png') no-repeat 0px 0px;
	top: 0px;
	left: 0px;
}

#overlay {
	position:absolute;
	left: 0px;
	top: 0px;
	background: url('./img/backgrounds/new-hud/gameEnd-ssb2022.png') no-repeat 0px 0px;
	width: 1920px;
	height: 1080px;
}

#logo {
	position: absolute;
	top: 875px;
	left: 1582px;
	background: url(./img/logos/slippi_hud2.png) no-repeat;
	width: 421px;
	height: 144px;
	transform: scale(1.4)
}

#ssblogo {
	position: absolute;
	top: 810px;
	left: -180px;
	background: url(./img/logos/tournament_logo.png) no-repeat;
	width: 808px;
	height: 314px;
	transform: scale(0.5)
}
#Title {
	position: absolute;
	top: 45px;
	text-shadow: 6px 6px 3px rgb(0, 0, 0);
}
#LComm {
	position: absolute;
}
#RComm {
	position: absolute;
}
#score {
	position: absolute;
    text-align: center;
    font-size: 60px;
    top: 875px;
    left: 870px;
    width: 181px;
	color: white;
	filter: drop-shadow(4px 4px 1px black);
}

#LSponsor{
	position: absolute;
	left: 137px;
}
#RSponsor{
	position: absolute;
	left: 1480px;
}
#LTag{
	position: absolute;
	top: 172px;
	left: 222px;
}

#RTag{
	position: absolute;
	top: 172px;
	left: 1470px;
}

#LPort {
	position: absolute;
	left: 109px;
}
#LChar {
	position: absolute;
	background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/stats.png') no-repeat 0px 0px;
	top: 179px;
	width: 333px;
	height: 597px;
	left: 114px;
}
#RChar {
	position: absolute;
	background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/stats.png') no-repeat 0px 0px;
	top: 179px;
	width: 333px;
	height: 597px;
	left: 1475px;
	transform: scaleX(-1);
}
#RPort {
	position: absolute;
	left: 1470px;
	transform: scaleX(-1);
}
#Index-${this.playerData[0].slippi.id}-Data{
	Postion: absolute;
	
}
#Index-${this.playerData[1].slippi.id}-Data{
	Postion: absolute;
	
}
#Index-${this.playerData[0].slippi.id}-Stats{
position: absolute;
    top: 245px;
    left: 531px;
	width: 156px;
    height: 900px;
    font-size: 25px;
    text-align: center;
	color: white;
	filter: drop-shadow(4px 4px 1px black);
}
#Index-${this.playerData[1].slippi.id}-Stats{
	position: absolute;
    top: 245px;
    left: 1246px;
	width: 156px;
	height: 900px;
    font-size: 25px;
    text-align: center;
	color: white;
	filter: drop-shadow(4px 4px 1px black);
}
#statLabel{
	position: absolute;
    top: 245px;
    left: 749px;
    width: 422px;
    height: 900px;
    font-size: 21px;
}
#Stat1 {
	top: 11px;
  	position: absolute;
}
#Stat2 {
	top: 89px;
	position: absolute;
}
#Stat3 {
	top: 214px;
	position: absolute;
	
}
#Stat4 {
	top: 312px;
  	position: absolute;
	
}
#Stat5 {
	top: 406px;
  	position: absolute;
	
}
#Stat6 {
	top: 493px;
  	position: absolute;
}
#LName {
	position: absolute;
    left: 137px;
}
#RName {
	position: absolute;
	left: 1480px;
}
#stage {
	position: absolute;	
	left: 0px;
	top: 0px;
	height: 1080px;
	width: 1920px;
    clip: rect(174px,1466px,867px,451px);
	background: url('./img/stages/${this.generalData.slippi.stage.id}.png') 0px 0px no-repeat;
}

.title {
    color: #FFF;
    font-size: 50px;
    text-align: center;
    width: 1920px;
}
.name {
	font-size: 28px;
	top: 700px;
	width: 300px;
    text-align: center;
}
.sponsor {
	color: #454545;
	font-size: 20px;
	top: 675px;
	width: 300px;
    text-align: center;
}

.tag {
	position: absolute;
	color: #454545;
	font-size: 22px;
	width: 222px;
    text-align: center;
	
}

.data {
	position: absolute;
	color: white;
}

.stat {
	color: white;
	width: 110px;
}

.port-1 {
	background: url('./img/backgrounds/new-hud/port1.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;
}
.port-2 {
	background: url('./img/backgrounds/new-hud/port2.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.port-3 {
	background: url('./img/backgrounds/new-hud/port3.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.port-4 {
	background: url('./img/backgrounds/new-hud/port4.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.label {
	text-align: center;
	width: 325px;
	left: 51px;
}
.label2 {
	text-align: center;
	width: 430px;
	
}
.label3 {
	text-align: center;
	color: white;
}

.true {
	opacity: 1;
}

.false {
	opacity: 0;
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
<div id="container">
	<div>
		<div id="stage"></div>
		<div id="overlay" class="ov_blue">
		<div id="logo"></div>
		<div id="Title">
		<div id="round" class="title">${this.generalData.tournament.round}</div>
		<div id="best" class="title">Best Of ${this.generalData.tournament.bestOf} - Game ${this.generalData.tournament.scores[1].score+this.generalData.tournament.scores[0].score} Stats</div>
		</div>
		</div>
		<div id="ssblogo"></div>
		<div id="LChar"></div>
		<div id="RChar"></div>
		<div id="LPort" class="port-${this.playerData[0].slippi.port}"></div>
		<div id="RPort" class="port-${this.playerData[1].slippi.port}"></div>
		<div id="LTag" class="tag">${this.playerData[0].player.pronouns}</div>
		<div id="RTag" class="tag">${this.playerData[1].player.pronouns}</div>
		
	</div>

	<div id="LName" class="name">${this.playerData[0].player.name}</div>
	<div id="LSponsor" class="sponsor">${this.playerData[0].player.sponsor}</div>


	<div id="RName" class="name">${this.playerData[1].player.name}</div>
	<div id="RSponsor" class="sponsor">${this.playerData[1].player.sponsor}</div>

	<div id="score" class="${this.playerData[0].slippi.id<this.playerData[1].slippi.id}">${this.generalData.tournament.scores[0].score}-${this.generalData.tournament.scores[1].score}</div>
	<div id="score" class="${this.playerData[1].slippi.id<this.playerData[0].slippi.id}">${this.generalData.tournament.scores[1].score}-${this.generalData.tournament.scores[0].score}</div>

	<div id="Index-0-Stats">
		<div id="Stat1" class="stat">${this.statData.latestGame.lc1}</div>
		<div id="Stat2" class="stat">${this.statData.latestGame.ipm1}</div>
		<div id="Stat3" class="stat">${this.statData.latestGame.opk1}</div>
		<div id="Stat4" class="stat">${this.statData.latestGame.dpo1}</div>
		<div id="Stat5" class="stat">${this.statData.latestGame.akp1}</div>
		<div id="Stat6" class="stat">${this.statData.latestGame.tdd1}</div>
	</div>

	<div id="Index-1-Stats">
		<div id="Stat1" class="stat">${this.statData.latestGame.lc2}</div>
		<div id="Stat2" class="stat">${this.statData.latestGame.ipm2}</div>
		<div id="Stat3" class="stat">${this.statData.latestGame.opk2}</div>
		<div id="Stat4" class="stat">${this.statData.latestGame.dpo2}</div>
		<div id="Stat5" class="stat">${this.statData.latestGame.akp2}</div>
		<div id="Stat6" class="stat">${this.statData.latestGame.tdd2}</div>
	</div>
	<div id="statLabel" class="ov_blue">
		<div id="Stat1" class="label2" style="color: white">L-Cancel %</div>
		<div id="Stat2" class="label2" style="color: white">Inputs Per Minute</div>
		<div id="Stat3" class="label" style="color: #a980ff">Openings/KOs</div>
		<div id="Stat4" class="label" style="color: #a980ff">Damage/Opening</div>
		<div id="Stat5" class="label" style="color: #a980ff">Average KO Percent</div>
		<div id="Stat6" class="label" style="color: #a980ff">Damage Done</div>
	</div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}

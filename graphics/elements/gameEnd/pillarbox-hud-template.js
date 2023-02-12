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
	font-family: "metropolis black";
}
#overlay {
	position:absolute;
	left: 0px;
	top: 0px;
	background: url('./img/extras/old-hud/GameEnd.png') no-repeat 0px 0px;
	width: 1920px;
	height: 1080px;
}
#Title {
	position: absolute;
	top: 41px;
	
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
    font-size: 44px;
    top: 870px;
    left: 869px;
    width: 181px;
}

#LSponsor{
	position: absolute;
	left: 144px;
}
#RSponsor{
	position: absolute;
	left: 1505px;
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
	height: 547px;
	left: 113px;
}
#RChar {
	position: absolute;
	background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/stats.png') no-repeat 0px 0px;
	top: 179px;
	width: 333px;
	height: 547px;
	left: 1475px;
	transform: ScaleX(-1);
}
#RPort {
	position: absolute;
	left: 1470px;
}
#Index-${this.playerData[0].slippi.id}-Data{
	Postion: absolute;
	
}
#Index-${this.playerData[1].slippi.id}-Data{
	Postion: absolute;
	
}
#Index-${this.playerData[0].slippi.id}-Stats{
position: absolute;
    top: 222px;
    left: 531px;
	width: 156px;
    font-size: 21px;
    text-align: center;
}
#Index-${this.playerData[1].slippi.id}-Stats{
	position: absolute;
    top: 222px;
    left: 1246px;
	width: 156px;
    font-size: 21px;
    text-align: center;
}
#statLabel{
	position: absolute;
    top: 222px;
    left: 749px;
    width: 422px;
    height: 800px;
    color: white;
    font-size: 21px;
}
#Stat1 {
	padding-top: 6px;
}
#Stat2 {
	padding-top: 35px;
	
}
#Stat3 {
	padding-top: 68px;
	
}
#Stat4 {
	padding-top: 48px;
	
}
#Stat5 {
	padding-top: 49px;
	
}
#Stat6 {
	padding-top: 50px;
	
}
#LName {
	position: absolute;
    left: 109px;
}
#RName {
	position: absolute;
	left: 1470px;
}
#stage {
	position: absolute;
	left: 0px;
	top: 0px;
	height: 1080px;
	width: 1920px;
	background: url('./img/Stages/${this.generalData.slippi.stage.id}.png') 0px 0px no-repeat;
}

.title {
    color: white;
    font-size: 25px;
    text-align: center;
    width: 1920px;
    -webkit-text-stroke: medium black;
	padding-top: 10px;
}
.name {
	font-size: 30px;
	top: 678px;
	width: 337px;
    text-align: center;
}
.sponsor {
	color: black;
	font-size: 25px;
	top: 726px;
	width: 272px;
    text-align: center;
}
.tag {
	position: absolute;
	
}
.data {
	position: absolute;
	
}
.stat {
	color: white;
	
	
}
.port-1 {
	background: url('./img/extras/old-hud/port1.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;
}
.port-2 {
	background: url('./img/extras/old-hud/port2.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.port-3 {
	background: url('./img/extras/old-hud/port3.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.port-4 {
	background: url('./img/extras/old-hud/port4.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.label {
	text-align: center;
}
.label2 {
	text-align: center;
	color: black;
}
.label3 {
	color: white;
    -webkit-text-stroke: medium black;
	text-align: center;
	font-size: 30px;
}

</style>
<div id="container">
	<div>
		<div id="stage"></div>
		<div id="overlay"></div>
		<div id="LChar"></div>
		<div id="RChar"></div>
		<div id="LPort" class="port-${this.playerData[0].slippi.port}"></div>
		<div id="RPort" class="port-${this.playerData[1].slippi.port}"></div>
		<div id="Title">
		<div id="tournament" class="title">${this.generalData.tournament.name}</div>
		<div id="round" class="title">${this.generalData.tournament.round}</div>
		<div id="best" class="title">Best Of ${this.generalData.tournament.bestOf} - Game ${this.generalData.tournament.scores[this.playerData[1].slippi.id].score+this.generalData.tournament.scores[this.playerData[0].slippi.id].score} Stats</div>
		</div>
	</div>

	<div id="LName" class="name">${this.playerData[0].player.name}</div>
	<div id="LSponsor" class="sponsor">${this.playerData[0].player.sponsor}</div>


	<div id="RName" class="name">${this.playerData[1].player.name}</div>
	<div id="RSponsor" class="sponsor">${this.playerData[1].player.sponsor}</div>

	<div id="score">${this.generalData.tournament.scores[this.playerData[0].slippi.id].score}-${this.generalData.tournament.scores[this.playerData[1].slippi.id].score}</div>

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
	<div id="statLabel">
		<div id="Stat1" class="label2">L-Cancel %</div>
		<div id="Stat2" class="label2">Inputs Per Minute</div>
		<div id="Stat3" class="label">Openings/Kill</div>
		<div id="Stat4" class="label">Damage/Opening</div>
		<div id="Stat5" class="label">Avg. Kill Percent</div>
		<div id="Stat6" class="label">Damage Done</div>
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

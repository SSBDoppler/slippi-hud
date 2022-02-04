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
	background: url('./img/extras/SetEnd.png') no-repeat 0px 0px;
	width: 1920px;
	height: 1080px;
}
#tournament {
	position: absolute;
	top:1px;
	
}
#round {
	position: absolute;
	top: 60px;
}
#best {
	position: absolute;
	top: 120px;
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
    font-size: 77px;
    color: white;
    top: 842px;
    left: 869px;
    width: 181px;
}

#LSponsor{
	position: absolute;
	left: 164px;
}

#Ltag {
	position: absolute;
}
#RSponsor{
	position: absolute;
	left: 1484px;
}
#LPort {
	position: absolute;
	left: 109px;
}
#LChar {
	position: absolute;
	background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/vs-left.png') no-repeat -109px 0px;
	top: 163px;
	width: 342px;
	height: 558px;
	left: 109px;
}
#RChar {
	position: absolute;
	background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/vs-right.png') no-repeat 0px 0px;
	top: 163px;
	width: 342px;
	height: 558px;
	left: 1484px;
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
    top: 205px;
    left: 451px;
	width: 300px;
    font-size: 33px;
    text-align: center;
    -webkit-text-stroke: thin black;
}
#Index-${this.playerData[1].slippi.id}-Stats{
	position: absolute;
    top: 205px;
    left: 1170px;
	width: 300px;
    font-size: 33px;
    text-align: center;
    -webkit-text-stroke: thin black;
}
#statLabel{
	position: absolute;
    top: 205px;
    left: 749px;
    width: 422px;
    height: 800px;
    color: white;
    font-size: 33px;
}
#Stat1 {
	padding-top:3px;
}
#Stat2 {
	padding-top: 26px;
	
}
#Stat3 {
	padding-top: 58px;
	
}
#Stat4 {
	padding-top: 38px;
	
}
#Stat5 {
	padding-top: 38px;
	
}
#Stat6 {
	padding-top: 38px;
	
}
#LName {
	position: absolute;
    left: 131px;
}
#RName {
	position: absolute;
	left: 1452px;
}

.title {
	position: absolute;
    color: white;
    font-size: 42px;
    text-align: center;
    width: 1920px;
    -webkit-text-stroke: medium black;
}
.name {
	color: white;
	font-size: 30px;
	top: 678px;
	width: 337px;
    text-align: center;
}
.sponsor {
	color: black;
	font-size: 30px;
	top: 722px;
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
	background: url('./img/extras/port1.png') no-repeat 0px 0px;
	top: 163px;
	width: 342px;
	height: 558px;
}
.port-2 {
	background: url('./img/extras/port2.png') no-repeat 0px 0px;
	top: 163px;
	width: 342px;
	height: 558px;

}
.port-3 {
	background: url('./img/extras/port3.png') no-repeat 0px 0px;
	top: 163px;
	width: 342px;
	height: 558px;

}
.port-4 {
	background: url('./img/extras/port4.png') no-repeat 0px 0px;
	top: 163px;
	width: 342px;
	height: 558px;

}
.label {
	text-align: center;
}
.label2 {
	text-align: center;
	color: black;
}

</style>
<div id="container">
	<div>
		<div id="LPort" class="port-${this.playerData[0].slippi.port}"></div>
		<div id="RPort" class="port-${this.playerData[1].slippi.port}"></div>
		<div id="LChar"></div>
		<div id="RChar"></div>
		<div id="overlay"></div>
		<div id="tournament" class="title">${this.generalData.tournament.name}</div>
		<div id="round" class="title">${this.generalData.tournament.round}</div>
		<div id="best" class="title">Best Of ${this.generalData.tournament.bestOf} - Set Stats</div>
	</div>

	<div id="LName" class="name">${this.playerData[0].slippi.display}</div>
	<div id="LSponsor" class="sponsor">${this.playerData[0].slippi.connect}</div>


	<div id="RName" class="name">${this.playerData[1].slippi.display}</div>
	<div id="RSponsor" class="sponsor">${this.playerData[1].slippi.connect}</div>

	<div id="score">${this.generalData.tournament.scores[this.playerData[0].slippi.id].score}-${this.generalData.tournament.scores[this.playerData[1].slippi.id].score}</div>

	<div id="Index-0-Stats">
		<div id="Stat1" class="stat">${this.statData.latestSet.mcno1}</div>
		<div id="Stat2" class="stat">${this.statData.latestSet.mckm1}</div>
		<div id="Stat3" class="stat">${this.statData.latestSet.ek1}</div>
		<div id="Stat4" class="stat">${this.statData.latestSet.opk1}</div>
		<div id="Stat5" class="stat">${this.statData.latestSet.nw1}</div>
		<div id="Stat6" class="stat">${this.statData.latestSet.lc1}</div>
	</div>

	<div id="Index-1-Stats">
		<div id="Stat1" class="stat">${this.statData.latestSet.mcno2}</div>
		<div id="Stat2" class="stat">${this.statData.latestSet.mckm2}</div>
		<div id="Stat3" class="stat">${this.statData.latestSet.ek2}</div>
		<div id="Stat4" class="stat">${this.statData.latestSet.opk2}</div>
		<div id="Stat5" class="stat">${this.statData.latestSet.nw2}</div>
		<div id="Stat6" class="stat">${this.statData.latestSet.lc2}</div>
	</div>
	<div id="statLabel">
		<div id="Stat1" class="label">Neutral Openers</div>
		<div id="Stat2" class="label">Kill Moves</div>
		<div id="Stat3" class="label2">Early Kills</div>
		<div id="Stat4" class="label2">Openings/Kill</div>
		<div id="Stat5" class="label2">Neutral Wins</div>
		<div id="Stat6" class="label2">L-Cancel %</div>
	</div>
	<div id="History">
<span id="g1" class="stage-${this.statData.latestSet.g1.split(",")[0]}"></span>
	<span id="g2" class="stage-${this.statData.latestSet.g1.split(",")[0]}"></span>
	<span id="g3" class="stage-${this.statData.latestSet.g1.split(",")[0]}"></span>
	<span id="g4" class="stage-${this.statData.latestSet.g1.split(",")[0]}"></span>
	<span id="g5" class="stage-${this.statData.latestSet.g1.split(",")[0]}"></span>
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

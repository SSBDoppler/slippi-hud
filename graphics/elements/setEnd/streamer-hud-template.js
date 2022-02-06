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
	background: url('./img/extras/SetEnd-${this.statData.latestSet.gt}.png') no-repeat 0px 0px;
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
#History {
	position: absolute;
	top: 730px;
	width: 1019px;
	left: 451px;
}
#g1 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: ${((1000-(190*this.statData.latestSet.gt))/(this.statData.latestSet.gt+1))+10}px;
}
#g2 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: ${2*((1000-(190*this.statData.latestSet.gt))/(this.statData.latestSet.gt+1))+200}px;
}
#g3 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: ${3*((1000-(190*this.statData.latestSet.gt))/(this.statData.latestSet.gt+1))+390}px;
}
#g4 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: ${4*((1000-(190*this.statData.latestSet.gt))/(this.statData.latestSet.gt+1))+580}px;
}
#g5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: ${5*((1000-(190*this.statData.latestSet.gt))/(this.statData.latestSet.gt+1))+770}px;
}
#char-${this.playerData[0].slippi.id} {
	position: absolute;
	top: 10px;
	width: 72px;
	height: 72px;
	left: 0px;
	transform: scale(.5);
}
#char-${this.playerData[1].slippi.id} {
	position: absolute;
	top: 10px;
	width: 72px;
	height: 72px;
	right: 0px;
	transform: scale(.5);
}
#time {
	position: absolute;
	width: 192px;
}
.winner{
	opacity: 1;
}
.loser {
	opacity: .6;
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
.label3 {
	color: white;
    -webkit-text-stroke: medium black;
	text-align: center;
	font-size: 30px;
}
.stage-2 {
	background: url('./img/Stages/2-small.png') 0px 0px;
}
.stage-3 {
	background: url('./img/Stages/3-small.png') 0px 0px;
}
.stage-8 {
	background: url('./img/Stages/8-small.png') 0px 0px;
}
.stage-28 {
	background: url('./img/Stages/28-small.png') 0px 0px;
}
.stage-31 {
	background: url('./img/Stages/31-small.png') 0px 0px;
}
.stage-32 {
	background: url('./img/Stages/32-small.png') 0px 0px;
}
#t1 {
	width: 200px;
	height: 200px;
	text-align: center;
}

</style>
<div id="container">
	<div id="History">
		<div id="g1" class="stage-${this.statData.latestSet.g1.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g1.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g1.split(",")[2]}/0/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g1.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g1.split(",")[5]}/0/stock.png');"></div><div id="time">${this.statData.latestSet.g1.split(",")[1]}</div></div>
		<!-- Splitting an array that does not exist causes page to not render, need to make sure array exists before splitting --> 
		${this.statData.latestSet.gt>1
		? html `<div id="g2" class="stage-${this.statData.latestSet.g2.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g2.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g2.split(",")[2]}/0/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g2.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g2.split(",")[5]}/0/stock.png');"></div><div id="time">${this.statData.latestSet.g2.split(",")[1]}<div></div>`
		: html ``}
		${this.statData.latestSet.gt>2
		? html `<div id="g3" class="stage-${this.statData.latestSet.g3.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g3.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g3.split(",")[2]}/0/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g3.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g3.split(",")[5]}/0/stock.png');"></div><div id="time">${this.statData.latestSet.g3.split(",")[1]}</div></div>`
		: html ``}	
		${this.statData.latestSet.gt>3
		? html `<div id="g4" class="stage-${this.statData.latestSet.g4.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g4.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g4.split(",")[2]}/0/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g4.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g4.split(",")[5]}/0/stock.png');"></div><div id="time">${this.statData.latestSet.g4.split(",")[1]}</div></div>`
		: html ``}
		${this.statData.latestSet.gt>4
		? html `<div id="g5" class="stage-${this.statData.latestSet.g5.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g5.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g5.split(",")[2]}/0/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g5.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g5.split(",")[5]}/0/stock.png');"></div><div id="time">${this.statData.latestSet.g5.split(",")[1]}</div></div>`
		: html ``}
	</div>
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
	<div id="LTag" class="tag">${this.playerData[0].slippi.tag}</div>


	<div id="RName" class="name">${this.playerData[1].slippi.display}</div>
	<div id="RSponsor" class="sponsor">${this.playerData[1].slippi.connect}</div>
	<div id="RTag" class="tag">${this.playerData[1].slippi.tag}</div>

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
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}

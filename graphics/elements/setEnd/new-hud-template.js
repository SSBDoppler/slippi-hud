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
	font-family: "Roboto";
	text-transform: uppercase;
}

#BG {
	position: absolute;
	width: 1920px;
	height: 1080px;
	background: url('./img/extras/new-hud/ssb2022setEndbg.png') no-repeat 0px 0px;
	top: 0px;
	left: 0px;
}

#overlay {
	position:absolute;
	left: 0px;
	top: 0px;
	background: url('./img/extras/new-hud/setEnd-ssb2022.png') no-repeat 0px 0px;
	width: 1920px;
	height: 1080px;
}
#logo {
	position: absolute;
	top: 875px;
	left: 1582px;
	background: url(./img/slippi-hud/hud2/slippi_hud2.png) no-repeat;
	width: 421px;
	height: 144px;
	transform: scale(1.4)
}

#ssblogo {
	position: absolute;
	top: 810px;
	left: -180px;
	background: url(./img/slippi-hud/hud2/tournament_logo.png) no-repeat;
	width: 808px;
	height: 314px;
	transform: scale(0.5)
}
#Title {
	position: absolute;
	top: 45px;
	text-shadow: 6px 6px 3px rgb(255, 255, 255);
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
#LPort {
	position: absolute;
	left: 109px;
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
#LChar {
	position: absolute;
	background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/stats.png') no-repeat 0px 50px;
	top: 125px;
	width: 333px;
	height: 597px;
	left: 114px;
}
#RChar {
	position: absolute;
	background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/stats.png') no-repeat 0px 50px;
	top: 125px;
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
    top: 222px;
    left: 531px;
	width: 156px;
    font-size: 23px;
    text-align: center;
	color: white;
	filter: drop-shadow(4px 4px 1px black);
}
#Index-${this.playerData[1].slippi.id}-Stats{
	position: absolute;
    top: 222px;
    left: 1246px;
	width: 156px;
    font-size: 23px;
    text-align: center;
	color: white;
	filter: drop-shadow(4px 4px 1px black);
}
#statLabel{
	position: absolute;
    top: 222px;
    left: 749px;
    width: 422px;
    height: 800px;
    color: white;
    font-size: 23px;
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
    left: 137px;
}
#RName {
	position: absolute;
	left: 1480px;
}
#History {
	position: absolute;
	top: 741px;
	width: 1019px;
	left: 451px;
}
#g1-1 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 413px;
}
#g1-2 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 281px;
}
#g1-3 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 16px;
}
#g1-4 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 16px;
}
#g1-5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 16px;
}
#g2-2 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 545px;
}
#g2-3 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 413px;
}
#g2-4 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 281px;
}
#g2-5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 215px;
}
#g3-3 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 810px;
}
#g3-4 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 545px;
}
#g3-5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 413px;
}
#g4-4 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 810px;
}
#g4-5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 612px;
}
#g5-5 {
	width: 192px;
    height: 108px;
    position: absolute;
    top: 0px;
    left: 810px;
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
	top: 3px;
	position: absolute;
	width: 192px;
	color: white;
	text-shadow: 4px 4px 3px rgb(0, 0, 0);
}
.winner{
	opacity: 1;
}
.loser {
	opacity: .6;
}
.title {
    color: #a980ff;
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
	width: 230px;
    text-align: center;
	
}
.data {
	position: absolute;
	
}
.stat {
	color: white;
}
.port-1 {
	background: url('./img/extras/new-hud/port1.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;
}
.port-2 {
	background: url('./img/extras/new-hud/port2.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.port-3 {
	background: url('./img/extras/new-hud/port3.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.port-4 {
	background: url('./img/extras/new-hud/port4.png') no-repeat 0px 0px;
	top: 174px;
	width: 342px;
	height: 578px;

}
.label {
	text-align: center;
}
.label2 {
	text-align: center;
	color: white;
}
.label3 {
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
.frame {
	background: url('./img/extras/new-hud/frame.png') 0px 0px no-repeat;
}
#t1 {
	width: 200px;
	height: 200px;
	text-align: center;
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
	<div id="overlay" class="ov_blue">
	<div id="logo"></div>
	<div id="Title">
		<div id="round" class="title">${this.generalData.tournament.round}</div>
		<div id="best" class="title">Best Of ${this.generalData.tournament.bestOf} - Set Stats</div>
		</div>
		</div>
		<div id="ssblogo" class='ov_blue'></div>
	<div id="History">
		<div id="g1-${this.statData.latestSet.gt}" class="stage-${this.statData.latestSet.g1.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g1.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g1.split(",")[2]}/${this.statData.latestSet.g1.split(",")[3]}/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g1.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g1.split(",")[5]}/${this.statData.latestSet.g1.split(",")[6]}/stock.png');"></div><div id="time">${this.statData.latestSet.g1.split(",")[1]}</div></div>
		<div id="g1-${this.statData.latestSet.gt}" class="frame"></div>
		<!-- Splitting an array that does not exist causes page to not render, need to make sure array exists before splitting --> 
		${this.statData.latestSet.gt>1
		? html `<div id="g2-${this.statData.latestSet.gt}" class="stage-${this.statData.latestSet.g2.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g2.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g2.split(",")[2]}/${this.statData.latestSet.g1.split(",")[3]}/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g2.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g2.split(",")[5]}/${this.statData.latestSet.g1.split(",")[6]}/stock.png');"></div><div id="time">${this.statData.latestSet.g2.split(",")[1]}</div></div>
		<div id="g2-${this.statData.latestSet.gt}" class="frame"></div>`
		: html ``}
		${this.statData.latestSet.gt>2
		? html `<div id="g3-${this.statData.latestSet.gt}" class="stage-${this.statData.latestSet.g3.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g3.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g3.split(",")[2]}/${this.statData.latestSet.g1.split(",")[3]}/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g3.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g3.split(",")[5]}/${this.statData.latestSet.g1.split(",")[6]}/stock.png');"></div><div id="time">${this.statData.latestSet.g3.split(",")[1]}</div></div>
		<div id="g3-${this.statData.latestSet.gt}" class="frame"></div>`
		: html ``}	
		${this.statData.latestSet.gt>3
		? html `<div id="g4-${this.statData.latestSet.gt}" class="stage-${this.statData.latestSet.g4.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g4.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g4.split(",")[2]}/${this.statData.latestSet.g1.split(",")[3]}/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g4.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g4.split(",")[5]}/${this.statData.latestSet.g1.split(",")[6]}/stock.png');"></div><div id="time">${this.statData.latestSet.g4.split(",")[1]}</div></div>
		<div id="g4-${this.statData.latestSet.gt}" class="frame"></div>`
		: html ``}
		${this.statData.latestSet.gt>4
		? html `<div id="g5-${this.statData.latestSet.gt}" class="stage-${this.statData.latestSet.g5.split(",")[0]} label3"><div id="char-0" class="${this.statData.latestSet.g5.split(",")[4]}" style="background: url('./img/characters/${this.statData.latestSet.g5.split(",")[2]}/${this.statData.latestSet.g1.split(",")[3]}/stock.png');"></div><div id="char-1" class="${this.statData.latestSet.g5.split(",")[7]}" style="background: url('./img/characters/${this.statData.latestSet.g5.split(",")[5]}/${this.statData.latestSet.g1.split(",")[6]}/stock.png');"></div><div id="time">${this.statData.latestSet.g5.split(",")[1]}</div></div>
		<div id="g5-${this.statData.latestSet.gt}" class="frame"></div>`
		: html ``}
	</div>
	<div>
	
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
	<div id="statLabel" class="ov_blue">
		<div id="Stat1" class="label2" style="color: white">Neutral Openers</div>
		<div id="Stat2" class="label2" style="color: white">KO Moves</div>
		<div id="Stat3" class="label" style="color: #a980ff">Early KOs</div>
		<div id="Stat4" class="label" style="color: #a980ff">Openings/KOs</div>
		<div id="Stat5" class="label" style="color: #a980ff">Neutral Wins</div>
		<div id="Stat6" class="label" style="color: #a980ff">L-Cancel %</div>
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

import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@1,900&display=swap');

@keyframes onOv {
    0% {
	filter: hue-rotate(0deg) brightness(105%);
    }
    100% {
	filter: hue-rotate(359deg) brightness(105%);
    }
}

@keyframes onEnd-false {
    0% {
        opacity: 0;
    }
    100% {
		opacity: 1;
    }
}

@keyframes onEnd-true {
    0% {
        opacity: 1;
    }
    100% {
		opacity: 0;
    }
}

@keyframes onP1death-true {
	0%{
		opacity: 1;
		transform: scale(${1/6}) translate(0%,0%);
	}
	40% {
		opacity: 1;
		transform: scale(${1/6}) translate(50px,-200px);
	}
	
	50% {
		opacity: 1;
		transform: scale(${1/6}) translate(100px,-400px);
	}
	
	60% {
		opacity: 1;
		transform: scale(${1/6}) translate(150px,-200px);
	}
	100% {
		opacity: 1;
		transform: scale(${1/6}) translate(250px, 1500px);
	}
}

@keyframes onP2death-true {
	0%{
		opacity: 1;
		transform: scale(${1/6}) translate(0%,0%);
	}
	40% {
		opacity: 1;
		transform: scale(${1/6}) translate(50px,-200px);
	}
	
	50% {
		opacity: 1;
		transform: scale(${1/6}) translate(100px,-400px);
	}
	
	60% {
		opacity: 1;
		transform: scale(${1/6}) translate(150px,-200px);
	}
	100% {
		opacity: 1;
		transform: scale(${1/6}) translate(250px, 1500px);
	}
}

@keyframes onP3death-true {
	0%{
		opacity: 1;
		transform: scale(${1/6}) translate(0%,0%);
	}
	40% {
		opacity: 1;
		transform: scale(${1/6}) translate(50px,-200px);
	}
	
	50% {
		opacity: 1;
		transform: scale(${1/6}) translate(100px,-400px);
	}
	
	60% {
		opacity: 1;
		transform: scale(${1/6}) translate(150px,-200px);
	}
	100% {
		opacity: 1;
		transform: scale(${1/6}) translate(250px, 1500px);
	}
}

@keyframes onP4death-true {
	0%{
		opacity: 1;
		transform: scale(${1/6}) translate(0%,0%);
	}
	40% {
		opacity: 1;
		transform: scale(${1/6}) translate(50px,-200px);
	}
	
	50% {
		opacity: 1;
		transform: scale(${1/6}) translate(100px,-400px);
	}
	
	60% {
		opacity: 1;
		transform: scale(${1/6}) translate(150px,-200px);
	}
	100% {
		opacity: 1;
		transform: scale(${1/6}) translate(250px, 1500px);
	}
}

@keyframes onP1stock-${this.playerData[0].slippi.stockCountNow} {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 0;
	}
	90% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes onP2stock-${this.playerData[1].slippi.stockCountNow} {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 0;
	}
	90% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@keyframes onP3stock-${this.playerData[2].slippi.stockCountNow} {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 0;
	}
	90% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes onP4stock-${this.playerData[3].slippi.stockCountNow} {
	0% {
		opacity: 1;
	}
	25% {
		opacity: 0;
	}
	90% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
@keyframes onP1damage-${this.playerData[0].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(0px,20px);
	}
	
	50% {
		transform: translate(-20px,0px);
	}
	
	90% {
		transform: translate(0px,-20px);
	}
}

@keyframes onP1damage-10-${this.playerData[0].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(20px,0px);
	}
	
	50% {
		transform: translate(-20px,20px);
	}
	
	90% {
		transform: translate(0px,-20px);
	}
}

@keyframes onP1damage-100-${this.playerData[0].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(-20px,-20px);
	}
	
	50% {
		transform: translate(20px,0px);
	}
	
	90% {
		transform: translate(0px,20px);
	}
	
}

@keyframes onP2damage-${this.playerData[1].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(20px,20px);
	}
	
	50% {
		transform: translate(-20px,0px);
	}
	
	90% {
		transform: translate(0px,-20px);
	}
	
}

@keyframes onP2damage-10-${this.playerData[1].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(0px,20px);
	}
	
	50% {
		transform: translate(-20px,0px);
	}
	
	90% {
		transform: translate(20px,-20px);
	}
	
}

@keyframes onP2damage-100-${this.playerData[1].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(20px,0px);
	}
	
	50% {
		transform: translate(-20px,20px);
	}
	
	90% {
		transform: translate(0px,-20px);
	}
}

@keyframes onP3damage-${this.playerData[2].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(0px,20px);
	}
	
	50% {
		transform: translate(-20px,0px);
	}
	
	90% {
		transform: translate(0px,-20px);
	}
}

@keyframes onP3damage-10-${this.playerData[2].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(20px,0px);
	}
	
	50% {
		transform: translate(-20px,20px);
	}
	
	90% {
		transform: translate(0px,-20px);
	}
}

@keyframes onP3damage-100-${this.playerData[2].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(-20px,-20px);
	}
	
	50% {
		transform: translate(20px,0px);
	}
	
	90% {
		transform: translate(0px,20px);
	}
	
}
@keyframes onP4damage-${this.playerData[3].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(0px,20px);
	}
	
	50% {
		transform: translate(-20px,0px);
	}
	
	90% {
		transform: translate(0px,-20px);
	}
}

@keyframes onP4damage-10-${this.playerData[3].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(20px,0px);
	}
	
	50% {
		transform: translate(-20px,20px);
	}
	
	90% {
		transform: translate(0px,-20px);
	}
}

@keyframes onP4damage-100-${this.playerData[3].slippi.damage} {
	0%{
		transform: translate(0%,0%);
	}
	10% {
		transform: translate(-20px,-20px);
	}
	
	50% {
		transform: translate(20px,0px);
	}
	
	90% {
		transform: translate(0px,20px);
	}
	
}

#p1dmg {
	animation: 160ms linear 0s 1 onP1damage-${this.playerData[0].slippi.damage};
}

#p1dmg-10 {
	animation: 160ms linear 0s 1 onP1damage-10-${this.playerData[0].slippi.damage};
}

#p1dmg-100 {
	animation: 160ms linear 0s 1 onP1damage-100-${this.playerData[0].slippi.damage};
}

#p2dmg {
	animation: 160ms linear 0s 1 onP2damage-${this.playerData[1].slippi.damage};
}

#p2dmg-10 {
	animation: 160ms linear 0s 1 onP2damage-10-${this.playerData[1].slippi.damage};
}

#p2dmg-100 {
	animation: 160ms linear 0s 1 onP2damage-100-${this.playerData[1].slippi.damage};
}

#p3dmg {
	animation: 160ms linear 0s 1 onP3damage-${this.playerData[2].slippi.damage};
}

#p3dmg-10 {
	animation: 160ms linear 0s 1 onP3damage-10-${this.playerData[2].slippi.damage};
}

#p3dmg-100 {
	animation: 160ms linear 0s 1 onP3damage-100-${this.playerData[2].slippi.damage};
}

#p4dmg {
	animation: 160ms linear 0s 1 onP4damage-${this.playerData[3].slippi.damage};
}

#p4dmg-10 {
	animation: 160ms linear 0s 1 onP4damage-10-${this.playerData[3].slippi.damage};
}

#p4dmg-100 {
	animation: 160ms linear 0s 1 onP4damage-100-${this.playerData[3].slippi.damage};
}

#teamsmodule {
	background: url(./img/slippi-hud/hud2/teams_module.png) 0px 0px no-repeat;
    width: 1920px;
    height: 1080px;
    position: absolute;
	left: 0px;
	top: 0px;
}

#overlay {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
	color: white;
}

#teamleft {
	position: absolute;
    left: 400px;
    top: -165px;
    width: 415px;
    height: 37px;
}

#teamright {
	position: absolute;
    right: 500px;
    top: -165px;
    width: 415px;
    height: 37px;
}

#player1 {
	position: absolute;
    left: 290px;
    top: 810px;
    width: 215px;
    height: 200px;
}

#player2 {
	position: absolute;
	left: 554px;
	top: 810px;
	width: 215px;
	height: 400px;
}

#player3 {
	position: absolute;
	right: 527px;
	top: 810px;
	width: 215px;
	height: 400px;
}

#player4 {
	position: absolute;
	right: 270px;
	top: 810px;
	width: 215px;
	height: 400px;
}

#P1Series {
	position: absolute;
	background: url('./img/teams/${this.playerData[0].slippi.character.id}_${this.playerData[0].slippi.teamId}.png') 0px 0px no-repeat;
	left: 0px;
	top: 72px;
	width: 215px;
	height: 132px;
}

#P2Series {
	position: absolute;
	background: url('./img/teams/${this.playerData[1].slippi.character.id}_${this.playerData[1].slippi.teamId}.png') 0px 0px no-repeat;
	left: 0px;
	top: 72px;
	width: 215px;
	height: 132px;
}

#P3Series {
	position: absolute;
	background: url('./img/teams/${this.playerData[2].slippi.character.id}_${this.playerData[2].slippi.teamId}.png') 0px 0px no-repeat;
	right: 0px;
	top: 72px;
	width: 215px;
	height: 132px;
}

#P4Series {
	position: absolute;
	background: url('./img/teams/${this.playerData[3].slippi.character.id}_${this.playerData[3].slippi.teamId}.png') 0px 0px no-repeat;
	right: 0px;
	top: 72px;
	width: 215px;
	height: 132px;
}

#p1buttons {
	position: absolute;
	left: 279px;
	top: 1000px;
	width: 215px;
	height: 80px;
}

#p2buttons {
	position: absolute;
	left: 541px;
	top: 1000px;
	width: 215px;
	height: 80px;
}

#p3buttons {
	position: absolute;
	right: 538px;
	top: 1000px;
	width: 215px;
	height: 80px;
}

#p4buttons {
	position: absolute;
	right: 279px;
	top: 1000px;
	width: 215px;
	height: 80px;
}

#gametext {
	position: absolute;
    text-align: center;
    top: -1px;
	left: 230px;
    width: 233px;
}

#game {
    position: absolute;
    top: -845px;
    left: 0px;
    text-align: center;
    font-size: 20px;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
}

#Abutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons2/A.png') 0px 0px no-repeat;
	width: 52px;
	height: 52px;
	top: 28px;
	left: 144px;
	transform: scale(0.69);
}

#Bbutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons2/b.png') 0px 0px no-repeat;
	width: 23px;
	height: 23px;
	top: 51px;
	left: 129px;
	transform: scale(0.85);
}

#Xbutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons2/x.png') 0px 0px no-repeat;
	width: 24px;
	height: 38px;
	top: 31px;
	left: 184px;
	transform: scale(0.85);
}

#Ybutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons2/y.png') 0px 0px no-repeat;
	width: 38px;
	height: 24px;
	top: 16px;
	left: 145px;
	transform: scale(0.85);
}

#Zbutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons2/z2.png') 0px 0px no-repeat;
	width: 23px;
	height: 23px;
	top: 13px;
	left: 178px;
	transform: scale(0.65);
}

#Lbutton {
	background: url('./img/slippi-hud/buttons2/digital.png') 0px 0px no-repeat;
	width: 18px;
	height: 12px;
	position: absolute;
	transform: scaleX(-1) scaleY(0.5);
	top: 3px;
	left: 13px;
}

#Rbutton {
	background: url('./img/slippi-hud/buttons2/digital.png') 0px 0px no-repeat;
	width: 18px;
	height: 12px;
	position: absolute;
	top: 3px;
	left: 182px;
	transform: scaleY(0.5);
}

#DLbutton {
	background: url('./img/slippi-hud/buttons2/d.png') 0px 0px no-repeat;
	position: absolute;
	width: 6px;
	height: 8px;
	top: 31px;
	left: 123px;
	transform: rotate(90deg);
}

#DRbutton {
	background: url('./img/slippi-hud/buttons2/d.png') 0px 0px no-repeat;
	width: 6px;
	height: 8px;
	top: 31px;
	position: absolute;
	left: 137px;
	transform: rotate(90deg);
}

#DUbutton {
	background: url('./img/slippi-hud/buttons2/d.png') 0px 0px no-repeat;
	width: 6px;
	height: 8px;
	top: 24px;
	position: absolute;
	left: 130px;
}

#DDbutton {
	background: url('./img/slippi-hud/buttons2/d.png') 0px 0px no-repeat;
	width: 6px;
	height: 8px;
	top: 0px;
	position: absolute;
	left: 130px;
}

#RTrigger {
	background: url('./img/slippi-hud/buttons2/analog.png') 0px 0px no-repeat;
	width: 73px;
	height: 12px;
	top: 3px;
	left: 109px;
	position: absolute;
	transform: scaleY(0.5);
}

#LTrigger {
	background: url('./img/slippi-hud/buttons2/analog.png') 0px 0px no-repeat;
	width: 73px;
	height: 12px;
	transform: scaleX(-1) scaleY(0.5);
	top: 3px;
	left: 31px;
	position: absolute;
}

.sticks {
	background: url('./img/slippi-hud/buttons2/stick_module2.png') 0px 0px no-repeat;
}

.astick {
	background: url('./img/slippi-hud/buttons2/AStick.png') 0px 0px no-repeat;
	height: 31px;
	width: 31px;
}

.cstick {
	background: url('./img/slippi-hud/buttons2/CStick.png') 0px 0px no-repeat;
	height: 17px;
	width: 17px;
}

.button {
	height: 80px;
	width: 215px;
}

.true {
	opacity: 1;
}

.false {
	opacity: 0;
}

#stocks {
    position: absolute;
    top: 90px;
    left: 0px;
    height: 50px;
}

#stock {
	position: absolute;
	top: -85px;
	width: 50px;
	height: 50px;
}

#dmg{
  font-size: 69px;
  font-family: 'Jost', sans-serif;
  font-weight: 900;
  font-style: italic;
  line-height: 1.2;
  text-align: center;
  text-shadow: 4px 4px 0px #000, 1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000;
  -webkit-transform: scale(1, 1.2);
	position: absolute;
    top: 115px;
    left: 0px;
  z-index: 16;
  opacity: 1
} 

#dmg span{
	display: inline-block;
}

.name1 {
	font-size: 20px;
	font-family: 'Jost', sans-serif;
	font-weight: 500;
	color: rgb(255, 255, 255);
    position: absolute;
	line-height: 1.2;
	text-align: center;
	position: absolute;
	text-shadow: 2px 2px 0px black;
    left: -64px;
    top: 185px;
    width: 415px;
    height: 37px;
}

.name2 {
	font-size: 20px;
	font-family: 'Jost', sans-serif;
	font-weight: 500;
	color: rgb(255, 255, 255);
    position: absolute;
	line-height: 1.2;
	text-align: center;
	position: absolute;
	text-shadow: 2px 2px 0px black;
    left: 167px;
    top: 185px;
    width: 415px;
    height: 37px;
}

#score-true{
	font-size: 60px;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	text-align: center;
	text-shadow: 4px 4px 0px #000, 1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000;
	position: absolute;
    left: 772px;
    top: 7px;
}

#score-false {
	font-size: 60px;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	text-align: center;
	text-shadow: 4px 4px 0px #000, 1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000;
	position: absolute;
    right: 772px;
    top: 7px;
}

#score1 {
	font-size: 60px;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	text-align: center;
	text-shadow: 4px 4px 0px #000, 1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000;
	position: absolute;
    left: 772px;
    top: 7px;
}

#score2 {
	font-size: 60px;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	text-align: center;
	text-shadow: 4px 4px 0px #000, 1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000;
	position: absolute;
    right: 772px;
    top: 7px;
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
	width: 300px;
	height: 120px;
}

.port-2 {
	width: 300px;
	height: 120px;
}

.port-3 {
	width: 300px;
	height: 120px;
}

.port-4 {
	width: 300px;
	height: 120px;
}

#panels {	
    top: 890px;
	left: 615px;
    height: 100%;
    width: 100%;
    position: absolute;
}

#timer{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: crop;
  font-size: 73px;
  width: 225px;
  height: auto;
  font-family: "Futura Hv BT";
  color: rgb(255, 255, 255, 255);
  text-align: left;
  -webkit-text-stroke: 0px black;
  text-shadow: 4px 4px 0px #000, 1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000;
  -webkit-transform: scale(0.9, 1.0);  
  position: absolute;
  left: 195px;
  top: 73px;
}

#timerms{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: crop;
  font-size: 60px;
  width: 75px;
  height: auto;
  font-family: "Futura Hv BT";
  color: rgb(255, 255, 255, 255);
  text-align: left;
  -webkit-text-stroke: 0px black;
  text-shadow: 4px 4px 0px rgb(6, 0, 0);
  -webkit-transform: scale(0.9, 1.0);  
  position: absolute;
  left: 405px;
  top: 84px;
}

#round {
	position: absolute;
    top: -877px;
    left: 170px;
    font-size: 23px;
    width: 350px;
    text-align: center;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
}

#best {
	position: absolute;
    top: -845px;
    left: 0px;
    font-size: 20px;
    width: 350px;
    text-align: center;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
}

#logo {
	position: absolute;
	top: -20px;
	right: -20px;
	background: url(./img/slippi-hud/hud2/slippi_hud2.png) no-repeat;
	width: 305px;
	height: 142px;
	transform: scale(0.70);
}

#ssblogo {
	position: absolute;
	top: -100px;
	left: -250px;
	background: url(./img/slippi-hud/hud2/tournament_logo.png) no-repeat;
	width: 808px;
	height: 314px;
	transform: scale(0.28);
}

.P1pronouns {
	left: 32px;
	top: 0px;
    width: 58px;
    Height: 50px;
    position: absolute;
	font-size: 18px;
    font-family: "Metropolis";
	text-align: center;
	line-height: 1;
	transform: ScaleX(.9);
}

.P2pronouns {
	top: 0px;
	right: 32px;
    width: 58px;
    Height: 50px;
    position: absolute;
	font-size: 18px;
    font-family: "Metropolis";
	text-align: center;
	line-height: 1;
	transform: ScaleX(.9);
}

.P3pronouns {
	top: 0px;
	left: 32px;
    width: 58px;
    Height: 50px;
    position: absolute;
	font-size: 18px;
    font-family: "Metropolis";
	text-align: center;
	line-height: 1;
	transform: ScaleX(.9);
}

.P4pronouns {
	top: 0px;
	right: 32px;
    width: 58px;
    Height: 50px;
    position: absolute;
	font-size: 18px;
    font-family: "Metropolis";
	text-align: center;
	line-height: 1;
	transform: ScaleX(.9);
}

.P1sponsor {
	background: url(./img/sponsors/${this.playerData[0].player.sponsor}.png) no-repeat;
	width: 64px;
	height: 64px;
	position: absolute;
	top: -16px;
	left: -10px;
	transform: scale(0.6);
}

.P2sponsor {
	background: url(./img/sponsors/${this.playerData[1].player.sponsor}.png) no-repeat;
	width: 64px;
	height: 64px;
	position: absolute;
	top: -16px;
	right: -10px;
	transform: scale(0.6);
}

.P3sponsor {
	background: url(./img/sponsors/${this.playerData[2].player.sponsor}.png) no-repeat;
	width: 64px;
	height: 64px;
	position: absolute;
	top: -16px;
	left: -10px;
	transform: scale(0.6);
}

.P4sponsor {
	background: url(./img/sponsors/${this.playerData[3].player.sponsor}.png) no-repeat;
	width: 64px;
	height: 64px;
	position: absolute;
	top: -16px;
	right: -10px;
	transform: scale(0.6);
}

.tag {
	position: relative;
	top: 6px;
}

.p1damage-true {
	animation: 1.2s ease-out 0s 1 onP1stock-${this.playerData[0].slippi.stockCountNow};
	color: rgb(80,0,0);
}

.p1damage-false {
	animation: 1.2s ease-out 0s 1 onP1stock-${this.playerData[0].slippi.stockCountNow};
	color: rgb(${Math.floor(((this.playerData[0].slippi.damage/300)*-175)+255)},${Math.floor(((this.playerData[0].slippi.damage/300)*-255)+255)},${Math.floor(((this.playerData[0].slippi.damage/300)*-255)+255)});
}

.p2damage-true {
	animation: 1.2s ease-out 0s 1 onP2stock-${this.playerData[1].slippi.stockCountNow};
	color: rgb(80,0,0);
}

.p2damage-false {
	animation: 1.2s ease-out 0s 1 onP2stock-${this.playerData[1].slippi.stockCountNow};
	color: rgb(${Math.floor(((this.playerData[1].slippi.damage/300)*-175)+255)},${Math.floor(((this.playerData[1].slippi.damage/300)*-255)+255)},${Math.floor(((this.playerData[1].slippi.damage/300)*-255)+255)});
}

.p3damage-true {
	animation: 1.2s ease-out 0s 1 onP3stock-${this.playerData[2].slippi.stockCountNow};
	color: rgb(80,0,0);
}

.p3damage-false {
	animation: 1.2s ease-out 0s 1 onP3stock-${this.playerData[2].slippi.stockCountNow};
	color: rgb(${Math.floor(((this.playerData[2].slippi.damage/300)*-175)+255)},${Math.floor(((this.playerData[2].slippi.damage/300)*-255)+255)},${Math.floor(((this.playerData[2].slippi.damage/300)*-255)+255)});
}

.p4damage-true {
	animation: 1.2s ease-out 0s 1 onP4stock-${this.playerData[3].slippi.stockCountNow};
	color: rgb(80,0,0);
}

.p4damage-false {
	animation: 1.2s ease-out 0s 1 onP4stock-${this.playerData[3].slippi.stockCountNow};
	color: rgb(${Math.floor(((this.playerData[3].slippi.damage/300)*-175)+255)},${Math.floor(((this.playerData[3].slippi.damage/300)*-255)+255)},${Math.floor(((this.playerData[3].slippi.damage/300)*-255)+255)});
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
	filter: hue-rotate(300deg) brightness(105%);
}

.ov_wowzers {
	filter: invert(1) hue-rotate(260deg) brightness(105%);
}

.ov_ani {
	animation: 60s linear onOv infinite;
}

#sgl-playermoduleright {
	background: url(./img/slippi-hud/hud2/rplayer_module.png) 0px 0px no-repeat;
    width: 685px;
    height: 220px;
    position: absolute;
    left: 1230px;
    bottom: 3px;
}

#sgl-playermoduleleft {
	background: url(./img/slippi-hud/hud2/lplayer_module.png) 0px 0px no-repeat;
    width: 685px;
    height: 220px;
    position: absolute;
    right: 1230px;
    bottom: 3px;
}

#sgl-overlay {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
	color: white;
}

#sgl-player1 {
	position: absolute;
    left: 300px;
    top: 838px;
    width: 424px;
    height: 108px;
}

#sgl-player2 {
	position: absolute;
	right: 300px;
	top: 838px;
	width: 424px;
	height: 108px;
}

#sgl-P1Series {
	position: absolute;
	background: url('./img/series/${this.playerData[0].slippi.character.id}_${this.playerData[0].slippi.port}.png') 0px 0px no-repeat;
	right: 80px;
	top: 30px;
	width: 197px;
	height: 132px;
}

#sgl-P2Series {
	position: absolute;
	background: url('./img/series/${this.playerData[1].slippi.character.id}_${this.playerData[1].slippi.port}.png') 0px 0px no-repeat;
	left: 80px;
	top: 30px;
	width: 197px;
	height: 132px;
}

#sgl-p1buttons {
	position: absolute;
	left: 225px;
	top: 867px;
	width: 153px;
	height: 182px;
}

#sgl-p2buttons {
	position: absolute;
	right: 255px;
	top: 867px;
	width: 153px;
	height: 182px;
}

#sgl-gametext {
	position: absolute;
    text-align: center;
    top: 10px;
    width: 233px;
}

#sgl-game {
    position: absolute;
    top: 148px;
    left: 227px;
    text-align: center;
    font-size: 20px;
	text-transform: uppercase;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
}

#sgl-Abutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons2/A.png') 0px 0px no-repeat;
	width: 52px;
	height: 52px;
	top: 70px;
	left: 94px;
	transform: scale(0.90)
}

#sgl-Bbutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons2/b.png') 0px 0px no-repeat;
	width: 23px;
	height: 23px;
	top: 119px;
	left: 79px;
	transform: scale(0.97)
}

#sgl-Xbutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons2/x.png') 0px 0px no-repeat;
	width: 24px;
	height: 38px;
	top: 69px;
	left: 151px;
	transform: scale(0.98)
}

#sgl-Ybutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons2/y.png') 0px 0px no-repeat;
	width: 38px;
	height: 24px;
	top: 43px;
	left: 90px;
	transform: scale(0.98)
}

#sgl-Zbutton {
	position: absolute;
	background: url('./img/slippi-hud/buttons2/z.png') 0px 0px no-repeat;
	width: 44px;
	height: 33px;
	top: 32px;
	left: 130px;
	transform: scale(0.98)
}

#sgl-Lbutton {
	background: url('./img/slippi-hud/buttons2/digital.png') 0px 0px no-repeat;
	width: 18px;
	height: 12px;
	position: absolute;
	transform: scaleX(-1);
	top: 18px;
	left: -3px;
}

#sgl-Rbutton {
	background: url('./img/slippi-hud/buttons2/digital.png') 0px 0px no-repeat;
	width: 18px;
	height: 12px;
	position: absolute;
	top: 18px;
	left: 167px;
}

#sgl-DLbutton {
	background: url('./img/slippi-hud/buttons2/d.png') 0px 0px no-repeat;
	position: absolute;
	width: 9px;
	height: 11px;
	top: 127px;
	left: 137px;
	transform: rotate(90deg);
}

#sgl-DRbutton {
	background: url('./img/slippi-hud/buttons2/d.png') 0px 0px no-repeat;
	width: 9px;
	height: 11px;
	top: 127px;
	position: absolute;
	left: 156px;
	transform: rotate(90deg);
}

#sgl-DUbutton {
	background: url('./img/slippi-hud/buttons2/d.png') 0px 0px no-repeat;
	width: 9px;
	height: 11px;
	top: 117px;
	position: absolute;
	left: 147px;
}

#sgl-DDbutton {
	background: url('./img/slippi-hud/buttons2/d.png') 0px 0px no-repeat;
	width: 9px;
	height: 11px;
	top: 137px;
	position: absolute;
	left: 147px;
}

#sgl-RTrigger {
	background: url('./img/slippi-hud/buttons2/analog.png') 0px 0px no-repeat;
	width: 73px;
	height: 12px;
	top: 18px;
	left: 93px;
	position: absolute;
}

#sgl-LTrigger {
	background: url('./img/slippi-hud/buttons2/analog.png') 0px 0px no-repeat;
	width: 73px;
	height: 12px;
	transform: scaleX(-1);
	top: 18px;
	right: 64px;
	position: absolute;
}

.sgl-sticks {
	background: url('./img/slippi-hud/buttons2/stick_module.png') 0px 0px no-repeat;
}

#sgl-stocks {
    position: absolute;
    top: 48px;
    left: 125px;
    height: 50px;
	paddingRight: 1000px;
}

#sgl-stock {
	position: absolute;
	top: -85px;
	width: 50px;
	height: 50px;
}

#sgl-dmg{
  font-size: 84px;
  font-family: 'Jost', sans-serif;
  font-weight: 900;
  font-style: italic;
  line-height: 1.2;
  text-align: center;
  text-shadow: 4px 4px 0px black;
  -webkit-transform: scale(1, 1.2);
	position: absolute;
    bottom: -75px;
    right: 100px;
  z-index: 16;
} 

#sgl-dmg span{
	display: inline-block;
}

#sgl-name1 {
	font-size: 25px;
	font-family: 'Jost', sans-serif;
	font-weight: 500;
	color: rgb(255, 255, 255);
    position: absolute;
	line-height: 1.2;
	text-align: center;
	position: absolute;
	text-shadow: 2px 2px 0px black;
    left: 14px;
    top: 185px;
    width: 290px;
    height: 32px;
	transform: rotate(-0.7deg);
}

#sgl-name2 {
	font-size: 25px;
	font-family: 'Jost', sans-serif;
	font-weight: 500;
	color: rgb(255, 255, 255);
    position: absolute;
	line-height: 1.2;
	text-align: center;
	position: absolute;
	text-shadow: 2px 2px 0px black;
    left: 125px;
    top: 185px;
    width: 290px;
    height: 32px;
	transform: rotate(0.7deg);
}

#sgl-score1 {
	font-size: 60px;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	text-align: center;
	text-shadow: 4px 4px 0px #sgl-000, 1px 0 #sgl-000, -1px 0 #sgl-000, 0 1px #sgl-000, 0 -1px #sgl-000;
	position: absolute;
	z-index: 30;
    left: 461px;
    top: 148px;
	transform: rotate(-1deg);
}

#sgl-score2 {
	font-size: 60px;
	font-family: "Roboto";
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	text-align: center;
	text-shadow: 4px 4px 0px #sgl-000, 1px 0 #sgl-000, -1px 0 #sgl-000, 0 1px #sgl-000, 0 -1px #sgl-000;
	position: absolute;
	z-index: 30;
    right: 464px;
    top: 148px;
	transform: rotate(1deg);
}
#mics {
	position: absolute;
	top: 750px;
	left: 5px;
}
#mic {
    background: url(./img/extras/mic.png) no-repeat;
	height:48px;
	width: 48px;
	transform: scale(.75);
	
}

#coms {
	line-height: 48px;
	font-size: 20px;
	font-family: 'Jost', sans-serif;
	color: rgb(255, 255, 255);
	text-transform: uppercase;
	text-shadow: 2px 2px 2px #000000;
	position: absolute;
	top: 750px;
	left: 60px;
}

.port-1 {
	width: 300px;
	height: 120px;
}

.port-2 {
	width: 300px;
	height: 120px;
}

.port-3 {
	width: 300px;
	height: 120px;
}

.port-4 {
	width: 300px;
	height: 120px;
}
#sgl-P1Pronouns {    
	left: 264px;
    top: 165px;
    width: 58px;
    Height: 50px;
    position: absolute;
	font-size: 20px;
    font-family: "Metropolis";
	text-align: center;
	line-height: 1;
	transform: ScaleX(.9);
}
#sgl-P2Pronouns {    
	left: 353px;
    top: 165px;
    width: 58px;
    Height: 50px;
    position: absolute;
	font-size: 20px;
    font-family: "Metropolis";
	text-align: center;
	line-height: 1;
	transform: ScaleX(.9);
}

#sgl-panels {	
    top: 890px;
	left: 615px;
    background: url(./img/slippi-hud/hud2/timer_module.png) no-repeat;
    height: 100%;
    width: 100%;
    position: absolute;
}

#sgl-timer{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: crop;
  font-size: 73px;
  width: 225px;
  height: auto;
  font-family: "Futura Hv BT";
  color: rgb(255, 255, 255, 255);
  text-align: left;
  -webkit-text-stroke: 0px black;
  text-shadow: 4px 4px 0px rgb(6, 0, 0);
  -webkit-transform: scale(0.9, 1.0);  
  position: absolute;
  left: 195px;
  top: 73px;
}

#sgl-timerms{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: crop;
  font-size: 60px;
  width: 75px;
  height: auto;
  font-family: "Futura Hv BT";
  color: rgb(255, 255, 255, 255);
  text-align: left;
  -webkit-text-stroke: 0px black;
  text-shadow: 4px 4px 0px rgb(6, 0, 0);
  -webkit-transform: scale(0.9, 1.0);  
  position: absolute;
  left: 405px;
  top: 84px;
}

#sgl-round {
	position: absolute;
    top: -869px;
    left: -652px;
    font-size: 20px;
    width: 350px;
    text-align: center;
	text-transform: uppercase;
	transform: rotate(-1deg);
	font-family: "Roboto";
	color: rgb(255, 255, 255);
}

#sgl-best {
	position: absolute;
    top: -836px;
    left: -658px;
    font-size: 20px;
    width: 350px;
    text-align: center;
	text-transform: uppercase;
	transform: rotate(-1deg);
	font-family: "Roboto";
	color: rgb(169, 128, 255);
}

#sgl-rnd_module {
	position: absolute;
	bottom: 895px;
	left: -620px;
	background: url(./img/slippi-hud/hud2/round_module.png) no-repeat;
	height: 100%;
    width: 100%;
}

#sgl-logo {
	position: absolute;
	top: 0px;
	right: 0px;
	background: url(./img/slippi-hud/hud2/slippi_hud2.png) no-repeat;
	width: 305px;
	height: 142px;
}

#sgl-ssblogo {
	position: absolute;
	top: -105px;
	right: 558px;
	background: url(./img/slippi-hud/hud2/tournament_logo.png) no-repeat;
	width: 808px;
	height: 314px;
	transform: scale(0.33);
}

#sgl-cameraport {
	position: absolute;
	bottom: 34px;
	width: 130px;
	height: 31px;
}

.sgl-Lsponsor {
	background: url(./img/sponsors/${this.playerData[0].player.sponsor}.png) no-repeat;
	width: 64px;
	height: 60px;
	position: absolute;
	top: 154px;
	left: 212px;
}

.sgl-Rsponsor {
	background: url(./img/sponsors/${this.playerData[1].player.sponsor}.png) no-repeat;
	width: 64px;
	height: 60px;
	position: absolute;
	top: 154px;
	right: 212px;
}

#sgl-accents {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
    background: url(./img/slippi-hud/hud2/accents.png) no-repeat;
}


</style>
${this.generalData.slippi.isTeams
? html`
	<div id="overlay">
	
		<div id="teamsmodule" class="ov_blue"></div>
		<div id='logo' class='ov_blue'></div>
		<div id='ssblogo' class='ov_blue'></div>
		<div id="coms">
		<div id="com">${this.generalData.tournament.commentators[0].name}</div>
		<div id="com">${this.generalData.tournament.commentators[1].name}</div>
		</div>
		<div id="mics">
		<div id="mic"></div>
		<div id="mic"></div>
		</div>
		<div id='teamleft'>			
			<div id="name1" class="name1"><span><div class="P1sponsor"></div><div class="P1pronouns">${this.playerData[0].player.pronouns}</div><div class="tag">${this.playerData[0].player.name} & ${this.playerData[1].player.name}</div><div class="P2pronouns">${this.playerData[1].player.pronouns}</div><div  class="P2sponsor"></div></span></div>
		</div>
		
		<div id="player1" class="port-${this.playerData[0].slippi.port}">
				<div id="P1Series"></div>
				<div id="stocks">
					<div id="stock" class="stock-1 ${this.playerData[0].slippi.stockCountNow>0}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==0};"></div>
					<div id="stock" class="stock-2 ${this.playerData[0].slippi.stockCountNow>1}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==1};"></div>
					<div id="stock" class="stock-3 ${this.playerData[0].slippi.stockCountNow>2}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==2};"></div>
					<div id="stock" class="stock-4 ${this.playerData[0].slippi.stockCountNow>3}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==3};"></div>
				</div>
				<div id="dmg" class="p1damage-${(this.playerData[0].slippi.damage>300)}"><span id="p1dmg-100" class="${this.playerData[0].slippi.damage>=100 && this.playerData[0].slippi.stockCountNow>0}">${Math.floor(this.playerData[0].slippi.damage/100)}</span><span id="p1dmg-10"  class="${this.playerData[0].slippi.damage>=10 && this.playerData[0].slippi.stockCountNow>0}">${Math.floor(this.playerData[0].slippi.damage/10)-(Math.floor(this.playerData[0].slippi.damage/100)*10)}</span><span id="p1dmg" class="${this.playerData[0].slippi.stockCountNow>0}">${this.playerData[0].slippi.damage-(Math.floor(this.playerData[0].slippi.damage/10)*10)}</span><span id="percent" class="${this.playerData[0].slippi.stockCountNow>0}" style="font-size : 66%">%</span></div>
		</div>	

		<div id="player2" class="port-${this.playerData[1].slippi.port}">
				<div id="P2Series"></div>
				<div id="stocks">
					<div id="stock" class="stock-1 ${this.playerData[1].slippi.stockCountNow>0}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==0};"></div>
					<div id="stock" class="stock-2 ${this.playerData[1].slippi.stockCountNow>1}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==1};"></div>
					<div id="stock" class="stock-3 ${this.playerData[1].slippi.stockCountNow>2}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==2};"></div>
					<div id="stock" class="stock-4 ${this.playerData[1].slippi.stockCountNow>3}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==3};"></div>
				</div>
				<div id="dmg" class="p2damage-${(this.playerData[1].slippi.damage>300)}"><span id="p1dmg-100" class="${this.playerData[1].slippi.damage>=100 && this.playerData[1].slippi.stockCountNow>0}">${Math.floor(this.playerData[1].slippi.damage/100)}</span><span id="p2dmg-10"  class="${this.playerData[1].slippi.damage>=10 && this.playerData[1].slippi.stockCountNow>0}">${Math.floor(this.playerData[1].slippi.damage/10)-(Math.floor(this.playerData[1].slippi.damage/100)*10)}</span><span id="p2dmg" class="${this.playerData[1].slippi.stockCountNow>0}">${this.playerData[1].slippi.damage-(Math.floor(this.playerData[1].slippi.damage/10)*10)}</span><span id="percent" class="${this.playerData[1].slippi.stockCountNow>0}" style="font-size : 66%">%</span></div>	
		</div>	

		<div id="score-${this.playerData[2].slippi.teamId > this.playerData[0].slippi.teamId}">${this.generalData.tournament.scores[0].score}</div>


		<div id='teamright'>
			<div id="name2" class="name2"><span><div class="P3sponsor"></div><div class="P3pronouns">${this.playerData[2].player.pronouns}</div><div class="tag">${this.playerData[2].player.name} & ${this.playerData[3].player.name}</div><div class="P4pronouns">${this.playerData[3].player.pronouns}</div><div  class="P4sponsor"></div></span></div>
		</div>
		
		<div id="player3" class="port-${this.playerData[2].slippi.port}">
				<div id="P3Series"></div>
				<div id="stocks">
					<div id="stock" class="stock-1 ${this.playerData[2].slippi.stockCountNow>0}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[2].slippi.character.id}/${this.playerData[2].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[2].slippi.stockCountNow==0};"></div>
					<div id="stock" class="stock-2 ${this.playerData[2].slippi.stockCountNow>1}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[2].slippi.character.id}/${this.playerData[2].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[2].slippi.stockCountNow==1};"></div>
					<div id="stock" class="stock-3 ${this.playerData[2].slippi.stockCountNow>2}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[2].slippi.character.id}/${this.playerData[2].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[2].slippi.stockCountNow==2};"></div>
					<div id="stock" class="stock-4 ${this.playerData[2].slippi.stockCountNow>3}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[2].slippi.character.id}/${this.playerData[2].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[2].slippi.stockCountNow==3};"></div>
				</div>
				<div id="dmg" class="p3damage-${(this.playerData[2].slippi.damage>300)}"><span id="p3dmg-100" class="${this.playerData[2].slippi.damage>=100 && this.playerData[2].slippi.stockCountNow>0}">${Math.floor(this.playerData[2].slippi.damage/100)}</span><span id="p3dmg-10" class= "${this.playerData[2].slippi.damage>=10 && this.playerData[2].slippi.stockCountNow>0}">${Math.floor(this.playerData[2].slippi.damage/10)-(Math.floor(this.playerData[2].slippi.damage/100)*10)}</span><span id="p3dmg" class="${this.playerData[2].slippi.stockCountNow>0}">${this.playerData[2].slippi.damage-(Math.floor(this.playerData[2].slippi.damage/10)*10)}</span><span id="percent" class="${this.playerData[2].slippi.stockCountNow>0}" style="font-size : 66%">%</span></div>
		</div>
					
		<div id="player4" class="port-${this.playerData[3].slippi.port}">
				<div id="P4Series"></div>
				<div id="stocks">
					<div id="stock" class="stock-1 ${this.playerData[3].slippi.stockCountNow>0}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[3].slippi.character.id}/${this.playerData[3].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[3].slippi.stockCountNow==0};"></div>
					<div id="stock" class="stock-2 ${this.playerData[3].slippi.stockCountNow>1}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[3].slippi.character.id}/${this.playerData[3].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[3].slippi.stockCountNow==1};"></div>
					<div id="stock" class="stock-3 ${this.playerData[3].slippi.stockCountNow>2}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[3].slippi.character.id}/${this.playerData[3].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[3].slippi.stockCountNow==2};"></div>
					<div id="stock" class="stock-4 ${this.playerData[3].slippi.stockCountNow>3}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[3].slippi.character.id}/${this.playerData[3].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[3].slippi.stockCountNow==3};"></div>
				</div>
				<div id="dmg" class="p4damage-${(this.playerData[3].slippi.damage>300)} "><span id="p2dmg-100" class="${this.playerData[3].slippi.damage>=100 && this.playerData[3].slippi.stockCountNow>0}">${Math.floor(this.playerData[3].slippi.damage/100)}</span><span id="p2dmg-10" class= "${this.playerData[3].slippi.damage>=10 && this.playerData[3].slippi.stockCountNow>0}">${Math.floor(this.playerData[3].slippi.damage/10)-(Math.floor(this.playerData[3].slippi.damage/100)*10)}</span><span id="p4dmg" class="${this.playerData[3].slippi.stockCountNow>0}">${this.playerData[3].slippi.damage-(Math.floor(this.playerData[3].slippi.damage/10)*10)}</span><span id="percent" class="${this.playerData[3].slippi.stockCountNow>0}" style="font-size : 66%">%</span></div>				
		</div>
			
		<div id="score-${this.playerData[2].slippi.teamId < this.playerData[0].slippi.teamId}">${this.generalData.tournament.scores[1].score}</div>
		
		<div id="panels" class="panel-container">
			<div id="game"><div id="gametext">GAME ${this.generalData.tournament.scores[0].score+this.generalData.tournament.scores[1].score+1} - Best Of ${this.generalData.tournament.bestOf}</div></div>
			<div id="round">${this.generalData.tournament.round}</div>
			<div id="timer" span id="timer1">${this.generalData.slippi.timer.formatted}</span></div><div id="timerms" span id="timerms">${this.generalData.slippi.timer.milliseconds}</span></div>
		</div>
			
</div>

<div id="controls" class="${this.generalData.tournament.inputDisplay}">
	<div id="p1buttons" class="sticks">
		<div id="p1stick" class="astick" style="position: absolute; top: ${Math.round(30-(this.playerData[0].slippi.controller.mainStickY*17))}px; left: ${Math.round(22+(this.playerData[0].slippi.controller.mainStickX*17))}px"></div>
		<div id="p1cstick" class="cstick"  style="position: absolute; top: ${41-(this.playerData[0].slippi.controller.cStickY*18)}px; left: ${82+(this.playerData[0].slippi.controller.cStickX*18)}px"></div>
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
		<div id="LTrigger" style="width: ${this.playerData[0].slippi.controller.leftTrigger*73}px;"></div>
		<div id="RTrigger" style="width: ${this.playerData[0].slippi.controller.rightTrigger*73}px;"></div>
		<div id="outline" class="button"><img src="./img/slippi-hud/buttons2/input_module2.png" width="215" height="80"></img></div>
	</div>
	
	<div id="p2buttons" class="sticks">
		<div id="p2stick" class="astick" style="position: absolute; top: ${Math.round(30-(this.playerData[1].slippi.controller.mainStickY*17))}px; left: ${Math.round(22+(this.playerData[1].slippi.controller.mainStickX*17))}px"></div>
		<div id="p2cstick" class="cstick"  style="position: absolute; top: ${41-(this.playerData[1].slippi.controller.cStickY*18)}px; left: ${82+(this.playerData[1].slippi.controller.cStickX*18)}px"></div>
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
		<div id="LTrigger" style="width: ${this.playerData[1].slippi.controller.leftTrigger*73}px;"></div>
		<div id="RTrigger" style="width: ${this.playerData[1].slippi.controller.rightTrigger*73}px;"></div>
		<div id="outline" class="button"><img src="./img/slippi-hud/buttons2/input_module2.png" width="215" height="80"></img></div>
	</div>
	
	<div id="p3buttons" class="sticks">
		<div id="p3stick" class="astick" style="position: absolute; top: ${Math.round(30-(this.playerData[2].slippi.controller.mainStickY*17))}px; left: ${Math.round(22+(this.playerData[2].slippi.controller.mainStickX*17))}px"></div>
		<div id="p3cstick" class="cstick"  style="position: absolute; top: ${41-(this.playerData[2].slippi.controller.cStickY*18)}px; left: ${82+(this.playerData[2].slippi.controller.cStickX*18)}px"></div>
		<div id="Abutton" class="${this.playerData[2].slippi.controller.pressedButtons.A}"></div>
		<div id="Bbutton" class="${this.playerData[2].slippi.controller.pressedButtons.B}"></div>
		<div id="Xbutton" class="${this.playerData[2].slippi.controller.pressedButtons.X}"></div>
		<div id="Ybutton" class="${this.playerData[2].slippi.controller.pressedButtons.Y}"></div>
		<div id="Zbutton" class="${this.playerData[2].slippi.controller.pressedButtons.Z}"></div>
		<div id="Rbutton" class="${this.playerData[2].slippi.controller.pressedButtons.R}"></div>
		<div id="Lbutton" class="${this.playerData[2].slippi.controller.pressedButtons.L}"></div>
		<div id="Startbutton" class="${this.playerData[2].slippi.controller.pressedButtons.START}"></div>
		<div id="DUbutton" class="${this.playerData[2].slippi.controller.pressedButtons.D_UP}"></div>
		<div id="DDbutton" class="${this.playerData[2].slippi.controller.pressedButtons.D_DOWN}"></div>
		<div id="DRbutton" class="${this.playerData[2].slippi.controller.pressedButtons.D_RIGHT}"></div>
		<div id="DLbutton" class="${this.playerData[2].slippi.controller.pressedButtons.D_LEFT}"></div>
		<div id="LTrigger" style="width: ${this.playerData[2].slippi.controller.leftTrigger*73}px;"></div>
		<div id="RTrigger" style="width: ${this.playerData[2].slippi.controller.rightTrigger*73}px;"></div>
		<div id="outline" class="button"><img src="./img/slippi-hud/buttons2/input_module2.png" width="215" height="80"></img></div>
	</div>
	
	<div id="p4buttons" class="sticks">
		<div id="p4stick" class="astick" style="position: absolute; top: ${Math.round(30-(this.playerData[3].slippi.controller.mainStickY*17))}px; left: ${Math.round(22+(this.playerData[3].slippi.controller.mainStickX*17))}px"></div>
		<div id="p4cstick" class="cstick"  style="position: absolute; top: ${41-(this.playerData[3].slippi.controller.cStickY*18)}px; left: ${82+(this.playerData[3].slippi.controller.cStickX*18)}px"></div>
		<div id="Abutton" class="${this.playerData[3].slippi.controller.pressedButtons.A}"></div>
		<div id="Bbutton" class="${this.playerData[3].slippi.controller.pressedButtons.B}"></div>
		<div id="Xbutton" class="${this.playerData[3].slippi.controller.pressedButtons.X}"></div>
		<div id="Ybutton" class="${this.playerData[3].slippi.controller.pressedButtons.Y}"></div>
		<div id="Zbutton" class="${this.playerData[3].slippi.controller.pressedButtons.Z}"></div>
		<div id="Rbutton" class="${this.playerData[3].slippi.controller.pressedButtons.R}"></div>
		<div id="Lbutton" class="${this.playerData[3].slippi.controller.pressedButtons.L}"></div>
		<div id="Startbutton" class="${this.playerData[3].slippi.controller.pressedButtons.START}"></div>
		<div id="DUbutton" class="${this.playerData[3].slippi.controller.pressedButtons.D_UP}"></div>
		<div id="DDbutton" class="${this.playerData[3].slippi.controller.pressedButtons.D_DOWN}"></div>
		<div id="DRbutton" class="${this.playerData[3].slippi.controller.pressedButtons.D_RIGHT}"></div>
		<div id="DLbutton" class="${this.playerData[3].slippi.controller.pressedButtons.D_LEFT}"></div>
		<div id="LTrigger" style="width: ${this.playerData[3].slippi.controller.leftTrigger*73}px;"></div>
		<div id="RTrigger" style="width: ${this.playerData[3].slippi.controller.rightTrigger*73}px;"></div>
		<div id="outline" class="button"><img src="./img/slippi-hud/buttons2/input_module2.png" width="215" height="80"></img></div>
	</div>
</div>
`

: html`
	<div id="sgl-overlay">
		<div id='sgl-logo' class="ov_blue"></div>
		
		<div id="coms">
			<div id="com">${this.generalData.tournament.commentators[0].name}</div>
			<div id="com">${this.generalData.tournament.commentators[1].name}</div>
		</div>
		<div id="mics">
			<div id="mic"></div>
			<div id="mic"></div>
		</div>
		
		<div id='sgl-ssblogo' class='ov_blue'></div>
			<div id='sgl-playermoduleleft'>
			<div id="sgl-P1Series"></div>
			<div id="sgl-P1Pronouns">${this.playerData[0].player.pronouns}</div>
			<div class="sgl-Lsponsor"></div>
			<div id='sgl-cameraport'></div>
		</div>
		<div id='sgl-playermoduleright'>
		    <div id="sgl-P2Series"></div>
			<div id="sgl-P2Pronouns">${this.playerData[1].player.pronouns}</div>
			<div  class="sgl-Rsponsor"></div>
			<div id='sgl-cameraport'></div>
		</div>
			</div>
			<div id="sgl-player1" class="port-${this.playerData[0].slippi.port}">
					<div id="sgl-stocks">
						<div id="stock" class="stock-1 ${this.playerData[0].slippi.stockCountNow>0}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==0};"></div>
						<div id="stock" class="stock-2 ${this.playerData[0].slippi.stockCountNow>1}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==1};"></div>
						<div id="stock" class="stock-3 ${this.playerData[0].slippi.stockCountNow>2}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==2};"></div>
						<div id="stock" class="stock-4 ${this.playerData[0].slippi.stockCountNow>3}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==3};"></div>
					</div>
					<div id="sgl-score1">${this.generalData.tournament.scores[this.playerData[0].slippi.id].score}</div>
					<div id="sgl-dmg" class="p1damage-${(this.playerData[0].slippi.damage>300)} ${this.playerData[0].slippi.stockCountNow>0}"><span id="p1dmg-100" class="${this.playerData[0].slippi.damage>=100}">${Math.floor(this.playerData[0].slippi.damage/100)}</span><span id="p1dmg-10"  class="${this.playerData[0].slippi.damage>=10}">${Math.floor(this.playerData[0].slippi.damage/10)-(Math.floor(this.playerData[0].slippi.damage/100)*10)}</span><span id="p1dmg">${this.playerData[0].slippi.damage-(Math.floor(this.playerData[0].slippi.damage/10)*10)}</span><span id="percent" style="font-size : 66%">%</span></div>
					<div id="sgl-name1" class="name1"><span><div class="sgl-tag">${this.playerData[0].player.name}</div></span></div>
			</div>
									
			
			<div id="sgl-player2" class="port-${this.playerData[1].slippi.port}">
					<div id="sgl-stocks">
						<div id="stock" class="stock-1 ${this.playerData[1].slippi.stockCountNow>0}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==0};"></div>
						<div id="stock" class="stock-2 ${this.playerData[1].slippi.stockCountNow>1}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==1};"></div>
						<div id="stock" class="stock-3 ${this.playerData[1].slippi.stockCountNow>2}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==2};"></div>
						<div id="stock" class="stock-4 ${this.playerData[1].slippi.stockCountNow>3}" style="background: url('./img/slippi-hud/stocks2/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==3};"></div>
					</div>
					<div id="sgl-score2">${this.generalData.tournament.scores[this.playerData[1].slippi.id].score}</div>
					<div id="sgl-dmg" class="p2damage-${(this.playerData[1].slippi.damage>300)} ${this.playerData[1].slippi.stockCountNow>0}"><span id="p2dmg-100" class="${this.playerData[1].slippi.damage>=100}">${Math.floor(this.playerData[1].slippi.damage/100)}</span><span id="p2dmg-10" class= "${this.playerData[1].slippi.damage>=10}">${Math.floor(this.playerData[1].slippi.damage/10)-(Math.floor(this.playerData[1].slippi.damage/100)*10)}</span><span id="p2dmg">${this.playerData[1].slippi.damage-(Math.floor(this.playerData[1].slippi.damage/10)*10)}</span><span id="percent" style="font-size : 66%">%</span></div>
					<div id="sgl-name2" class="name2"><span><div class="sgl-tag">${this.playerData[1].player.name}</div></span></div>
			</div>
					
				

			</div>
		<div id="sgl-panels" class="panel-container">
			<div id="sgl-game"><div id="sgl-gametext">GAME ${this.generalData.tournament.scores[0].score+this.generalData.tournament.scores[1].score+1}</div></div>
			
			<div id="sgl-rnd_module" class="ov_blue"></div>
			
			<div id="sgl-round">${this.generalData.tournament.round}</div>
		    
			<div id="sgl-best" class="ov_blue">Best Of ${this.generalData.tournament.bestOf}</div>
			
			<div id="sgl-timer" span id="timer1">${this.generalData.slippi.timer.formatted}</span></div><div id="sgl-timerms" span id="sgl-timerms">${this.generalData.slippi.timer.milliseconds}</span></div>
			</div>
			
	<div id="sgl-accents" class="ov_blue"></div>		
		

<div id="sgl-controls" class="${this.generalData.tournament.inputDisplay}">
<div id="sgl-p1buttons" class="sgl-sticks">
	<div id="sgl-p1stick" class="astick" style="position: absolute; top: ${Math.round(50-(this.playerData[0].slippi.controller.mainStickY*17))}px; left: ${Math.round(25+(this.playerData[0].slippi.controller.mainStickX*17))}px"></div>
	<div id="sgl-p1cstick" class="cstick"  style="position: absolute; top: ${116-(this.playerData[0].slippi.controller.cStickY*18)}px; left: ${32+(this.playerData[0].slippi.controller.cStickX*18)}px"></div>
	<div id="sgl-Abutton" class="${this.playerData[0].slippi.controller.pressedButtons.A}"></div>
	<div id="sgl-Bbutton" class="${this.playerData[0].slippi.controller.pressedButtons.B}"></div>
	<div id="sgl-Xbutton" class="${this.playerData[0].slippi.controller.pressedButtons.X}"></div>
	<div id="sgl-Ybutton" class="${this.playerData[0].slippi.controller.pressedButtons.Y}"></div>
	<div id="sgl-Zbutton" class="${this.playerData[0].slippi.controller.pressedButtons.Z}"></div>
	<div id="sgl-Rbutton" class="${this.playerData[0].slippi.controller.pressedButtons.R}"></div>
	<div id="sgl-Lbutton" class="${this.playerData[0].slippi.controller.pressedButtons.L}"></div>
	<div id="sgl-Startbutton" class="${this.playerData[0].slippi.controller.pressedButtons.START}"></div>
	<div id="sgl-DUbutton" class="${this.playerData[0].slippi.controller.pressedButtons.D_UP}"></div>
	<div id="sgl-DDbutton" class="${this.playerData[0].slippi.controller.pressedButtons.D_DOWN}"></div>
	<div id="sgl-DRbutton" class="${this.playerData[0].slippi.controller.pressedButtons.D_RIGHT}"></div>
	<div id="sgl-DLbutton" class="${this.playerData[0].slippi.controller.pressedButtons.D_LEFT}"></div>
	<div id="sgl-LTrigger" style="width: ${this.playerData[0].slippi.controller.leftTrigger*73}px;"></div>
	<div id="sgl-RTrigger" style="width: ${this.playerData[0].slippi.controller.rightTrigger*73}px;"></div>
	<div id="sgl-outline" class="button"><img src="./img/slippi-hud/buttons2/input_module.png" width="182" height="153"></img></div>
</div>
<div id="sgl-p2buttons" class="sgl-sticks">
	<div id="sgl-p2stick" class="astick" style="position: absolute; top: ${Math.round(50-(this.playerData[1].slippi.controller.mainStickY*17))}px; left: ${Math.round(25+(this.playerData[1].slippi.controller.mainStickX*17))}px"></div>
	<div id="sgl-p2cstick" class="cstick"  style="position: absolute; top: ${116-(this.playerData[1].slippi.controller.cStickY*18)}px; left: ${32+(this.playerData[1].slippi.controller.cStickX*18)}px"></div>
	<div id="sgl-Abutton" class="${this.playerData[1].slippi.controller.pressedButtons.A}"></div>
	<div id="sgl-Bbutton" class="${this.playerData[1].slippi.controller.pressedButtons.B}"></div>
	<div id="sgl-Xbutton" class="${this.playerData[1].slippi.controller.pressedButtons.X}"></div>
	<div id="sgl-Ybutton" class="${this.playerData[1].slippi.controller.pressedButtons.Y}"></div>
	<div id="sgl-Zbutton" class="${this.playerData[1].slippi.controller.pressedButtons.Z}"></div>
	<div id="sgl-Rbutton" class="${this.playerData[1].slippi.controller.pressedButtons.R}"></div>
	<div id="sgl-Lbutton" class="${this.playerData[1].slippi.controller.pressedButtons.L}"></div>
	<div id="sgl-Startbutton" class="${this.playerData[1].slippi.controller.pressedButtons.START}"></div>
	<div id="sgl-DUbutton" class="${this.playerData[1].slippi.controller.pressedButtons.D_UP}"></div>
	<div id="sgl-DDbutton" class="${this.playerData[1].slippi.controller.pressedButtons.D_DOWN}"></div>
	<div id="sgl-DRbutton" class="${this.playerData[1].slippi.controller.pressedButtons.D_RIGHT}"></div>
	<div id="sgl-DLbutton" class="${this.playerData[1].slippi.controller.pressedButtons.D_LEFT}"></div>
	<div id="sgl-LTrigger" style="width: ${this.playerData[1].slippi.controller.leftTrigger*73}px;"></div>
	<div id="sgl-RTrigger" style="width: ${this.playerData[1].slippi.controller.rightTrigger*73}px;"></div>
	<div id="sgl-outline" class="button"><img src="./img/slippi-hud/buttons2/input_module.png" width="182" height="153"></img></div>
</div>
</div>
</div>

`

	}
`;

}

export const style = function () {

return css`

:host {
}


`;
}

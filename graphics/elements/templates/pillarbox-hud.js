import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<style>

        *{
        	margin: 0;
        }
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

#p1dmg {
	animation: 160ms linear 0s 1 onP1damage-${this.playerData[0].slippi.damage};
}

#p1dmg-10 {
	animation: 160ms linear 0s 1 onP1damage-10-${this.playerData[0].slippi.damage};
}

#p2dmg {
	animation: 160ms linear 0s 1 onP2damage-${this.playerData[1].slippi.damage};
}

#p2dmg-10 {
	animation: 160ms linear 0s 1 onP2damage-10-${this.playerData[1].slippi.damage};
}

#p3dmg {
	animation: 160ms linear 0s 1 onP3damage-${this.playerData[2].slippi.damage};
}

#p3dmg-10 {
	animation: 160ms linear 0s 1 onP3damage-10-${this.playerData[2].slippi.damage};
}

#p4dmg {
	animation: 160ms linear 0s 1 onP4damage-${this.playerData[3].slippi.damage};
}

#p4dmg-10 {
	animation: 160ms linear 0s 1 onP4damage-10-${this.playerData[3].slippi.damage};
}

#teamsmodule {
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
    left: 370px;
    top: 760px;
    width: 215px;
    height: 200px;
}

#player2 {
	position: absolute;
	left: 585px;
	top: 760px;
	width: 215px;
	height: 400px;
}

#player3 {
	position: absolute;
	right: 575px;
	top: 760px;
	width: 215px;
	height: 400px;
}

#player4 {
	position: absolute;
	right: 360px;
	top: 760px;
	width: 215px;
	height: 400px;
}

#P1Series {
	position: absolute;
	background: url('./img/characters/${this.playerData[0].slippi.character.id}/series.png') 0px 0px no-repeat;
	left: 0px;
	top: 72px;
	width: 215px;
	height: 132px;
}

#P2Series {
	position: absolute;
	background: url('./img/characters/${this.playerData[1].slippi.character.id}/series.png') 0px 0px no-repeat;
	left: 0px;
	top: 72px;
	width: 215px;
	height: 132px;
}

#P3Series {
	position: absolute;
	background: url('./img/characters/${this.playerData[2].slippi.character.id}/series.png') 0px 0px no-repeat;
	right: 0px;
	top: 72px;
	width: 215px;
	height: 132px;
}

#P4Series {
	position: absolute;
	background: url('./img/characters/${this.playerData[3].slippi.character.id}/series.png') 0px 0px no-repeat;
	right: 0px;
	top: 72px;
	width: 215px;
	height: 132px;
}

#p1buttons {
	position: absolute;
	left: 370px;
	top: 950px;
	width: 215px;
	height: 80px;
}

#p2buttons {
	position: absolute;
	left: 585px;
	top: 950px;
	width: 215px;
	height: 80px;
}

#p3buttons {
	position: absolute;
	right: 575px;
	top: 950px;
	width: 215px;
	height: 80px;
}

#p4buttons {
	position: absolute;
	right: 360px;
	top: 950px;
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
	background: url('./img/controllers/new/A.png') 0px 0px no-repeat;
	width: 52px;
	height: 52px;
	top: 28px;
	left: 144px;
	transform: scale(0.69);
}

#Bbutton {
	position: absolute;
	background: url('./img/controllers/new/b.png') 0px 0px no-repeat;
	width: 23px;
	height: 23px;
	top: 51px;
	left: 129px;
	transform: scale(0.85);
}

#Xbutton {
	position: absolute;
	background: url('./img/controllers/new/x.png') 0px 0px no-repeat;
	width: 24px;
	height: 38px;
	top: 31px;
	left: 184px;
	transform: scale(0.85);
}

#Ybutton {
	position: absolute;
	background: url('./img/controllers/new/y.png') 0px 0px no-repeat;
	width: 38px;
	height: 24px;
	top: 16px;
	left: 145px;
	transform: scale(0.85);
}

#Zbutton {
	position: absolute;
	background: url('./img/controllers/new/z2.png') 0px 0px no-repeat;
	width: 23px;
	height: 23px;
	top: 13px;
	left: 178px;
	transform: scale(0.65);
}

#Lbutton {
	background: url('./img/controllers/new/digital.png') 0px 0px no-repeat;
	width: 18px;
	height: 12px;
	position: absolute;
	transform: scaleX(-1) scaleY(0.5);
	top: 3px;
	left: 13px;
}

#Rbutton {
	background: url('./img/controllers/new/digital.png') 0px 0px no-repeat;
	width: 18px;
	height: 12px;
	position: absolute;
	top: 3px;
	left: 182px;
	transform: scaleY(0.5);
}

#DLbutton {
	background: url('./img/controllers/new/d.png') 0px 0px no-repeat;
	position: absolute;
	width: 6px;
	height: 8px;
	top: 31px;
	left: 123px;
	transform: rotate(90deg);
}

#DRbutton {
	background: url('./img/controllers/new/d.png') 0px 0px no-repeat;
	width: 6px;
	height: 8px;
	top: 31px;
	position: absolute;
	left: 137px;
	transform: rotate(90deg);
}

#DUbutton {
	background: url('./img/controllers/new/d.png') 0px 0px no-repeat;
	width: 6px;
	height: 8px;
	top: 24px;
	position: absolute;
	left: 130px;
}

#DDbutton {
	background: url('./img/controllers/new/d.png') 0px 0px no-repeat;
	width: 6px;
	height: 8px;
	top: 0px;
	position: absolute;
	left: 130px;
}

#RTrigger {
	background: url('./img/controllers/new/analog.png') 0px 0px no-repeat;
	width: 73px;
	height: 12px;
	top: 3px;
	left: 109px;
	position: absolute;
	transform: scaleY(0.5);
}

#LTrigger {
	background: url('./img/controllers/new/analog.png') 0px 0px no-repeat;
	width: 73px;
	height: 12px;
	transform: scaleX(-1) scaleY(0.5);
	top: 3px;
	left: 31px;
	position: absolute;
}

.sticks {
	background: url('./img/controllers/new/stick_module2.png') 0px 0px no-repeat;
}

.astick {
	background: url('./img/controllers/new/AStick.png') 0px 0px no-repeat;
	height: 31px;
	width: 31px;
}

.cstick {
	background: url('./img/controllers/new/CStick.png') 0px 0px no-repeat;
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

.port-1{
}

.port-2{
filter: brightness(50%) hue-rotate(234deg) saturate(158.2%) brightness(158.2%);
}

.port-3 {
filter: brightness(86%) hue-rotate(65.8deg) saturate(103.2%) brightness(302.2%)
}

.port-4{
filter: brightness(100%) sepia(.5) hue-rotate(88.8deg) saturate(174.2%) brightness(225.2%);
}
.team-0{
}

.team-1{
filter: brightness(50%) hue-rotate(234deg) saturate(158.2%) brightness(158.2%);
}

.team-2{
filter: brightness(100%) sepia(.5) hue-rotate(88.8deg) saturate(174.2%) brightness(225.2%);
}

#panels {	
    top: 24px;
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
  font-family: "Eurostile";
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
  font-family: "Eurostile";
  color: rgb(255, 255, 255, 255);
  text-align: left;
  -webkit-text-stroke: 0px black;
  text-shadow: 4px 4px 0px rgb(6, 0, 0);
  -webkit-transform: scale(0.9, 1.0);  
  position: absolute;
  left: 405px;
  top: 84px;
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
    width: 685px;
    height: 220px;
    position: absolute;
    left: 1065px;
    bottom: 3px;
}

#sgl-playermoduleleft {
    width: 685px;
    height: 220px;
    position: absolute;
    right: 1075px;
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
    left: 435px;
    top: 838px;
    width: 424px;
    height: 108px;
}

#sgl-player2 {
	position: absolute;
	right: 465px;
	top: 838px;
	width: 424px;
	height: 108px;
}

#sgl-P1Series {
	position: absolute;
	background: url('./img/characters/${this.playerData[0].slippi.character.id}/series.png') 0px 0px no-repeat;
	right: 80px;
	top: 30px;
	width: 197px;
	height: 132px;
}

#sgl-P2Series {
	position: absolute;
	background: url('./img/characters/${this.playerData[1].slippi.character.id}/series.png') 0px 0px no-repeat;
	left: 80px;
	top: 30px;
	width: 197px;
	height: 132px;
}

#sgl-p1buttons {
	position: absolute;
	left: 375px;
	top: 867px;
	width: 153px;
	height: 182px;
}

#sgl-p2buttons {
	position: absolute;
	right: 400px;
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
	background: url('./img/controllers/new/A.png') 0px 0px no-repeat;
	width: 52px;
	height: 52px;
	top: 70px;
	left: 94px;
	transform: scale(0.90)
}

#sgl-Bbutton {
	position: absolute;
	background: url('./img/controllers/new/b.png') 0px 0px no-repeat;
	width: 23px;
	height: 23px;
	top: 119px;
	left: 79px;
	transform: scale(0.97)
}

#sgl-Xbutton {
	position: absolute;
	background: url('./img/controllers/new/x.png') 0px 0px no-repeat;
	width: 24px;
	height: 38px;
	top: 69px;
	left: 151px;
	transform: scale(0.98)
}

#sgl-Ybutton {
	position: absolute;
	background: url('./img/controllers/new/y.png') 0px 0px no-repeat;
	width: 38px;
	height: 24px;
	top: 43px;
	left: 90px;
	transform: scale(0.98)
}

#sgl-Zbutton {
	position: absolute;
	background: url('./img/controllers/new/z.png') 0px 0px no-repeat;
	width: 44px;
	height: 33px;
	top: 32px;
	left: 130px;
	transform: scale(0.98)
}

#sgl-Lbutton {
	background: url('./img/controllers/new/digital.png') 0px 0px no-repeat;
	width: 18px;
	height: 12px;
	position: absolute;
	transform: scaleX(-1);
	top: 18px;
	left: -3px;
}

#sgl-Rbutton {
	background: url('./img/controllers/new/digital.png') 0px 0px no-repeat;
	width: 18px;
	height: 12px;
	position: absolute;
	top: 18px;
	left: 167px;
}

#sgl-DLbutton {
	background: url('./img/controllers/new/d.png') 0px 0px no-repeat;
	position: absolute;
	width: 9px;
	height: 11px;
	top: 127px;
	left: 137px;
	transform: rotate(90deg);
}

#sgl-DRbutton {
	background: url('./img/controllers/new/d.png') 0px 0px no-repeat;
	width: 9px;
	height: 11px;
	top: 127px;
	position: absolute;
	left: 156px;
	transform: rotate(90deg);
}

#sgl-DUbutton {
	background: url('./img/controllers/new/d.png') 0px 0px no-repeat;
	width: 9px;
	height: 11px;
	top: 117px;
	position: absolute;
	left: 147px;
}

#sgl-DDbutton {
	background: url('./img/controllers/new/d.png') 0px 0px no-repeat;
	width: 9px;
	height: 11px;
	top: 137px;
	position: absolute;
	left: 147px;
}

#sgl-RTrigger {
	background: url('./img/controllers/new/analog.png') 0px 0px no-repeat;
	width: 73px;
	height: 12px;
	top: 18px;
	left: 93px;
	position: absolute;
}

#sgl-LTrigger {
	background: url('./img/controllers/new/analog.png') 0px 0px no-repeat;
	width: 73px;
	height: 12px;
	transform: scaleX(-1);
	top: 18px;
	right: 64px;
	position: absolute;
}

.sgl-sticks {
	background: url('./img/controllers/new/stick_module.png') 0px 0px no-repeat;
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
	top: 800px;
	left: 1610px;
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
	top: 800px;
	left: 1660px;
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
	position:absolute;
	height: 64px;
	width: 255px;
	top: 25px;
	left: 608px;
}

#sgl-timer{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  font-size: 40px;
  width: 145px;
  height: auto;
  font-family: "Eurostile";
  color: rgb(255, 255, 255, 255);
  text-align: left;
  -webkit-text-stroke: 0px black;
  text-shadow: 4px 4px 0px rgb(6, 0, 0);
  -webkit-transform: scale(0.9, 1.0);
  position: relative;
  left: 261px;
  top: 100px;
	letter-spacing: 6px;
}

#sgl-timerms{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  font-size: 30px;
  width: 45px;
  height: auto;
  font-family: "Eurostile";
  color: rgb(255, 255, 255, 255);
  text-align: left;
  -webkit-text-stroke: 0px black;
  text-shadow: 4px 4px 0px rgb(6, 0, 0);
  -webkit-transform: scale(0.9, 1.0);
  position: relative;
  left: 392px;
  top: 60px;
	letter-spacing: 3px;
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


#sgl-logo {
	position: absolute;
	top: 0px;
	right: 0px;
	background: url(./img/logos/slippi_hud2.png) no-repeat;
	width: 305px;
	height: 142px;
}

#sgl-ssblogo {
	position: absolute;
	top: -105px;
	right: 558px;
	background: url(./img/logostournament_logo.png) no-repeat;
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

        #overlay-frame {
        	width: 1920px;
        	height: 1080px;
        	position: absolute;

        	opacity: 100%;

        	color: white;
        	text-align: center;
        	font-family: "Eurostile", sans-serif;
			font-weight: 600;

			background-image: url("./img/backgrounds/new-hud/tournament.png")
        }

		#left-player-stack {
			position: absolute;
			left: 28px;
			top: 46px;

			height: 655px;
			width: 298px;

			border-style: solid;
			border-radius: 30px;
			border-color: white;
			border-width: 5px;


			box-sizing: border-box;
			overflow: hidden;
		}

		#right-player-stack {
			position: absolute;
			right: 28px;
			top: 46px;

			height: 655px;
			width: 298px;

			border-style: solid;
			border-radius: 30px;
			border-color: white;
			border-width: 5px;


			box-sizing: border-box;
			overflow: hidden;
		}

		#left-player-info-wrap,
		#right-player-info-wrap {
			position: absolute;
			left: 0px;
			bottom: 0px;

			height: 240px;
			width: 100%;

			padding-top: 20px;

			background-color: #051135;
			box-sizing: border-box;

			display: flex;
			flex-direction: column;
			align-items: center;

		}

		.player-sponsor {
			font-size: 20px;
			color: #259fff;
			letter-spacing: 2px;
			text-transform: uppercase;
		}

		.player-tag {
			font-size: 36px;
			letter-spacing: 2px;

		}

		.player-pronouns {
			background-color: #259fff;
			border-radius: 100px;

			height: 32px;
			width: 136px;

			margin-top: 10px;
			padding-top: 5px;
			box-sizing: border-box;
		}

		.playerport-1 {
			position: absolute;
			bottom: 0px;
			background: rgb(206,63,91);
			background: linear-gradient(180deg, rgba(206,63,91,1) 0%, rgba(169,14,20,1) 80%);
			height: 94px;
			width: 100%;
		}

		.playerport-2 {
			position: absolute;
			bottom: 0px;

			height: 94px;
			width: 100%;
			background: rgb(2,205,253);
			background: linear-gradient(180deg, rgba(2,205,253,1) 0%, rgba(62,141,220,1) 77%, rgba(64,135,215,1) 81%);
		}

		.playerport-3 {
			position: absolute;
			bottom: 0px;
			background: rgb(223,186,59);
			background: linear-gradient(180deg, rgba(223,186,59,1) 0%, rgba(201,139,58,1) 80%);
			height: 94px;
			width: 100%;
}
		.playerport-4 {
			position: absolute;
			bottom: 0px;
			background: rgb(81,205,64);
			background: linear-gradient(180deg, rgba(81,205,64,1) 0%, rgba(48,133,50,1) 80%);
			height: 94px;
			width: 100%;
}

		.player-score {
			padding-top: 20px;
			font-size: 70px;
		}

		#left-sponsor-box {
			position: absolute;

			width: 298px;
			height: 298px;
			border-radius: 30px;

			left: 28px;
			bottom: 46px;

			background-color: #051135;
		}
		.left-sponsor {
		background-image: url("./img/logos/tournament_logo2.png");
		width: 330px;
		height: 300px;
		}

		#right-sponsor-box {
			position: absolute;

			width: 298px;
			height: 298px;
			border-radius: 30px;

			right: 28px;
			bottom: 46px;

			background-color: #051135;
		}

		#game-box {
			position: absolute;
			top: 46px;
			left: 357.5px;

			height: 988px;
			width: 1205px;

			border-style: solid;
			border-radius: 30px;
			border-color: white;
			border-width: 5px;

			box-sizing: border-box;
		}

		#game-info {
			margin-top: 20px;

			width: 100%;
			height: 40px;

			display: flex;
			justify-content: center;
			flex-direction: row;

		}

		#game-bracket,
		#game-best-of {
			height: 100%;
			min-width: 230px;

			border-radius: 50px;

			background-color: rgba(10, 19, 40, 0.75);

			text-transform: uppercase;
			font-size: 16px;

			padding-top: 10px;
			padding-left: 20px;
			padding-right: 20px;

			box-sizing: border-box;
		}

		#game-bracket-text {
			text-align: center;
		}

		#game-best-of-text {
			text-align: center;
		}

		#spacer {
			width: 20px;
			height: 100%;
		}

</style>
<div id="overlay-frame">

	<div id="left-player-stack">
		<div id="left-player-info-wrap">
			
			<p class="player-sponsor">${this.playerData[0].player.sponsor}</p>
			<p class="player-tag">${this.playerData[0].player.name}</p>
			
			<div class="player-pronouns">
				<p class="player-pronouns-text">${this.playerData[0].player.pronouns}</p>
			</div>
			
			<div class="playerport-${this.playerData[0].slippi.port}">
				${this.generalData.slippi.isTeams
? html`
				${this.playerData[2].slippi.teamId > this.playerData[0].slippi.teamId
			? html `   			<p class="player-score">${this.generalData.tournament.scores[0].score}</p>`
			: html `			<p class="player-score">${this.generalData.tournament.scores[1].score}</p>`}
`
: html `
				<p class="player-score">${this.generalData.tournament.scores[this.playerData[0].slippi.id].score}</p>
`}
			</div>

		</div>
	</div>

	<div id="left-sponsor-box"><p class="left-sponsor"></p></div>
	
	<div id="right-player-stack">
		<div id="right-player-info-wrap">

			<p class="player-sponsor">${this.playerData[1].player.sponsor}</p>
			<p class="player-tag">${this.playerData[1].player.name}</p>
			
			<div class="player-pronouns">
				<p class="player-pronouns-text">${this.playerData[1].player.pronouns}</p>
			</div>
			
			<div class="playerport-${this.playerData[1].slippi.port}">
				${this.generalData.slippi.isTeams
? html`
				${this.playerData[2].slippi.teamId > this.playerData[0].slippi.teamId
			? html `   			<p class="player-score">${this.generalData.tournament.scores[1].score}</p>`
			: html `			<p class="player-score">${this.generalData.tournament.scores[0].score}</p>`}
`
: html `
				<p class="player-score">${this.generalData.tournament.scores[this.playerData[1].slippi.id].score}</p>
`}
			</div>

		</div>
	</div>

	<div id="right-sponsor-box"></div>

	<div id="game-box">

		<div id="game-info">
			<div id="game-bracket">
				<p id="game-bracket-text">${this.generalData.tournament.round}</p>
			</div>
			<div id="spacer"></div>
			<div id="game-best-of">
				<p id="game-best-of-text">Best of ${this.generalData.tournament.bestOf}</p>
			</div>
		</div>

	</div>

</div>
${this.generalData.slippi.isTeams
? html`
	<div id="overlay">
		<div id="coms">
		<div id="com">${this.generalData.tournament.commentators[0].name}</div>
		<div id="com">${this.generalData.tournament.commentators[1].name}</div>
		</div>
		<div id="mics">
		<div id="mic"></div>
		<div id="mic"></div>
		</div>
		
		<div id="player1">
				<div id="P1Series" class="team-${this.playerData[0].slippi.teamId}"></div>
				<div id="stocks">
					<div id="stock" class="stock-1 ${this.playerData[0].slippi.stockCountNow>0}" style="background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==0};"></div>
					<div id="stock" class="stock-2 ${this.playerData[0].slippi.stockCountNow>1}" style="background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==1};"></div>
					<div id="stock" class="stock-3 ${this.playerData[0].slippi.stockCountNow>2}" style="background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==2};"></div>
					<div id="stock" class="stock-4 ${this.playerData[0].slippi.stockCountNow>3}" style="background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==3};"></div>
				</div>
				<div id="dmg" class="p1damage-${(this.playerData[0].slippi.damage>300)}"><span id="p1dmg" class="${this.playerData[0].slippi.damage>=100 && this.playerData[0].slippi.stockCountNow>0}">${Math.floor(this.playerData[0].slippi.damage/100)}</span><span id="p1dmg-10"  class="${this.playerData[0].slippi.damage>=10 && this.playerData[0].slippi.stockCountNow>0}">${Math.floor(this.playerData[0].slippi.damage/10)-(Math.floor(this.playerData[0].slippi.damage/100)*10)}</span><span id="p1dmg" class="${this.playerData[0].slippi.stockCountNow>0}">${this.playerData[0].slippi.damage-(Math.floor(this.playerData[0].slippi.damage/10)*10)}</span><span id="percent" class="${this.playerData[0].slippi.stockCountNow>0}" style="font-size : 66%">%</span></div>
		</div>	

		<div id="player2">
				<div id="P2Series" class="team-${this.playerData[1].slippi.teamId}"></div>
				<div id="stocks">
					<div id="stock" class="stock-1 ${this.playerData[1].slippi.stockCountNow>0}" style="background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==0};"></div>
					<div id="stock" class="stock-2 ${this.playerData[1].slippi.stockCountNow>1}" style="background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==1};"></div>
					<div id="stock" class="stock-3 ${this.playerData[1].slippi.stockCountNow>2}" style="background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==2};"></div>
					<div id="stock" class="stock-4 ${this.playerData[1].slippi.stockCountNow>3}" style="background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==3};"></div>
				</div>
				<div id="dmg" class="p2damage-${(this.playerData[1].slippi.damage>300)}"><span id="p2dmg" class="${this.playerData[1].slippi.damage>=100 && this.playerData[1].slippi.stockCountNow>0}">${Math.floor(this.playerData[1].slippi.damage/100)}</span><span id="p2dmg-10"  class="${this.playerData[1].slippi.damage>=10 && this.playerData[1].slippi.stockCountNow>0}">${Math.floor(this.playerData[1].slippi.damage/10)-(Math.floor(this.playerData[1].slippi.damage/100)*10)}</span><span id="p2dmg" class="${this.playerData[1].slippi.stockCountNow>0}">${this.playerData[1].slippi.damage-(Math.floor(this.playerData[1].slippi.damage/10)*10)}</span><span id="percent" class="${this.playerData[1].slippi.stockCountNow>0}" style="font-size : 66%">%</span></div>	
		</div>	
		
		<div id="player3">
				<div id="P3Series" class="team-${this.playerData[2].slippi.teamId}"></div>
				<div id="stocks">
					<div id="stock" class="stock-1 ${this.playerData[2].slippi.stockCountNow>0}" style="background: url('./img/characters/${this.playerData[2].slippi.character.id}/${this.playerData[2].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[2].slippi.stockCountNow==0};"></div>
					<div id="stock" class="stock-2 ${this.playerData[2].slippi.stockCountNow>1}" style="background: url('./img/characters/${this.playerData[2].slippi.character.id}/${this.playerData[2].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[2].slippi.stockCountNow==1};"></div>
					<div id="stock" class="stock-3 ${this.playerData[2].slippi.stockCountNow>2}" style="background: url('./img/characters/${this.playerData[2].slippi.character.id}/${this.playerData[2].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[2].slippi.stockCountNow==2};"></div>
					<div id="stock" class="stock-4 ${this.playerData[2].slippi.stockCountNow>3}" style="background: url('./img/characters/${this.playerData[2].slippi.character.id}/${this.playerData[2].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[2].slippi.stockCountNow==3};"></div>
				</div>
				<div id="dmg" class="p3damage-${(this.playerData[2].slippi.damage>300)}"><span id="p3dmg" class="${this.playerData[2].slippi.damage>=100 && this.playerData[2].slippi.stockCountNow>0}">${Math.floor(this.playerData[2].slippi.damage/100)}</span><span id="p3dmg-10" class= "${this.playerData[2].slippi.damage>=10 && this.playerData[2].slippi.stockCountNow>0}">${Math.floor(this.playerData[2].slippi.damage/10)-(Math.floor(this.playerData[2].slippi.damage/100)*10)}</span><span id="p3dmg" class="${this.playerData[2].slippi.stockCountNow>0}">${this.playerData[2].slippi.damage-(Math.floor(this.playerData[2].slippi.damage/10)*10)}</span><span id="percent" class="${this.playerData[2].slippi.stockCountNow>0}" style="font-size : 66%">%</span></div>
		</div>
					
		<div id="player4">
				<div id="P4Series" class="team-${this.playerData[3].slippi.teamId}"></div>
				<div id="stocks">
					<div id="stock" class="stock-1 ${this.playerData[3].slippi.stockCountNow>0}" style="background: url('./img/characters/${this.playerData[3].slippi.character.id}/${this.playerData[3].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[3].slippi.stockCountNow==0};"></div>
					<div id="stock" class="stock-2 ${this.playerData[3].slippi.stockCountNow>1}" style="background: url('./img/characters/${this.playerData[3].slippi.character.id}/${this.playerData[3].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[3].slippi.stockCountNow==1};"></div>
					<div id="stock" class="stock-3 ${this.playerData[3].slippi.stockCountNow>2}" style="background: url('./img/characters/${this.playerData[3].slippi.character.id}/${this.playerData[3].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[3].slippi.stockCountNow==2};"></div>
					<div id="stock" class="stock-4 ${this.playerData[3].slippi.stockCountNow>3}" style="background: url('./img/characters/${this.playerData[3].slippi.character.id}/${this.playerData[3].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[3].slippi.stockCountNow==3};"></div>
				</div>
				<div id="dmg" class="p4damage-${(this.playerData[3].slippi.damage>300)} "><span id="p4dmg" class="${this.playerData[3].slippi.damage>=100 && this.playerData[3].slippi.stockCountNow>0}">${Math.floor(this.playerData[3].slippi.damage/100)}</span><span id="p4dmg-10" class= "${this.playerData[3].slippi.damage>=10 && this.playerData[3].slippi.stockCountNow>0}">${Math.floor(this.playerData[3].slippi.damage/10)-(Math.floor(this.playerData[3].slippi.damage/100)*10)}</span><span id="p4dmg" class="${this.playerData[3].slippi.stockCountNow>0}">${this.playerData[3].slippi.damage-(Math.floor(this.playerData[3].slippi.damage/10)*10)}</span><span id="percent" class="${this.playerData[3].slippi.stockCountNow>0}" style="font-size : 66%">%</span></div>				
		</div>
		
		<div id="panels" class="panel-container">
			<div id="sgl-timer" span id="timer1">${this.generalData.slippi.timer.formatted}</span></div><div id="sgl-timerms" span id="sgl-timerms">${this.generalData.slippi.timer.milliseconds}</span></div>
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
		<div id="outline" class="button"><img src="./img/controllers/new/input_module2.png" width="215" height="80"></img></div>
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
		<div id="outline" class="button"><img src="./img/controllers/new/input_module2.png" width="215" height="80"></img></div>
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
		<div id="outline" class="button"><img src="./img/controllers/new/input_module2.png" width="215" height="80"></img></div>
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
		<div id="outline" class="button"><img src="./img/controllers/new/input_module2.png" width="215" height="80"></img></div>
	</div>
</div>
`

: html`
	<div id="sgl-overlay">
		
		<div id="coms">
			<div id="com">${this.generalData.tournament.commentators[0].name}</div>
			<div id="com">${this.generalData.tournament.commentators[1].name}</div>
		</div>
		<div id="mics">
			<div id="mic"></div>
			<div id="mic"></div>
		</div>
		
			<div id='sgl-playermoduleleft'>
			<div id="sgl-P1Series" class="port-${this.playerData[0].slippi.port}"></div>
		</div>
		<div id='sgl-playermoduleright'>
		    <div id="sgl-P2Series" class="port-${this.playerData[1].slippi.port}"></div>
		</div>
			</div>
			<div id="sgl-player1">
					<div id="sgl-stocks">
						<div id="stock" class="stock-1 ${this.playerData[0].slippi.stockCountNow>0}" style="background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==0};"></div>
						<div id="stock" class="stock-2 ${this.playerData[0].slippi.stockCountNow>1}" style="background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==1};"></div>
						<div id="stock" class="stock-3 ${this.playerData[0].slippi.stockCountNow>2}" style="background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==2};"></div>
						<div id="stock" class="stock-4 ${this.playerData[0].slippi.stockCountNow>3}" style="background: url('./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 200px; height: 200px; animation: 0.2s linear 0s 1 onP1death-${this.playerData[0].slippi.stockCountNow==3};"></div>
					</div>
					<div id="sgl-dmg" class="p1damage-${(this.playerData[0].slippi.damage>300)} ${this.playerData[0].slippi.stockCountNow>0}"><span id="p1dmg" class="${this.playerData[0].slippi.damage>=100}">${Math.floor(this.playerData[0].slippi.damage/100)}</span><span id="p1dmg-10"  class="${this.playerData[0].slippi.damage>=10}">${Math.floor(this.playerData[0].slippi.damage/10)-(Math.floor(this.playerData[0].slippi.damage/100)*10)}</span><span id="p1dmg">${this.playerData[0].slippi.damage-(Math.floor(this.playerData[0].slippi.damage/10)*10)}</span><span id="percent" style="font-size : 66%">%</span></div>
			</div>
									
			
			<div id="sgl-player2">
					<div id="sgl-stocks">
						<div id="stock" class="stock-1 ${this.playerData[1].slippi.stockCountNow>0}" style="background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==0};"></div>
						<div id="stock" class="stock-2 ${this.playerData[1].slippi.stockCountNow>1}" style="background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==1};"></div>
						<div id="stock" class="stock-3 ${this.playerData[1].slippi.stockCountNow>2}" style="background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==2};"></div>
						<div id="stock" class="stock-4 ${this.playerData[1].slippi.stockCountNow>3}" style="background: url('./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/ani_stock.png'); transform: scale(${1/6}); width: 192px; height: 192px; animation: 0.2s linear 0s 1 onP2death-${this.playerData[1].slippi.stockCountNow==3};"></div>
					</div>
					<div id="sgl-dmg" class="p2damage-${(this.playerData[1].slippi.damage>300)} ${this.playerData[1].slippi.stockCountNow>0}"><span id="p2dmg" class="${this.playerData[1].slippi.damage>=100}">${Math.floor(this.playerData[1].slippi.damage/100)}</span><span id="p2dmg-10" class= "${this.playerData[1].slippi.damage>=10}">${Math.floor(this.playerData[1].slippi.damage/10)-(Math.floor(this.playerData[1].slippi.damage/100)*10)}</span><span id="p2dmg">${this.playerData[1].slippi.damage-(Math.floor(this.playerData[1].slippi.damage/10)*10)}</span><span id="percent" style="font-size : 66%">%</span></div>
			</div>
					
				

			</div>
		<div id="sgl-panels" class="panel-container">
			
			<div id="sgl-timer" span id="timer1">${this.generalData.slippi.timer.formatted}</span></div><div id="sgl-timerms" span id="sgl-timerms">${this.generalData.slippi.timer.milliseconds}</span></div>
			</div>	
		

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
	<div id="sgl-outline" class="button"><img src="./img/controllers/new/input_module.png" width="182" height="153"></img></div>
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
	<div id="sgl-outline" class="button"><img src="./img/controllers/new/input_module.png" width="182" height="153"></img></div>
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

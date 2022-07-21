// Made by Rabious

import { html, css } from 'lit';

var DURATION = 0;
var OPENINGS_PER_KILL_1 = 0;
var OPENINGS_PER_KILL_2 = 0;
var DAMAGE_PER_OPENING_1 = 0;
var DAMAGE_PER_OPENING_2 = 0;
var NEUTRAL_WINS_1 = 0;
var NEUTRAL_WINS_2 = 0;
var KILL_MOVES = 0;
var NEUTRAL_OPENER_MOVES = 0;
var INPUTS_PER_MINUTE_1 = 0;
var INPUTS_PER_MINUTE_2 = 0;
var AVG_KILL_PERCENT_1 = 0;
var AVG_KILL_PERCENT_2 = 0;
var DAMAGE_DONE_1 = 0;
var DAMAGE_DONE_2 = 0;
var EARLY_KILLS_1 = 0;
var EARLY_KILLS_2 = 0;
var LATE_DEATHS_1 = 0;
var LATE_DEATHS_2 = 0;
var SELF_DESTRUCTS_1 = 0;
var SELF_DESTRUCTS_2 = 0;
var HIGH_DAMAGE_PUNISHES_1 = 0;
var HIGH_DAMAGE_PUNISHES_2 = 0;
var FIRST_BLOOD_1 = 0;
var FIRST_BLOOD_2 = 0;
var L_CANCEL_1 = 0;
var L_CANCEL_2 = 0;

function calc(array, base) {
	array.reduce((previousValue, currentValue) => previousValue + isNaN(currentValue) ? 0.77 : currentValue, base)
}

function returnCalc(calc) {
    return Math.max(Math.min(calc,100),10);
}

function calcPower(dpo1,opk1,tdd1,dur) {
	let base = 50;
	let var1 = 33 * ((60-dpo1)/60);
	let var2 = 33 * ((3-opk1)/3);
	let var3 = -.2 * (150-(tdd1/(dur/3600)));
    let value = calc([var1,var2,var3], base);
    console.log(`Power: ${base} + ${var1} + ${var2} + ${var3} = ${value}`)
    return returnCalc(value);
}

function calcSkill(ipm1,lc1,hdp1,akp1) {
	let base = 50;
	let var1 = 5 * (Math.sqrt(ipm1)-22.5)
	let var2 = 33 * ((90-lc1)/100)
	let var3 = -33 * ((60-hdp1)/60)
	let var4 = 20 * ((80-akp1)/80);
    let value = calc([var1,var2,var3,var4], base);
    console.log(`Skill: ${base} + ${var1} + ${var2} + ${var3} + ${var4} = ${value}`)
    return returnCalc(value);
}

function calcDefense(ld1,opk2,dpo2,akp2,ek2) {
	let base = 50;
	let var1 = 20 * (ld1/150)
	let var2 = 5 * ((5-opk2)/5) 
	let var3 = 20 * ((30-dpo2)/30)
	let var4 = 20 * ((100-akp2)/100)
	let var5 = -20 * ((70-ek2)/70);
    let value = calc([var1,var2,var3,var4,var5], base);
    console.log(`Defense: ${base} + ${var1} + ${var2} + ${var3} + ${var4} + ${var5} = ${value}`)
    return returnCalc(value);
}

function calcSpeed(dur,ipm1,fb1) {
	let base = 50;
	let var1 = 50 * (1-2*Math.atan(dur/7200)/Math.PI)
	let var2 = 10 * (Math.sqrt(ipm1)-22.5)
	let var3 = .2 * (50-fb1)
    let value = calc([var1,var2,var3], base);
    console.log(`Speed: ${base} + ${var1} + ${var2} + ${var3} = ${value}`)
    return returnCalc(value);
}

function calcLuck(sd2,sd1,ek1) {
	let base = 50;
	let var1 = 33 * (isNaN(sd2) ? 0 : sd2)
	let var2 = -33 * (isNaN(sd1) ? 0 : sd1)
	let var3 = -1 * ((35-ek1)/35)
    let value = calc([var1,var2,var3], base);
    console.log(`Luck: ${base} + ${var1} + ${var2} + ${var3} = ${value}`)
    return returnCalc(value);
}

function calcControl(nw1,nw2,tdd2,dur,fb1) {
	let base = 50;
	let var1 = 50 * (nw1/nw2-1)
	let var2 = .5 * (115-(tdd2/(dur/3600)))
	let var3 = .2 * (50-fb1)
    let value = calc([var1,var2,var3], base);
    console.log(`Control: ${base} + ${var1} + ${var2} + ${var3} = ${value}`)
    return returnCalc(value);
}

function calcAllStats() {
    return [[calcPower(DAMAGE_PER_OPENING_1,OPENINGS_PER_KILL_1,DAMAGE_DONE_1,DURATION),
             calcSkill(INPUTS_PER_MINUTE_1,L_CANCEL_1,HIGH_DAMAGE_PUNISHES_1,AVG_KILL_PERCENT_1), 
             calcDefense(LATE_DEATHS_1,OPENINGS_PER_KILL_2,DAMAGE_PER_OPENING_2,AVG_KILL_PERCENT_2,EARLY_KILLS_2), 
             calcSpeed(DURATION,INPUTS_PER_MINUTE_1,FIRST_BLOOD_1), 
             calcLuck(SELF_DESTRUCTS_2,SELF_DESTRUCTS_1,EARLY_KILLS_1), 
             calcControl(NEUTRAL_WINS_1,NEUTRAL_WINS_2,DAMAGE_DONE_2,DURATION,FIRST_BLOOD_1)],

            [calcPower(DAMAGE_PER_OPENING_2,OPENINGS_PER_KILL_2,DAMAGE_DONE_2,DURATION),
            calcSkill(INPUTS_PER_MINUTE_2,L_CANCEL_2,HIGH_DAMAGE_PUNISHES_2,AVG_KILL_PERCENT_2), 
            calcDefense(LATE_DEATHS_2,OPENINGS_PER_KILL_1,DAMAGE_PER_OPENING_1,AVG_KILL_PERCENT_1,EARLY_KILLS_1), 
            calcSpeed(DURATION,INPUTS_PER_MINUTE_2,FIRST_BLOOD_2), 
            calcLuck(SELF_DESTRUCTS_1,SELF_DESTRUCTS_2,EARLY_KILLS_2), 
            calcControl(NEUTRAL_WINS_2,NEUTRAL_WINS_1,DAMAGE_DONE_1,DURATION,FIRST_BLOOD_2)]];
}

export const template = function () {
    if (!this.ready || !this.generalData.slippi.finished) return html``;


	DURATION = parseInt(this.generalData.slippi.elapsedFrames);
	console.log("Calculating...");
	OPENINGS_PER_KILL_1 = parseInt(this.statData.latestGame.opk1);
	OPENINGS_PER_KILL_2 = parseInt(this.statData.latestGame.opk2);
	DAMAGE_PER_OPENING_1 = parseInt(this.statData.latestGame.dpo1);
	DAMAGE_PER_OPENING_2 = parseInt(this.statData.latestGame.dpo2);
	NEUTRAL_WINS_1 = parseInt(this.statData.latestGame.nw1);
	NEUTRAL_WINS_2 = parseInt(this.statData.latestGame.nw2);
	KILL_MOVES = parseInt(this.statData.latestGame.mckm1);
	NEUTRAL_OPENER_MOVES = parseInt(this.statData.latestGame.mcno1);
	INPUTS_PER_MINUTE_1 = parseInt(this.statData.latestGame.ipm1);
	INPUTS_PER_MINUTE_2 = parseInt(this.statData.latestGame.ipm2);
	AVG_KILL_PERCENT_1 = parseInt(this.statData.latestGame.akp1);
	AVG_KILL_PERCENT_2 = parseInt(this.statData.latestGame.akp2);
	DAMAGE_DONE_1 = parseInt(this.statData.latestGame.tdd1);
	DAMAGE_DONE_2 = parseInt(this.statData.latestGame.tdd2);
	EARLY_KILLS_1 = parseInt(this.statData.latestGame.ek1);
	EARLY_KILLS_2 = parseInt(this.statData.latestGame.ek1);
	LATE_DEATHS_1 = parseInt(this.statData.latestGame.ld1);
	LATE_DEATHS_2 = parseInt(this.statData.latestGame.ld2);
	SELF_DESTRUCTS_1 = parseInt(this.statData.latestGame.sd1);
	SELF_DESTRUCTS_2 = parseInt(this.statData.latestGame.sd2);
	HIGH_DAMAGE_PUNISHES_1 = parseInt(this.statData.latestGame.hdp1);
	HIGH_DAMAGE_PUNISHES_2 = parseInt(this.statData.latestGame.hdp2);
	FIRST_BLOOD_1 = parseInt(this.statData.latestGame.fb1);
	FIRST_BLOOD_2 = parseInt(this.statData.latestGame.fb2);
	L_CANCEL_1 = parseInt(this.statData.latestGame.lc1);
	L_CANCEL_2 = parseInt(this.statData.latestGame.lc2);

	var stats = calcAllStats();
	console.log("DURATION: " + DURATION);
	console.log("OPENINGS_PER_KILL_1: " + OPENINGS_PER_KILL_1);
	console.log("OPENINGS_PER_KILL_2: " + OPENINGS_PER_KILL_2);
	console.log("DAMAGE_PER_OPENING_1: " + DAMAGE_PER_OPENING_1);
	console.log("DAMAGE_PER_OPENING_2: " + DAMAGE_PER_OPENING_2);
	console.log("NEUTRAL_WINS_1: " + NEUTRAL_WINS_1);
	console.log("NEUTRAL_WINS_2: " + NEUTRAL_WINS_2);
	console.log("KILL_MOVES: " + KILL_MOVES);
	console.log("NEUTRAL_OPENER_MOVES: " + NEUTRAL_OPENER_MOVES);
	console.log("INPUTS_PER_MINUTE_1: " + INPUTS_PER_MINUTE_1);
	console.log("INPUTS_PER_MINUTE_2: " + INPUTS_PER_MINUTE_2);
	console.log("AVG_KILL_PERCENT_1: " + AVG_KILL_PERCENT_1);
	console.log("AVG_KILL_PERCENT_2: " + AVG_KILL_PERCENT_2);
	console.log("DAMAGE_DONE_1: " + DAMAGE_DONE_1);
	console.log("DAMAGE_DONE_2: " + DAMAGE_DONE_2);
	console.log("EARLY_KILLS_1: " + EARLY_KILLS_1);
	console.log("EARLY_KILLS_2: " + EARLY_KILLS_2);
	console.log("LATE_DEATHS_1: " + LATE_DEATHS_1);
	console.log("LATE_DEATHS_2: " + LATE_DEATHS_2);
	console.log("SELF_DESTRUCTS_1: " + SELF_DESTRUCTS_1);
	console.log("SELF_DESTRUCTS_2: " + SELF_DESTRUCTS_2);
	console.log("HIGH_DAMAGE_PUNISHES_1: " + HIGH_DAMAGE_PUNISHES_1);
	console.log("HIGH_DAMAGE_PUNISHES_2: " + HIGH_DAMAGE_PUNISHES_2);
	console.log("FIRST_BLOOD_1: " + FIRST_BLOOD_1);
	console.log("FIRST_BLOOD_2: " + FIRST_BLOOD_2);
	console.log("L_CANCEL_1: " + L_CANCEL_1);
	console.log("L_CANCEL_2: " + L_CANCEL_2);

    lastDuration = parseInt(this.generalData.slippi.elapsedFrames);
    return html`	
	<style>
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
	</style>
	<style>
		@supports (
		  (
			  -webkit-clip-path: polygon(0% 0%, calc(
					  100% - (var(--1) * 100% / var(--scale))
					)
					100%, 100% 100%)
			)
			or
			(
			  clip-path:
				polygon(
				  0% 0%,
				  calc(100% - (var(--1) * 100% / var(--scale))) 100%,
				  100% 100%
				)
			)
		) {
		  .radar-container .fieldset {
			display: flex !important;
		  }
		  .chaarts[class*="radar"] {
			--radius: 6em; /*Size of chart*/
			--unitless-radius: calc(1024 / 16 / 5);
			--size: calc(var(--radius) / var(--scale));
			--part: calc(360deg / var(--items));
			--integer: calc(var(--scale));
	        background-image: url("img/extras/hexagon.png");
			background-size: cover;
			background-position: center; 
			contain: layout;
			counter-reset: scale var(--integer);
			height: calc(var(--radius) * 2);
			margin: 6rem auto 12rem; /* Margin here*/
			overflow: visible;
			position: relative;
			width: calc(var(--radius) * 2);

		  }
		  .chaarts[class*="radar"] [scope="col"] {
			font-family: 'Press Start 2P', sans-serif; /*font family*/
			font-size: 1.8rem;
			-webkit-text-stroke: 1px black;
			color: white;
			--away: calc((var(--radius) * -1) + 30%);
			left: 51%;
			margin: 0;
			padding: 0 1rem;
			position: absolute;
			top: 50%;
			transform: translate3d(-50%, -50%, 0)
			  rotate(calc(var(--part) * var(--index, 1))) translate(var(--away))
			  rotate(calc(var(--part) * var(--index, 1) * -1));
		  }
		  .chaarts[class*="radar"] tr > :nth-of-type(1) {
			--index: 1;
		  }
		  .chaarts[class*="radar"] tr > :nth-of-type(2) {
			--index: 2;
		  }
		  .chaarts[class*="radar"] tr > :nth-of-type(3) {
			--index: 3;
		  }
		  .chaarts[class*="radar"] tr > :nth-of-type(4) {
			--index: 4;
		  }
		  .chaarts[class*="radar"] tr > :nth-of-type(5) {
			--index: 5;
		  }
		  .chaarts[class*="radar"] tr > :nth-of-type(6) {
			--index: 6;
		  }
		  .chaarts[class*="radar"] tr > :nth-of-type(7) {
			--index: 7;
		  }
		  .chaarts[class*="radar"] td {
			--skew: calc(90deg - var(--part));
			border-bottom: 1px solid rgba(10, 28, 99, 0.5); /*line color*/
			
			height: 50%;
			left: 0;
			margin: 0;
			position: absolute;
			top: 0;
			transform: rotate(calc(var(--part) * var(--index, 1))) skew(var(--skew));
			transform-origin: 100% 100%;
			width: 50%;
            opacity: .9;
		  }
		  .chaarts[class*="radar"] td:nth-of-type(1) span {
			--point: var(--1);
			--pos: calc(100% - (var(--2) * 100% / (var(--scale) * var(--ratio))));
		  }
		  .chaarts[class*="radar"] td:nth-of-type(2) span {
			--point: var(--2);
			--pos: calc(100% - (var(--3) * 100% / (var(--scale) * var(--ratio))));
		  }
		  .chaarts[class*="radar"] td:nth-of-type(3) span {
			--point: var(--3);
			--pos: calc(100% - (var(--4) * 100% / (var(--scale) * var(--ratio))));
		  }
		  .chaarts[class*="radar"] td:nth-of-type(4) span {
			--point: var(--4);
			--pos: calc(100% - (var(--5) * 100% / (var(--scale) * var(--ratio))));
		  }
		  .chaarts[class*="radar"] td:nth-of-type(5) span {
			--point: var(--5);
			--pos: calc(100% - (var(--6) * 100% / (var(--scale) * var(--ratio))));
		  }
		  .chaarts[class*="radar"] td:nth-of-type(6) span {
			--point: var(--6);
			--pos: calc(100% - (var(--7) * 100% / (var(--scale) * var(--ratio))));
		  }
		  .chaarts[class*="radar"] td:nth-of-type(7) span {
			--point: var(--7);
			--pos: calc(100% - (var(--8) * 100% / (var(--scale) * var(--ratio))));
		  }
		  .chaarts[class*="radar"] td::after,
		  .chaarts[class*="radar"] td::before {
			display: none;
		  }
		  .chaarts[class*="radar"] span {
			--opposite: calc(180 - (90 + (90 - (360 / var(--items)))));
			--angle: calc(var(--opposite) * 0.01745329251);
			--sin-term-angle-1: var(--angle);
			--sin-term-angle-2: calc(
			  (var(--angle) * var(--angle) * var(--angle)) / 6
			);
			--sin-term-angle-3: calc(
			  (
				  var(--angle) * var(--angle) * var(--angle) * var(--angle) *
					var(--angle)
				) / 120
			);
			--sin-term-angle-4: calc(
			  (
				  var(--angle) * var(--angle) * var(--angle) * var(--angle) *
					var(--angle) * var(--angle) * var(--angle)
				) / 5040
			);
			--sin-term-angle-5: calc(
			  (
				  var(--angle) * var(--angle) * var(--angle) * var(--angle) *
					var(--angle) * var(--angle) * var(--angle) * var(--angle) *
					var(--angle)
				) / 362880
			);
			--sin-angle: calc(
			  var(--sin-term-angle-1) - var(--sin-term-angle-2) +
				var(--sin-term-angle-3) - var(--sin-term-angle-4) +
				var(--sin-term-angle-5)
			);
			--hypo: calc(var(--unitless-radius) / var(--sin-angle));
			--ratio: calc(var(--hypo) / var(--unitless-radius));
			--polygon: polygon(
			  100% var(--pos),
			  calc(100% - (var(--point) * 100% / var(--scale))) 100%,
			  100% 100%
			);
			background: linear-gradient(to top left, #000000 10%, #222222 75%); /*chart color*/
			-webkit-clip-path: var(--polygon);
			clip-path: var(--polygon);
			/* filter: drop-shadow(16px 16px 20px red); */
			height: 100%;
			position: absolute;
			width: 100%;
		  }
		  .centered {
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
			display: flex;
          }	
		}
	  
        
		</style>
        <div class="centered">
			<table class="chaarts radar" id="radar" style="--scale: 100; --step: 33; --items: 6; --1: ${stats[0][0]}; --2: ${stats[0][1]}; --3: ${stats[0][2]}; --4: ${stats[0][3]}; --5: ${stats[0][4]}; --6: ${stats[0][5]}; --7: var(--1);">
				<thead>
				 <tr>
					<th scope="col">PWR</th>
					<th scope="col">SKL</th>
					<th scope="col">DEF</th>
					<th scope="col">SPD</th>
					<th scope="col">LCK</th>
					<th scope="col">CTL</th>
				 </tr>
				</thead>
				<tbody>
				 <tr>
				  <td><span></span></td>
				  <td><span></span></td>	
				  <td><span></span></td>
				  <td><span></span></td>
				  <td><span></span></td>
				  <td><span></span></td>
				  
				 </tr>
				</tbody>
			   </table>
			   <div style="width: 1500px"></div>
			   <table class="chaarts radar" id="radar" style="--scale: 100; --step: 33; --items: 6; --1: ${stats[1][0]}; --2: ${stats[1][1]}; --3: ${stats[1][2]}; --4: ${stats[1][3]}; --5: ${stats[1][4]}; --6: ${stats[1][5]}; --7: var(--1);">
				<thead>
				 <tr>
					<th scope="col">PWR</th>
					<th scope="col">SKL</th>
					<th scope="col">DEF</th>
					<th scope="col">SPD</th>
					<th scope="col">LCK</th>
					<th scope="col">CTL</th>
				 </tr>
				</thead>
				<tbody>
				 <tr>
				  <td><span></span></td>
				  <td><span></span></td>
				  <td><span></span></td>
				  <td><span></span></td>
				  <td><span></span></td>
				  <td><span></span></td>
				  
				 </tr>
				</tbody>
			   </table>
		</div>
    `;

}

export const style = function () {

return css``;
}

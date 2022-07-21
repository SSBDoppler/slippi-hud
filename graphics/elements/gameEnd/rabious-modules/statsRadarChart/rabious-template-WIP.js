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

function returnCalc(calc, base) {
    return isNaN(calc) ? base : Math.max(Math.min(calc,100),0);
}

function calcPower(dpo1,opk1,tdd1,dur) {
    let calc = 50 +
        33 * ((60-dpo1)/60) +
        33 * ((3-opk1)/3) +
        -.2 * (150-(tdd1/(dur/3600)));
    console.log(`Power: 50 + ${33 * ((60-dpo1)/60)} + ${33 * ((3-opk1)/3)} + ${-.2 * (150-(tdd1/(dur/3600)))} = ${calc}`)
    return returnCalc(calc, 0);
}

function calcSkill(ipm1,lc1,hdp1,avp1) {
    let calc = 50 +
        33 * (Math.sqrt(ipm1)-22.3) +
        33 * ((90-lc1)/100) +
        33 * ((60-hdp1)/60) +
        20 * ((80-avp1)/80);
    console.log(`Skill: 50 + ${33 * (Math.sqrt(ipm1)-22.3)} + ${33 * ((90-lc1)/100)} + ${33 * ((60-hdp1)/60)} + ${20 * ((80-avp1)/80)} = ${calc}`)    
    return returnCalc(calc, 0);
}

function calcDefense(ld1,opk2,dpo2,akp2,ek2) {
    let calc = 50 + 
        20 * (ld1/150) +
        20 * ((5-opk2)/5) +
        20 * ((30-dpo2)/30) +
        20 * ((100-akp2)/100) +
        -20 * ((70-ek2)/70);
    console.log(`Defense: 50 + ${20 * (ld1/150)} + ${20 * ((5-opk2)/5)} + ${20 * ((30-dpo2)/30)} + ${20 * ((100-akp2)/100)} + ${-20 * ((70-ek2)/70)} = ${calc}`);
    return returnCalc(calc, 100);
}

function calcSpeed(dur,ipm1,fb1) {
    let calc = 50 +
        50 * (1-2*Math.atan(dur/7200)/Math.PI) +
        40 * (Math.sqrt(ipm1)-22.5) +
        .2 * (50-fb1);
    console.log(`Speed: 50 + ${25 * (1-2*Math.atan(dur/7200)/Math.PI)} + ${40 * (Math.sqrt(ipm1)-22.5)} + ${.2 * (50-fb1)} = ${calc}`)
    return returnCalc(calc, 0);
}

function calcLuck(sd2,sd1,ek1) {
    let calc = 50 +
        33 * (isNaN(sd2) ? 0 : sd2) +
        -33 * (isNaN(sd1) ? 0 : sd1) +
        -1 * ((35-ek1)/35);
    console.log(`Luck: 50 + ${33 * (isNaN(sd2) ? 0 : sd2)} + ${-33 * (isNaN(sd1) ? 0 : sd1)} + ${-1 * ((35-ek1)/35)} = ${calc}`) 
    return returnCalc(calc, 0);
}

function calcControl(nw1,nw2,tdd2,dur,fb1) {
    let calc = 50 +
        50 * (nw1/nw2-1) +
        .5 * (100-(tdd2/(dur/3600))) +
        .2 * (50-fb1);
    console.log(`Control: 50 + ${25 * (nw1/nw2-1)} + ${.2 * (100-(tdd2/(dur/3600)))} + ${.2 * (50-fb1)} = ${calc}`);
    if (nw2 === 0) return 100;
    return returnCalc(calc, 0);
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

var stats = [];
var lastDuration = Number.MIN_SAFE_INTEGER;


export const template = function () {
    if (!this.ready || !this.generalData.slippi.finished) return html`test!`;


    DURATION = parseInt(this.generalData.slippi.elapsedFrames);
    if (DURATION !== lastDuration) {
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

        stats = calcAllStats();
        // console.log("DURATION: " + DURATION);
        // console.log("OPENINGS_PER_KILL_1: " + OPENINGS_PER_KILL_1);
        // console.log("OPENINGS_PER_KILL_2: " + OPENINGS_PER_KILL_2);
        // console.log("DAMAGE_PER_OPENING_1: " + DAMAGE_PER_OPENING_1);
        // console.log("DAMAGE_PER_OPENING_2: " + DAMAGE_PER_OPENING_2);
        // console.log("NEUTRAL_WINS_1: " + NEUTRAL_WINS_1);
        // console.log("NEUTRAL_WINS_2: " + NEUTRAL_WINS_2);
        // console.log("KILL_MOVES: " + KILL_MOVES);
        // console.log("NEUTRAL_OPENER_MOVES: " + NEUTRAL_OPENER_MOVES);
        // console.log("INPUTS_PER_MINUTE_1: " + INPUTS_PER_MINUTE_1);
        // console.log("INPUTS_PER_MINUTE_2: " + INPUTS_PER_MINUTE_2);
        // console.log("AVG_KILL_PERCENT_1: " + AVG_KILL_PERCENT_1);
        // console.log("AVG_KILL_PERCENT_2: " + AVG_KILL_PERCENT_2);
        // console.log("DAMAGE_DONE_1: " + DAMAGE_DONE_1);
        // console.log("DAMAGE_DONE_2: " + DAMAGE_DONE_2);
        // console.log("EARLY_KILLS_1: " + EARLY_KILLS_1);
        // console.log("EARLY_KILLS_2: " + EARLY_KILLS_2);
        // console.log("LATE_DEATHS_1: " + LATE_DEATHS_1);
        // console.log("LATE_DEATHS_2: " + LATE_DEATHS_2);
        // console.log("SELF_DESTRUCTS_1: " + SELF_DESTRUCTS_1);
        // console.log("SELF_DESTRUCTS_2: " + SELF_DESTRUCTS_2);
        // console.log("HIGH_DAMAGE_PUNISHES_1: " + HIGH_DAMAGE_PUNISHES_1);
        // console.log("HIGH_DAMAGE_PUNISHES_2: " + HIGH_DAMAGE_PUNISHES_2);
        // console.log("FIRST_BLOOD_1: " + FIRST_BLOOD_1);
        // console.log("FIRST_BLOOD_2: " + FIRST_BLOOD_2);
        // console.log("L_CANCEL_1: " + L_CANCEL_1);
        // console.log("L_CANCEL_2: " + L_CANCEL_2);
    }
    
    lastDuration = parseInt(this.generalData.slippi.elapsedFrames);
    return html`
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
	</style>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
	<canvas id="myChart" width="400" height="400"></canvas>
    <script>
        console.log("RUNNING CHART SCRIPT!")
        Chart.defaults.color = '#c1c3db'
        const data = {
            labels: [
                'PWR',
                'SKL',
                'DEF',
                'SPD',
                'LCK',
                'CTL'
            ],
            datasets: [{
                label: '',
                data: [${stats[0][0]}, ${stats[0][1]}, ${stats[0][2]}, ${stats[0][3]}, ${stats[0][4]}, ${stats[0][5]}],
                fill: true,
                backgroundColor: 'rgba(221, 70, 69, 0.3)',
                borderColor: 'rgb(221, 70, 69)',
                pointRadius: 0,

            }, {
                label: '',
                data: [${stats[1][0]}, ${stats[1][1]}, ${stats[1][2]}, ${stats[1][3]}, ${stats[1][4]}, ${stats[1][5]}],
                fill: true,
                backgroundColor: 'rgba(70, 69, 221, 0.3)',
                borderColor: 'rgb(70, 69, 221)',
                pointRadius: 0

            }]
        };
        
        const config = {
            type: 'radar',
            data: data,
            options: {
                elements: {
                    line: {
                        borderWidth: 8
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        pointLabels: {
                            font: {
                                size: 40,
                                color: '#ff6384',
                                family: "'Press Start 2P'"
                            }
                        },
                        ticks: {
                            display: false
                        },
                        grid: {
                            drawTicks: false,
                            lineWidth: 3,
                            drawOnChartArea: false,
                            borderColor: '#FFF',
                            tickLength: 50
                        },
                        suggestedMin: 100,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    tooltip: {
                        display: false,
                    },
                    legend: {
                        display: false,
                    }
                }
            },
        };
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, config);
    </script>
    <h1>Hello it works!*</h1>
    `;

}

export const style = function () {

return css``;
}

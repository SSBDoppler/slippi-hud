
// const nodecg = require('./util/nodecg-api-context').get();
// const { computeSlpStats } = require("slp-stats-nodecg");
// const slippi = nodecg.Replicant('slippi');
fetch('../wait/rabious-template.js')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })
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

console.log("Calculating...");
DURATION = parseInt(slippi.value.gameInfo.timer);
OPENINGS_PER_KILL_1 = parseInt(latestGameParams.opk1);
OPENINGS_PER_KILL_2 = parseInt(latestGameParams.opk2);
DAMAGE_PER_OPENING_1 = parseInt(latestGameParams.dpo1);
DAMAGE_PER_OPENING_2 = parseInt(latestGameParams.dpo2);
NEUTRAL_WINS_1 = parseInt(latestGameParams.nw1);
NEUTRAL_WINS_2 = parseInt(latestGameParams.nw2);
KILL_MOVES = parseInt(latestGameParams.mckm1);
NEUTRAL_OPENER_MOVES = parseInt(latestGameParams.mcno1);
INPUTS_PER_MINUTE_1 = parseInt(latestGameParams.ipm1);
INPUTS_PER_MINUTE_2 = parseInt(latestGameParams.ipm2);
AVG_KILL_PERCENT_1 = parseInt(latestGameParams.akp1);
AVG_KILL_PERCENT_2 = parseInt(latestGameParams.akp2);
DAMAGE_DONE_1 = parseInt(latestGameParams.tdd1);
DAMAGE_DONE_2 = parseInt(latestGameParams.tdd2);
EARLY_KILLS_1 = parseInt(latestGameParams.ek1);
EARLY_KILLS_2 = parseInt(latestGameParams.ek1);
LATE_DEATHS_1 = parseInt(latestGameParams.ld1);
LATE_DEATHS_2 = parseInt(latestGameParams.ld2);
SELF_DESTRUCTS_1 = parseInt(latestGameParams.sd1);
SELF_DESTRUCTS_2 = parseInt(latestGameParams.sd2);
HIGH_DAMAGE_PUNISHES_1 = parseInt(latestGameParams.hdp1);
HIGH_DAMAGE_PUNISHES_2 = parseInt(latestGameParams.hdp2);
FIRST_BLOOD_1 = parseInt(latestGameParams.fb1);
FIRST_BLOOD_2 = parseInt(latestGameParams.fb2);
L_CANCEL_1 = parseInt(latestGameParams.lc1);
L_CANCEL_2 = parseInt(latestGameParams.lc2);
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
    //lastDuration = parseInt(this.generalData.slippi.elapsedFrames);
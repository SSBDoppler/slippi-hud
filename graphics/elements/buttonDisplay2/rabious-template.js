import { html, css } from 'lit';
import {map} from 'lit/directives/map.js';


var maxHistoryLength = 9;
var imageWidth = 65; // in pixels

var stickChange = 0;
var startStick = "";
var startAngle = 0;
var inputHistory = [];
var scaleX = -1;
var buttons = {
	pressed: false,
	old: [],
	new: []
}
var lastFrame = {
	controlStick: "",
	controlAngle: 0,
	A: false,
	B: false,
	CStick: "",
	L: 0,
	R: 0,
	X: false,
	Y: false,
	Z: false
};
var matchStarted = false;

function commonLetter(a, b){
    if(b.length < a.length)
        return commonLetter(b, a)
    for(var i = 0, len = a.length; i < len; i++) 
        if(b.indexOf(a[i]) != -1)
            return true;
  
    return false
}



export const template = function () {
	if (this.generalData.slippi.finished) {
		matchStarted = false;
	}
	if (!this.ready || !matchStarted && !this.generalData.slippi.finished) {
		inputHistory = [];
		matchStarted = true;
		return html``;
	}
	

	/*******************************************
				VARIABLES/HELPER FUNCTIONS
	********************************************/
	let newInput = html``;
	let hasChanged = false;
	var emptyInput = true;

	function change() {
		hasChanged = true;
		stickChange = 0;
		startStick = "";
		startAngle = 0;
	}

	function appendInput(string) {
		if (emptyInput) emptyInput = false;
		newInput = html`${newInput}${string}`;
		return true;
	}

	function prependInput(string) {
		if (emptyInput) emptyInput = false;
		newInput = html`${string}${newInput}`;
		return true;
	}


	/*******************************************
					CONTROL STICK
	********************************************/
	let controlStick = "";
	let controlAngle = 0;
	if (this.playerData[1].slippi.controller.mainStickY < -0.2750) {
		controlStick = "D";
		controlAngle += 0.5;
	}
	else if (this.playerData[1].slippi.controller.mainStickY > 0.2750) {
		controlStick = "U";
		controlAngle++;
	}
	if (this.playerData[1].slippi.controller.mainStickX < -0.2750) {
		controlStick += "L";
		controlAngle = controlAngle + .75;
	}
	else if (this.playerData[1].slippi.controller.mainStickX > 0.2750) {
		controlStick += "R";
		controlAngle = controlAngle % 1 + .25;
	}
	if (controlStick) {
		controlAngle /= controlStick.length;
	}

	// See if it's any different from last frame

	if (controlStick) {
		if (!startStick) {
			startStick = controlStick;
			startAngle = controlAngle;
		}
		if (lastFrame.controlStick != controlStick) { // If control stick rolled along edges
			if (commonLetter(lastFrame.controlStick, controlStick)) {
				let angleDif = controlAngle - lastFrame.controlAngle;
				if (angleDif < -0.5) { // U<->UR edge cases
					startAngle--;
				} else if (angleDif > 0.5) {
					startAngle++;
				}
				scaleX = (controlAngle - startAngle > 0) ? -1 : 1;
				stickChange = Math.min(Math.abs(controlAngle - startAngle) * 8, 7);
			}
			lastFrame.controlAngle = controlAngle;
		}
		if (stickChange > 0) {
			appendInput(html`
			<img src="img/buttons/Control_Stick-${startStick}.svg">
			<div class="relative">
				<img class="relative" src="img/buttons/Control_Stick-${controlStick}.svg">
				<img class="absolute" src="img/buttons/${stickChange}.png" style="transform: rotate(${controlAngle}turn) scaleX(${scaleX});">
			</div>`);
		} else {
			appendInput(html`<img src="img/buttons/Control_Stick-${controlStick}.svg">`)
		}
		
	} else if (lastFrame.controlStick) { // Control Stick goes to neutral
		if (stickChange > 0) {
			appendInput(html`
			<img src="img/buttons/Control_Stick-${startStick}.svg">
			<div class="relative">
				<img class="relative" src="img/buttons/Control_Stick-${lastFrame.controlStick}.svg">
				<img class="absolute" src="img/buttons/${stickChange}.png" style="transform: rotate(${lastFrame.controlAngle}turn) scaleX(${scaleX});">
			</div>`);
			change();
		} else if (!buttons.pressed) {
			appendInput(html`<img src="img/buttons/Control_Stick-${lastFrame.controlStick}.svg">`)
			change();
		} else {
			buttons.pressed = false;
		}
	} else { // Control Stick stays in neutral | edge case
		startStick = "";
		startAngle = 0;
		stickChange = 0;
	}
	

	/*******************************************
					C STICK
	********************************************/
	let CStick = "";
	if (this.playerData[1].slippi.controller.cStickY < -0.2750) {
		CStick = "D";
	}
	else if (this.playerData[1].slippi.controller.cStickY > 0.2750) {
		CStick = "U";
	}
	if (this.playerData[1].slippi.controller.cStickX < -0.2750) {
		CStick += "L";
	}
	else if (this.playerData[1].slippi.controller.cStickX > 0.2750) {
		CStick += "R";
	}
	// See if it's any different from last frame
	if (CStick && lastFrame.CStick != CStick) {
		buttons.pressed = true;
		appendInput(html`<img src="img/buttons/C-Stick-${CStick}.svg">`);
		if (lastFrame.CStick != CStick) {
			change();
		}
	}	
	

	/*******************************************
					BUTTON PRESSES
	********************************************/
	buttons.old = [];
	buttons.new = [];

	function buttonPressed(input, buttonName) {
		if (input) {
			buttons.pressed = true;
			if (!lastFrame[buttonName]) {
				buttons.new.push(buttonName);
				change();
			} else { 
				buttons.old.push(buttonName);
			}
		}
	}
	function triggerPressed(input, triggerName) {
		if (input > 0.3) {
			// 	buttons.pressed = true;
			if (lastFrame[triggerName] <= 0.3) {
				buttons.new.push(triggerName);
				change();
			} else {
				buttons.old.push(triggerName);
			}
		}
	}
	buttonPressed(this.playerData[1].slippi.controller.pressedButtons.A, "A")	// A
	buttonPressed(this.playerData[1].slippi.controller.pressedButtons.B, "B")	// B
	triggerPressed(this.playerData[1].slippi.controller.leftTrigger + this.playerData[1].slippi.controller.pressedButtons.L, "L")	// L trigger
	triggerPressed(this.playerData[1].slippi.controller.rightTrigger + this.playerData[1].slippi.controller.pressedButtons.R, "R")	// R trigger
	buttonPressed(this.playerData[1].slippi.controller.pressedButtons.X, "X")	// X
	buttonPressed(this.playerData[1].slippi.controller.pressedButtons.Y, "Y")	// Y
	buttonPressed(this.playerData[1].slippi.controller.pressedButtons.Z, "Z")	// Z

	// Adding buttons to input
	buttons.old.map(button => prependInput(html`<img src="img/buttons/${button}.svg">`))
	buttons.new.map(button => appendInput(html`<img src="img/buttons/${button}.svg">`))

	lastFrame.CStick = CStick;
	lastFrame.A = this.playerData[1].slippi.controller.pressedButtons.A;
	lastFrame.B = this.playerData[1].slippi.controller.pressedButtons.B;
	lastFrame.L = this.playerData[1].slippi.controller.leftTrigger + this.playerData[1].slippi.controller.pressedButtons.L;
	lastFrame.R = this.playerData[1].slippi.controller.rightTrigger + this.playerData[1].slippi.controller.pressedButtons.R;
	lastFrame.X = this.playerData[1].slippi.controller.pressedButtons.X;
	lastFrame.Y = this.playerData[1].slippi.controller.pressedButtons.Y;
	lastFrame.Z = this.playerData[1].slippi.controller.pressedButtons.Z;
	lastFrame.controlStick = controlStick;
	
	/*******************************************
					INPUT HISTORY
	********************************************/
	// If no buttons are pressed this frame
	if (emptyInput) {
		appendInput(html`<img src="img/buttons/Control_Stick-.svg">`);
	}
	// Adds to history if new input detected
	newInput = html`<div class="input" id="${this.generalData.slippi.elapsedFrames}">${newInput}<div>`;
	if (hasChanged) {
			inputHistory.unshift(newInput);
			// Delete if history is full
			if (inputHistory.length > maxHistoryLength) {
				inputHistory.pop();
			}
	}


	return html`
		<style>
			img {
				width: ${imageWidth}px;
			}

			.input {
				display: flex;
			}
			.relative {
				position: relative;
			}
			.absolute {
				position: absolute;
				top: 0px;
				left: 0px;
			}
		</style>
		<br>
		<ul id="history" style="list-style-type: none; margin: 0; padding: 0;">
			<li>${newInput}</li>
			${map(inputHistory, (input) => html`<li>${input}</li>`)}
		</ul>
	`;
}	

import { html, css } from 'lit';
import {map} from 'lit/directives/map.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

var maxHistoryLength = 10;
var imageWidth = 65; // in pixels

var inputHistory = [];
var input = html``;
var lastFrame = {
	controlStick: "",
	A: false,
	B: false,
	CStick: "",
	L: 0,
	R: 0,
	X: false,
	Y: false
};

export const template = function () {
	if (this.generalData.slippi.finished || !this.ready) {
		inputHistory = [];
		return html``;
	}

	let newInput = html``;
	let change = false;

	// Find direction of control stick
	let controlStick = "";
	if (this.playerData[0].slippi.controller.mainStickY < -0.2750) {
		controlStick = "D";
	}
	else if (this.playerData[0].slippi.controller.mainStickY > 0.2750) {
		controlStick = "U";
	}
	if (this.playerData[0].slippi.controller.mainStickX < -0.2750) {
		controlStick += "L";
	}
	else if (this.playerData[0].slippi.controller.mainStickX > 0.2750) {
		controlStick += "R";
	}
	// See if it's any different from last frame
	if (controlStick) {
		if (lastFrame.L > 0.3) { // Checking for rolls
			newInput = html`${newInput}<img src="img/buttons/L.svg" width=${imageWidth}px>`;
		} else if (lastFrame.R > 0.3) {
			newInput = html`${newInput}<img src="img/buttons/R.svg" width=${imageWidth}px>`;
		}
		newInput = html`${newInput}<img src="img/buttons/Control_Stick-${controlStick}.svg" width=${imageWidth}px>`;
		if (lastFrame.controlStick != controlStick) {
			//console.log(`Control Stick: ${lastFrame.controlStick}->${controlStick}`);
			change = true;
		}
	}
	lastFrame.controlStick = controlStick;

	// Find direction of C stick
	let CStick = "";
	if (this.playerData[0].slippi.controller.cStickY < -0.2750) {
		CStick = "D";
	}
	else if (this.playerData[0].slippi.controller.cStickY > 0.2750) {
		CStick = "U";
	}
	if (this.playerData[0].slippi.controller.cStickX < -0.2750) {
		CStick += "L";
	}
	else if (this.playerData[0].slippi.controller.cStickX > 0.2750) {
		CStick += "R";
	}
	// See if it's any different from last frame
	if (CStick && lastFrame.CStick != CStick) {
		if (lastFrame.L > 0.3 && !controlStick) { // Checking for rolls
			newInput = html`${newInput}<img src="img/buttons/L.svg" width=${imageWidth}px>`;
		} else if (lastFrame.R > 0.3 && !controlStick) {
			newInput = html`${newInput}<img src="img/buttons/R.svg" width=${imageWidth}px>`;
		}
		//console.log(`Control Stick: ${lastFrame.CStick}->${CStick}`);
		change = true;
		newInput = html`${newInput}<img src="img/buttons/C-Stick-${CStick}.svg" width=${imageWidth}px>`;
	}	
	lastFrame.CStick = CStick;

	// Check for button presses

	// A
	let A = this.playerData[0].slippi.controller.pressedButtons.A
	if (A && !lastFrame.A) {
		//console.log("A");
		change = true;
		newInput = html`${newInput}<img src="img/buttons/A.svg" width=${imageWidth}px>`;
	}
	lastFrame.A = A;
	
	// B
	let B = this.playerData[0].slippi.controller.pressedButtons.B
	if (B && !lastFrame.B) {
		//console.log("B");
		change = true;
		newInput = html`${newInput}<img src="img/buttons/B.svg" width=${imageWidth}px>`;
	} 
	lastFrame.B = B;

	// L trigger
	let L = this.playerData[0].slippi.controller.leftTrigger
	if (L > 0.3 && lastFrame.L <= 0.3) {
		//console.log("L");
		change = true;
		newInput = html`${newInput}<img src="img/buttons/L.svg" width=${imageWidth}px>`;
	}
	lastFrame.L = L;
	
	// R trigger
	let R = this.playerData[0].slippi.controller.rightTrigger
	if (R > 0.3 && lastFrame.R <= 0.3) {
		//console.log("R");
		change = true;
		newInput = html`${newInput}<img src="img/buttons/R.svg" width=${imageWidth}px>`;
	}
	lastFrame.R = R;

	// X
	let X = this.playerData[0].slippi.controller.pressedButtons.X
	if (X && !lastFrame.X) {
		//console.log("X");
		change = true;
		newInput = html`${newInput}<img src="img/buttons/X.svg" width=${imageWidth}px>`;
	}
	lastFrame.X = X;
	
	// Y
	let Y = this.playerData[0].slippi.controller.pressedButtons.Y
	if (Y && !lastFrame.Y) {
		//console.log("Y");
		change = true;
		newInput = html`${newInput}<img src="img/buttons/Y.svg" width=${imageWidth}px>`;
	} 
	lastFrame.Y = Y;

	// Z
	let Z = this.playerData[0].slippi.controller.pressedButtons.Z
	if (Z && !lastFrame.Z) {
		//console.log("Z");
		change = true;
		newInput = html`${newInput}<img src="img/buttons/Z.svg" width=${imageWidth}px>`;
	} 
	lastFrame.Z = Z;
	
	// Adds an id to div tag if the input changes
	if (change) {
		input = newInput;
		input = html`<div id="input" class="${this.generalData.slippi.elapsedFrames}" style="display: flex">${input}<div>`;
		inputHistory.unshift(input);
		// Delete if history is full
		if (inputHistory.length > maxHistoryLength) {
			inputHistory.pop();
		}
	}
	return html`
		${this.generalData.slippi.elapsedFrames}
		<br>
		<ul id="history" style="list-style-type: none; margin: 0; padding: 0;">
			${map(inputHistory, (item) => html`<li>${item}</li>`)}
		</ul>
	`; // Can't seem to get css working
}	

export const styles = function () {

return css`

`;
}

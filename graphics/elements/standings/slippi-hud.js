import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`
<style>
#background {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 1920px;
	height: 1080px;
	background-image: url("./img/backgrounds/new-hud/setend.png");
	font-family: "Eurostile";
	color: white;
}
#pattern {
			position: absolute;
			left: -2880px;
			  top: -1620px;
  			background-image: url("./img/logos/logo-y.png"), url("./img/logos/logo-x.png");
  			background-position: top, top;
  			background-repeat: space, space;
			transform: scale(.25);
			width: 7680px;
			height: 4320px;
}
#standing0 {
			position: absolute;
			left: 120px;
			top: 20px;
			background-image: url("./img/characters/${this.standingData[0].character}/${this.standingData[0].costume}/vs-left.png");
			background-repeat: no-repeat;
			background-position: right top;
			height: 500px;
			width: 500px;
}
#standing1 {
			position: absolute;
			left: 630px;
			top: 30px;
			background-image: url("./img/characters/${this.standingData[1].character}/${this.standingData[1].costume}/vs-left.png");
			background-repeat: no-repeat;
			background-position: right top;
			height: 480px;
			width: 400px;


}
#standing2 {
			position: absolute;
			left: 1040px;
			top: 40px;
			background-image: url("./img/characters/${this.standingData[2].character}/${this.standingData[2].costume}/stats.png");
			background-repeat: no-repeat;
			height: 460px;
			width: 345px;

}
#standing3 {
			position: absolute;
			left: 1395px;
			top: 50px;
			background-image: url("./img/characters/${this.standingData[3].character}/${this.standingData[3].costume}/stats.png");
			background-repeat: no-repeat;
			height: 440px;
			width: 298px;


}
#standing4 {
			position: absolute;
			left: 315px;
			top: 580px;
			background-image: url("./img/characters/${this.standingData[4].character}/${this.standingData[4].costume}/stats.png");
			background-repeat: no-repeat;
			height: 420px;
			width: 298px;


}
#standing5 {
			position: absolute;
			left: 645px;
			top: 610px;
			background-image: url("./img/characters/${this.standingData[5].character}/${this.standingData[5].costume}/stats.png");
			background-repeat: no-repeat;
			height: 420px;
			width: 298px;


}
#standing6 {
			position: absolute;
			left: 975px;
			top: 650px;
			background-image: url("./img/characters/${this.standingData[6].character}/${this.standingData[6].costume}/stats.png");
			background-repeat: no-repeat;
			background-position: top right;
			height: 360px;
			width: 298px;


}
#standing7 {
			position: absolute;
			left: 1305px;
			top: 670px;
			background-image: url("./img/characters/${this.standingData[7].character}/${this.standingData[7].costume}/stats.png");
			background-repeat: no-repeat;
			background-position: top right;
			height: 360px;
			width: 298px;
}

#nameplate {
	position: absolute;
	bottom: 0px;
	left: 0px;
	width: inherit;
	background-color: rgb(4, 52, 113);
	height: 70px;
	overflow: hidden;
}

.placement {
	position: absolute;
	left: 10px;
	top: 10px;
	font-size: 64px;
}

.tag {
	position: absolute;
	left: 0px;
	bottom: 36px;
	text-align: center;
  	width: inherit;
	font-size: 28px;
}

.twitter {
	position: absolute;
	left: 0px;
	bottom: 10px;
	text-align: center;
  	width: inherit;
	background: url("./img/extras/twitter.png") 0px 0px no-repeat;
	height: 24px;
}

.standing {
			border-style: solid;
			border-radius: 30px;
			border-color: #f9e76a;
			border-width: 5px;

			background-color: rgba(36, 159, 255, 0.6);

			box-sizing: border-box;
			overflow: hidden;
}
</style>
<div id="background">
	<div id="pattern"></div>
	<div id="standing0" class="standing">
		<div class="placement">${this.standingData[0].placement}</div>
		<div id="nameplate">
			<div class="tag">${this.standingData[0].name}</div>
			<div class="twitter">${this.standingData[0].twitter}</div>
		</div>
	</div>
	<div id="standing1" class="standing">
		<div class="placement">${this.standingData[1].placement}</div>
		<div id="nameplate">
			<div class="tag">${this.standingData[1].name}</div>
			<div class="twitter">${this.standingData[1].twitter}</div>
		</div>
	</div>
	<div id="standing2" class="standing">
		<div class="placement">${this.standingData[2].placement}</div>
		<div id="nameplate">
			<div class="tag">${this.standingData[2].name}</div>
			<div class="twitter">${this.standingData[2].twitter}</div>
		</div>
	</div>
	<div id="standing3" class="standing">
		<div class="placement">${this.standingData[3].placement}</div>
		<div id="nameplate">
			<div class="tag">${this.standingData[3].name}</div>
			<div class="twitter">${this.standingData[3].twitter}</div>
		</div>
	</div>
	<div id="standing4" class="standing">
		<div class="placement">${this.standingData[4].placement}</div>
		<div id="nameplate">
			<div class="tag">${this.standingData[4].name}</div>
			<div class="twitter">${this.standingData[4].twitter}</div>
		</div>
	</div>
	<div id="standing5" class="standing">
		<div class="placement">${this.standingData[5].placement}</div>
		<div id="nameplate">
			<div class="tag">${this.standingData[5].name}</div>
			<div class="twitter">${this.standingData[5].twitter}</div>
		</div>
	</div>
	<div id="standing6" class="standing">
		<div class="placement">${this.standingData[6].placement}</div>
		<div id="nameplate">
			<div class="tag">${this.standingData[6].name}</div>
			<div class="twitter">${this.standingData[6].twitter}</div>
		</div>
	</div>
	<div id="standing7" class="standing">
		<div class="placement">${this.standingData[7].placement}</div>
		<div id="nameplate">
			<div class="tag">${this.standingData[7].name}</div>
			<div class="twitter">${this.standingData[7].twitter}</div>
		</div>
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

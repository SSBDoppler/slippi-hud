import { html, css } from 'lit';
import { repeat } from 'lit/directives/repeat.js';

import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';

export const template = function () {

if (!this.ready)
return html``;

return html`

<style>
#overlay {
    top: 0px;
	left: 0px;
    background: url(./img/extras/handwarmer.png) no-repeat;
    height: 1080px;
    width: 1920px;
    position: absolute;
	font-family: "metropolis black";
	color: white;
	-webkit-text-stroke: medium black;
	
}
#tournament {
padding-top: 44px;
}

#round {
padding-top: 44px;
}

#best {
padding-top: 44px;
}

#com0 {
    position: absolute;
    left: 21px;
    top: 529px;
    width: 250px;
    text-align: center;
    font-size: 20px;
}

#com1 {
    position: absolute;
    left: 342px;
    top: 529px;
    width: 250px;
    text-align: center;
    font-size: 20px;
}

	
#box {
    position: absolute;
    left: 655px;
    top: 21px;
    text-align: center;
    width: 1242px;
    font-size: 44px;
}

</style>

<div id="overlay">
<div id="box">
	<div id="tournament">${this.generalData.tournament.name}</div>
	<div id="round">${this.generalData.tournament.round}</div>
	<div id="best">Best Of ${this.generalData.tournament.bestOf}</div>
</div>
<div id="com0">${this.generalData.tournament.commentators[0].name}</div>
<div id="com1">${this.generalData.tournament.commentators[1].name}</div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}

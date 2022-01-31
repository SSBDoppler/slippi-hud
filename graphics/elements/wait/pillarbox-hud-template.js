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
    background: url(./img/extras/wait.png) no-repeat;
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
    left: 502px;
    top: 529px;
    width: 377px;
    text-align: center;
    font-size: 20px;
}

#com1 {
    position: absolute;
    left: 1024px;
    top: 529px;
    width: 377px;
    text-align: center;
    font-size: 20px;
}

#player0 {
    position: absolute;
    left: 21px;
    top: 975px;
    width: 331px;
    text-align: center;
}

#sponsor0 {
    position: absolute;
	left: 10px;
	top: 20px;	
}

#score0 {
    position: absolute;
    left: 356px;
    top: 975px;
    font-size: 42px;
    text-align: center;
    width: 60px;
}

#player1 {
    position: absolute;
    left: 482px;
    top: 975px;
    width: 331px;
    text-align: center;
}

#score1 {
position: absolute;
    left: 418px;
    top: 975px;
    font-size: 42px;
    text-align: center;
    width: 60px;
}

#sponsor{
	font-size: 22px;
}
#player {
	font-size: 42px;
	}
	
#box {
position: absolute;
    left: 817px;
    top: 582px;
    text-align: center;
    width: 460px;
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

<div id="player0"><span id="sponsor">${this.playerData[0].player.sponsor}</span><span id='player'> | ${this.playerData[0].player.name}</span></div>
<div id="score0">${this.generalData.tournament.scores[this.playerData[0].slippi.id].score}</div>
<div id="player1"><span id="sponsor">${this.playerData[1].player.sponsor}</span><span id='player'> | ${this.playerData[1].player.name}</span></div>
<div id="score1">${this.generalData.tournament.scores[this.playerData[1].slippi.id].score}</div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}

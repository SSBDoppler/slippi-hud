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
    background: url(./img/extras/old-hud/wait.png) no-repeat;
    height: 1080px;
    width: 1920px;
    position: absolute;
	font-family: "metropolis black";
	
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
    left: 632px;
    top: 560px;
    width: 260px;
    text-align: center;
    font-size: 20px;
}

#com1 {
    position: absolute;
    left: 1027px;
    top: 560px;
    width: 260px;
    text-align: center;
    font-size: 20px;
}

#player0 {
    position: absolute;
    left: 208px;
    top: 1026px;
    width: 260px;
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
    left: 604px;
    top: 1026px;
    width: 260px;
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
	font-size: 32px;
	}
	
#box {
position: absolute;
    left: 10px;
    top: 10px;
    text-align: center;
    width: 450px;
    font-size: 42px;
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

<div id="player0"><span id='player'> ${this.playerData[0].player.name}</span></div>
<div id="player1"><span id='player'> ${this.playerData[1].player.name}</span></div>
</div>
`;

}

export const style = function () {

return css`

:host {
}


`;
}

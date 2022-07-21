// Made by Rabious

import { html, css } from 'lit';

export const template = function () {

    if (!this.ready)
    return html``;
    
    let p1Stocks = html``;
    for (let i = 0; i < this.playerData[0].slippi.stockCountStart; i++) {
        if (i < this.playerData[0].slippi.stockCountStart-this.playerData[0].slippi.stockCountNow) {
            p1Stocks = html`${p1Stocks}<img class='invis'>`;
        } else {
            p1Stocks = html`${p1Stocks}<img>`;
        }
    }
    let p2Stocks = html``;
    for (let i = 0; i < this.playerData[1].slippi.stockCountStart; i++) {
        if (i < this.playerData[1].slippi.stockCountStart-this.playerData[1].slippi.stockCountNow) {
            p2Stocks = html`${p2Stocks}<img class='invis'>`;
        } else {
            p2Stocks = html`${p2Stocks}<img>`;
        }
    }
    return html`
        
	<style>
        .centered {
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
        }
        .stock {
            display: flex;
            align-items: center;
            justify-content: center;
            width:max-content;
        }
        .invis {
			opacity: 33%;
		}
        #stage {
            content: url(./img/Stages/daniel-bernal-${this.generalData.slippi.stage.id}.png);
            width: 200px;
            padding: 0rem 2rem;
        }
        #p1 img {
            content: url(./img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/stock.png);
            padding: 0rem .3rem;
        }
        #p2 img {
            content: url(./img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/stock.png);
            padding: 0rem .3rem;
        }
    </style>
        <div style="display: flex" class="centered">
            <div id="p1" class="stock">
                ${p1Stocks}
            </div>
            <img id="stage">
            <div id="p2" class="stock">
                ${p2Stocks}
            </div>
        </div>
    `;
    
}

export const style = function () {

return css``;
}

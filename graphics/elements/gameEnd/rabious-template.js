import { html, css } from 'lit';

export const template = function () {

    if (!this.ready)
    return html``;
    this.playerData[0].slippi.character.costumeId
    this.playerData[0].slippi.character.id
    let winnerNumber = 2;
    let stats = {
        left: {
            height: "50%",
            top: "53%",
            symbol: {
                left: "0%",
                top: "53%",
                height: "25%"
            }
        },
        right: {
            height: "55%",
            top: "48%",
            symbol: {
                left: "80%",
                top: "48%",
                height: "35%"
            }
        }
    }
    if (this.statData.latestGame.g1.split(",")[4] == "winner") {
        winnerNumber = 1;
        
        stats.left.height = "55%";
        stats.left.top = "48%";
        stats.left.symbol = {
            left: "0%",
            top: "48%",
            height: "35%"
        };

        stats.right.height = "50%";
        stats.right.top = "53%";
        stats.right.symbol = {
            left: "85%",
            top: "53%",
            height: "25%"
        }  
    }
    console.log(`Winner: Player ${winnerNumber}`);
    return html`
    <style>
                #container {
                        position:relative;
                        width: 1920px;
                }

                .overlay {
                        position: absolute;
                        
                }
                .left {
                        left: 15%;
                        top: ${stats.left.top};
                        height: ${stats.left.height};
                        filter: drop-shadow(-20px 5px 5px black)
                        
                }
                .leftsymbol {
                    left: ${stats.left.symbol.left};
                    top: ${stats.left.symbol.top};
                    height: ${stats.left.symbol.height};
                }
                .right {
                        left: 60%;
                        top: ${stats.right.top};
                        height: ${stats.right.height};
                        filter: drop-shadow(20px 5px 5px black)
                }
                .rightsymbol {
                    left: ${stats.right.symbol.left};
                    top: ${stats.right.symbol.top};
                    height: ${stats.right.symbol.height};
                }   
        </style>
        <div id="container">
                <img src="img/gameEnd/winner${winnerNumber}.png">
                <img src="img/characters/${this.playerData[0].slippi.character.id}/symbol.svg" class="overlay leftsymbol">
                <img src="img/characters/${this.playerData[0].slippi.character.id}/${this.playerData[0].slippi.character.costumeId}/vs-left.png" class="overlay left">
                <img src="img/characters/${this.playerData[1].slippi.character.id}/symbol.svg" class="overlay rightsymbol">
                <img src="img/characters/${this.playerData[1].slippi.character.id}/${this.playerData[1].slippi.character.costumeId}/vs-right.png" class="overlay right">
                
        </div>
    `;
    
}

export const style = function () {

return css``;
}

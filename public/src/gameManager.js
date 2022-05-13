const player = require('./player.js');
const decks = require('./decks.js');


const gameManager = (numPlayers) => {
    decks.shuffle(decks.drawDeck);

    let playerArr = {};

    const createPlayers = (numPlayers) => {
        for(let i = 0; i < numPlayers; i++) {
            playerArr.push(new Player(i, "name", {} , i));
        }
    }

    //initialize
    const initPlayer = (numPlayers) => {
        for(let i = 0; i < 7; i++) {
            playerArr.foreach( (p) => {
                decks.move(decks.drawDeck, p.deck, decks.drawDeck.pop());
            });
        }
    }

    //start game
        //game loop
}

//checkTurn

//Checkplayable cards


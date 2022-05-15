import {shuffle, move, displayDeck, displayGamePile, drawDeck, gamePile} from './decks.js';

let players = [];

const gameManager = (numPlayers) => {
    //Init Game
    initGame(numPlayers);

    //start game
        //game loop
}

const initGame = (numPlayers) => {
    console.log('initGame is printing!');

    //Shuffle deck
    shuffle(drawDeck);

    //create player objects
    for(let i = 0; i < numPlayers; i++) {
        players.push({id: i, username: "I am: " + i, deck: [], turnNumber: i});
    }

    //pass out cards
    players.forEach((player) => {
        for(let i = 0; i < 7; i++){
            player.deck.push(drawDeck.pop());
        }
    });

    //pick out random card to start
    gamePile.push(drawDeck.pop());

    //Display Cards
    players.forEach((player) => {
        displayDeck(player, player.deck);
    });
    console.log(gamePile[gamePile.length - 1]);
    displayGamePile(gamePile[gamePile.length - 1]);
}

//checkTurn

//Checkplayable cards

initGame(4);

export {initGame};
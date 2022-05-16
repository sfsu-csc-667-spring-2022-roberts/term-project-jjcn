import {shuffle, displayDeck, displayGamePile, drawDeck, gamePile} from './decks.js';

let players = [];
let winner = -1;
let playerTurn = 0;

const gameManager = (numPlayers) => {
    //Init Game
    initGame(numPlayers);

    //start game
    // startGame();
        //game loop
}

//Sets up the game
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

    displayGamePile(gamePile[gamePile.length - 1]);
}

const startGame = () => {
    let playerTurn = 0;

    while(!checkWinner()) {
        //check to see if cards are valid
            //No -> draw card
            //Yes -> play card

        playerTurn = playerTurn++ % players.length;
        console.log("while loop is running");
    }
    console.log("Someone won!!!");
}

const getNextPlayer = () => {
    if(winner != -1) {
        console.log("checkWinner: " + checkWinner());
        alert("Player " + winner + " Wins!");
    } else {
        playerTurn++;
        playerTurn %= players.length;
        console.log("Current Player Turn: " + playerTurn);
    }

    checkWinner();
};

//Cycles through every player and checks their decks. If one is empty, then there's a winner
const checkWinner = () => {
    console.log("running checkWinner");
    players.forEach((player) => {
        if(player.deck.length === 0) {
            console.log(player);
            winner = player.id;
            alert("Player " + winner + " wins!");
            return true;
        }
    });

    return false;
}

const getCurrentPlayer = () => {
    return players[playerTurn];
}

//checkTurn

//Checkplayable cards

gameManager(4);

export {initGame, getCurrentPlayer, getNextPlayer};
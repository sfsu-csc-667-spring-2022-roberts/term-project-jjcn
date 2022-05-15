import {allCards, cardArr, displayCard} from './cards.js';


//define all of the decks
let drawDeck = cardArr;    //The deck players can draw from
let gamePile = [];          //The deck that players put their cards into
let playerDecks = [];       //An array of player objects with decks. Example below

// let playerDecks = {
//     {id: 1, arr: {}}
// };       


//Deck Functions

//shuffles the deck to a random instance
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function move(deck1, deck2, card) {
    //find the cardIndex in deck1
    let cardIndex = deck1.findIndex( (element) => {
        element.id === card.id;
    });
    //Remove the card from deck1
    let cardArray = deck1.splice(cardIndex, 1);
    //Move the card into deck2
    deck2.push(cardArray[0]);
}

//This function dynamically displays the card decks on the game page
function displayDeck(player, cards) {
    //Find the Player area
    let playerArea = classFinder(player.id);
    let playerDeck = document.getElementsByClassName(playerArea +" playerDeck");

    //Append the cards
    cards.forEach((card) => {
        let cardDisplay = displayCard(card);
        playerDeck[0].appendChild(cardDisplay);
    });
}

//This function dynamically displays the currently played card
function displayGamePile(card) {
    //Get the gameArea
    let cardArea = classFinder(-1);
    let gamePile = document.getElementsByClassName(cardArea)[0];

    //Display the card
    gamePile.className = cardArea + " " + card.image;
    console.log(gamePile.className);
}

function classFinder(PID) {
    switch(PID) {
        case 0:
            return "playerOne";
        case 1:
            return "playerTwo";
        case 2: 
            return "playerThree";
        case 3: 
            return "playerFour";
        case -1:
            return "throwDeck"
    }
}

export {shuffle, move, displayDeck, displayGamePile, drawDeck, gamePile};
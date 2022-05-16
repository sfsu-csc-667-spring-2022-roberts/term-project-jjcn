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

//moves a card from one deck to another
function moveCard(toArr, fromArr, card) {
    console.log("running moveCard");
    //Find the location in the first deck
    let index = fromArr.indexOf(card);

    //remove from that array and remove from the rendering
    let cardToMove = fromArr.splice(index, 1)[0];

    toArr.push(cardToMove);
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

//This function dynamically adds a single card to the specified player deck
function addCardToDeck(player, card) {
    let playerArea = classFinder(player.id);
    let playerDeck = document.getElementsByClassName(playerArea + " playerDeck");

    //add the card to the player's array
    player.deck.push(card);

    //append the card
    let cardDisplay = displayCard(card);
    playerDeck[0].appendChild(cardDisplay);
}

//Removes a single card from the player's deck
function removeCardFromDeck(player, card) {
    let playerArea = classFinder(player.id);
    let playerDeck = document.getElementsByClassName(playerArea + " playerDeck")[0];

    let cardToRemove;

    playerDeck.childNodes.forEach((child) => {
        if(child.className === card.image) {
            cardToRemove = child;
        }
    });
    // console.log(playerDeck.childNodes);
    // let cardToRemove = playerDeck.childNodes.filter();

    //let cardToRemove = playerDeck.childNodes.filter(cardDiv => cardDiv.className === card.image);

    cardToRemove.remove();
}

//This function dynamically displays the currently played card
function displayGamePile(card) {
    //Get the gameArea
    let cardArea = classFinder(-1);
    let gamePile = document.getElementsByClassName(cardArea)[0];

    //Display the card
    gamePile.className = cardArea + " " + card.image;
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

//deck is the area to remove the card from (playerdeck, throwpile, etc)
function removeCard(deck, card) {

}

export {shuffle, moveCard, displayDeck, removeCardFromDeck, displayGamePile, addCardToDeck, drawDeck, gamePile};
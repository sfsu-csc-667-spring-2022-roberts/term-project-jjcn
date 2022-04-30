import './cards.js';


//define all of the decks
let drawDeck = allCards;    //The deck players can draw from
let gamePile = {};          //The deck that players put their cards into
let playerDecks = {};       //An array of player decks


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
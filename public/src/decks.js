import './cards.js';


//define all of the decks
export let drawDeck = allCards;    //The deck players can draw from
export let gamePile = {};          //The deck that players put their cards into
export let playerDecks = {};       //An array of player objects with decks. Example below

// let playerDecks = {
//     {id: 1, arr: {}}
// };       


//Deck Functions

//shuffles the deck to a random instance
export function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

export function move(deck1, deck2, card) {
    //find the cardIndex in deck1
    let cardIndex = deck1.findIndex( (element) => {
        element.id === card.id;
    });
    //Remove the card from deck1
    let cardArray = deck1.splice(cardIndex, 1);
    //Move the card into deck2
    deck2.push(cardArray[0]);
}

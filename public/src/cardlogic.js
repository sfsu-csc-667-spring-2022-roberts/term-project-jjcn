import { allCards } from './cards.js';

// renders the card on the document
function renderCard(card, deck) {
    const mycard = document.createElement("div");
    mycard.className = card.image;
    mycard.onclick = function() {playCard(card)};
    deck.appendChild(mycard);
    return deck;
}

// pop the pullDeck and adds card to playerDeck
function drawCard (playerDeck) {
    const topCard = drawDeck_arr.pop();
    renderCard(topCard, player1Deck_div);
}

// remove card from player deck and display in throw deck
function playCard(card) {
    var currentCards = player1Deck_div.childNodes;
//     console.log(typeof currentCards, currentCards, currentCards[0].className, card, card.image);
    var card_divs = [...currentCards].filter(element => element.className == card.image);
//     console.log("here", card_divs[0]);
    card_divs[0].remove();
    var throwDeck = document.getElementsByClassName("throwDeck")[0];
    throwDeck.className = "throwDeck " + card.image;
}

// debug

var drawDeck_arr = Object.values(allCards);
var drawDeck_div = document.getElementsByClassName("pullDeck")[0];

var player1Deck_div = document.getElementsByClassName("playerOne playerDeck")[0];
var player1Deck_arr = [allCards.r1, allCards.b7, allCards.g_rev, allCards.y_skip];

drawDeck_div.onclick = function() { drawCard(player1Deck_arr) };

player1Deck_arr.forEach(element => renderCard(element, player1Deck_div));




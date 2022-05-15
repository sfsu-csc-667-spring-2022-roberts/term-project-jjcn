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
    player1Deck_arr.push(topCard);

    console.log("deck playable ", isDeckPlayable(player1Deck_arr));
}

// remove card from player deck and display in throw deck
function playCard(card) {
    var currentCards = player1Deck_div.childNodes;
    var card_divs = [...currentCards].filter(element => element.className == card.image);
//     console.log("here", card_divs[0]);
    if (isCardPlayable(card)){
        throwDeck.className = "throwDeck " + card.image;
        throwDeck_card = card;

        card_divs[0].remove();
        const index = player1Deck_arr.indexOf(card);
        player1Deck_arr.splice(index, 1);

//         console.log(throwDeck_card);

    } else {
        console.log("card is not playable");
    }
    console.log("deck playable ", isDeckPlayable(player1Deck_arr));
}

function isCardPlayable(card ){
//     console.log(card, throwDeck_card);
    return (card.color == throwDeck_card.color || card.value == throwDeck_card.value) ? true : false ;
}

function isDeckPlayable(deck){
    for (let i = 0; i < deck.length; i++) {
        if (isCardPlayable(deck[i])){
            return true;
        }
    }
    return false;
}

// debug

var drawDeck_arr = Object.values(allCards);
var drawDeck_div = document.getElementsByClassName("pullDeck")[0];

var player1Deck_div = document.getElementsByClassName("playerOne playerDeck")[0];
let player1Deck_arr = [allCards.r1, allCards.b7, allCards.g5, allCards.r8, allCards.y3];

var throwDeck = document.getElementsByClassName("throwDeck")[0];
var throwDeck_card = allCards.g3;

drawDeck_div.onclick = function() { drawCard(player1Deck_arr) };

player1Deck_arr.forEach(element => renderCard(element, player1Deck_div));
console.log("deck playable ", isDeckPlayable(player1Deck_arr));



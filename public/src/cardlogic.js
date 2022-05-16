import { cardArr } from './cards.js';
import { drawDeck, addCardToDeck, gamePile, moveCard, removeCardFromDeck, displayGamePile } from './decks.js';
import {getCurrentPlayer} from "./gameManager.js";

// renders the card on the document
function renderCard(card, deck) {
    const mycard = document.createElement("div");
    mycard.className = card.image;
    mycard.onclick = function() {playCard(card)};
    deck.appendChild(mycard);
    return deck;
}

// pop the pullDeck and adds card to playerDeck
function drawCard () {
    console.log("drawCard just ran");
    //turn this into drawDeck
    const topCard = drawDeck.pop();
    //renderCard(topCard, player1Deck_div);
    addCardToDeck(getCurrentPlayer(), topCard);
    //player1Deck_arr.push(topCard);

    //console.log("deck playable ", isDeckPlayable(player1Deck_arr));
}

// remove card from player deck and display in throw deck
function playCard(cardImg) {
    console.log("running playCard");
    console.log(cardImg);

    var currPlayer = getCurrentPlayer();

    //get card from event object
    // let thisCard = cardArr.filter(card => card.image === cardImg);
    let card = currPlayer.deck.filter(thisCard => thisCard.image === cardImg)[0];
    console.log(card);

    // var currentCards = getCurrentPlayer().childNodes;
    // var card_divs = [...currentCards].filter(element => element.className === card.image);
//     console.log("here", card_divs[0]);
    if (isCardPlayable(card)){
        // throwDeck.className = "throwDeck " + card.image;
        // throwDeck_card = card;

        moveCard(gamePile, currPlayer.deck, card);
        console.log('Throw deck: ' + gamePile);
        console.log('CurrPlayer deck: ' + currPlayer.deck);
        removeCardFromDeck(currPlayer, card);
        displayGamePile(card);

        // console.log("This card is on the throw pile"  + card);

        // card_divs[0].remove();
        // const index = player1Deck_arr.indexOf(card);
        // player1Deck_arr.splice(index, 1);

//         console.log(throwDeck_card);

    } else {
        console.log("card is not playable");
    }
    // console.log("deck playable ", isDeckPlayable(player1Deck_arr));
}

function isCardPlayable(card){
    console.log(card.color + " " + card.value);
    return (card.color === gamePile[gamePile.length - 1].color || card.value === gamePile[gamePile.length - 1].value) ? true : false ;
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

//var drawDeck_arr = Object.values(allCards);
var drawDeck_div = document.getElementsByClassName("pullDeck")[0];

var player1Deck_div = document.getElementsByClassName("playerOne playerDeck")[0];
//let player1Deck_arr = [allCards.r1, allCards.b7, allCards.g5, allCards.r8, allCards.y3];

var throwDeck = document.getElementsByClassName("throwDeck")[0];
var throwDeck_card = gamePile[gamePile.length - 1];

drawDeck_div.onclick = function() { drawCard() };

//player1Deck_arr.forEach(element => renderCard(element, player1Deck_div));
//console.log("deck playable ", isDeckPlayable(player1Deck_arr));

export {playCard, drawCard};
// import { wild } from './cards.js'
// console.log(wild);
import { allCards } from './cards.js'

// allCards
var player2Deck = document.getElementsByClassName("playerTwo playerDeck")[0];

const mycard = document.createElement("div");

// mydeck.forEach( () => {
//     mycard.className = "unoCard red reverse";
//     player2Deck.appendChild(mycard);
//
// })

mycard.className = allCards.r1.image;
player2Deck.appendChild(mycard);
// document.getElementsByClassName("playerTwo playerDeck")[0].appendChild(mycard);
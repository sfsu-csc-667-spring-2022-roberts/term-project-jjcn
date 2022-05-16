const USER_JOINED = 'user-joined'
const MESSAGE_SEND = 'message-send'
const PLAY_CARD = 'play-card'
const GAME_UPDATED = 'game-updated'

import {allCards} from './cards.js';


var socket = io();

var playCard = function playCard(card) {
    console.log("playCard", card)

};

var userJoined = function userJoined(card) {
    console.log("userJoined", card)

};

var gameUpdate = function gameUpdate(card) {
    console.log("gameUpdate", card)

};

var intializeSocket = function intializeSocket() {
  socket.on(USER_JOINED, userJoined);
  socket.on(PLAY_CARD, playCard);
  socket.on(GAME_UPDATED, gameUpdate);
};

window.onload = () => {
    console.log('in onload');

//     var user = sessionUser ? sessionUser.username : 'anonymous';

    intializeSocket();

    document.querySelector('.playerOne.playerDeck').childNodes[0].onclick = (event) => {
        event.preventDefault();
        var cardClass = document.querySelector('.playerOne.playerDeck').childNodes[0].className;
        var card = allCards.y5;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ card })
        };

        fetch('/game/playcard', requestOptions)
        .then(async (res) => {
            const data = await res.json();
            console.log(data);
        })
        .catch((err) => {
            console.error(err);
        })
//         socket.emit(PLAY_CARD, {card: card})
    }

};
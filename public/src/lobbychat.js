const USER_JOINED = 'user-joined'
const MESSAGE_SEND = 'message-send'

var socket = io();

var userJoined = function userJoined(data) {
//     console.log('in userJoined', data);
    const chatItem = document.createElement("div");
    chatItem.className = "chat-item";

    const p = document.createElement("p");
    p.innerText = `${data.user} joined the lobby\n`;

    chatItem.appendChild(p);
    document.querySelector('.chat-box-content').appendChild(chatItem);
    document.querySelector('.chat-box-content').scrollTop = document.querySelector('.chat-box-content').scrollHeight;
};

var messageReceived = function messageReceived(data) {
//     console.log('in messageReceived', data);
    const img = document.createElement("IMG");
    img.setAttribute("src", "images/userphoto.png");

    const chatItem = document.createElement("div");
    chatItem.className = "chat-item";

    const p = document.createElement("p");
    p.innerText = `${data.user}: ${data.message}\n`;

    chatItem.appendChild(img);
    chatItem.appendChild(p);
    document.querySelector('.chat-box-content').appendChild(chatItem);
    document.querySelector('.chat-box-content').scrollTop = document.querySelector('.chat-box-content').scrollHeight;
};

var intializeSocket = function intializeSocket() {
  socket.on(USER_JOINED, userJoined);
  socket.on(MESSAGE_SEND, messageReceived);
};

window.onload = () => {
    console.log('in onload');

    var user = sessionUser ? sessionUser.username : 'anonymous';

    intializeSocket();
    socket.emit(USER_JOINED, { user: user, timestamp: Date.now() });


    document.querySelector('.chat-action').onclick = (event) => {
        event.preventDefault();
        var message = document.querySelector('.chat-textbox').value;
        document.querySelector('.chat-textbox').value = '';
        socket.emit(MESSAGE_SEND, { user: user, timestamp: Date.now(), message: message });
    }

};
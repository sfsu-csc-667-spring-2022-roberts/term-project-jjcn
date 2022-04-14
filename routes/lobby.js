var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var chat = [
        {
            user: "@user1",
            photo: "/images/userphoto.png",
            message: "this is a sample chat"
        },
        {
            user: "@user2",
            photo: "/images/userphoto.png",
            message: "this is a sample chat"
        },
        {
            user: "@user3",
            photo: "/images/userphoto.png",
            message: "this is a sample chat"
        },
        {
            user: "@user4",
            photo: "/images/userphoto.png",
            message: "this is a sample chat"
        },
        {
            user: "@user5",
            photo: "/images/userphoto.png",
            message: "this is a sample chat"
        }
    ]
    res.render('lobby', { title: 'Lobby' , chat: chat});
});

module.exports = router;
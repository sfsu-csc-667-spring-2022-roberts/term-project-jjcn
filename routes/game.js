var express = require('express');
var router = express.Router();
const cards = require('./../public/src/cards.js'); 

/* GET users listing. */
router.get('/', function(req, res, next) {
    const cardDeck = cards.returnCards(); 
    res.render('game', { title: 'Game Board', cards: cardDeck });
});

router.get('/board', (req,res) => {
    res.render('unoBoard', { title: 'Game Board'});
});

module.exports = router;

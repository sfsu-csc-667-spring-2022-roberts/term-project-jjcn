var express = require('express');
var router = express.Router();
const { USER_JOINED, MESSAGE_SEND, PLAY_CARD, GAME_UPDATED } = require( '../src/constants/events' )
const io = require('../socket/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
    let deck = [
    'unoCard red card1',
    'unoCard yellow card5',
    'unoCard blue card3',
    'unoCard green card9',
    'unoCard red reverse',
    'unoCard yellow skip',
    'unoCard blue draw2',
    'unoCard green wild'];
    // console.log(deck);
    res.render('game', { title: 'Game Board' , deck: deck});
});

router.get('/board', (req,res) => {
    res.render('unoBoard', { title: 'Game Board' });
});

router.get('/playcard', async (req, res) => {
  try {
    res.json({'test': 'test'});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An unexpected error occured' });
  }
});

router.post ('/playcard', (req, res) => {
    console.log("POST", req.body.card, io);
//     io.emit(PLAY_CARD, {card: req.body.card})
//     res.json({'test': 'test'})
    try {

        res.json(req.body.card);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An unexpected error occured' });
    }
})

module.exports = router;

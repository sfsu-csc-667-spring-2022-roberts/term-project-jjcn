var express = require('express');
var router = express.Router();

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
    console.log(deck);
    res.render('game', { title: 'Game Board' , deck: deck});
});

router.get('/board', (req,res) => {
    res.render('unoBoard', { title: 'Game Board' });
});

module.exports = router;

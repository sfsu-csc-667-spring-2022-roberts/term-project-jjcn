var express = require('express');
var router = express.Router();
var gameManager = require('../public/src/gameManager.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('game', { title: 'Game Board' });
});

router.get('/board', (req,res) => {
    res.render('unoBoard', { title: 'Game Board' });
});

module.exports = router;

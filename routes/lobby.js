var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("in lobby, session: ", req.session)
    res.render('lobby', { title: 'Lobby' , sessionUser: (req.session.user) ? req.session.user : null});
});

module.exports = router;
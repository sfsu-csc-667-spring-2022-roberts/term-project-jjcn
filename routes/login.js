var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Log In' });
});

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);
    res.send('credentials sent to server');
})

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res, next){
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    console.log(email, username, password);
    res.send('account info has been received');
})

module.exports = router;

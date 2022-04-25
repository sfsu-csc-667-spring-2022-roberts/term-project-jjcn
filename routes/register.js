var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

const saltRounds = 10;
const plainPassword = "TheVoodoo"

/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

const bodyParser = require('body-parser');
const { func } = require('../db');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res, next){
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    console.log(email, username, password);
    
    // Testing bcrypt below:

    bcrypt.genSalt(saltRounds, function(err, salt) { // using function
        bcrypt.hash(plainPassword, salt, function(err, hash) {
            console.log("Testing hash: ", hash)
        })
    })

    console.log()


    // res.send('account info has been received');
    res.redirect('/lobby')
})

module.exports = router;
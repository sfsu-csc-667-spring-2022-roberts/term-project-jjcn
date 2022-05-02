var express = require('express');
var router = express.Router();
const userdb = require('./../models/user');
/* GET login page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

const bodyParser = require('body-parser');
const { response } = require('../app');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function(req, res, next){
    var emails = req.body.email;
    var username = req.body.username;
    var passwords = req.body.password;
   // console.log(emails, username, passwords);
    //res.send('account info has been received');

    //inserting user registration info into user database
    userdb.create({ //getting TypeError: userdb.create is not a function
        //userID: 123456,
        firstName: username,
        lastName: "lastname",
        email: emails,
        password: passwords,
        createdAt: new Date()
    }).then((userdb) => {
        res.json(userdb);
    }, (errors) =>{
        res.json(errors);
    });


})
module.exports = router, userdb;
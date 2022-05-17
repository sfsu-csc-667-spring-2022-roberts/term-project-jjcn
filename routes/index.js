var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lobby', { title: 'Lobby' , sessionUser: (req.session.user) ? req.session.user : null});
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/logout', function(req, res, next) {
  console.log("in logout, session: ", req.session)
  req.session.destroy(() => {
    console.log("User logged out, session: ", req.session);
  });
  res.redirect("lobby");

});


module.exports = router;
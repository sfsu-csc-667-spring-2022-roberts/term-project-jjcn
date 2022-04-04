var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/lobby', function(req, res, next) {
  res.render('lobby');
});
module.exports = router;

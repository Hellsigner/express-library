var express = require('express');
var passport = require('passport');

var router = express.Router();

router.get('/', function (req, res) {
  if (!req.user) {
    return res.redirect('/login');
  }
  //res.render('index', { user : req.user });
  return res.redirect('/books');
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

module.exports = router;

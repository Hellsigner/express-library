var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', {messages: req.flash('error')});
});

router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/user/login',
        failureFlash: 'Invalid credentials, try again' })
);

router.get('/logout', function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.get('/', function(req, res, next) {
    if (!req.user) {
        return res.redirect('/login');
    }
    res.render('user', {user: req.user});
});

module.exports = router;

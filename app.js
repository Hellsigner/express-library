var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('connect-flash');

var config = require(__dirname + '/config');

var passport = require('passport');
var passportLocal = require('passport-local');

var indexRoute = require('./routes/index');
var redirectsRoute = require('./routes/redirects');
var booksRoute = require('./routes/books');
var userRoute = require('./routes/user');

var models = require('./models');

var passwordService = require('./service/password');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

var hbs = require('express-hbs');

// Use `.html` for extensions and find partials in `views/partials`.
app.set('view engine', 'html');
app.engine('html', hbs.express4({
    partialsDir: __dirname + '/views/partials',
    layoutsDir: __dirname + '/views/layouts',
    extname: '.html'
}));

app.set('views', __dirname + '/views');

hbs.registerHelper(require('handlebars-layouts')(hbs.handlebars));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(flash());

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

passport.use(new passportLocal.Strategy(function (username, pass, done) {
    console.log('username:', username, 'pass:', pass);
    if (!username || !pass) {
        return done(null, false, {message: 'Missing credentials'});
    }
    var res = passwordService.hash(pass);
    console.log('hashed:', res);
    models.User.findOne({where: {username: username}}).then(function (user) {
        console.log('found:', user);
        if (user && res === user.password) {
            return done(null, user);
        }
        return done(null, false, {message: 'Invalid credentials'});
    });

}));

passport.serializeUser(function (user, done) {
    return done(null, JSON.stringify(user));
});
passport.deserializeUser(function (serialized, done) {
    return done(null, JSON.parse(serialized));
});


app.use('/', redirectsRoute);
app.use('/', indexRoute);
app.use('/user', userRoute);

// protected resources
app.use(function (req, res, next) {
    if (!req.user) {
        return res.redirect('/login');
    }
    next();
});
app.use('/books', booksRoute);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

/**
 * Created by hellsigner on 28.07.15.
 */

var express = require('express');
var router = express.Router();

// todo: bearer auth strategy for API
// todo: swagger on /api/swagger

router.route('/books')
    .get(function (req, res, next) {
        var err = new Error('Bad request');
        err.status = 400;
        return next(err);
    })
    .post(function(req, res, next) {
        res.end(501);
    })
    .options(function(req, res, next) {
        res.end(200);
    })
    .all(function(req, res, next) {
        res.end(405);
    });

router.route('/books/:id(\\d+)')
    .get(function (req, res, next) {
        res.send('id: ' + req.params.id);
    })
    .put(function(req, res, next) {
        res.end(501);
    })
    .patch(function(req, res, next) {
        res.end(405);
    })
    .all(function(req, res, next) {
        res.end(405);
    });

// 404 handler
router.use(function(req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    return next(err);
});

// development error handler
// will print stacktrace
if (router.get('env') === 'development') {
    router.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
router.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: err
    });
});

module.exports = router;


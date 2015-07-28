/**
 * Created by hellsigner on 27.07.15.
 */

var config = require(__dirname + '/../config');
var bcrypt = require('bcrypt');

module.exports = {
    hash: function(pass) {
        return bcrypt.hashSync(pass, config.bcrypt_salt);   // todo: make it async
    },
    compare: function(pass, hash, next) {
        return bcrypt.compare(pass, hash, next)
    }
};



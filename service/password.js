/**
 * Created by hellsigner on 27.07.15.
 */

var bcrypt = require('bcrypt');

module.exports = {
    hash: function(pass) {
        return bcrypt.hashSync(pass, '$2a$10$vI8aWBnW3fID.ZQ4/zo1G.q1lRps.9cGLcZEiGDMVr5yUP1KUOYTa');
    },
    compare: function(pass, hash, next) {
        return bcrypt.compare(pass, hash, next)
    }
};



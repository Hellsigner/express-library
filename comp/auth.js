/**
 * Created by hellsigner on 14.07.15.
 */

var hash = require('./password').hash;

// database stub
var users = {
    admin: {
        username: "admin"
    }
};

hash('admin', function(err, salt, hash) {
    if (err) throw err;
    users.admin.salt = salt;
    users.admin.hash = hash.toString();
});

module.exports = {
    authenticate: function(username, password, fn)
    {
        console.log('authenticating %s:%s', name, pass);

        var user = users[name];
        // query the db for the given username
        if (!user) return fn(new Error('cannot find user'));
        // apply the same algorithm to the POSTed password, applying
        // the hash against the pass / salt, if there is a match we
        // found the user
        hash(pass, user.salt, function(err, hash){
            if (err) return fn(err);
            if (hash.toString() == user.hash) return fn(null, user);
            fn(new Error('invalid password'));
        })
    }
};

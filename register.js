/**
 * Created by hellsigner on 27.07.15.
 */

var passwordService = require('./service/password');
var sys = require('sys');
var User = require('./models').User;

var readline = require('readline');

var rl;
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a valid username: ', function (username) {
    // ..validation
    rl.close();
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout  // todo: mute
    });
    rl.question('Enter a valid password: ', function (password) {
        rl.close();
        User.findOne({username: username}).then(function(user) {
            if (user) {
                console.log('User with the same name already exists! Aborting.');
                process.exit(0);
            }
            User.create({username: username, password: passwordService.hash(password)})
                .then(function () {
                    console.log('User created!');

                }).catch(function(error) {
                    console.log('Could not create a user!');
                    console.log(error);
                });
        });
    });
});

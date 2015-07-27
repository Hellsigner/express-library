/**
 * Created by hellsigner on 16.07.15.
 */

var nconf = require('nconf');
var path = require('path');

nconf.env()
    .argv()
    .file({file: path.join(__dirname, 'global.json')})
    .load();

module.exports = nconf;

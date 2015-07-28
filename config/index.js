/**
 * Created by hellsigner on 16.07.15.
 */

var env = process.env.NODE_ENV || 'development';
module.exports = require('./config.json')[env];

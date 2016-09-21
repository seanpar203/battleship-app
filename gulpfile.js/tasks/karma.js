var gulp   = require('gulp');
var Server = require('karma').Server;
var config = require('../config').js.test;

var karmaTask = function(done) {
  new Server(config.karma, done).start();
};

gulp.task('karma', karmaTask);

module.exports = karmaTask;

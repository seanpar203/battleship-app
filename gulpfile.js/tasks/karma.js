var gulp   = require('gulp');
var Server = require('karma').Server;
var config = require('../config').js.test.karma;

gulp.task('karma', function (cb) {
  Server.start(config, function(exitStatus){
    // @link https://github.com/vigetlabs/gulp-starter/pull/133/files
    //
    // Karma's return status is not compatible with gulp's streams
    // See: http://stackoverflow.com/questions/26614738/issue-running-karma-task-from-gulp
    // or: https://github.com/gulpjs/gulp/issues/587 for more information
    cb(exitStatus ? "There are failing unit tests" : undefined);
  });
});

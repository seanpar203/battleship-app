var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('live-update', function(cb) {
  runSequence('watch', 'browser-sync', cb);
});

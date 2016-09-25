var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(cb) {
  require('dotenv').config();
  runSequence('clean', [ 'sass', 'images', 'extras', 'html' ], 'live-update', cb);
});

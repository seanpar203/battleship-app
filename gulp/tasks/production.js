var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('production', function(cb) {
  runSequence(
    'clean',
    [ 'markup', 'extras', 'images', 'minify-css', 'minify-js' ],
    'fingerprint',
  cb);
});

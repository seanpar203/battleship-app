var argv        = require('yargs').argv;
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('production', function(cb) {
  var sequence = [
    'clean',
    [ 'minify-html', 'extras', 'images', 'minify-css', 'minify-js' ]
  ];

  if (argv.fingerprint === true) {
    sequence.push('fingerprint');
  }

  sequence.push(cb);

  runSequence.apply(this, sequence);
});

var argv        = require('yargs').argv;
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('production', function(cb) {
  require('dotenv').config();
  var sequence = [
    'clean',
    [ 'minify-html', 'extras', 'images', 'minify-css', 'minify-js' ]
  ];

  if (argv.test === true) {
    sequence.push('test');
  }

  if (argv.fingerprint === true) {
    sequence.push('fingerprint');
  }

  sequence.push(cb);

  runSequence.apply(this, sequence);
});

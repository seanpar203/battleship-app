var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('test', function(cb) {
  var sequence = [ 'karma', 'nightwatch' ];

  sequence.push(cb);

  runSequence.apply(this, sequence);
});




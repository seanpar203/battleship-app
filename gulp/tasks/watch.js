var gulp        = require('gulp');
var config      = require('../config');
var runSequence = require('run-sequence');

gulp.task('watch', function(cb) {
  runSequence('clean', [ 'watchify', 'sass', 'images', 'extras', 'markup' ], cb);

  gulp.watch(config.css.watch,    [ 'sass' ]);
  gulp.watch(config.images.src,   [ 'images' ]);
  gulp.watch(config.markup.watch, [ 'markup' ]);
  gulp.watch(config.js.src,       [ 'lint-js' ]);

  // Watchify will watch and recompile our JS, so no need to gulp.watch it

});

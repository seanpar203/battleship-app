var gulp   = require('gulp');
var config = require('../config');
var watch  = require('gulp-watch');

gulp.task('watch', [ 'watchify', 'browser-sync' ], function() {
  watch(config.css.watch,    [ 'sass' ]);
  watch(config.images.src,   [ 'images' ]);
  watch(config.markup.watch, [ 'markup' ]);
  watch(config.js.src,       [ 'lint-js' ]);

  // Watchify will watch and recompile our JS, so no need to gulp.watch it

});

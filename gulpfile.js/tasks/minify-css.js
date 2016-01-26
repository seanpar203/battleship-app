var gulp    = require('gulp');
var config  = require('../config').css;
var size    = require('gulp-filesize');
var cssnano = require('gulp-cssnano');

gulp.task('minify-css', [ 'sass' ], function() {
  return gulp.src(config.production.src)
    .pipe(cssnano(config.minify))
    .pipe(gulp.dest(config.production.dest))
    .pipe(size());
});

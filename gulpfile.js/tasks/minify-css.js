var gulp   = require('gulp');
var config = require('../config').css.production;
var minify = require('gulp-minify-css');
var size   = require('gulp-filesize');

gulp.task('minify-css', [ 'sass' ], function() {
  return gulp.src(config.src)
    .pipe(minify(config.minifycss))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});

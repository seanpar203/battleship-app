var gulp      = require('gulp');
var config    = require('../config').production;
var minifyCSS = require('gulp-minify-css');
var size      = require('gulp-filesize');

gulp.task('minify-css', [ 'sass' ], function() {
  return gulp.src(config.css.src)
    .pipe(minifyCSS(config.css.minification))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
})

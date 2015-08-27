var gulp     = require('gulp');
var jshint   = require('gulp-jshint');
var reporter = require('jshint-stylish');
var config   = require('../config').js;

gulp.task('lint-js', function () {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(reporter));
});

var gulp   = require('gulp');
var config = require('../config').production;
var size   = require('gulp-filesize');
var uglify = require('gulp-uglify');

gulp.task('minify-js', [ 'browserify' ], function() {
  return gulp.src(config.js.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});

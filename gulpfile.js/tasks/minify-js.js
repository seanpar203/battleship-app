var gulp   = require('gulp');
var config = require('../config').js;
var size   = require('gulp-filesize');
var uglify = require('gulp-uglify');

gulp.task('minify-js', [ 'browserify' ], function() {
  return gulp.src(config.production.src)
    .pipe(uglify(config.uglify))
    .pipe(gulp.dest(config.production.dest))
    .pipe(size());
});

var gulp   = require('gulp');
var config = require('../config').js.production;
var size   = require('gulp-filesize');
var uglify = require('gulp-uglify');

gulp.task('minify-js', [ 'browserify' ], function() {
  return gulp.src(config.src)
    .pipe(uglify(config.uglify))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});

var gulp    = require('gulp');
var config  = require('../config').html;
var htmlmin = require('gulp-htmlmin');

gulp.task('minify-html', [ 'html' ], function() {
  return gulp.src(config.production.src)
    .pipe(htmlmin(config.htmlmin))
    .pipe(gulp.dest(config.production.dest))
});

var gulp    = require('gulp');
var config  = require('../config').html.production;
var htmlmin = require('gulp-htmlmin');

gulp.task('minify-html', [ 'html' ], function() {
  return gulp.src(config.src)
    .pipe(htmlmin(config.htmlmin))
    .pipe(gulp.dest(config.dest))
});

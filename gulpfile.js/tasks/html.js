var gulp        = require('gulp');
var config      = require('../config').html;
var browserSync = require('browser-sync');
var preprocess  = require('gulp-preprocess');
var markdown    = require('markdown').markdown;
var fs          = require('fs');

var readme = function () {
  return markdown.toHTML(fs.readFileSync('README.md', 'utf8'));
};

gulp.task('html', function() {
  return gulp.src(config.src)
    .pipe(preprocess({ context: { readme: readme }}))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream: true }));
});

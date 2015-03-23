var gulp      = require('gulp');
var revall    = require('gulp-rev-all');
var gulpIf    = require('gulp-if');
var config    = require('../config').rev;
var argv      = require('yargs').argv;
var revNapkin = require('gulp-rev-napkin');

gulp.task('revall', function() {
  console.log(argv);
  return gulp.src(config.src)
    .pipe(revall())
    .pipe(gulpIf(argv.rename, gulp.dest(config.dest))) // rename the files for rename flag
    .pipe(gulpIf(argv.rename, revNapkin(config.napkin)))
    .pipe(revall.manifest({ fileName: '../manifest.json' }))
    .pipe(gulp.dest(config.manifest.path))
});

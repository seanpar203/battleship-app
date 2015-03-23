var gulp      = require('gulp');
var gulpIf    = require('gulp-if');
var revall    = require('gulp-rev-all');
var config    = require('../config').rev;
var argv      = require('yargs').argv;
var revNapkin = require('gulp-rev-napkin');

gulp.task('fingerprint', function(){
  var options = config.fingerprint.options;

  if ( ! argv.cdn) {
    delete options.prefix;
  }

  if (argv.rename) {
    delete options.dontRename;
  }

  return gulp.src(config.src, { base: config.dest })
    .pipe(revall(options))
    .pipe(gulpIf(argv.rename, revNapkin(config.napkin)))
    .pipe(gulp.dest(config.dest));
});

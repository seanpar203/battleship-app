var argv      = require('yargs').argv;
var config    = require('../config').rev;
var gulp      = require('gulp');
var gulpIf    = require('gulp-if');
var revNapkin = require('gulp-rev-napkin');
var RevAll    = require('gulp-rev-all');

gulp.task('fingerprint', function(){
  var options = config.fingerprint.options,
      revAll;

  if ( ! argv.cdn) {
    delete options.prefix;
  }

  if (argv.rename) {
    delete options.dontRenameFile;
  }

  revAll = new RevAll(options);

  return gulp.src(config.src, { base: config.dest })
    .pipe(revAll.revision())
    .pipe(gulpIf(argv.rename, revNapkin(config.napkin)))
    .pipe(gulp.dest(config.dest));
});

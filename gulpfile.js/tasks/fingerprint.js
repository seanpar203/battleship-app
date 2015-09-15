var argv      = require('yargs').argv;
var config    = require('../config').rev;
var gulp      = require('gulp');
var gulpIf    = require('gulp-if');
var revNapkin = require('gulp-rev-napkin');
var RevAll    = require('gulp-rev-all');
var ignore    = require('gulp-ignore');

gulp.task('fingerprint', function(){
  var options = config.options, revAll;

  if ( ! argv.cdn) {
    delete options.prefix;
  }

  if ( ! argv.rename) {
    options.dontRenameFile = [ '.*' ];
  }

  revAll = new RevAll(options);

  return gulp.src(config.src, { base: config.dest })
    .pipe(revAll.revision())
    .pipe(gulp.dest(config.dest))
    .pipe(ignore.exclude('*.html'))
    .pipe(gulpIf(argv.rename, revNapkin({ verbose: true })))
    .pipe(revAll.manifestFile())
    .pipe(gulp.dest(config.dest));
});

var changed     = require('gulp-changed');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var config      = require('../config').images;
var browserSync = require('browser-sync');
var argv        = require('yargs').argv;
var _           = require('lodash');
var gulpIf      = require('gulp-if');
const pngquant  = require('imagemin-pngquant');

gulp.task('images', function() {
  return gulp.src(config.src, { base: 'app/assets/images' })
    .pipe(changed(config.dest))
    .pipe(imagemin(_.extend(
      config.imagemin,
      { use: [ pngquant() ] }
    )))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream: true }));
});

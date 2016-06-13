var changed     = require('gulp-changed');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var config      = require('../config').images;
var browserSync = require('browser-sync');
var _           = require('lodash');
const pngquant  = require('imagemin-pngquant');

gulp.task('images', function() {
  // For a src like app/assets/images/**/*, this will attempt to grab the path
  // from that, resulting in app/assets/images
  var basePath = config.src.replace(/\/\*.+$/, '');

  return gulp.src(config.src, { base: basePath })
    .pipe(changed(config.dest))
    .pipe(imagemin(_.extend(
      config.imagemin,
      { use: [ pngquant() ] }
    )))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream: true }));
});

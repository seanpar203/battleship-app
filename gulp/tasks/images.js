var changed     = require('gulp-changed');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var config      = require('../config').images;
var browserSync = require('browser-sync');
var argv        = require('yargs').argv;
var _           = require('lodash');
var gulpIf      = require('gulp-if');

gulp.task('images', function() {
  return gulp.src(config.src, { base: 'app/assets/images' })
    .pipe(gulpIf( ! _.includes(argv._, 'production'), changed(config.dest))) // Ignore unchanged files
    .pipe(imagemin(config)) // Optimize
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({ stream:true }));
});

const changed = require('gulp-changed');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../config').images;
const browserSync = require('browser-sync');
const argv = require('yargs').argv;
const _ = require('lodash');
const gulpIf = require('gulp-if');
const pngquant = require('imagemin-pngquant');

gulp.task('images', function () {
	return gulp.src(config.src, {base: 'app/assets/images'})
	           .pipe(gulp.dest(config.dest))
	           .pipe(browserSync.reload({stream: true}));
});

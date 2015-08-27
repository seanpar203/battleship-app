var gulp   = require('gulp');
var config = require('../config').extras;
var argv   = require('yargs').argv;
var _      = require('lodash');

gulp.task('extras', function() {
  var src = _.toArray(config.src);

  // If renaming is happening, don't include the .htaccess
  if (argv.rename) {
    _(src).reject(function(mask) { return _.includes(mask, '.htaccess'); });
  }

  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

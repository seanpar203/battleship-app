var gulp    = require('gulp');
var config  = require('../config').extras;
var changed = require('gulp-changed');
var argv    = require('yargs').argv;
var _       = require('lodash');
var merge   = require('merge-stream');

gulp.task('extras', function() {
  var tasks = config.mapping.map(function(mapping){
    // If renaming is happening, don't include the .htaccess
    if (argv.rename) {
      _(mapping.src).reject(function(mask) { return _.includes(mask, '.htaccess'); });
    }

    return gulp.src(mapping.src)
      .pipe(changed(mapping.dest)) // Ignore unchanged files
      .pipe(gulp.dest(mapping.dest));
  });

  return merge(tasks);
});

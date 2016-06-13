var browserify   = require('browserify');
var browserSync  = require('browser-sync');
var watchify     = require('watchify');
var gulp         = require('gulp');
var mergeStream  = require('merge-stream');
var bundleLogger = require('../util/bundle-logger');
var handleErrors = require('../util/handle-errors');
var source       = require('vinyl-source-stream');
var config       = require('../config').browserify;
var _            = require('lodash');

var browserifyTask = function(devMode) {
  var browserifyThis = function(bundleConfig) {

    if (devMode) {
      _.extend(bundleConfig, watchify.args, { debug: true });
    }

    var b = browserify(bundleConfig);

    var bundle = function() {
      bundleLogger.start(bundleConfig.outputName);

      return b
        .bundle()
        .on('error', handleErrors)
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .pipe(browserSync.reload({
          stream: true
        }));
    };

    if (devMode) {
      b = watchify(b);

      b.on('update', bundle);

      bundleLogger.watch(bundleConfig.outputName);
    } else if (bundleConfig.require) {
      b.require(bundleConfig.require);
    }

    return bundle();
  };

  return mergeStream.apply(gulp, _.map(config.bundleConfigs, browserifyThis));
};

gulp.task('browserify', function() {
  return browserifyTask();
});

module.exports = browserifyTask;

var gulp         = require('gulp');
var http         = require('http');
var serveStatic  = require('serve-static');
var finalhandler = require('finalhandler');
var config       = require('../config').js.test.nightwatch;
var spawn        = require('child_process').spawn;
var path         = require('path');

gulp.task('nightwatch', function(callback) {
  serveStatic = serveStatic(
    config.server.root,
    config.server.config
  );

  var server = http.createServer(function(req, res){
    serveStatic(req, res, finalhandler(req, res));
  }).listen(config.server.port);

  child = spawn(
    'node',
    [
      path.join(__dirname, '..', 'util', 'nightwatch.js'),
      JSON.stringify(config)
    ],
    {
      stdio: 'inherit'
    }
  );

  child.on('exit', function(code) {
    server.close();
    callback(code);
  });
});

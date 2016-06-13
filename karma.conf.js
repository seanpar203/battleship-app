module.exports = function(config) {
  config.set({

    basePath: 'app/',

    frameworks: [ 'browserify', 'mocha' ],

    files: [
      '../test/**/*.js'
    ],

    preprocessors: {
      '../test/**/*.js': 'browserify',
      './**/*.js':  'browserify'
    },

    browserify: {
      debug:      true,
      extensions: [ '.js' ],
      transform: [
        'partialify',
        'babelify',
        'rollupify',
        'browserify-swap',
        'browserify-shim'
      ]
    },

    reporters: [ 'nyan' ],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [ 'Chrome' ],

    browserNoActivityTimeout: 30000

  });
};

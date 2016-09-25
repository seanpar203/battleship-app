var _ = require('lodash');
var path = require('path');
var modRewrite = require('connect-modrewrite');

var src = './app';
var dest = './public';

module.exports = {

  browserify: {

    bundleConfigs: [
      {
        entries: src + '/assets/javascripts/app.js',
        dest: dest + '/assets',
        outputName: 'app.js',
      },
    ],

  },

  browserSync: {

    server: {
      baseDir: dest,
      middleware: [
        modRewrite([
          '^/assets/(.+)--([\\.a-z0-9/]+)(\\.[a-z0-9]+)$ /assets/$1$3 [L]'
        ]),
      ],
    },

    snippetOptions: {
      blacklist: ['**/*?nosync'],
    },

  },

  clean: {

    src: dest,

  },

  css: {

    src: [
      src + '/assets/stylesheets/**/*.scss',
      '!' + src + '/assets/stylesheets/**/_*.scss'
    ],
    dest: dest + '/assets',
    watch: src + '/assets/stylesheets/*.scss',

    sass: {
      style: 'nested',
      precision: 3,
      includePaths: [].concat.apply([], [
        'node_modules/bootstrap-sass/assets/stylesheets'
      ]),
    },

    minify: {
      discardComments: {removeAll: true},
      discardEmpty: true,
    },

    autoprefixer: {
      browsers: [
        'last 5 versions',
        'Explorer >= 8'
      ],
    },

    production: {

      src: dest + '/assets/*.css',
      dest: dest + '/assets',

    },

  },

  extras: {

    mapping: [
      {
        src: [src + '/\.htaccess'],
        dest: dest
      },
      {
        src: src + '/assets/fonts/**/*.{woff,ttf,eot}',
        dest: dest + '/assets',
      }
    ],

  },

  html: {

    watch: src + '/**/*.html',
    src: [
      src + '/**/*.html',
      src + '/**/*.php',
      '!' + src + '/**/_*.html',
      '!' + src + '/templates/**/*'
    ],
    dest: dest,

    htmlmin: {
      collapseWhitespace: true,
      customAttrSurround: [
        [
          /@/,
          /(?:)/
        ]
      ], // vue.js @ attributes
    },

    production: {

      src: dest + '/*.html',
      dest: dest,

    },

  },

  images: {

    src: src + '/assets/images/**/*',
    dest: dest + '/assets',

    imagemin: {
      optimizationLevel: 7,
      progressive: true,
      interlaced: true,
      multipass: true,
    },

  },

  js: {

    src: [src + '/assets/javascripts/**/*.js'],
    dest: dest + '/assets',

    eslint: {
      parser: 'babel-eslint',
      ecmaFeatures: {
        templateStrings: true,
        modules: true,
        destructuring: true,
        restParams: true,
        arrowFunctions: true,
        classes: true,
        defaultParams: true,
      },
    },

    test: {

      karma: {

        configFile: process.cwd() + '/karma.conf.js',
        singleRun: true,

      },

      server: {
        root: process.cwd() + '/public',
        port: 8888,
        config: {
          'index': [
            'index.html',
            'index.htm'
          ],
        },
      },

      nightwatch: {

        config: process.cwd() + '/nightwatch.conf.js',
        env: 'default',

      },

    },

    production: {

      src: dest + '/assets/*.js',
      dest: dest + '/assets',

    },

  },

  rev: {

    src: [dest + '/**/*'],
    dest: dest,

    options: {
      dontRenameFile: [
        /\/\..*/,
        '.html'
      ],
      dontUpdateReference: ['.html'],
      prefix: 'https://cdn.example.com/',
      debug: true,
      transformFilename(file, hash) {
        var ext = path.extname(file.path);

        return path.basename(file.path, ext) + '--' + hash.substr(0, 5) + ext;
      },
    },

  },

};

var path       = require('path');
var modRewrite = require('connect-modrewrite')

var src  = './app';
var dest = './public';

module.exports = {

  clean: {

    src: dest

  },

  browserify: {

    bundleConfigs: [
      {
        entries:    src + '/assets/javascripts/app.js',
        dest:       dest + '/assets',
        outputName: 'app.js'
      }
    ]

  },

  css: {

    src:   [ src + '/assets/stylesheets/**/*.scss', '!' + src + '/assets/stylesheets/**/_*.scss' ],
    dest:  dest + '/assets',
    watch: src + '/assets/stylesheets/**/*.scss',

    sass: {
      style:        'nested',
      precision:    3,
      includePaths: [].concat.apply([], [
        'node_modules/bootstrap-sass/assets/stylesheets'
      ])
    },

    minify: {
      discardComments: { removeAll: true },
      discardEmpty:    true
    },

    autoprefixer: {
      browsers: [ 'last 5 versions', 'Explorer >= 8' ]
    },

    production: {

      src:  dest + '/assets/*.css',
      dest: dest + '/assets',

    }

  },

  fonts: {

    src:  src + '/assets/fonts/**/*.{woff,ttf,eot}',
    dest: dest + '/assets'

  },

  extras: {

    src:  [ src + '/\.htaccess' ],
    dest: dest

  },

  images: {

    src:  src + '/assets/images/**/*',
    dest: dest + '/assets',

    imagemin: {
      optimizationLevel: 7,
      progressive:       true,
      interlaced:        true,
      multipass:         true
    }

  },

  js: {

    src:  [ src + '/assets/javascripts/**/*.js' ],
    dest: dest + '/assets',

    eslint: {
      parser:       'babel-eslint',
      ecmaFeatures: {
        templateStrings: true,
        modules:         true,
        destructuring:   true,
        restParams:      true,
        arrowFunctions:  true,
        classes:         true,
        defaultParams:   true
      }
    },

    uglify: {

    },

    production: {

      src:  dest + '/assets/*.js',
      dest: dest + '/assets',

    }

  },

  html: {

    watch: src + '/**/*.html',
    src:   [
      src + '/**/*.html',
      '!' + src + '/**/_*.html',
      '!' + src + '/templates/**/*'
    ],
    dest: dest,

    htmlmin: {
      collapseWhitespace: true
    },

    production: {

      src:  dest + '/*.html',
      dest: dest,

    }

  },

  rev: {

    src:  [ dest + '/**/*' ],
    dest: dest,

    options: {
      dontRenameFile:      [ /\/\..*/, '.html' ],
      dontUpdateReference: [ '.html' ],
      prefix:              'https://cdn.example.com/',
      debug:               true,
      transformFilename(file, hash) {
        var ext = path.extname(file.path);

        return path.basename(file.path, ext) + '--' + hash.substr(0, 5) + ext;
      }
    }

  },

  browserSync: {

    server: {
      baseDir:    dest,
      middleware: [
        modRewrite([
          '^/assets/(.+)--([\\.a-z0-9/]+)(\\.[a-z0-9]+)$ /assets/$1$3 [L]'
        ])
      ],
    },

    snippetOptions: {
      blacklist: ['**/*?nosync']
    }

  }

};
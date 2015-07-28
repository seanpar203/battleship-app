var path = require('path');

var src  = './app';
var dest = './public';

module.exports = {

  browserify: {

    bundleConfigs: [

      {
        entries: src + '/assets/javascripts/app.js',
        dest: dest + '/assets',
        outputName: 'app.js'
      }

    ]

  },

  css: {

    watch: src + '/assets/stylesheets/**/*.scss',

    sass: {

      style: 'nested',
      precision: 3,
      includePaths: [].concat.apply([], [
        require('node-bourbon').includePaths,
        require('node-neat').includePaths,
        'node_modules/bootstrap-sass/assets/stylesheets'
      ])

    },

    autoprefixer: {

      browsers: [ 'last 5 versions', 'Explorer >= 8' ]

    },

    src: [ src + '/assets/stylesheets/**/*.scss', '!' + src + '/assets/stylesheets/**/_*.scss' ],

    dest: dest + '/assets'

  },

  fonts: {

    src: src + '/assets/fonts/**/*.{woff,ttf,eot}',

    dest: dest + '/assets'

  },

  extras: {

    src: [ src + '/\.htaccess' ],

    dest: dest

  },

  images: {

    imagemin: {

      optimizationLevel: 3,
      progressive: true,
      interlaced: true

    },

    src: src + '/assets/images/**/*',

    dest: dest + '/assets'

  },

  js: {

    src: [ src + '/assets/javascripts/**/*.js' ],

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
        defaultParams: true
      }
    }

  },

  markup: {

    watch: src + '/**/*.html',

    src: [ src + '/**/*.html', '!' + src + '/**/_*.html' ],

    dest: dest

  },

  rev: {

    src: [ dest + '/**/*' ],

    dest: dest,

    fingerprint: {

      options: {

        dontGlobal: [ '.html' ],
        dontRenameFile: [ '.*' ],
        prefix: 'https://cdn.example.com/',
        debug: true,
        transformFilename: function (file, hash) {
          var ext = path.extname(file.path);

          return path.basename(file.path, ext) + '--' + hash.substr(0, 5) + ext;
        }

      }

    },

    napkin: {

      verbose: false

    }

  },

  browserSync: {

    server: {

      baseDir: dest

    }

  },

  production: {

    css: {

      src: dest + '/assets/*.css',

      minification: {

        keepBreaks: true,
        compatibility: 'ie8'

      }

    },

    js: {

      src: dest + '/assets/*.js'

    },

    dest: dest + '/assets'

  }

};

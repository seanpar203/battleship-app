# Label Starter App

Boilerplate build tool for web apps at Label Interactive, based heavily on the [Yeoman](http://yeoman.io/) [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp).

## Dependencies

 - [Homebrew](http://brew.sh)
 - [Node](http://nodejs.org/)
 - [Bower](http://bower.io/)
 - [Ruby 2.0+](http://ruby-lang.org)
 - [Gulp](http://gulpjs.com/)

*See `gulpfile.js` and `bower.json` for a full list of plugins and 3rd party libraries.*

## Installation

 1. Clone this project.
 2. Make sure you have [Homebrew](http://brew.sh/) installed.
 3. Run the `bin/install-deps` script found within this project.
 4. Remove this `README.md` file.
 5. Update `package.json` to reflect the new project details.

> **Note:** The `install-deps` script will install Node.js and Gulp if they are not already available. It does this via [Homebrew](http://brew.sh/). This script can be run anytime to pull in changes in `package.json`.

### Gulp

Run `gulp` once from the project root to build the project and start the watcher. The `public/` directory will be updated with the latest compiled version of the site. Browser-sync will open a tab pointing at `public/` and update individual assets whenever they are recompiled.

Running `gulp production` will build the project for production use.
In addition to the normal compilation of asset, the production build wil

 - Minify/compress CSS and JS files.
 - Inject a cache token *(for cache-busting)* to all asset references.

A `--rename` flag can be included to rename the files on the filesystem with the cache tokens. This is useful in environments that Apache's `mod_rewrite` is not enabled.

> Without `--rename`, an `.htaccess` file will be set in the `public/` directory to transform requests for assets that include a cache token in the filename back to the real file on the filesystem which does not include the cache token. With the `--rename` option in place, this is not necessary.
### Web Server

Running `./bin/serve` will run a local web server on port `8000`. To use a different port, specify it as the first argument. The web server is useful to view the website locally, particularly when cache-busting tokens are being injected in asset URLs.

> **Note:** It's a good idea to append `./bin` to your `$PATH`. Instead of typing `./bin/serve 8084`, you could type `serve 8084`.

## Changelog

#### 0.5.0

 - Full rewrite of gulp tasks, now based off of [`gulp-starter`](https://github.com/greypants/gulp-starter).
 - Integration with Babel.js, supporting ES6.

#### 0.4.2 - November 14, 2014

 - Added `bin/serve` utility
 - Updated npm dependencies
 - README tweaks

#### 0.4.1 - October 26, 2014

 - Added `bin/install-deps` build tool

#### 0.4.0 - September 22, 2014

 - Removed `gulp-cache` due to continuous regressions.
 - Added `gulp-file-include` for partial and basic variable replacement support
 - Added example `./app/js/pages/index.js`.
 - Fleshed out `./app/index.html`.
 - Added SASS extension for inclusion of cache tokens.
 - Added `gulp-template` plugin support and `asset()` helper method to support cache tokens in HTML.
 - Added new `static` gulp task to rename assets with hard-coded cache tokens

#### 0.3.0 - August 20, 2014

 - Replaced `bootstrap` with `bootstrap-sass` to include only the files we need.
 - Updated the `gulpfile.js` with new `yargs` package for `--production` flag support.

#### 0.2.0 - August 11, 2014

 - Added Gemfile for Sass.
 - Added Backbone.js, Bootstrap, and others as standard dependencies.

#### 0.1.1 - July 22, 2014

 - Removed deprecated bower/gulp package.
 - Updated `gulpfile.js` to properly process fonts.

#### 0.1.0 - June 26, 2014

 - Initial release.

## Copyright

Copyright (c) 2015 [Label Interactive](http://labelinteractive.com).

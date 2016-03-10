# Label Starter App

Boilerplate build tool for web apps at Label Interactive, based on [`gulp-starter`](https://github.com/greypants/gulp-starter).

## Dependencies

 - [Homebrew](http://brew.sh)
 - [Node](http://nodejs.org/)
 - [Gulp](http://gulpjs.com/)

*See `package.json` for a full list of plugins and 3rd party libraries.*

## Installation

 1. Clone this project.
 2. Make sure you have [Homebrew](http://brew.sh/) installed.
 3. Run the `bin/install-deps` script found within this project.
 4. Remove this `README.md` file.
 5. Update `package.json` to reflect the new project details.

> **Note:** The `install-deps` script will install Node.js and Gulp if they are not already available. It does this via [Homebrew](http://brew.sh/). This script can be run anytime to pull in changes in `package.json`.

## Configuration

The `gulpfile.js/config.js` file contains project-specific configuration for all tasks. The `src` and `dest` variables at the top of the file can be used to customize the prefix for the source and build directories project-wide.

## Gulp

#### Browser Sync

Run `gulp`  from the project root to build the project and start [Browser Sync](http://www.browsersync.io/). The `public/` directory will be updated with the latest compiled version of the site. BrowserSync will open a tab pointing at `public/` and update individual assets whenever they are recompiled.

#### Vanilla Watch

To run the build and watcher without BrowserSync, run `gulp watch`.

## Testing

Integration and unit tests go in the `tests/` directory.

Unit tests in `tests/unit/` are run through [Karma](https://github.com/karma-runner/karma) using [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/). These can be run via `gulp karma`.

Integration tests in `tests/integration/` are run through [Nightwatch.js](http://nightwatchjs.org/). These can be run via `gulp nightwatch`.

All tests can be run at once via `gulp test`.

#### Production Build

Running `gulp production` will build the project for production use.
In addition to the normal compilation of asset, the production build will

 - Minify/compress CSS and JS files.
 - *(Optionally)* inject a cache-busting token to all asset references.
 - *(Optionally)* inject a cache-busting token to assets on disk.

A `--fingerprint` flag can be included to inject cache-busting tokens to asset references.

A `--rename` flag can be included along with `--fingerprint` to rename the files on disk with the cache tokens. This is useful in environments where Apache's `mod_rewrite` is not enabled.

> Without `--rename`, an `.htaccess` file will be set in the `public/` directory to transform requests for assets that include a cache token in the filename back to the real file on the filesystem which does not include the cache token. With the `--rename` option in place, this is not necessary.

A `rev-manifest.json` file is added to `public/` for use by frameworks asset helpers to map some helper like `<?= stylesheet_tag('app.css') ?>` to `"/assets/app--cd2ed.css"`.

Tests can be run on a production build before fingerprints are applied by including a `--test` flag.

## Changelog

#### 1.1.0 - February 2, 2016

 - Added integration and unit testing with Karma and Nightwatch.js.

#### 1.0.0 - September 15, 2015

 - Added `minify-html` task.
 - Upgraded all dev dependencies.
 - Now using Vue by default instead of Backbone.
 - New ES6 with babel.js and eslint.
 - Config cleaning, particularly for production.
 - `gulp-rev-all` support has been upgraded.
 - Browser Sync now does URL rewriting to serve production assets.

#### 0.5.2 - March 31, 2015

 - `gulp watch` can now be run without starting BrowserSync. `gulp` now uses the new `live-update` task to start both the watcher and BrowswerSync.

#### 0.5.1 - March 31, 2015

 - `gulp-rev-all` has been bumped to `0.8.11` and now includes the needed `dontRenameFile` option, suggested [here](https://github.com/smysnk/gulp-rev-all/pull/75).

#### 0.5.0 - March 23, 2015

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

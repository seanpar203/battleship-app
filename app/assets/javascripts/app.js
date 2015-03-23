/* global Modernizr: true, FastClick: true, _:true */
'use strict';

import './plugins';
import $ from 'jquery';
import _ from 'lodash';
import FastClick from 'fastclick';

var modules = {
  'index': require('./pages/index')
};



// Legacy browser console polyfill
//
// -----------------------------------------------------------------------------

window.console = window.console || { log: function(){} };



$(function() {

  // 'notouch' class on html tag for devices not supporting touch. Provides
  // a way to selectively style :hover selectors that have a child with
  // visibility being modified
  //
  // @link http://www.nczonline.net/blog/2012/07/05/ios-has-a-hover-problem/
  //
  // ---------------------------------------------------------------------------

  if ( ! Modernizr.touch) {
    document.documentElement.className += ' notouch';
  }



  // run the page-specific module js
  var module = $('#page').data('module');

  if (module && modules[module] && _.has(modules[module], 'initialize')) {
    modules[module].initialize();
  }



  // Fastclick
  FastClick(document.body);

});

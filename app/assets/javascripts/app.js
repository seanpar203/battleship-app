import './plugins';
import $ from 'jquery';
import _ from 'lodash';
import attachFastClick from 'fastclick';

var modules = {
  'index': require('./pages/index')
};

$(function() {

  // run the page-specific module js
  var module = $('#page').data('module');

  if (_.has(modules, module)) {
    module = new modules[module]();
  }



  // Fastclick
  attachFastClick(document.body);

});

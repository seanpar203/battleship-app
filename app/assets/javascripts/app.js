import './plugins';
import $ from 'jquery';
import _ from 'lodash';
import attachFastClick from 'fastclick';

// include page module
import index from './pages/index';

// include the above page modules in this mapping
const modules = { index };

document.addEventListener('DOMContentLoaded', () => {
  // run the page-specific module js
  let module = $('#page').data('module');

  if (_.has(modules, module)) {
    module = new modules[module]();
  }

  // Fastclick
  attachFastClick(document.body);
});

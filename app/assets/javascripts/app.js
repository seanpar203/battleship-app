import 'babel-polyfill';
import _has from 'lodash/has';
import attachFastClick from 'fastclick';

// include page module
import index from './pages/index';

// include the above page modules in this mapping
const modules = { index };

document.addEventListener('DOMContentLoaded', () => {
  // run the page-specific module js
  const module = document.querySelector('#page').dataset.module;

  if (_has(modules, module)) {
    modules[module]();
  }

  // Fastclick
  attachFastClick(document.body);
});

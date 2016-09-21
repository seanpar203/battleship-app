import Vue from 'vue';
import 'babel-polyfill';
import HomeView from './pages/index';
import attachFastClick from 'fastclick';


const components = {
  HomeView
};

// On load
window.onload = () => {
  new Vue({
    el: '#app',

    data() {
      return {
        page: 'home-view'
      }
    },

    components: components,
  });
};
// DomContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Fastclick
  attachFastClick(document.body);
});

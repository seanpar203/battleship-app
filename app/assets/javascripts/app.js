import Vue from 'vue';
import 'babel-polyfill';
import HomeView from './pages/index';
import GameView from './pages/game';
import Navigation from './components/navigation'
import attachFastClick from 'fastclick';


const components = {
  HomeView,
  GameView,
  Navigation
};

// On load
window.onload = () => {
  new Vue({
    el: '#app',

    data() {
      return {
        view:     'game-view',
        email:    '',
        gameId:   '',
        loggedIn: false,
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

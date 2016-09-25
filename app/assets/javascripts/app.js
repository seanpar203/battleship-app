import Vue from 'vue';
import 'babel-polyfill';
import HomeView from './pages/index';
import GameView from './pages/game';
import BoardView from './pages/leader-board'
import Navigation from './components/navigation';
import attachFastClick from 'fastclick';


const components = {
  HomeView,
  GameView,
  BoardView,
  Navigation
};

// On load
window.onload = () => {
  new Vue({
    el: '#app',

    data() {
      return {
        view:     'game-view',
        gameId:   '',
        userName: '',
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

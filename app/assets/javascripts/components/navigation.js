/**
 * Created by sean on 22/09/2016.
 */
import $http from '../services/http';

export default {
  props: [
    'view',
    'gameId'
  ],

  template: require('../templates/navigation.html'),

  methods: {
    quitGame() {
      $http
        .delete(`/game/${this.gameId}`)
        .then(this.quitSuccess)
        .catch(this.quitError)
    },

    quitSuccess(res) {
      this.gameId = '';
      this.view = 'home-view';
    },

    quitError(err) {
      console.log(err)
    }
  },

  computed: {

    activeGame() {
      return this.gameId !== '';
    },

    returnToGame() {
      return this.activeGame && this.view !== 'game-view';
    }
  }
}

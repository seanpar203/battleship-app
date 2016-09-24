/**
 * Created by sean on 22/09/2016.
 */

export default {
  props: [
    'view',
    'gameId'
  ],

  template: require('../templates/navigation.html'),

  methods: {
    quitGame() {

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

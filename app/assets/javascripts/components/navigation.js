/**
 * Created by sean on 22/09/2016.
 */

export default {
  props: [
    'view',
    'gameId'
  ],

  template: require('../templates/navigation.html'),
  computed: {

    activeGame() {
      return this.gameId !== '';
    }
  }
}

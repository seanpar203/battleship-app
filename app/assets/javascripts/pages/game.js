/**
 * Created by sean on 22/09/2016.
 */
import GameRow from '../components/game-row';

// Local Variables to Vue component.
let allCoords = [
  1, 2, 3, 4, 5,
  6, 7, 8, 9, 10,
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20,
  21, 22, 23, 24, 25
];
let rows = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

export default {
  props: ['view', 'userName', 'gameId'],
  template: require('../templates/game.html'),

  data() {
    return {
      rows: rows,
      allCoords: allCoords,
      cpuCoords: [],
      userCoords: [],
    }
  },


  methods: {},

  computed: {
    coordsPicked() {
      return this.userCoords.length == 5;
    }
  },

  components: {GameRow}
}

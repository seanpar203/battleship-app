/**
 * Created by sean on 22/09/2016.
 */
import GameRow from '../components/game-row';
import $http from '../services/http';

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
  components: {GameRow},

  data() {
    return {
      rows: rows,
      cpuCoords: [],
      userCoords: [],
      availCoords: allCoords,
      userCoordsSaved: false,
      cpuCoordsSaved: false,
      instructions: 'Select 5 ship locations.'
    }
  },


  methods: {
    saveUserCoords() {
      $http
        .post(`/game/${this.gameId}/coords`,
          {
            user_name: this.userName,
            coords: this.userCoords,
            player: 'acc_coords'
          }
        )
        .then(res => {
          debugger;
        })
        .catch(err => {
          console.log(err);
        })
    }
  },

  computed: {
    coordsPicked() {
      return this.userCoords.length == 5;
    },

    coordsSaved() {
      return this.userCoordsSaved && this.cpuCoordsSaved;
    }
  },

  watch: {
    'userCoords': function (oldVal, newVal) {
      if (newVal.length === 5) {

      }
    }
  }
}

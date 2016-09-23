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
      // Board related data.
      rows: rows,
      availCoords: allCoords,

      // Coordinate related data.
      cpuCoords: [],
      userCoords: [],

      // Coordinate saved state.
      cpuCoordsSaved: false,
      userCoordsSaved: false,

      // Strike related data.
      strikeCoord: 0,
      userStries: [],
      cpuStrikes: [],

      // Array of hits.
      userHits:[],
      cpuHits:[],

      // Posibility array for AI.
      possibleTargets: allCoords,

      // Text to show above board.
      instructions: 'Select 5 ship locations.'
    }
  },

  methods: {

    /** Save User Coordinates Functionality. */
    saveUserCoords() {
      $http
        .post(`/game/${this.gameId}/coords`, this.getUserCoords)
        .then(this.saveUserCoordsSuccess)
        .catch(this.saveUserCoordsError)
    },

    saveUserCoordsSuccess(res) {
      this.userCoordsSaved = true;
      this.genCpuCoords();
    },

    saveUserCoordsError(err) {
      console.log(err);
    },

    /** Save Cpu Coordinates Functionality. */

    saveCpuCoords() {
      $http
        .post(`/game/${this.gameId}/coords`, this.getCpuCoords)
        .then(this.saveCpuCoordsSuccess)
        .catch(err => {
          console.log(err);
        })
    },

    saveCpuCoordsSuccess(res) {
      this.cpuCoordsSaved = true;
      this.instructions = 'Select a coordinate to attack the CPU.'
    },

    /** Randomizing Cpu Coordinates Functionality */
    genCpuCoords() {
      this.userCoords.forEach(coord => {
        let num = this.availCoords[Math.floor(Math.random() * this.availCoords.length)];
        this.cpuCoords.push(num);
        this.removeCoord(num);
      });

      this.saveCpuCoords();
    },

    /** Remove from array when selected */
    removeCoord(id) {
      this.availCoords = this.availCoords.filter(coord => coord !== id);
      this.possibleTargets = this.possibleTargets.filter(coord => coord !== id);
    }
  },

  computed: {
    /** Coordinates Computed Properties */
    coordsPicked() {
      return this.userCoords.length === 5 && !this.coordsSaved;
    },

    coordsSaved() {
      return this.userCoordsSaved && this.cpuCoordsSaved;
    },

    strikePicked() {
      return this.strikeCoord !== 0;
    },

    /** Helper computed properties to reduce code in Ajax requests. */
    getUserCoords() {
      return {
        user_name: this.userName,
        coords: this.userCoords,
        player: 'acc_coords'
      }
    },

    getCpuCoords() {
      return {
        user_name: this.userName,
        coords: this.cpuCoords,
        player: 'cpu_coords'
      }
    }

  },

  watch: {
    'userCoords': function (val, oldVal) {
      if (!this.coordsSaved) {
        if (val.length === 5) {
          this.instructions = 'Save your ship coordinates to start the game!';
        }
        else {
          this.instructions = `Select ${5 - val.length } ship locations.`;
        }
      }
    }
  }
}

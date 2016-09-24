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
  props: [
    'view',
    'userName',
    'gameId'
  ],
  template: require('../templates/game.html'),
  components: {GameRow},

  data() {
    return {
      // Boolean value of user win status.
      won: false,

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
      userStrikes: [],
      cpuStrikes: [],

      // Array of hits.
      userHits: 0,
      cpuHits: 0,

      // Posibility array for AI.
      possibleTargets: allCoords,

      // Text to show above board.
      instructions: 'Select 5 ship locations.'
    }
  },

  methods: {

    /** Save User Coordinates. */
    saveUserCoords() {
      $http
        .put(`/game/${this.gameId}/coords`, this.getUserCoords)
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

    /** Save Cpu Coordinates. */

    saveCpuCoords() {
      $http
        .put(`/game/${this.gameId}/coords`, this.getCpuCoords)
        .then(this.saveCpuCoordsSuccess)
        .catch(this.saveCpuCoordsError)
    },

    saveCpuCoordsSuccess(res) {
      this.cpuCoordsSaved = true;
      this.instructions = 'Select a coordinate to attack the CPU.'
    },

    saveCpuCoordsError(err) {
      console.log(err)
    },

    /** Save Game Results . */
    saveGameResults() {
      $http
        .post(`/game/${this.gameId}/results`, this.getUserWon)
        .then(this.saveGameResultsSuccess)
        .catch(this.saveSameResultsError)
    },

    saveGameResultsSuccess(res) {
      this.gameId = '';
    },
    saveSameResultsError(err) {
      console.log(err)
    },

    /** Striking Functionality */

    userStrike() {
      if (!this.userStrikes.includes(this.strikeCoord)) {
        this.userStrikes.push(this.strikeCoord);
        this.removePossible(this.strikeCoord);
        if (this.cpuCoords.includes(this.strikeCoord)) {
          this.userHits += 1;
          if (this.userHits === 5) {
            this.won = true;
            this.instructions = 'You\'ve won against the computer!';
            this.saveGameResults();
            return;
          }
          else {
            this.instructions = 'You hit the computers ship!';
          }
        }
        this.cpuStrike();
      } else {
        this.instructions = 'Trying to hit the same target are we..?';
      }
    },

    cpuStrike() {
      let coord = this.possibleTargets[Math.floor(Math.random() * this.possibleTargets.length)];
      this.removePossible(coord);
      this.cpuStrikes.push(coord);
      if (this.userCoords.includes(coord)) {
        this.cpuHits += 1;
        if (this.cpuHits === 5) {
          this.instructions = 'You\'ve Lost against the computer!';
        }
        else {
          this.instructions = 'The computer hit one of your ship!';
        }
      }
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
    },

    removePossible(id) {
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
      return this.strikeCoord !== 0 && (this.userHits !== 5 && this.cpuHits !== 5);
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
    },

    getUserWon() {
      return {
        user_name: this.userName,
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

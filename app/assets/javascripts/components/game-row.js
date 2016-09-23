/**
 * Created by sean on 22/09/2016.
 */

export default {
  props: [
    'id',
    'cpuCoords',
    'userCoords',
    'availCoords',
    'savedCoords',
    'strikeCoord',
    'userStrikes',
    'cpuStrikes',
    'coordsSaved'
  ],

  template: require('../templates/game-row.html'),

  methods: {

    /** Selecting Coordinate Functionality */
    selectCoord(id) {

      // If User & CPU Coords haven't been saved.
      if (!this.savedCoords) {
        if (!this.userShip) {
          this.userCoords.length != 5 ? this.addUserCord(id) : '';
        }
        else {
          this.removeUserCoord(id)
        }
      }

      // If User & CPU Coords have been saved.
      if (this.coordsSaved) {
        this.strikeCoord = id;
      }
    },

    /** Utility functions */

    removeCoord(from, id) {
      this[from] = this[from].filter(coord => {
        return coord !== id;
      })
    },

    removeUserCoord(id) {
      this.removeCoord('userCoords', id);
      this.availCoords.splice(id - 1, 0, id);
    },

    addUserCord(id) {
      this.userCoords.push(id);
      this.removeCoord('availCoords', id);
    }
  },

  computed: {
    userShip() {
      return this.userCoords.find(coord => coord === this.id);
    },

    cpuShip() {
      return this.cpuCoords.find(coord => coord === this.id);
    },

    isUserHit() {
      return this.cpuStrikes.find(coord => coord === this.id)
    },

    miss() {
      return !this.userShip && !this.cpuShip
    },

    isStrikeCoord() {
      return this.id === this.strikeCoord;
    },

    coordClasses() {
      return {
        'ship': this.userShip,
        'miss': this.miss,
        'strike': this.isStrikeCoord,
        'ship user-hit': this.isUserHit,
      }
    }
  }
}

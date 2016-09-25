/**
 * Created by sean on 22/09/2016.
 */

export default {
  props: [
    'id',
    'cpuCoords',
    'userCoords',
    'availCoords',
    'strikeCoord',
    'userStrikes',
    'coordsSaved',
    'cpuStrikes',
    'userHits',
    'cpuHits',
  ],

  template: require('../templates/game-row.html'),

  methods: {

    /** Selecting Coordinate Functionality */
    selectCoord(id) {

      // If User & CPU Coords haven't been saved.
      if (!this.coordsSaved) {
        if (!this.userShip) {
          this.userCoords.length != 5 ? this.addUserCord(id) : '';
        }
        else {
          this.removeUserCoord(id)
        }
      }

      // If User & CPU Coords have been saved.
      else {
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

    /** Computed props for identifying ship */
    userShip() {
      return this.userCoords.includes(this.id);
    },

    /** Props for determining if ship was hit. */
    isUserHit() {
      return this.cpuStrikes.includes(this.id) &&
             this.userCoords.includes(this.id)
    },

    isCpuHit() {
      return this.userStrikes.includes(this.id) &&
             this.cpuCoords.includes(this.id)
    },

    userMiss() {
      return this.userStrikes.includes(this.id) && !this.cpuCoords.includes(this.id)
    },

    cpuMiss() {
      return this.cpuStrikes.includes(this.id) && !this.userCoords.includes(this.id)
    },


    /** Striking Coord prop */
    isStrikeCoord() {
      return this.id === this.strikeCoord;
    },

    coordClasses() {
      return {
        'user ship': this.userShip,
        'strike': this.isStrikeCoord,
        'cpu ship hit': this.isCpuHit,
        'user ship hit': this.isUserHit,
        'user miss': this.userMiss,
        'cpu miss': this.cpuMiss
      }
    }
  }
}

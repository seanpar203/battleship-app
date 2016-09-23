/**
 * Created by sean on 22/09/2016.
 */

export default {
  props: ['id', 'userCoords', 'cpuCoords', 'savedCoords', 'availCoords'],
  template: require('../templates/game-row.html'),

  methods: {
    selectCoord(id) {
      if (!this.savedCoords) {
        if (!this.hasShip) {
          this.userCoords.length != 5 ? this.addUserCord(id) : '';
        } else {
          this.removeUserCoord(id)
        }
      }
    },

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
    hasShip() {
      return this.userCoords.find(loc => {
        return loc == this.id;
      })
    }
  }
}

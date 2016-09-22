/**
 * Created by sean on 22/09/2016.
 */

export default {
  props: ['id', 'userCoords', 'cpuCoords'],
  template: require('../templates/game-row.html'),

  methods: {
    addLocation(id) {
      if (!this.hasShip) {

        this.userCoords.push(id)
      } else {
        this.userCoords = this.userCoords.filter(loc => {
          return loc !== id;
        })
      }
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

/**
 * Created by Admin on 24/09/2016.
 */
import $http from '../services/http'

export default {
  template: require('../templates/leader-board.html'),

  data() {
    return {
      leaderBoard: []
    }
  },

  activate(done) {
    $http
      .get('/leaderboard')
      .then(res => {
        this.leaderBoard = res.data.board;
        done();
      })
      .catch(err => console.log(err))
  }
}

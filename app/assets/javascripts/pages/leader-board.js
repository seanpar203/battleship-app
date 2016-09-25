/**
 * Created by Admin on 24/09/2016.
 */
import $http from '../services/http';
import PlayerRow from '../components/player';

export default {
  props: ['userName'],
  template: require('../templates/leader-board.html'),
  components: {PlayerRow},

  data() {
    return {
      leaderBoard: []
    }
  },

  activate(done) {
    this.fetchLeaderBoard(done);
  },

  methods: {

    fetchLeaderBoard(cb) {
      $http
        .get('/leaderboard')
        .then(res => {
          this.leaderBoard = res.data.board;
          if (cb !== undefined) {
            cb();
          }
        })
        .catch(err => console.log(err))
    }
  },
}

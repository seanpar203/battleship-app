import $http from '../services/http';

export default {
  props: ['view', 'userName', 'gameId'],

  template: require('../templates/home.html'),

  methods: {
    startGame() {

      // If Username field is filled out.
      if (this.userName.length > 0) {
        $http
          .post('/game', {user_name: this.userName})
          .then(this.startSuccess)
          .catch(this.startError)
      }
    },

    // Set data after success.
    startSuccess(res) {
      this.gameId = res.data.game_id;
      this.view = 'game-view';
    },

    // Console err.
    startError(err) {
      console.log(err);
    }
  }
};

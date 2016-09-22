export default {
	props: ['view'],

	template: require('../templates/home.html'),

	methods: {
		startGame() {
			this.view = 'game-view';
		}
	}
}

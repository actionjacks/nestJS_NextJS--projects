import { createStore } from 'vuex';
import playersModule from './modules/players/index';
import requestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    players: playersModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;

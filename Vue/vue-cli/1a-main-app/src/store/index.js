import { createStore } from 'vuex';
import playersModule from './modules/players/index';
import requestsModule from './modules/requests/index';
import authModule from './modules/auth/index';

const store = createStore({
  modules: {
    players: playersModule,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;

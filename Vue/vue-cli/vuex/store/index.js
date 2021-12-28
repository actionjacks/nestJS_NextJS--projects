import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index';

//multiple stores

const store = createStore({
  // get more store modules to global store
  modules: {
    //namesoaced is name in modules numbers
    numbers: counterModule,
  },
  state() {
    return {
      isLoggin: false,
    };
  },
  mutations: rootMutations,
  // handle async code
  actions: rootActions,
  getters: rootGetters,
});

export default store;

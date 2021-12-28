import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';

export default {
  //namesoaced is name in modules numbers
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
};

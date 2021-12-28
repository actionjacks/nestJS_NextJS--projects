import { createStore } from 'vuex';

import productsModule from './modules/products';
import cartModule from './modules/cart';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
  state() {
    return {
      isLoggedIn: true,
    };
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },

  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    },
  },

  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;

<template>
  <div></div>
</template>

<script>
import { createStore } from 'vuex';
const store = createStore({
  state() {
    return { counter };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
  actions: {
    increment(context) {
      context.commit('increment');
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
});
export default {};
</script>

<style scoped></style>

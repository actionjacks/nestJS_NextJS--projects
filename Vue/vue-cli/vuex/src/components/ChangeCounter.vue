<template>
  <h3>{{ counter }}</h3>
  <p>Map getters</p>
  <button @click="increment({ value: 10 })">add 1</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne() {
    //   // this.$store.state.counter++;
    //   this.$store.commit('increment');
    // },
    ...mapActions(['increment']),

    // alternativ we  use
    // ...mapActions({
    //   inc: 'increment',
    //   incrase: 'increase',
    // }),
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

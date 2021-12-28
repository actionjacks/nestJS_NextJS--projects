<template>
  <base-container title="Auth">
    <UserAuth />
  </base-container>
  <base-container v-if="isAuth">
    <TheCounter />
  </base-container>
  <base-container>
    <favorite-value />
  </base-container>
  <base-container title="Vuex">
    <p>async actions</p>
    <h3>{{ counter }}</h3>
    <button @click="addOne">add 1</button>
  </base-container>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="addOne">add 1</button>
  </base-container>
  <base-container>
    <change-counter />
  </base-container>
</template>

<script>
import UserAuth from './components/UserAuth';
import TheCounter from './components/TheCounter.vue';
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

export default {
  components: {
    UserAuth,
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
    TheCounter,
  },
  methods: {
    addOne() {
      // this.$store.state.counter++;
      //using payload
      //this.$store.commit('incrase', { value: 5 });

      // we can write like
      // this.$store.commit({
      //   type: 'incrase',
      //   value: 1,
      // });

      //use acyn actions
      this.$store.dispatch({
        type: 'increment',
        value: 10,
      });
      //using numespaced module store
      // this.$store.dispatch({
      //   type: 'numbers/increment',
      //   value: 10,
      // });
    },
  },
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // },

    //using store namespaced
    couter() {
      return this.$store.getters['numbers/normalizedCounter'];
    },

    isAuth() {
      return this.$store.getters.userIsAuthenticated;
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

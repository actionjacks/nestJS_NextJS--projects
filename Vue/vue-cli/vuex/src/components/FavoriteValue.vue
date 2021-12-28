<template>
  <h3>{{ counter }}</h3>
  <p>getter normalize counter</p>
  <h3>{{ counter }}</h3>
  <p>getter</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
    normalized() {
      return this.$Store.getters.normalizedCounter;
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

<template>
  <TheHeader :title="title" />
  <TheResources />
</template>

<script>
import TheHeader from './layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: { TheHeader, TheResources },
  data() {
    return {
      title: 'header-Title',
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

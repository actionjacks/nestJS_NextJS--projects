<script setup>
  import Carusel from "./components/Carusel/Carusel.vue";
  import Carusel2 from "./components/Carusel2/Carusel.vue";
  import Carusel3 from "./components/Carusel3/Index.vue";

  component: {
    Carusel, Carusel2, Carusel3;
  }
</script>

<template>
  <div id="app">
    <Carusel />
  </div>
</template>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>

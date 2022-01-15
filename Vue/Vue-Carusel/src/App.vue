<script setup>
  import Carusel from "./components/Carusel/Carusel.vue";
  import Carusel2 from "./components/Carusel2/Carusel.vue";
  // slider 3-
  import Carusel3 from "./components/Carusel3/Carusel.vue";
  import Slide from "./components/Carusel3/Slide.vue";
  //----------

  component: {
    Carusel, Carusel2, Carusel3, Slide;
  }
</script>

<template>
  <Carusel3 class="carouse">
    <Slide>
      <div>
        <p>some content</p>
      </div>
    </Slide>
  </Carusel3>
</template>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    .carouse {
      max-height: 50vh;
      height: 50vh;
      width: 100%;
      border: 1px solid lightblue;
    }
  }
</style>

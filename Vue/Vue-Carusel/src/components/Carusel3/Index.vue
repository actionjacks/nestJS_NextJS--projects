<template>
  <Carusel
    class="carouse"
    v-slot="{ currentSlide }"
    :numberOfSlides="getSlideCount"
    :autoPlay="true"
  >
    <Slide v-for="(slide, inx) in carouselSlides" :key="inx">
      <div v-show="currentSlide === inx + 1" class="slide-info">
        <img :src="`./assets/${slide}.jpg`" alt="" />
      </div>
    </Slide>
  </Carusel>
</template>

<script setup>
  import { computed } from "vue";
  import Carusel from "./Carusel.vue";
  import Slide from "./Slide.vue";

  component: {
    Carusel, Slide;
  }

  const carouselSlides = ["img-1", "img-2", "img-3"];
  const getSlideCount = computed(() => carouselSlides.length);
</script>

<style lang="scss" scoped>
  .carouse {
    position: relative;
    max-height: 50vh;
    height: 50vh;
    width: 100%;
    border: 1px solid lightblue;

    .slide-info {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      max-height: 100%;
      height: 100%;

      img {
        min-width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>

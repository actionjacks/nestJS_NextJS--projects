<template>
  <div class="wrapper" v-if="images">
    <ClassicCarusel :images="images" />
  </div>
  <div v-else class="loading-wrapper">
    <h3>No data, json.server, run in console $ yarn api</h3>
    <div class="spinner-wrapper">
      <pacman-loader />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { fetchData, ImgAssets } from "./utilities/api";
//import TranslateCarusel from "./components/translate-carusel/index.vue";
import ClassicCarusel from "./components/clasic-transition/index.vue";

export default defineComponent({
  components: {
    // TranslateCarusel,
    ClassicCarusel,
  },

  setup() {
    const images = ref<null | ImgAssets[]>(null);

    onMounted(async () => {
      images.value = await fetchData();
    });

    return { images };
  },
});
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aec2d3;
  background-color: #181a1b;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.wrapper {
  transition: 0.5s;
}
.loading-wrapper {
  transition: 0.5s;
  padding: 2rem 0;
  border: 1px solid;
}
.spinner-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}
</style>

<template>
  <Heading :level="1">TV Finder</Heading>
  <MyShows>
    <template #sc="{ shows }">
      <h3 v-if="shows?.lenght > 0">
        Average Score {{ computedAverage(shows).toFixed(2) }}
      </h3>
    </template>
  </MyShows>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./Heading.vue";
import MyShows from "./MyShows.vue";

export default defineComponent({
  components: { Heading, MyShows },
  setup() {
    const computedAverage = (shows: any) =>
      shows.reduce((acc: any, info: any) => +info.score + acc, 0) /
      shows.length;

    return { computedAverage };
  },
});
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

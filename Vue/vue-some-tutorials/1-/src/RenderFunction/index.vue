<template>
  <heading :level="1">TV Finder</heading>
  <render-me>
    <!-- <template #namedSlot>
          <h3>Hello From Named Slot</h3>
        </template> -->
    <!-- <h4>Hi From Default slot</h4> -->
    <template #sc="{ shows }">
      <h3 v-if="shows?.length > 0">
        Average Score {{ computedAverage(shows).toFixed(2) }}
      </h3>
    </template>
  </render-me>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./Heading.vue";

export default defineComponent({
  components: { Heading },
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

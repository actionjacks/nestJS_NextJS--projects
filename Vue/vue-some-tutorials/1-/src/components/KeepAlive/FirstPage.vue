<template>
  <div>
    <h1>This is First Page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    onMounted(() => console.log("first page "));
    return {};
  },
});
</script>

<style scoped>
</style>
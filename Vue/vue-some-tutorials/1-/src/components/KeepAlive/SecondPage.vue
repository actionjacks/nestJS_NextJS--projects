<template>
  <div>
    <h1>This is second Page</h1>
    <input type="text" placeholder="enter ur message" />
    <input type="text" value="Send" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  setup() {
    onMounted(() => console.log("this is second page"));

    return {};
  },
});
</script>

<style scoped>
</style>
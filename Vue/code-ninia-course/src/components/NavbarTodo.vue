<template>
  <div class="main-nav">
    <router-link :to="{ name: 'todo' }">Projects</router-link>
    <br />
    <router-link :to="{ name: 'addtodo' }">Add a new Todo</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>

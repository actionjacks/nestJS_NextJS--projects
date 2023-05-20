<template>
  <div ref="container" class="grid-cols-1">
    <button class="bg-green-500 rounded px-2">Klik</button>

    <button class="bg-green-500 rounded px-2 ml-10">
      <NuxtLink to="/"> events route </NuxtLink>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

const container = ref<null | HTMLDivElement>(null);

onClickOutside(container, (event) => {
  console.log(event);
});
</script>

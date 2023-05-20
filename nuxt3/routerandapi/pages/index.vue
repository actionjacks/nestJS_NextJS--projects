<template>
  <div>
    <p>https://icones.js.org/collection/mdi</p>
    <IconsAlert class="h-10 w-10" />
    <button class="bg-green-500 rounded px-2">
      <NuxtLink to="/events"> events route </NuxtLink>
    </button>

    <button class="bg-green-500 rounded px-2 ml-10" @click="onClick">
      say piczes
    </button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});

const { $sayPiczes } = useNuxtApp();

const onClick = () => {
  console.log($sayPiczes("piczeeess"));
};
</script>

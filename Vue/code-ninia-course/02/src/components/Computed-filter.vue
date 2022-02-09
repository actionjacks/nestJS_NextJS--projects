<template>
  <div>
    <input type="text" v-model="search" />
    <p>search term {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  setup() {
    const search = ref("");
    const names = ref(["jacek", "placek", "sracek", "dupacek"]);

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    return { search, matchingNames };
  },
});
</script>

<style scoped></style>

<template>
  <div>{{ counter }}</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const counter = computed(() => {
      return store.getters.counter;
    });

    return { counter };
  },
};
</script>

<style scoped></style>

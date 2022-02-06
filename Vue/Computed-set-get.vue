<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
//getters initialize variables when called
//setters applied when variable is modified
export default defineComponent({
  setup() {
    const name = ref("");

    const fullname = computed({
      get: () => {
        return name.value;
      },
      set: (newValue) => {
        const addString = newValue + "++_++";
        return addString;
      },
    });

    return {};
  },
});
</script>

<style scoped></style>

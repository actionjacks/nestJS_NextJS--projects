<template>
  <h2>{{ title }}</h2>
  <p>{{ msg }}</p>
  <button @click="$emit('close')">CLOSE</button>
</template>

<script lang="ts">
import { defineComponent, defineEmits } from "vue";

export default defineComponent({
  emits: ["close"],
  props: {
    title: {
      type: String,
      required: false,
    },
    msg: {
      type: String,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
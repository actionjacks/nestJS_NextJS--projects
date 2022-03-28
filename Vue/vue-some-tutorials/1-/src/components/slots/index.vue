<template>
  <div>
    <slot name="content">
      <img
        src="https://image.shutterstock.com/image-vector/vector-line-icon-img-260nw-2050481222.jpg"
        alt=""
      />
    </slot>
    <p>
      <slot name="caption" v-bind:source="source">CAPTIION FROM SLOT </slot>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const source = ref<string>("jacke+placek");

    return { source };
  },
});
</script>

<style scoped>
</style>
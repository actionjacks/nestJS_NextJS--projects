<template>
  {{ url }}
</template>

<script lang="ts">
  // <img class="card-img" :src="url" alt="" />
  import { defineComponent } from "vue";

  export default defineComponent({
    props: {
      url: { type: String, required: true },
    },

    setup() {
      return {};
    },
  });
</script>
<style scoped>
  .card-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
</style>

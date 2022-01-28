<template>
  <div class="slide">
    <transition name="slide">
      <slot />
    </transition>
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

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.3s ease-out;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }

  .slide-enter-to,
  .slide-leave-from {
    opacity: 1;
  }
</style>

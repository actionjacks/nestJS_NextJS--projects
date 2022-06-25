<template>
  <div class="header-wrapper" :class="{ show }"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  setup() {
    const show = ref<boolean>(false);

    function handleScroll() {
      if (window.scrollY > 180) {
        return (show.value = true);
      }
      return (show.value = false);
    }

    onMounted(() => window.addEventListener("scroll", handleScroll));
    onUnmounted(() => window.removeEventListener("scroll", handleScroll));

    return {
      show,
    };
  },
});
</script>

<style scoped lang="scss" src="@/styles/components/Header.scss" />

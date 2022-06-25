<template>
  <div class="main_wrapper"></div>
  <Content />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Content from "@/views/index.vue";

export default defineComponent({
  components: { Content },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" src="@/styles/main.scss" />

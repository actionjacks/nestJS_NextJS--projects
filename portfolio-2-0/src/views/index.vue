<template>
  <div class="main_wiew">
    <ThemeSwitcher />
    <Header />

    <AboutMe />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
import Header from "@/components/Header.vue";
import AboutMe from "@/components/AboutMe.vue";

export default defineComponent({
  components: { ThemeSwitcher, Header, AboutMe },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" src="@/styles/main.scss" />

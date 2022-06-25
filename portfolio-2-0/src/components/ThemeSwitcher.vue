<template>
  <div class="switcher_wrapper">
    <div class="slider_container" :onClick="toggleTheme">
      <div :class="currentTheme">
        <Cat class="icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { Cat } from "mdue";
import { ThemeTypes } from "@/store/modules/themeModule";

export default defineComponent({
  components: { Cat },
  setup() {
    const store = useStore();
    const currentTheme = computed<ThemeTypes>(
      () => store.getters.getCurrentTheme
    );

    const toggleTheme = (): void => {
      store.dispatch("toggleTheme");
    };

    return {
      toggleTheme,
      currentTheme,
    };
  },
});
</script>

<style lang="scss" scoped src="@/styles/components/ThemeSwitcher.scss" />

<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="component = tab">
      {{ tab }}
    </button>

    <keep-alive>
      <component :is="component" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FirstPage from "@/components/KeepAlive/FirstPage.vue";
import SecondPage from "@/components/KeepAlive/SecondPage.vue";

export default defineComponent({
  components: { FirstPage, SecondPage },
  setup() {
    return {};
  },
  data() {
    return {
      tabs: ["FirstPage", "SecondPage"],
      component: "FirstPage",
    };
  },
});
</script>

<style scoped>
</style>
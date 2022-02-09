<template>
  <PostList />
</template>

<script lang="ts">
import PostList from "./view/PostList.vue";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  components: { PostList },

  setup() {
    return {};
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

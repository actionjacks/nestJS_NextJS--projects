<template>
  <div class="main">
    <UseDynamicScroller />
  </div>
</template>

<script>
import UseDynamicScroller from "@/view/UseDynamicScroller.vue";

export default {
  name: "App",
  components: {
    UseDynamicScroller,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  overflow: hidden;
  border: 1px solid gray;
  height: 100vh;
}
</style>

<template>
  <div class="carousel">
    <div class="inner">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>
<script setup>
  import { ref, computed } from "vue";
</script>
<style scoped>
  .carousel {
    height: 50vh;
    width: 90%;
    margin: auto;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .inner {
    white-space: nowrap;
    height: 100%;
    width: 100%;
  }
  .item {
    background-color: aquamarine;
    display: inline-block;
    height: 100%;
    width: 100%;
    border: 1px solid rgb(182, 174, 174);
  }
</style>

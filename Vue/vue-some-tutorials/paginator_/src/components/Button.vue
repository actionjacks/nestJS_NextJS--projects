<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
button {
  position: relative;
  padding: 15px;
  border-radius: 5px;
  font-size: 20px;
  background-color: rgb(158, 195, 200);
  border-color: black;
  box-sizing: 2px 2px rgb(29, 39, 196);
  cursor: pointer;

  &:hover {
    box-shadow: 5px 5px rgb(39, 39, 196);
    left: -3px;
    top: -3px;
  }
}
</style>
<template>
  <span>
    <slot :val="val" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['val'],
  setup() {


    return {}
  }
})
</script>

<style scoped>
</style>
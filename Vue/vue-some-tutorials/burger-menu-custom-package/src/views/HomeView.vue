<template>
  <div>
    <DynamicHeder />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DynamicHeder from '@/components/dynamic-burger-nav/DynamicHeder.vue'

export default defineComponent({
  components: { DynamicHeder },
  setup() {


    return {}
  }
})
</script>

<style scoped>
</style>
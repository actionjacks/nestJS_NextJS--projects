<template>
  <div class="bg-white text-sm">
    <div class="animate-pulse flex-1 space-y-4 py-1" v-for="index in blocks" :key="index">
      <div class="h-6 bg-gray-200 rounded w-3/4"></div>
      <div class="space-y-2">
        <div class="h-4 bg-gray-200 rounded"></div>
        <div class="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: {
    blocks: {
      type: Number,
      default: 1
    }
  }
}
</script>

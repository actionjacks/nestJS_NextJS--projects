<template>
  <div>
    <label class="inline-flex items-center">
      <input type="radio" :checked="active === value" name="time" :value="value" @click="() => $emit('clicked')">
      <span class="ml-2">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: Number,
    active: Number
  },
  emits: ['clicked'],
  name: 'Time'
}
</script>

<style scoped>

</style>

<template>
  <button type="submit"
          :class="{'bg-indigo-400 hover:bg-indigo-400 cursor-not-allowed': loading, 'bg-indigo-600 hover:bg-indigo-500': !loading}"
          :disabled="loading"
          class="outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white border-transparent py-2 px-4 rounded-md shadow-sm text-sm font-semibold inline-flex justify-center">
    <SpinLoader :show="loading"></SpinLoader>
    {{ label }}
  </button>
</template>

<script>
import SpinLoader from "@/components/SpinLoader";

export default {
  name: "ButtonSubmitIndigo",
  props: ['label', 'loading'],
  components: {SpinLoader}
}
</script>

<style scoped>

</style>

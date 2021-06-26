<template>
  <div v-if="errors.length" class="bg-red-50 p-5 flex rounded-t-sm">
    <div class="w-8 h-8 mr-4 text-red-700">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
    <div>
      <div class="text-red-700 font-semibold mb-2 text-lg">There were some errors</div>
      <div class="text-red-600 text-xs">
        <ul class="list-disc list-inside">
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Errors",
  props: {
    errors: Array
  }
}
</script>

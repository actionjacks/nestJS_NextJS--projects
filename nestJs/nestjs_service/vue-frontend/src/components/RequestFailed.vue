<template>
  <div class="flex flex-col w-full text-gray-700 text-center items-center">
    <div class="h-32 w-32 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
    <div class="text-xl">Sorry, we have nothing to show.</div>
    <div class="text-gray-400">Try refreshing the page or changing the filters.</div>
  </div>
</template>

<script>
export default {
  name: "RequestFailed"
}
</script>

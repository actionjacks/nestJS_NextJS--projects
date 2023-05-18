<template>
  <div>
    <div>{{ route.params?.id }}</div>
    <pre>
      {{ data }} 
    </pre>
    <input v-model="myInput" type="text" />
    <div>
      <p>query</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const myInput = ref("");
const route = useRoute();

// const { data, pending, error } = useFetch(() => "/api/search");

const { data } = useFetch(() => `/api/search?q=${myInput.value}`);
</script>

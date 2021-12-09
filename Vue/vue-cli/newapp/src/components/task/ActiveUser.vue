<template>
  <div>
    <h1>Active user</h1>
    <h2>{{ username }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
export default {
  props: ["username", "age"],
};
</script>

<style scoped></style>

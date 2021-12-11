<template>
  <header>
    {{ title }}
  </header>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

header h1 {
  color: white;
  margin: 0;
}
</style>

<template>
  <h1>Logged !!!!!!!!!!!!!!!!!!!!</h1>
  <h3>{{ normalizedCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // using mapgetters whit numespaced modules
    // ...mapGetters('numbers',['finalCounter'])

    ...mapGetters(['normalizedCounter']),
  },
};
</script>

<style scoped></style>

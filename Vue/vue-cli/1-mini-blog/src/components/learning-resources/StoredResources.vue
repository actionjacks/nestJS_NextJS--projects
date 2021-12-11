<template>
  <ul>
    <LearningResources
      v-for="{ id, title, description, link } in resources"
      :key="id"
      :id="id"
      :title="title"
      :description="description"
      :link="link"
    />
  </ul>
</template>

<script>
import LearningResources from './LearningResources.vue';

export default {
  components: { LearningResources },
  inject: ['resources'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>

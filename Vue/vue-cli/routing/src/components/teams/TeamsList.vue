<template>
  <!-- need this route to render child routes -->
  <RouterView />
  <ul>
    <TeamsItem
      v-for="team in teams"
      :id="team.id"
      :key="team.id"
      :name="team.name"
      :member-count="team.members.length"
    />
  </ul>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  inject: ['teams'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>

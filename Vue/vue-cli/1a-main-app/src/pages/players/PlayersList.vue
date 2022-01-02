<template>
  <section>Filter</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as player</base-button>
      </div>
      <ul v-if="hasPlayers">
        <player-item
          v-for="{ id, firstName, lastName, rate, areas } in filteredPlayers"
          :key="id"
          :id="id"
          :firstName="firstName"
          :lastName="lastName"
          :rate="rate"
          :areas="areas"
        ></player-item>
      </ul>
      <h3 v-else>No players</h3>
    </base-card>
  </section>
</template>

<script>
import PlayerItem from '../../components/players/PlayerItem.vue';

export default {
  components: { PlayerItem },
  computed: {
    filteredPlayers() {
      //first players is numespaced secon name of getters
      //players(state){return state.players} from getters.js
      return this.$store.getters['players/players'];
    },
    hasPlayers() {
      return this.$store.getters['players/hasPlayers'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

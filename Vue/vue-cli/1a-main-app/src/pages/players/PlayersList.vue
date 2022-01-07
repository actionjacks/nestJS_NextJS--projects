<template>
  <player-filter @change-filter="setFilters"></player-filter>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadPlayers">Refresh</base-button>
        <base-button v-if="!isPlayer && !isLoading" link to="/register"
          >Register as player</base-button
        >
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
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
import PlayerFilter from '../../components/players/PlayerFilter.vue';
import PlayerItem from '../../components/players/PlayerItem.vue';

export default {
  components: { PlayerItem, PlayerFilter },
  data() {
    return {
      isLoading: false,
      activeFilter: {
        dota: true,
        lol: true,
        SC2: true,
      },
    };
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilter = updatedFilters;
    },
    async loadPlayers() {
      this.isLoading = true;
      await this.$store.dispatch('players/loadPlayers');
      this.isLoading = false;
    },
  },
  created() {
    this.loadPlayers();
  },
  computed: {
    filteredPlayers() {
      //first players is numespaced secon name of getters
      //players(state){return state.players} from getters.js
      const players = this.$store.getters['players/players'];

      return players.filter((player) => {
        if (this.activeFilter.dota && player.areas.includes('dota')) {
          return true;
        }
        if (this.activeFilter.lol && player.areas.includes('lol')) {
          return true;
        }
        if (this.activeFilter.SC2 && player.areas.includes('SC2')) {
          return true;
        }
        return false;
      });
    },
    hasPlayers() {
      return !this.isLoading && this.$store.getters['players/hasPlayers'];
    },
    isPlayer() {
      return this.$store.getters['players/isPlayer'];
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

<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>{{ rate }}</h3>
    </base-card>
  </section>

  <section>
    <base-card>
      <header>
        <h2>Interested ?</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>

  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return { selectedPlayer: null };
  },
  computed: {
    fullName() {
      return `${this.selectedPlayer.firstName} ${this.selectedPlayer.lastName}`;
    },
    areas() {
      return this.selectedPlayer.areas;
    },
    rate() {
      return this.selectedPlayer.rate;
    },
    description() {
      return this.selectedPlayer.description;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
  },

  created() {
    this.selectedPlayer = this.$store.getters['players/players'].find(
      (player) => player.id === this.id
    );
  },
};
</script>

<style scoped></style>

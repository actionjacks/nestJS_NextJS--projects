<template>
  <div>
    <base-card>
      <div>register</div>
      <player-form @save-data="saveData"></player-form>
    </base-card>
  </div>
</template>

<script>
import PlayerForm from '../../components/players/PlayerForm.vue';
export default {
  components: { PlayerForm },
  methods: {
    saveData(formData) {
      console.log(formData);
      this.$store.dispatch('players/registerPlayer', formData);
      this.$router.replace('/players');
    },
  },
};
</script>

<style scoped></style>

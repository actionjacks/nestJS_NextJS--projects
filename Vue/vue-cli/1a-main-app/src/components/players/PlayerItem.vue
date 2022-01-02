<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>pln{{ rate }}/hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link :to="playerDetailsLink">Vieww Details</base-button>
      <base-button mode="outline" link :to="playerContacLink"
        >Contac</base-button
      >
    </div>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    playerContacLink() {
      return `/players/${this.id}/contact`;
      //return `${this.$rate.path}/${this.id}/contact`;
    },
    playerDetailsLink() {
      return `/players/${this.id}`;
      //return `${this.$rate.path}/${this.id}`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

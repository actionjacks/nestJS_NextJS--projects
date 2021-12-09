<template>
  <li>
    <h2>{{ name }}</h2>

    <h3>{{ isFavorite }}</h3>
    <button @click="toggleDetails">Details</button>
    <button @click="toggleFavorite">favorite</button>
    <ul v-if="datailsAreVisible">
      <li>Phone: {{ phone }}</li>
      <li>Email: {{ email }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  // props: ["name", "phone", "email"],
  props: {
    id: Number,
    name: {
      type: String,
      required: true,
    },
    phone: String,
    email: {
      type: String,
      required: false,
      default: "0",
    },
    isFavorite: Boolean,
  },
  emits: ["toggle-favorite", "delete"],
  data() {
    return {
      datailsAreVisible: false,
      // favorite from props
      favorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.datailsAreVisible = !this.datailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>

<style scoped></style>

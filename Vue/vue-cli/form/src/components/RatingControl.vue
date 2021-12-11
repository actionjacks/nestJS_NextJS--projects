<template>
  <ul>
    <li :class="{ active: modelValue === 'Poor' }">
      <button @click="active('Poor')" type="button">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'Average' }">
      <button @click="active('Average')" type="button">Average</button>
    </li>
    <li :class="{ active: modelValue === 'Great' }">
      <button @click="active('Great')" type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  // special prop from v-model
  props: ['modelValue'],
  emits: ['update:modelValue'],

  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  methods: {
    active(option) {
      console.log(this.activeOption);

      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}
.active button {
  color: #a00078;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>

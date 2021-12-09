<template>
  <h1>Manage goals</h1>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set goal</button>
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <h2>moooooooooooooooodal</h2>
      <button @click="confirmError">ok</button>
    </error-alert></teleport
  >
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped></style>

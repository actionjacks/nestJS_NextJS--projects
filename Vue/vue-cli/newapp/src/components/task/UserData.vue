<template>
  <div>
    <div>
      <label for="username">User Name</label>
      <input v-model="username" type="text" />
    </div>
    <div>
      <label for="age">User Age</label>
      <input v-model="age" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { username: "", age: "" };
  },
  emits: ["get-username", "get-age"],
  watch: {
    username() {
      this.$emit("get-username", this.username);
    },
    age() {
      this.$emit("get-age", this.age);
    },
  },
};
</script>

<style scoped></style>

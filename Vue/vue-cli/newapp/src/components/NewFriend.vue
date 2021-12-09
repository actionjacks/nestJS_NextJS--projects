<template>
  <form @submit.prevent="addNewFriend">
    <div>
      <label for="name">Name</label>
      <input v-model="enteredName" type="text" />
    </div>
    <div>
      <label for="name">Phone</label>
      <input v-model="enteredPhone" type="tel" />
    </div>
    <div>
      <label for="name">Email</label>
      <input v-model="enteredEmail" type="email" />
    </div>
    <div>
      <button>Add</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return { enteredName: "", enteredPhone: "", enteredEmail: "" };
  },
  emits: ["add-contact"],
  methods: {
    addNewFriend() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>

<style scoped></style>

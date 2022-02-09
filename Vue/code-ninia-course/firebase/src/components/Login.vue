<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h2>Login</h2>

      <label for="email">Data email</label>
      <input type="email" name="email" v-model="email" required />

      <label for="password">Data password</label>
      <input type="password" name="password" v-model="password" required />

      <button>Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const email = ref<string>("");
    const password = ref<string>("");

    const handleSubmit = async () => {
      console.log(email.value, password.value);
    };

    return { email, password, handleSubmit };
  },
});
</script>

<style scoped></style>

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
import { useLogin } from "../api/userLogin";

export default defineComponent({
  setup() {
    const { error, isPending, login } = useLogin();

    const email = ref<string>("");
    const password = ref<string>("");

    const handleSubmit = async () => {
      await login(email.value, password.value);

      if (!error.value) {
        //redirect to home page
      }
    };

    return { email, password, handleSubmit };
  },
});
</script>

<style scoped></style>

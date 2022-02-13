<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h2>Signup</h2>

      <label for="email">Data email</label>
      <input type="email" name="email" v-model="email" required />

      <label for="password">Data password</label>
      <input type="password" name="password" v-model="password" required />

      <button>Signup</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useSignup } from "../api/useSignup";

export default defineComponent({
  setup() {
    const { error, isPending, signup } = useSignup();

    const email = ref<string>("");
    const password = ref<string>("");

    const handleSubmit = async () => {
      await signup(email.value, password.value);

      if (!error.value) {
        //redirect to home page
      }
    };

    return { email, password, handleSubmit };
  },
});
</script>

<style scoped></style>

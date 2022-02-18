<template>
  <div>Login Page</div>
  <form v-if="!isPending" action="">
    <input type="text" v-model="emial" />
    <input type="text" v-model="password" />
    <button @submit="handleSubmit">Login</button>
  </form>
  <div v-else>
    <h3>Loading....</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useLogin } from "@/api/userLogin";

export default defineComponent({
  setup() {
    const { error, isPending, login } = useLogin();

    const emial = ref<string>("");
    const password = ref<string>("");

    const handleSubmit = async () => {
      await login(emial.value, password.value);

      if (error) {
        console.log("dupa");
      }
    };

    return { emial, password, handleSubmit, isPending };
  },
});
</script>

<style scoped></style>

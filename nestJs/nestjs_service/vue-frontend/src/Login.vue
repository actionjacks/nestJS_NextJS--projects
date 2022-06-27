<template>
  <div class="flex justify-center mt-16">
    <div class="max-w-md w-2/3 border">
      <form @submit.prevent="signIn">
        <div class="-space-y-px text-xl">
          <div>
            <label for="username" class="sr-only">Login</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              v-model="credentials.username"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              v-model="credentials.password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
            />
          </div>

          <div class="pt-8">
            <ButtonSubmitIndigo label="Sign in" :loading="loading" class="w-full text-lg"></ButtonSubmitIndigo>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useUserContext } from "./composables/user";
import api from "@/api";
import ButtonSubmitIndigo from "@/components/ButtonSubmitIndigo";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  components: { ButtonSubmitIndigo },
  setup() {
    const credentials = ref({
      username: null,
      password: null
    });
    const loading = ref(false);
    const { user, setUser } = useUserContext();
    const router = useRouter();

    const signIn = async () => {
      loading.value = true;

      try {
        const token = (await api.post(`/auth/login`, credentials.value)).data;
        setUser(token);
        await router.push({ name: "event-list" });
      } finally {
        loading.value = false;
      }
    };

    return { credentials, signIn, user, setUser, loading };
  }
};
</script>

<style scoped>
</style>

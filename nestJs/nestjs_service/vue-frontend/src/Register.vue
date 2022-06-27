<template>
  <div class="flex justify-center">
    <div class="bg-white mr-4 rounded-sm max-w-xl w-full text-lg">
      <Errors :errors="errors"></Errors>

      <form @submit.prevent="register">
        <div class="grid grid-cols-6 gap-6 p-5">
          <div class="col-span-3">
            <label for="firstName" class="block font-medium text-gray-700">First name</label>
            <input
              type="text"
              id="firstName"
              v-model="userData.firstName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-3">
            <label for="lastName" class="block font-medium text-gray-700">Last name</label>
            <input
              type="text"
              id="lastName"
              v-model="userData.lastName"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-3">
            <label for="email" class="block font-medium text-gray-700">Email address</label>
            <input
              type="text"
              id="email"
              v-model="userData.email"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-3">
            <label for="username" class="block font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              v-model="userData.username"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-3">
            <label for="password" class="block font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="userData.password"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
            />
          </div>

          <div class="col-span-3">
            <label for="retypePassword" class="block font-medium text-gray-700">Re-type password</label>
            <input
              type="password"
              id="retypePassword"
              v-model="userData.retypedPassword"
              class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div class="col-span-6 flex justify-end bg-gray-100 p-5 rounded-b-sm">
          <ButtonSubmitIndigo label="Register" :loading="loading" class="text-lg"></ButtonSubmitIndigo>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import ButtonSubmitIndigo from "@/components/ButtonSubmitIndigo";
import Errors from "@/components/Errors";

export default {
  name: "Register",
  components: { ButtonSubmitIndigo, Errors },
  setup() {
    const router = useRouter();
    const userData = ref({
      email: null,
      password: null,
      retypedPassword: null,
      firstName: null,
      lastName: null,
      username: null
    });
    const errors = ref([]);
    const loading = ref(false);
    const register = async () => {
      errors.value = [];
      loading.value = true;
      try {
        (await api.post(`/users`, userData.value)).data;
        await router.push({ name: "event-list" });
      } catch (e) {
        if (400 === e.response?.status) {
          errors.value = e.response.data.message;
        }
      } finally {
        loading.value = false;
      }
    };

    return { userData, register, errors, loading };
  }
};
</script>

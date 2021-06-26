<template>
  <div class="bg-indigo-900 text-gray-200 p-5 font-semibold mb-3 shadow">
    <div class="flex">
      <div class="mr-auto flex items-center">
        <router-link :to="{name: 'event-list'}" class="text-2xl uppercase">Events</router-link>
      </div>

      <div v-if="!user.userId">
        <router-link
          :to="{name: 'login'}"
          class="ml-2 rounded-sm border border-indigo-700 hover:bg-indigo-800 hover:text-indigo-100 px-4 py-2"
        >Login</router-link>
        <router-link
          :to="{name: 'register'}"
          class="ml-2 rounded-sm border border-indigo-700 hover:bg-indigo-800 hover:text-indigo-100 px-4 py-2"
        >Register</router-link>
      </div>

      <div v-else>
        <router-link
          :to="{name: 'account'}"
          class="ml-2 rounded-sm border border-indigo-700 hover:bg-indigo-800 hover:text-indigo-100 px-4 py-2"
        >Account</router-link>
        <a
          @click.prevent="logout"
          href="#"
          class="ml-2 rounded-sm border border-indigo-700 hover:bg-indigo-800 hover:text-indigo-100 px-4 py-2"
        >Logout</a>
      </div>
    </div>
  </div>
  <router-view class="container mx-auto mb-24"></router-view>
</template>

<script>
import { useUserContext } from "@/composables/user";

export default {
  name: "Layout",
  setup() {
    const { user, setUser, logout } = useUserContext();
    return { user, setUser, logout };
  },
  created() {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      this.setUser(storedUser);
    }
  }
};
</script>

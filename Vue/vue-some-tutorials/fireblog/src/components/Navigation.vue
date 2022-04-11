<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"> </router-link>
      </div>

      <div class="nav-links">
        <u>
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login/Register</router-link>
        </u>
      </div>
    </nav>
    <MenuIcon />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuIcon from "@/assets/Icons/bars-regular.vue";

export default defineComponent({
  components: { MenuIcon },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
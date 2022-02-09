<template>
  <div id="nav">
    <router-link :to="{ name: 'form__' }">Form</router-link>|
    <router-link :to="{ name: 'RenderData' }">RenderData</router-link>|
    <router-link to="/about">About</router-link>|
  </div>

  <div class="redirectBtns">
    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>
  </div>

  <div class="todo">
    <NavbarTodo />
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, useRoute, Router } from "vue-router";
import NavbarTodo from "./components/NavbarTodo.vue";

export default defineComponent({
  components: {
    NavbarTodo,
  },
  setup() {
    const router: Router = useRouter();
    const route = useRoute();

    function redirect() {
      router.push({ name: "RenderData" });
    }
    function back() {
      router.go(-1);
    }
    function forward() {
      router.go(1);
    }

    return {
      redirect,
      back,
      forward,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

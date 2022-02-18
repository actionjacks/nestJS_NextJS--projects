<template>
  <div id="nav">
    | <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/signup">signup</router-link> |

    <div v-if="user">
      <h3>{{ user.displayName }}</h3>
      <button @click="handleClick">logout</button>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { getUser } from "./api/GetUser";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const handleClick = () => {
      signOut(auth);
    };

    watchEffect(() => {
      if (!user.value) {
        router.push("/login");
      }
    });

    const { user } = getUser();

    return { handleClick, user };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

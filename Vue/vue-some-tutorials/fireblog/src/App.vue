<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-show="!navigation" :loginUser="user" :userToken="userToken" />
      <p>{{ user }}</p>
      <button @click.prevent="getCurrentUserFromFirebase">
        Get current user from firebase
      </button>
      <router-view />
      <Footer v-show="!navigation" :userToken="userToken" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import { getUser, getUserToken } from "@/getCurrentFirebaseUser";
import { Store, useStore } from "vuex";
import { key, State, UserDetailsFirebase } from "@/store/index";

export default defineComponent({
  components: { Navigation, Footer },
  setup() {
    const store = useStore(key);

    const router = useRouter();
    const route = useRoute();
    const navigation = ref<boolean>(false);
    const user = ref<UserDetailsFirebase[]>([]);
    const userToken = computed(async () => {
      const token = await getUserToken();
      return token;
    });

    onMounted(() => checkroute());

    async function getCurrentUserFromFirebase(): Promise<void> {
      await store.dispatch("getCurrentUserData");
      user.value = store.state.userInfo;
    }
    //test
    // onMounted(() => {
    //   user.value = getUser();
    // });
    watch(route, () => checkroute());

    function checkroute() {
      if (
        route.name === "Login" ||
        route.name === "Register" ||
        route.name === "ForgetPassword"
      ) {
        navigation.value = true;
        return;
      }
      navigation.value = false;
    }

    return { navigation, user, getCurrentUserFromFirebase, userToken };
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;

  path {
    fill: #000;
  }
}

.arrow-light {
  path {
    fill: #fff;
  }
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }

  .router-ghost {
    cursor: pointer;
    margin-top: 50px;
    padding: 12px 24px;
    background-color: transparent;
    color: #000;
    border-radius: 0;
    border: none;
    padding: 0;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;

    @media (min-width: 700px) {
      margin-top: 0;
      margin-left: auto;
    }

    i {
      margin-left: 8px;
    }
  }

  .button-light {
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
  }

  .button-inactive {
    pointer-events: none !important;
    cursor: none !important;
    background-color: rgba(128, 128, 128, 0.5) !important;
  }
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;

  @media (min-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

.error {
  text-align: center;
  font-size: 12px;
  color: red;
}
</style>

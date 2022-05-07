<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"> </router-link>
      </div>

      <div class="nav-links">
        <ul v-show="!state.mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
          <router-link v-if="userToken" class="link" to="#"
            >Create Post</router-link
          >
          <router-link v-if="loginUser" class="link" :to="{ name: 'Register' }"
            >Login/Register</router-link
          >
        </ul>

        <div
          ref="profile"
          v-if="loginUser"
          class="profile"
          @click="toggleProfileMenu"
        >
          <span>{{
            loginUser.firstName?.charAt(0)?.toUpperCase() ?? "LOL"
          }}</span>
          <div v-if="state.profileMemu" class="profile-menu">
            <div class="info">
              <div class="right">
                <p>{{ loginUser.firstName }}</p>
                <p>{{ loginUser.lastName }}</p>
                <p>{{ loginUser.username }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" :to="{ name: 'Profile' }">
                  <UserCrownIcon class="icon" />
                  Profile</router-link
                >
              </div>
              <div class="option">
                <router-link class="option" :to="{ name: 'Admin' }">
                  <UserCrownIcon class="icon" />
                  Admin</router-link
                >
              </div>
              <div @click="signOut" class="option">
                <SignOutIcon class="icon" />
                Sign Out
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <MenuIcon
      v-show="state.mobile"
      class="menu-icon"
      @click="toggleMobileNav"
    />
    <transition name="mobile-nav">
      <ul v-show="state.mobileNav" class="mobile-nav">
        <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link v-if="loginUser" class="link" :to="{ name: 'Register' }"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  reactive,
  ref,
} from "vue";
import { UserDetailsFirebase } from "@/store/index";
import { auth } from "@/firebase";
import MenuIcon from "@/assets/Icons/bars-regular.vue";
import SignOutIcon from "@/assets/Icons/sign-out-alt-regular.vue";
import UserCrownIcon from "@/assets/Icons/user-crown-light.vue";
import { IdTokenResult } from "@firebase/auth";

type State = {
  mobile: boolean;
  mobileNav: boolean;
  windowWidth: number;
  profileMemu: boolean;
};

export default defineComponent({
  components: { MenuIcon, SignOutIcon, UserCrownIcon },
  props: {
    loginUser: {
      type: Object as PropType<UserDetailsFirebase>,
      required: true,
    },
    userToken: {
      type: Object as PropType<IdTokenResult | undefined>,
      required: false,
      default: () => {},
    },
  },
  setup() {
    const profile = ref<HTMLDivElement | null>(null);
    const state = reactive<State>({
      mobile: false,
      mobileNav: false,
      windowWidth: 0,
      profileMemu: false,
    });

    function windowWidth(): void {
      state.windowWidth = window.innerWidth;
      if (state.windowWidth <= 750) {
        state.mobile = true;
        return;
      }
      state.mobile = false;
      state.mobileNav = false;
    }

    function toggleMobileNav(): void {
      state.mobileNav = !state.mobileNav;
    }
    //todo focus out
    function toggleProfileMenu(e: Event): void {
      if (e.target === profile.value) {
        state.profileMemu = !state.profileMemu;
      }
    }

    function signOut(): void {
      auth.signOut();
      window.location.reload();
    }

    onMounted(() => {
      window.addEventListener("resize", windowWidth);
      windowWidth();
    });
    onUnmounted(() => window.removeEventListener("resize", windowWidth));

    return {
      profile,
      state,
      toggleMobileNav,
      toggleProfileMenu,
      signOut,
    };
  },
});
</script>

<style scoped lang="scss">
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.link {
  font-weight: 500;
  padding: 0 8px;
  transition: 0.3s color ease;

  &:hover {
    color: #1eb8b8;
  }
}

nav {
  display: flex;
  padding: 25px 0;
  .branding {
    display: flex;
    align-items: center;
    .header {
      font-weight: 600;
      font-size: 24px;
      color: #000;
      text-decoration: none;
    }
  }

  .nav-links {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    ul {
      margin-right: 32px;
      .link {
        margin-right: 32px;
      }
      .link:last-child {
        margin-right: 0;
      }
    }

    .profile {
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #fff;
      background-color: #303030;

      span {
        pointer-events: none;
      }

      .profile-menu {
        position: absolute;
        top: 60px;
        right: 0;
        width: 250px;
        background-color: #303030;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);

        .info {
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #fff;

          .right {
            flex: 1;
            margin-left: 24px;

            p:nth-child(1) {
              font-size: 14px;
            }
            p:nth-child(2),
            p:nth-child(3) {
              font-size: 12px;
            }
          }
        }
        .options {
          padding: 15px;
          .option {
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;
            margin-bottom: 12px;

            .icon {
              width: 18px;
              height: auto;
            }
            p {
              font-size: 18px;
              margin-left: 12px;
            }
            &:last-child {
              margin-bottom: 0px;
            }
          }
        }
      }
    }
  }
}

.menu-icon {
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 25px;
  height: 25px;
  width: auto;
}
.mobile-nav {
  padding: 20px;
  width: 70%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  z-index: 99;
  background-color: #303030;
  top: 0;
  left: 0;

  .link {
    padding: 15px 0;
    color: #fff;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 1s ease;
}
.mobile-nav-enter {
  transform: translateX(-250px);
}
.mobile-nav-enter-to {
  transform: translateX(0);
}
.mobile-nav-leave-to {
  transform: translateX(-250px);
}
</style>
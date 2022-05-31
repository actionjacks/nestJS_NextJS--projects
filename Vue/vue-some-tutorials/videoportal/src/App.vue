<template>
  <div id="nav">
    <button @click="testPopup">
      test
    </button>
    <router-link to="/">Home | </router-link>
    <router-link to="/admin/videos">Admin |</router-link>
  </div>
  <router-view />

  <PopupBar />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PopupBar from '@/components/PopupBar.vue'
import { useStore } from "vuex";
import { key } from "@/store/index";

export default defineComponent({
  components: { PopupBar },
  setup() {
    const store = useStore(key)

    function testPopup() {
      store.dispatch('popup/startPopup',
        {
          title: 'test',
          position: 'bottom',
          show: true
        })
    }

    return {
      testPopup
    }
  }
})
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

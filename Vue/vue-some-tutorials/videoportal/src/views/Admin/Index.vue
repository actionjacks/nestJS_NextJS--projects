<template>
  <div class="tabs">
    <router-link to="/admin/videos">Videos</router-link>
    <router-link to="/admin/users">Users</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {


    return {}
  }
})
</script>

<style lang="scss" scoped>
.tabs {
  width: 100%;
  display: flex;

  .router-link-active,
  .router-link-exact-active {
    color: rgb(231, 56, 56);
    background-color: rgb(247, 207, 207);
  }

  a {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 10px;
    padding: 10px;
    margin: auto;
    color: white;
    background-color: rgb(212, 212, 212);
    text-decoration: none;
  }
}
</style>
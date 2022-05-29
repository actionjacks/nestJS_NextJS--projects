<template>
  <div class="wrapper">
    <div class="top-navbar">
      <div v-if="currentUser">
        <button>{{ currentUser.name }}</button>
        <button @click="logout">Logout</button>
      </div>
      <div v-else>
        <router-link to="/login">Login | </router-link>
        <router-link to="/registration">Register |</router-link>
      </div>
    </div>
    <span v-if="info">
      {{ info }}
    </span>
    <div v-if="videos.length > 1" class="video-container">
      <div v-for="video in videos" :key="video.id" class="video-box ">
        <VideoListVideo componentAsLink :video="video" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ComputedRef } from "vue";
import VideoListVideo from '@/components/VideoListVideo.vue'
import { useStore } from "vuex";
import { mapGetters } from "@/store/map-state";
import { key } from "@/store/index";
import { Videos } from "@/Classes/Videos";
import { useRoute } from 'vue-router'
import { computed } from "@vue/reactivity";
import { User } from '@/Classes/Users';

export default defineComponent({
  components: { VideoListVideo },
  props: {
    sucessInfo: { type: String, required: false, default: '' }
  },
  setup() {
    const store = useStore(key)
    const { videos, currentUser } = mapGetters()

    const info = computed(() => useRoute().params?.sucessInfo ?? '')

    function logout() {
      store.dispatch('logoutUser')
    }

    onMounted(() => {
      store.dispatch('clearVideos')
      store.dispatch('loadVideos')
    })

    return {
      info,
      logout,
      videos: videos as ComputedRef<Videos[]>,
      currentUser: currentUser as ComputedRef<User>
    }
  }
});
</script>

<style lang="scss" scoped>
.video-container {
  .video-box {
    border: 1px solid black;
    border-radius: 16px;
    margin: 10px;
    text-align: left;
    display: flex;
    justify-content: flex-start;
  }
}
</style>
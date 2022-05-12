<template>
  <div class="wrapper">
    <div class="video-container">
      <div v-for="video in videos" :key="video.id ?? 0">
        <router-link :to="{ name: 'video-watch', params: { id: video.id } }">
          <div class="video-box">
            <img :src="video.thumbnail ?? ''" :alt="video.name ?? ''">
            <div>
              <h3>{{ video.name ?? '' }}</h3>
              <div v-html="video.description"></div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { key } from "@/store/index";

export default defineComponent({
  setup() {
    const store = useStore(key);
    const videos = ref(store.state.videos ?? [])

    return {
      videos
    }
  }
});
</script>

<style lang="scss" scoped>
.video-container {
  .video-box {
    border: 1px solid block;
    border-radius: 16px;
    margin: 10px;
    text-align: left;
    display: flex;
    justify-content: flex-start;

    img {
      width: 200px;
      padding: 10px;
    }
  }
}
</style>
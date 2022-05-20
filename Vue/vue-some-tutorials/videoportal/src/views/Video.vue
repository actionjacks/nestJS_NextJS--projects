<template>
  <div class="wrapper">
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

export default defineComponent({
  components: { VideoListVideo },
  props: {
    sucessInfo: { type: String, required: false, default: '' }
  },
  setup() {
    const store = useStore(key)
    const { videos } = mapGetters()

    const info = computed(() => useRoute().params?.sucessInfo ?? '')

    onMounted(() => {
      store.dispatch('clearVideos')
      store.dispatch('loadVideos')
    })

    return {
      info,
      videos: videos as ComputedRef<Videos[]>
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
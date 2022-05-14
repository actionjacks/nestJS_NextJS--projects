<template>
  <div v-if="video.length">
    <h3>{{ video[0].name }}</h3>
    <div v-html="video[0].description"></div>
    <iframe ref="videoRef" width="480" height="380" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  </div>
  <div v-else>
    <h3>not found</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from "vuex";
import { key } from "@/store/index";
import { Videos } from '@/Classes/Videos'

export default defineComponent({
  setup() {
    const paramId = useRoute().params.id[0]
    const store = useStore(key);
    const videoRef = ref<null | HTMLIFrameElement>(null)
    const video = ref<Videos[]>(store.state.videos.filter((video) => String(video.id) === paramId))

    onMounted(() => {
      if (!videoRef.value) { return }
      videoRef.value.src = video.value[0].url
      console.log(videoRef.value)
    })
    return { video, videoRef, paramId }
  }
})
</script>

<style lang="scss" scoped>
img {
  max-width: 50%;
}

.video-js {
  margin: auto;
}
</style>
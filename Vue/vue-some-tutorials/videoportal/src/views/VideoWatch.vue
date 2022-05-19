<template>
  <div v-if="video.length">
    <h3>{{ video[0].name }}</h3>
    <div v-html="video[0].description"></div>
    <div>
      <button v-for="(tag, index) in videoTags" :key="index">
        {{ tag }}
      </button>
    </div>
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
import { mapGetters } from "@/store/map-state";
import { Videos } from '@/Classes/Videos'

export default defineComponent({
  setup() {
    const videoRef = ref<null | HTMLIFrameElement>(null)
    const paramId = useRoute().params.id[0]
    const videoTags = useRoute().params.displayTag as string[]
    const { videos } = mapGetters()

    const video = ref<Videos[]>(videos.value.filter((video: Videos) => String(video.id) === paramId))

    onMounted(() => {
      if (!videoRef.value) { return }
      videoRef.value.src = video.value[0].url
    })

    return { video, videoRef, paramId, videoTags }
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
<template>

  <div v-if="video.length">
    <h3>{{ video[0].name }}</h3>
    <div v-html="video[0].description"></div>
    <div>

      <div @click="markPlayed" class="played-container">
        <span v-if="isPlayed" :style="{ color: 'red' }">Played</span>
        <span v-else>Mark as played</span>
      </div>

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
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { mapGetters } from "@/store/map-state";
import { Videos } from '@/Classes/Videos'
import { useStore } from "vuex";
import { key } from "@/store/index";

export default defineComponent({
  props: ['id', 'displayTag'],//props passed from path router TODO type them!
  setup() {
    const store = useStore(key)
    const { videos, getPlayedVideos } = mapGetters()

    const videoRef = ref<null | HTMLIFrameElement>(null)
    const paramId = useRoute().params?.id[0]
    const videoTags = useRoute().params?.displayTag as string[]

    const isPlayed = computed<boolean>(() => {
      if (!paramId) { return false }
      return getPlayedVideos?.value?.includes(paramId)
    })

    const video = ref<Videos[]>(videos.value.filter((video: Videos) => (video.id) === paramId))

    function markPlayed() {
      store.dispatch('markPlayed', paramId)
    }

    onMounted(() => {
      store.dispatch('getPlayedVideos')
      if (!videoRef.value) { return }
      videoRef.value.src = video.value[0].url
    })

    return {
      video,
      videoRef,
      paramId,
      videoTags,
      isPlayed,
      markPlayed
    }
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

.played-container {
  border: 1px solid green;
  border-radius: 5px;
  display: block;
  margin: auto;
  padding: 5px;
  margin-bottom: 5px;
  width: 55px;
  cursor: pointer;
}
</style>
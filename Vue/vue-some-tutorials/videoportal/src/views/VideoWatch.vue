<template>
  <div v-if="video.length">
    <img :src="video[0].thumbnail" :alt="video[0].name">
    <h3>{{ video[0].name }}</h3>
    <div v-html="video[0].description"></div>
  </div>
  <div v-else>
    <h3>not found</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from "vuex";
import { key } from "@/store/index";
import { Videos } from '@/store/stateTypes'

export default defineComponent({
  setup() {
    const paramId = useRoute().params.id[0]
    const store = useStore(key);

    const video = ref<Videos[]>(store.state.videos.filter((video) => String(video.id) === paramId))

    return { video }
  }
})
</script>

<style lang="scss" scoped>
img {
  max-width: 50%;
}
</style>
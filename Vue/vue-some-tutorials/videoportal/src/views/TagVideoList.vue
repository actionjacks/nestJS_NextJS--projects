<template>
  <div>
    <h1>{{ paramId }}</h1>
    <h4>{{ displayCurrentTag }}</h4>
    <span v-for="video in videos" :key="video.id">
      {{ video.name }}
      <br>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, ComputedRef } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from "vuex";
import { key } from "@/store/index";

export default defineComponent({
  setup() {
    const store = useStore(key)

    const paramId = computed(() => useRoute().params.id[0])
    const displayCurrentTag: ComputedRef<string> = computed(() => store.getters.getTagById(Number(paramId.value)))

    const videos = computed(() => {
      return store.getters.getVideosByTagId(paramId.value)
    })

    onMounted(() => {
      store.dispatch('clearVideos')
      store.dispatch('loadVideos')
    })

    return {
      paramId,
      displayCurrentTag,
      videos
    }
  }
})
</script>

<style scoped>
</style>
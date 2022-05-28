<template>
  <VideoForm v-model="model" @submit="saveVideo" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import VideoForm from '@/components/VideoForm.vue'
import { Videos } from '@/Classes/Videos';
import { useRoute } from 'vue-router'
import { key } from "@/store/index";
import { useStore } from "vuex";
import { mapGetters } from "@/store/map-state";
import router from '@/router';

export default defineComponent({
  components: { VideoForm },
  props: ['id', 'displayTag'],//props passed from path router TODO type them!
  setup() {
    const { videos } = mapGetters()
    const store = useStore(key)
    const paramId = useRoute().params?.id[0]
    const video = ref<Videos[]>(videos.value.filter((video: Videos) => (video.id) === paramId))

    const model = reactive<Videos>({
      id: video?.value[0]?.id ?? '',
      name: video?.value[0]?.name ?? '',
      description: video?.value[0]?.description ?? '',
      thumbnail: video?.value[0]?.thumbnail ?? '',
      url: video?.value[0]?.url ?? '',
      tagids: video?.value[0]?.tagids ?? [],
    })

    async function saveVideo() {
      await store.dispatch('editVideo', model)
      router.push({ name: 'admin-video-list' })
    }

    return {
      saveVideo,
      paramId,
      model
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
<template>
  <div class="wrapper">
    <div v-if="videos.length > 1" class="video-container">
      <div v-for="video in videos" :key="video.id" class="video-box ">
        <router-link :to="{ name: 'video-watch', params: { id: video.id } }">
          <img :src="video.thumbnail" :alt="video.name">
          <div>
            <h3>{{ video.name ?? '' }}</h3>
            <div v-html="video.description"></div>
          </div>
        </router-link>
        <hr>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { key } from "@/store/index";
import Api from '@/service/videosFromMirage'
import { Video, Videos } from '@/Classes/Videos'

export default defineComponent({
  setup() {
    const videos = ref<Videos[]>([])

    onMounted(async () => {
      const result: { data: { type: string, id: string, attributes: Videos }[] }
        = await (await Api().get('/videos')).data

      result.data.forEach((item) => {
        const { id, attributes } = item
        videos.value.push(new Video(attributes, id))
      })
    });

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
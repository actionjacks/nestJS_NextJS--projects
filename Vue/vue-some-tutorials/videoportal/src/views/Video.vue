<template>
  <div class="wrapper">
    <div v-if="videos.length > 1" class="video-container">
      <div v-for="video in videos" :key="video.id" class="video-box ">
        <router-link :to="{
          name: 'video-watch',
          params: {
            id: video.id,
            displayTag: video.tagids?.map(({ id }) => displayTag(Number(id))) ?? []
          }
        }">
          <img :src="video.thumbnail" :alt="video.name">
          <div>
            <h3>{{ video.name ?? '' }}</h3>
            <div v-html="video.description"></div>

            <span v-for="({ id }) in video.tagids" :key="id">
              <button>
                {{ displayTag(Number(id)) }}
              </button>
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ComputedRef } from "vue";
import { useStore } from "vuex";
import { mapGetters } from "@/store/map-state";
import { key, Tag, Tags } from "@/store/index";
import { Videos } from "@/Classes/Videos";

export default defineComponent({
  setup() {
    const store = useStore(key)
    const { videos, tags } = mapGetters()

    onMounted(() => {
      store.dispatch('clearVideos')
      store.dispatch('loadVideos')
    })

    function displayTag(id: number): Tags | string {
      return tags.value[id] ?? ''
    }

    return {
      videos: videos as ComputedRef<Videos[]>,
      tags: tags as ComputedRef<Tag[]>,
      displayTag
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

    img {
      width: 200px;
      padding: 10px;
    }
  }
}
</style>
<template>
  <div>
    <h3>Add new video</h3>
    <router-link to="/admin/video/new">Add video |</router-link>

    <div class="wrapper">
      <div class="vide-box" v-for="video in videos_" :key="video.id">
        <div class="title">{{ video.name }}</div>
        <div v-html="video.description"></div>
        <div class="actions">

          <router-link :to="{
            name: 'video-watch',
            params: { id: video.id, displayTag: video.tagids?.map(({ id }) => displayTag(Number(id))) ?? [] },
          }">
            <span>show</span>
          </router-link>

          <router-link :to="{
            name: 'admin-video-edit',
            params: { id: video.id, displayTag: video.tagids?.map(({ id }) => displayTag(Number(id))) ?? [] },
          }">
            <span>edit</span>
          </router-link>

          <span @click="deleteVide(video)">
            delete
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ComputedRef, onMounted } from 'vue'
import { Tag, Tags } from '@/store'
import { useStore } from "vuex";
import { mapGetters } from "@/store/map-state";
import { key } from "@/store/index";
import { Videos } from '@/Classes/Videos'

export default defineComponent({
  setup() {
    const store = useStore(key)
    const { videos, tags } = mapGetters()

    const videos_ = computed<Videos[]>(() => videos.value)

    function deleteVide(video: Videos) {
      store.dispatch('deleteVideo', video)
    }

    function displayTag(id: number): Tags | string {
      return tags.value[id] ?? ''
    }

    onMounted(() => {
      store.dispatch('clearVideos')
      store.dispatch('loadVideos')
    })

    return {
      videos_,
      deleteVide,
      displayTag,
      tags: tags as ComputedRef<Tag[]>
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, 33%);
  padding: 10px;

  .vide-box {
    border: 1px solid lightgrey;

    .title {
      padding-top: 5px;
      padding-bottom: 5px;
    }

    .actions {
      cursor: pointer;

      span {
        border: 1px solid;
        margin: 5px;
        padding: 0 10px;
      }
    }
  }
}
</style>
<template>
  <router-link v-if="componentAsLink" :to="{
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
      <div class="played-container">
        <span v-if="isPlayed(video.id)" :style="{ color: 'red' }">Played</span>
      </div>

      <span v-for="({ id }) in video.tagids" :key="id">
        <router-link :to="{ name: 'tag', params: { id: id } }">
          <button>
            {{ displayTag(Number(id)) }}
          </button>
        </router-link>
      </span>
    </div>
  </router-link>
  <div v-else>
    <img :src="video.thumbnail" :alt="video.name">
    <div>
      <h3>{{ video.name ?? '' }}</h3>
      <div v-html="video.description"></div>
      <span v-for="({ id }) in video.tagids" :key="id">
        <router-link :to="{ name: 'tag', params: { id: id } }">
          <button>
            {{ displayTag(Number(id)) }}
          </button>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { ComputedRef, defineComponent, PropType, onMounted } from 'vue'
import { mapGetters } from "@/store/map-state";
import { Videos } from '@/Classes/Videos';
import { Tag, Tags } from '@/store'
import { useStore } from "vuex";
import { key } from "@/store/index";

export default defineComponent({
  props: {
    video: {
      type: Object as PropType<Videos>, required: true
    },
    componentAsLink: {
      type: Boolean, required: false,
    }
  },
  setup() {
    const store = useStore(key)
    const { getPlayedVideos, tags } = mapGetters()

    function isPlayed(id: string): boolean {
      return getPlayedVideos?.value?.includes(id)
    }

    function displayTag(id: number): Tags | string {
      return tags.value[id] ?? ''
    }

    onMounted(() => store.dispatch('getPlayedVideos'))

    return {
      isPlayed,
      displayTag,
      tags: tags as ComputedRef<Tag[]>
    }
  }
})
</script>

<style lang="scss" scoped>
img {
  width: 200px;
  padding: 10px;
}
</style>
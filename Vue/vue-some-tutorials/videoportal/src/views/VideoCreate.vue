<template>
  <div class="wrapper">
    <span>
      https://www.youtube.com/embed/RZldrW_ypfw
    </span>
    <br>
    <span>
      https://d-tm.ppstatic.pl/kadry/90/e7/84e1cb39db863ae24dfebe174921.1000.jpg
    </span>
    <h1>Add new video</h1>
    <form>
      <div class="field">
        <label for="name">name</label>
        <input v-model="model.name" type="text" id="name">
      </div>
      <div class="field">
        <label for="description">description</label>
        <input v-model="model.description" type="text" id="description">
      </div>
      <div class="field">
        <label for="thumbnail">thumbnail</label>
        <input v-model="model.thumbnail" type="text" id="thumbnail">
      </div>
      <div class="field">
        <label for="url">url</label>
        <input v-model="model.url" type="text" id="url">
      </div>
      <button @click.prevent="addVideo">Add video</button>
    </form>
    <div class="card-preview">
      <VideoListVideo :video="model" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import VideoListVideo from '@/components/VideoListVideo.vue'
import { Videos } from '@/Classes/Videos';
import { v4 as uuidv4 } from "uuid";
import { useStore } from "vuex";
import { key } from "@/store/index";
import router from '@/router';

export default defineComponent({
  components: { VideoListVideo },
  setup() {
    const store = useStore(key)

    const model = reactive<Videos>({
      id: uuidv4(),//generate mockup id only for pass to VideoListVideo component
      name: '',
      description: '',
      thumbnail: '',
      url: '',
      tagids: [],
    })

    async function addVideo() {
      const allValuesFilled = Object.values(model).filter((val) => val === '')
      if (allValuesFilled.length) {
        return
      }
      await store.dispatch('createVideo', model)
      router.push({ name: 'video', params: { sucessInfo: 'video created' } })
    }

    return {
      model,
      addVideo
    }
  }
})
</script>

<style scoped>
</style>
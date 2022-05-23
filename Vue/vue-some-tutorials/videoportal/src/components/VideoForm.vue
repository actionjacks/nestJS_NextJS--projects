<template>
  <div class="wrapper" v-if="model.id">
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
      <button @click.prevent="$emit('submit')">Save video</button>
    </form>
    <div class="card-preview">
      <VideoListVideo :video="model" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { Video } from '@/Classes/Videos';
import VideoListVideo from '@/components/VideoListVideo.vue'

export default defineComponent({
  components: { VideoListVideo },
  emits: ['update:modelValue', 'submit'],
  props: {
    modelValue: {
      type: Object as PropType<Video>,
      default: () => ({})
    },
  },
  setup(props, { emit }) {

    const model = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit('update:modelValue', value)
      },
    });
    return {
      model
    }
  }
})
</script>

<style scoped>
</style>
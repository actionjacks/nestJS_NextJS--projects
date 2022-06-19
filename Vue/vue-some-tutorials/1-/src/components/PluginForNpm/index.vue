<template>
  <div class="image-uploader">
    <input @change="fileUpload" type="file" id="file-upload" name="fileUpload" accept="image/*">
    <div class="your-file">
      <img :src="imgSrc" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue'

export default defineComponent({
  props: {
    customImg: {
      type: String, required: false, default: ''
    }
  },
  setup(props) {
    const img = inject('fileUploadImage') as string
    const imgSrc = ref<string>(img.length ? img : props.customImg)
    // app.provide("fileUploadImage", options?.img)


    function fileUpload(event: Event) {
      const target = event.target as HTMLInputElement
      const file = target.files?.[0]
      if (file) {
        fileProcess(file)
      }
    }

    function fileProcess(file: File) {
      imgSrc.value = URL.createObjectURL(file)
    }

    return {
      imgSrc, fileUpload
    }
  }
})
</script>

<style scoped>
</style>
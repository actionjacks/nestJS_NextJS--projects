/* eslint-disable */
<template>
  <Wrapper
    class="carousel"
    v-slot="{ currentSlide }"
    :numberOfSlides="getSlideCount"
    :autoPlay="true"
    :timeToNextSlide="2000"
  >
    <Card v-for="(slide, inx) in imagesSlides" :key="slide.id">
      <div v-show="currentSlide === inx + 1" class="slide-info">
        <img :src="slide.url" />
      </div>
    </Card>
  </Wrapper>
</template>

<script lang="ts">
import { ImgAssets } from "@/utilities/api";
import { defineComponent, ref, computed, PropType } from "vue";
import Wrapper from "./Wrapper.vue";
import Card from "./Card.vue";

export default defineComponent({
  components: { Wrapper, Card },
  props: {
    images: { type: Array as PropType<ImgAssets[]>, required: true },
  },
  setup(props) {
    const imagesSlides = ref<ImgAssets[]>(props.images ?? []);
    const getSlideCount = computed(() => imagesSlides.value.length);

    return { imagesSlides, getSlideCount };
  },
});
</script>

<style scoped>
.carousel {
  position: relative;
  max-height: 50vh;
  height: 50vh;
  width: 100%;
  border: 1px solid lightblue;
}
.slide-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100%;
}
img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

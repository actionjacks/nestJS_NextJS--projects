z
<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <div class="navigate">
      <div @click="previusSlide" class="toggle-page left">***</div>
      <div @click="nextSlide" class="toggle-page right">***</div>
    </div>

    <Dot
      @gotoslide="goToSlide"
      :slidesDots="slidesLenght"
      :currentSlide="currentSlide"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from "vue";
import Dot from "./Dot.vue";

export default defineComponent({
  components: { Dot },
  props: {
    numberOfSlides: { type: Number as PropType<number>, required: true },
    autoPlay: { type: Boolean, required: false, default: false },
    timeToNextSlide: { type: Number, required: false, default: 3000 },
  },
  setup(props) {
    const currentSlide = ref<number>(1);
    const slidesLenght = ref<number>(props.numberOfSlides);
    const autoPlay = ref<boolean>(props.autoPlay);
    const autoPlayId = ref<number | null>(null);

    const timeoutDuration = ref<number>(props.timeToNextSlide);

    onMounted(() => (props.autoPlay ? startAutoPlay() : null));
    const startAutoPlay = (): void => {
      // get reference interval ID
      autoPlayId.value = setInterval(() => {
        if (currentSlide.value === slidesLenght.value) {
          currentSlide.value = 1;
          return;
        }
        currentSlide.value += 1;
      }, timeoutDuration.value);
    };

    function stopInterval(intervalId: number | null): void {
      if (intervalId) {
        clearInterval(intervalId);
        return;
      }
    }

    const nextSlide = (): void => {
      stopInterval(autoPlayId.value);
      if (currentSlide.value === slidesLenght.value) {
        currentSlide.value = 1;
      } else currentSlide.value += 1;

      autoPlay.value ? startAutoPlay() : null;
    };

    const previusSlide = (): void => {
      stopInterval(autoPlayId.value);
      if (currentSlide.value === 1) {
        currentSlide.value = slidesLenght.value;
      } else currentSlide.value -= 1;

      autoPlay.value ? startAutoPlay() : null;
    };

    const goToSlide = (inx: number): void => {
      stopInterval(autoPlayId.value);
      currentSlide.value = inx + 1;
      if (autoPlay.value) {
        startAutoPlay();
      }
    };

    return {
      nextSlide,
      previusSlide,
      goToSlide,
      currentSlide,
      slidesLenght,
    };
  },
});
</script>

<style scoped>
.navigate {
  bottom: -10%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.toggle-page {
  display: flex;
  flex: 1;
}
.left {
  background-color: inherit;
  color: white;
  align-items: center;
  font-size: 2.5rem;
  cursor: pointer;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}
.right {
  background-color: inherit;
  color: white;
  align-items: center;
  font-size: 2.5rem;
  cursor: pointer;
  justify-content: flex-end;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
}
</style>

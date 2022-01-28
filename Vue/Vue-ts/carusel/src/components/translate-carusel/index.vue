<template>
  <div class="carousel-wrapper">
    <div
      ref="inner"
      class="inner"
      :style="{
        transition: innerStyles.transition,
        transform: innerStyles.transform,
      }"
    >
      <div class="card" v-for="slide in slideImages" :key="slide.id">
        <Card :url="slide.url" />
      </div>
    </div>
  </div>
  <div class="buttons-container">
    <button @click.self="back">prev</button>
    <button @click.self="next">next</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType, ref, onMounted, onUnmounted } from "vue";
  import { ImgAssets } from "@/utilities/api";
  import Card from "./Card.vue";

  export default defineComponent({
    components: { Card },
    props: {
      images: { type: Array as PropType<ImgAssets[]>, required: true },
    },

    setup(props) {
      //todo
      //const configCarusel = computed(() => ({}));
      const slideImages = ref<ImgAssets[]>(props.images);
      const inner = ref<HTMLElement | null>(null);
      const innerStyles = ref<Partial<CSSStyleDeclaration>>({});
      const step = ref<string>("");

      onMounted(() => {
        setStep();
        restTranslate();
        window.addEventListener("resize", resetImageRelativeToTheWindow);
      });
      onUnmounted(() => {
        window.removeEventListener("resize", resetImageRelativeToTheWindow);
      });
      function resetImageRelativeToTheWindow() {
        setStep();
        restTranslate();
      }

      function setStep(): void {
        const innerWidth = inner?.value?.scrollWidth;
        const totalImages = slideImages.value?.length;
        step.value = `${(innerWidth as number) / totalImages}px`;
      }

      function next() {
        moveLeft();

        afterTransition(() => {
          const imageToDisplayInArray = slideImages.value.shift();
          slideImages.value.push(imageToDisplayInArray as ImgAssets);

          restTranslate();
        });
      }

      function back() {
        moveRight();
        afterTransition(() => {
          const image = slideImages.value.pop();
          slideImages.value.unshift(image as ImgAssets);

          restTranslate();
        });
      }

      function moveLeft() {
        innerStyles.value = {
          transform: `translateX(-${step.value})
                      translateX(-${step.value})`,
        };
      }

      function moveRight() {
        innerStyles.value = {
          transform: `translateX(${step.value})
                      translateX(-${step.value})`,
        };
      }

      function afterTransition(callback: () => void): void {
        const listener = () => {
          callback();
          inner.value?.removeEventListener("transitioned", listener);
        };
        inner?.value?.addEventListener("transitionend", listener);
      }

      function restTranslate() {
        innerStyles.value = {
          transition: "none",
          transform: `translateX(-${step.value})`,
        };
        console.log(innerStyles.value);
      }

      return { inner, slideImages, innerStyles, next, back };
    },
  });
</script>

<style scoped>
  .carousel-wrapper {
    height: 50vh;
    width: 100%;
    overflow: hidden;
  }
  .inner {
    transition: transform 0.2s;
    white-space: nowrap;
    height: 100%;
    width: 100%;
  }
  .card {
    height: 100%;
    width: 100%;
    display: inline-flex;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
  }
  .buttons-container {
    z-index: 1;
    position: absolute;
    top: 25%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
  }
  /* style todo */
  .buttons-container button {
    border: 1px solid;
  }
</style>

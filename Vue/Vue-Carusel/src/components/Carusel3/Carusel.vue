<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <div class="navigate">
      <div class="toggle-page left" @click="back">*</div>
      <div class="toggle-page right" @click="next">*</div>
    </div>

    <div class="pagination">
      <span
        @click="goToSlide(inx)"
        v-for="(slide, inx) in numberOfSlides"
        :key="inx"
        :class="{ active: inx === currentSlide - 1 }"
      >
      </span>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, onMounted } from "vue";

  const props = defineProps({
    numberOfSlides: Number,
    autoPlay: Boolean,
  });
  const { numberOfSlides, autoPlay } = props;

  const currentSlide = ref(1);
  const autoPlayEnabled = ref(autoPlay);
  const autoPlayId = ref(null);
  const timeoutDuration = ref(2000);

  const next = () => {
    clearInterval(autoPlayId.value);
    if (currentSlide.value === numberOfSlides) {
      currentSlide.value = 1;
    } else {
      currentSlide.value += 1;
    }
    if (autoPlayEnabled.value) {
      autoplay();
    }
  };
  const back = () => {
    clearInterval(autoPlayId.value);
    if (currentSlide.value === 1) {
      currentSlide.value = numberOfSlides;
    } else {
      currentSlide.value -= 1;
    }
    if (autoPlayEnabled.value) {
      autoplay();
    }
  };
  const goToSlide = (inx) => {
    clearInterval(autoPlayId.value);
    currentSlide.value = inx + 1;
    if (autoPlayEnabled.value) {
      autoplay();
    }
  };
  const autoplay = () => {
    autoPlayId.value = setInterval(() => {
      if (currentSlide.value === numberOfSlides) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    }, timeoutDuration.value);
  };
  onMounted(() => {
    autoPlayEnabled.value ? autoplay() : null;
  });
</script>

<style lang="scss" scoped>
  .navigate {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    .toggle-page {
      display: flex;
      flex: 1;
    } //FIXME-Need wrap element to display navigation icon
    .left {
      color: white;
      align-items: center;
      font-size: 2.5rem;
      cursor: pointer;
    } //FIXME-Need wrap element to display navigation icon
    .right {
      color: white;
      align-items: center;
      font-size: 2.5rem;
      cursor: pointer;
      justify-content: flex-end;
    }
  }
  .pagination {
    position: absolute;
    bottom: 24px;
    width: 100%;
    gap: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      cursor: pointer;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
        0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }
    .active {
      background-color: red;
      box-shadow: 0 1px 3px 0 rgba(48, 48, 48, 0.1),
        0 1px 2px 0 rgba(63, 62, 62, 0.06);
    }
  }
</style>

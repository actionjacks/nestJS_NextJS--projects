<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card" v-for="card in cards" :key="card">
        {{ card }}
      </div>
    </div>
  </div>
  <button @click="back">prev</button>
  <button @click="next">next</button>
</template>

<script setup>
  import { onMounted, ref, onUnmounted } from "vue";
  const cards = ref([1, 2, 3, 4, 5, 6, 7]);

  const inner = ref(null);
  const innerStyles = ref({});
  const step = ref("");

  onMounted(() => {
    setStep();
    window.addEventListener("resize", () => {
      setStep();
      resetTranslate();
    });
  });
  onUnmounted(() => {
    window.removeEventListener("resize");
  });

  function setStep() {
    const innerWidth = inner.value.scrollWidth;
    const totalCards = cards.value.length;
    step.value = `${innerWidth / totalCards}px`;
  }
  function next() {
    moveLeft();

    afterTransition(() => {
      const card = cards.value.shift();
      cards.value.push(card);

      resetTranslate();
    });
  }
  function back() {
    moveRight();

    afterTransition(() => {
      const card = cards.value.pop();
      cards.value.unshift(card);

      resetTranslate();
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
  function afterTransition(callback) {
    const listener = () => {
      callback();
      inner.value.removeEventListener("transitionend", listener);
    };
    inner.value.addEventListener("transitionend", listener);
  }
  function resetTranslate() {
    innerStyles.value = {
      transition: "none",
      transform: `translateX(-${step.value})`,
    };
  }
</script>

<style scoped>
  .carousel {
    height: 50vh;
    width: 100%;
    overflow: hidden;
    border: 1px solid lemonchiffon;
  }
  .inner {
    transition: transform 0.2s;
    white-space: nowrap;
    height: 100%;
    width: 100%;
  }
  .card {
    width: 100%;
    margin-right: 1rem;
    display: inline-flex;

    height: 100%;
    background-color: #39b1bd;
    border-radius: 4px;

    align-items: center;
    justify-content: center;
  }
  button {
    margin-right: 5px;
    margin-top: 10px;
  }
</style>

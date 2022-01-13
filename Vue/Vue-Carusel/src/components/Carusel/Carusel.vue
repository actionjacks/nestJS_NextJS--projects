<template>
  <div class="carousel">
    <div class="inner" ref="inner" :style="innerStyles">
      <div class="card" v-for="card in cards" :key="card">
        {{ card }}
      </div>
    </div>
  </div>
  <button>prev</button>
  <button @click="next">next</button>
</template>

<script setup>
  import { onMounted, ref } from "vue";
  const cards = ref([1, 2, 3, 4, 5, 6, 7]);

  const innerStyles = ref({});
  const step = ref("");

  onMounted(() => setStep());

  const inner = ref(null);
  function setStep() {
    const innerWidth = inner.value.scrollWidth;
    const totalCards = cards.value.length;
    step.value = `${innerWidth / totalCards}px`;
    console.log(inner.value.scrollWidth);
    console.log(step.value);
  }

  function next() {
    moveLeft();

    afterTransition(() => {
      const card = cards.value.shift();
      cards.value.push(card);

      resetTranslate();
    });
  }

  function moveLeft() {
    innerStyles.value = {
      transform: `translateX(-${step.value})`,
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
      transform: "translateX(0)",
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
  }
  .card {
    width: 33.33%;
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

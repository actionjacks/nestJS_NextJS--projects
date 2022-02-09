<template>
  <div class="block" v-if="showBlock" @click="stopTimer">CLICK ME</div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";

  export default defineComponent({
    props: {
      delay: { type: Number, required: true },
    },
    emits: ["end"],

    setup(props, context) {
      const showBlock = ref<boolean>(false);
      const timer = ref<number | null>(null);
      const reactionTime = ref<number>(0);

      onMounted(() => {
        if (props.delay !== 0) {
          setTimeout(() => {
            showBlock.value = true;
          }, props.delay);
        }
      });

      function startTimer(): void {
        timer.value = setInterval(() => {
          reactionTime.value += 10;
        }, 10);
      }

      function stopTimer() {
        if (typeof timer.value === "number") {
          clearInterval(timer.value);
          context.emit("end", reactionTime.value);
        }
      }

      return { showBlock, stopTimer };
    },
  });
</script>

<style scoped>
  .block {
    widows: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: antiquewhite;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>

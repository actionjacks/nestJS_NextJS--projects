<template>
  <div>start game</div>

  <button @click="start" :disabled="isPlaying">start game</button>
  <Block v-if="isPlaying" @end="endGame" :delay="delay ?? 0" />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import Block from "./Block.vue";

  export default defineComponent({
    components: {
      Block,
    },

    setup() {
      const isPlaying = ref<boolean>(false);
      const delay = ref<number | null>(null);
      const score = ref<number>(0);

      function start(): void {
        delay.value = 2000 + Math.random() * 5000;
        isPlaying.value = true;
      }

      function endGame(reactionTime: number) {
        score.value = reactionTime;
        isPlaying.value = false;
      }

      return { start, isPlaying, delay, endGame };
    },
  });
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>

<template>
  <div>
    <div v-if="isTyping && textContent.length > 0">is typing</div>
    <input type="text" v-model="textContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from "vue";

export default defineComponent({
  setup() {
    const textContent = ref("");
    const isTyping = ref(false);

    watchEffect((onInvalidate) => {
      if (textContent.value.length > 0) {
        isTyping.value = true;

        const showTyping = setTimeout(() => {
          isTyping.value = false;
        }, 1000);

        onInvalidate(() => {
          clearInterval(showTyping);
        });
      }
    });

    //to stop watcher
    const stop = watchEffect(() => {
      console.log(textContent.value);
      if (textContent.value.length === 20) {
        stop();
      }
    });
    return { textContent, isTyping };
  },
});
</script>

<style scoped>
</style>
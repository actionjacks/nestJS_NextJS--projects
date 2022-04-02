<template>
  <div>
    <p>CUstom text input</p>
    <input
      type="text"
      placeholder="custom text input"
      @change="sendEvent($event.target.value)"
    />
  </div>
</template>

<script lang="ts">
//@change="$emit('customChange', $event.target.value)"
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["customChange"],
  setup(props, { emit }) {
    const sendEvent = (e: Event) => {
      let value = e.target as HTMLTextAreaElement;
      emit("customChange", value.value);
    };

    return { sendEvent };
  },
});
</script>

<style scoped>
</style>
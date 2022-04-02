<template>
  <div>
    <CustomTextInput @customChange="logChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomTextInput from "@/emits/CusotmTextInput.vue";

export default defineComponent({
  components: {
    CustomTextInput,
  },
  setup() {
    const logChange = (e: Event) => {
      let value = e.target as HTMLTextAreaElement;
      console.log(value.value);
    };

    return {
      logChange,
    };
  },
});
</script>

<style scoped>
</style>
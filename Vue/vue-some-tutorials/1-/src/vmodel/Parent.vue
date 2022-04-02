<template>
  <div>
    <Child
      v-model="myValue"
      v-model:lastName="lastName"
      v-model.no-whitespace="myModifure"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Child from "@/vmodel/Child.vue";

export default defineComponent({
  components: { Child },
  setup() {
    const myValue = ref<string>("");
    const lastName = ref<string>("");
    const myModifure = ref<string>("");

    return {
      myValue,
      lastName,
      myModifure,
    };
  },
});
</script>

<style scoped>
</style>
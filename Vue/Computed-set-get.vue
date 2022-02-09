<template>
  <h1>{{ name }}</h1>
  <input type="text" v-model="fullName" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  components: {},

  setup() {
    const name = ref("");

    const fullName = computed({
      get: () => {
        return name.value;
      },
      set: (newVal) => {
        return (name.value = newVal);
      },
    });

    return { fullName, name };
  },
});
</script>

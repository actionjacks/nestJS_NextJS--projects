<template>
  <div class="home">
    <div v-for="data in Dummy_data" :key="data.id">
      <div class="details">
        {{ data.description }}
        <h1>{{ data.title }}</h1>
      </div>
    </div>
  </div>
  <hr />
  <FormData />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FormData from "@/components/FormData.vue";

export default defineComponent({
  components: { FormData },
  setup() {
    const Dummy_data = ref([
      {
        title: "first dummy title",
        isTrue: true,
        description: "first description",
        id: 1,
      },
      {
        title: "second dummy title",
        isTrue: false,
        description: "second description",
        id: 2,
      },
    ]);

    return { Dummy_data };
  },
});
</script>

<template>
  <div v-for="item in dummy_data" :key="item.id">
    <router-link :to="{ name: 'RenderDataItem', params: { id: item.id } }">
      <h2>{{ item.title }}</h2>
    </router-link>
  </div>
  <!-- from json server -->
  <div v-for="item in dummy_data_from_json" :key="item.id">
    <router-link :to="{ name: 'RenderDataItem', params: { id: item.id } }">
      <h2>{{ item.title }}</h2>
    </router-link>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";

  interface DummyData {
    title: string;
    id: number;
    details: string;
  }

  export default defineComponent({
    setup() {
      const dummy_data = ref<DummyData[]>([
        { title: "title1", id: 1, details: "description1" },
        { title: "title2", id: 2, details: "description2" },
        { title: "title3", id: 3, details: "description3" },
      ]);

      const dummy_data_from_json = ref<DummyData[]>([]);

      onMounted(async () => {
        const response: Response = await fetch("http://localhost:3000/data");
        const data: DummyData[] = await response.json();
        if (!response.ok) {
          const error: Error = new Error("something went wrong");
          throw error;
        }
        dummy_data_from_json.value = data;
      });

      return { dummy_data, dummy_data_from_json };
    },
  });
</script>

<style scoped></style>

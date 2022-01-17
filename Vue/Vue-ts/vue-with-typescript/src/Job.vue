<template>
  <button @click="handleCLick('title')">order by title</button>
  <button @click="handleCLick('salary')">order by salary</button>
  <button @click="handleCLick('location')">order by location</button>
  <JobList :order="order" :jobs="jobs" />
</template>

<script lang="ts">
  import { Job } from "./types/Job";
  import { OrderTerm } from "./types/OrderTerm";
  import { defineComponent, ref } from "@vue/composition-api";
  import JobList from "./JobList.vue";

  export default defineComponent({
    components: { JobList },
    setup() {
      const jobs = ref<Job[]>([
        {
          title: "title1",
          location: "location1",
          salary: 12,
          id: "1",
        },
        {
          title: "title2",
          location: "location2",
          salary: 22,
          id: "2",
        },
      ]);

      const order = ref<OrderTerm>("title");
      const handleCLick = (term: OrderTerm) => {
        order.value = term;
      };

      return { jobs, handleCLick, order };
    },
  });
</script>

<style scoped></style>

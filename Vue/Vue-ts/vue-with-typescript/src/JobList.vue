<template>
  <div class="job-list">
    {{ order }}
    <ul>
      <li v-for="job in orderedJobs" :key="job.id">
        {{ job.salary }}
        {{ job.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { Job } from "@/types/Job";
  import { defineComponent, PropType, computed } from "vue";
  import { OrderTerm } from "./types/OrderTerm";

  export default defineComponent({
    props: {
      jobs: {
        required: true,
        type: Array as PropType<Job[]>,
      },
      order: {
        require: true,
        type: String as PropType<OrderTerm>,
      },
    },

    setup(props) {
      const orderedJobs = computed(() => {
        return [...props.jobs].sort((a: Job, b: Job) => {
          return a[props.order!] > b[props.order!] ? 1 : -1;
        });
      });

      return { orderedJobs };
    },
  });
</script>

<style scoped></style>

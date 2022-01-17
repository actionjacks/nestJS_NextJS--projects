<template>
  <div class="app">hello, hyrule</div>
</template>

<script lang="ts">
  import { Job } from "./types/Job";
  import { defineComponent, ref, computed } from "vue";

  interface Goal {
    id: string | Date;
    text: string;
  }

  export default defineComponent({
    name: "App",
    components: {},

    //setup got 2 arg props , context
    setup() {
      const jobs = ref<Job[]>([
        { title: "s", location: "s2", salary: 2, id: "12" },
      ]);
      const someVal = ref<string | boolean>(true);
      const goals = ref<Goal[]>([]);
      const myObj = ref({
        name: "jacek" as string | null,
      });

      const filteredGoals = computed(function () {
        return goals.value.filter((goal) => {
          !goal.text.includes("LOREM");
        });
      });

      function addGoal(text: string) {
        const newGoal: Goal = {
          id: new Date().toISOString(),
          text,
        };
        goals.value.push(newGoal);
      }

      return { filteredGoals, addGoal };
    },
  });
</script>

<style></style>

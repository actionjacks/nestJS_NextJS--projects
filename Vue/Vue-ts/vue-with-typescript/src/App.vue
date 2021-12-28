<template>
  <div class="app">hello, hyrule</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "App",
  components: {},

  //setup got 2 arg props , context
  setup() {
    const goals = ref([]);

    const filteredGoals = computed(function () {
      return goals.value.filter((goal) => {
        !goal.text.insludes("LOREM");
      });
    });

    function addGoal(text: string) {
      const newGoal = {
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

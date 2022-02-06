<template>
  <div class="filter-nav">
    <button :class="{ active: current === 'all' }" @click="updateFilter('all')">
      View all
    </button>
    <button
      :class="{ active: current === 'completed' }"
      @click="updateFilter('completed')"
    >
      completed
    </button>
            <button
              :class="{ active: current === 'ongoing' }"
              @click="updateFilter('ongoing')"
              >
                ongoing
              </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    current: { require: true, type: String, required: true },
  },
  emits: ["filterChange"],

  setup(_, { emit }) {
    function updateFilter(by: string) {
      emit("filterChange", by);
    }

    return { updateFilter };
  },
});
</script>

<style scoped>
.active {
  border: green 1px solid;
  color: green;
}
</style>

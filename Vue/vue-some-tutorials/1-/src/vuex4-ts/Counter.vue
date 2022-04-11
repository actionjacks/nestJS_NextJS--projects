<template>
  <div class="hello">
    <div>
      <h3>Increment Counter</h3>
      <button @click="actionInc()">Press Me</button>
      <h5>Counter: {{ count.counter }}</h5>
      <h3>Double Counter:</h3>
      {{ doubleCounter }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
// import { useStore } from "vuex";

//custom store
import { useStore, MutationTypes, ActionTypes } from "../vuex4-ts/store";

export default defineComponent({
  setup() {
    const store = useStore();
    const count = ref(store.state);

    const inc = () => {
      store.commit(MutationTypes.INC_COUNTER, 1);
    };

    const actionInc = () => {
      store.dispatch(ActionTypes.INC_COUNTER, 2);
    };

    const doubleCounter = computed(() => store.getters.doubleCounter);

    return {
      count,
      inc,
      doubleCounter,
      actionInc,
    };
  },
});
</script>

<style scoped>
</style>
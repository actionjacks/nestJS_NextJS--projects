<template>
  <div>{{ price }}</div>
  <div>{{ quantity }}</div>
  <button @click="makeOrder">make order</button>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, reactive } from "vue";

export default defineComponent({
  setup() {
    //for return values need use toRefs
    const state = reactive({
      price: 100,
      quantity: 0,
      totalPrice: computed(() => state.price * state.quantity),
      tax: computed(() => state.totalPrice * 0.23),
    });

    function makeOrder() {
      state.quantity++;
    }

    return { makeOrder, ...toRefs(state) };
  },
});
</script>

<style scoped></style>

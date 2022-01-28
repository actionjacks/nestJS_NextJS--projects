<template>
  <div v-if="slidesDots" class="pagination">
    <span
      v-for="(dot, inx) in slidesDots"
      :class="{
        active: typeof inx === 'number' ? inx === currentSlide - 1 : null,
      }"
      :key="inx"
      @click="goToSlide(inx)"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    slidesDots: { type: Number as PropType<number>, required: true },
    currentSlide: { type: Number, required: true },
  },
  emits: ["gotoslide"],

  setup(_, { emit }) {
    function goToSlide(inx: number) {
      emit("gotoslide", inx);
    }
    return { goToSlide };
  },
});
</script>

<style scoped>
.pagination {
  position: absolute;
  bottom: 24px;
  width: 100%;
  gap: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
span {
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.active {
  background-color: red;
  box-shadow: 0 1px 3px 0 rgba(48, 48, 48, 0.1),
    0 1px 2px 0 rgba(63, 62, 62, 0.06);
}
</style>

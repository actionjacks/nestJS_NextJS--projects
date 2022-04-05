<template>
  <div>
    <input ref="input" type="text" placeholder="dupa" />

    <input ref="input2" type="text" />

    <ul
      v-for="(item, inx) in arrayData"
      :key="item"
      :ref="(el) => (dynamicRef[inx] = el)"
    >
      <li>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  $refs: {
    input: HTMLInputElement,
  },
  mounted() {
    const input = this.$refs.input as HTMLInputElement | null;
    input?.focus();
  },
  setup() {
    const input2 = ref<HTMLInputElement | null>(null);
    const arrayData = ref<string[]>(["jacek", "placek", "sracek"]);
    const dynamicRef = ref<HTMLDivElement[]>([]);

    onMounted(() => {
      if (!input2.value) {
        return;
      }
      input2.value.focus();

      console.log(dynamicRef.value);
    });

    return {
      arrayData,
      dynamicRef,
    };
  },
});
</script>

<style scoped>
</style>
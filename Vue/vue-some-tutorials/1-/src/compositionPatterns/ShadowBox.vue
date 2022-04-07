<template>
  <div>
    <!-- <slot>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid quis,
      deleniti molestiae hic autem incidunt. Adipisci similique maxime esse,
      eius optio ad corporis id possimus et nulla, pariatur natus. Obcaecati.
    </slot> -->
    <!-- {{ store.shadowText }} -->
    <!-- uzywa jeszcze komponentu rRenderFunction aby wysiwetlic dane przekazonane w propsie -->
    <RenderInfo :info="store.shadowText" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RenderInfo from "./RenderFunction.vue";
import { useStore } from "./useStore";
const store = useStore();

store.shadowText = `Lorem ipsum, dolor sit amet consectetur          adipisicing elit. Aliquid quis,
      deleniti molestiae hic autem incidunt. Adipisci similique maxime esse,
      eius optio ad corporis id possimus et nulla, pariatur natus. Obcaecati.`;

export default defineComponent({
  components: { RenderInfo },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
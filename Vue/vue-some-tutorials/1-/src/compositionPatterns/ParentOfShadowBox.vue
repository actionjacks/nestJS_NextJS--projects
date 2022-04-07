<template>
  <div>
    <ShadowBox>
      <template v-slot>
        <slot name="shadow-box-slot"> </slot>
      </template>
    </ShadowBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShadowBox from "./ShadowBox.vue";

export default defineComponent({
  components: { ShadowBox },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
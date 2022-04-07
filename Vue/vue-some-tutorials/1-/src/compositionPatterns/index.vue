<template>
  <ParentShadowBox>
    <template v-slot:shadow-box-slot> duswwewe </template>
  </ParentShadowBox>
</template>

<script lang="ts">
import { defineComponent, onMounted, h } from "vue";
import ParentShadowBox from "./ParentOfShadowBox.vue";
import { useStore } from "./useStore";

const store = useStore();

export default defineComponent({
  components: { ParentShadowBox },
  setup() {
    //pass new data using store/ not using slots
    // onMounted(() => (store.shadowText = "123"));
    //!!! to nadpisuje 123 to co zostalo przekazane w ShadowBox
    onMounted(() => (store.shadowText = h("div", "123")));
    return {};
  },
});
</script>

<style scoped>
</style>
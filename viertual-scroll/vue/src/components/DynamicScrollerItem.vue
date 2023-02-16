<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: "DynamicScrollItem",
  props: {
    text: { type: String, required: false, default: "" },
  },
};
</script>

<style></style>

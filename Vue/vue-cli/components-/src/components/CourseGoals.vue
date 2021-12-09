<template>
  <div>
    <li v-for="goal in goals" :key="goal">
      <slot :item="goal" another-prop=",,,,,,"> </slot>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goals: ["kooooooooooooo", "loooooooooooo"],
    };
  },
};
</script>

<style scoped></style>

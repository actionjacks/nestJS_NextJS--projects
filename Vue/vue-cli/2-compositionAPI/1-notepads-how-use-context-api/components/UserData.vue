<template>
  <h2>{{ userName }}</h2>
  <h3>{{ age }}</h3>
  <h4>{{ uName }}</h4>
  <h4>{{ ageFromApp }}</h4>
</template>

<script>
import { computed, inject } from 'vue';

export default {
  props: ['userName', 'age'],

  setup(props, context) {
    //use context..
    context.emit(); //some callbacks

    const uName = computed(function () {
      return props.userName + props.age;
    });

    const ageFromApp = inject('userAge');

    return { uName, ageFromApp };
  },
};
</script>

<style scoped></style>

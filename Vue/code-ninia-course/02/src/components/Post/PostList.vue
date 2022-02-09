<template>
  <div v-for="post in data" :key="post.id">
    <SinglePost :post="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SinglePost from "./SinglePost.vue";

export default defineComponent({
  components: { SinglePost },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const data = ref(props.posts);

    return { data };
  },
});
</script>

<style scoped></style>

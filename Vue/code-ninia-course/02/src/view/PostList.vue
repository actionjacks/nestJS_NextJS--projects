<template>
  <div>
    <h1>PostList</h1>
    <div v-if="posts.length && !error">
      <PostList :posts="posts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PostList from "../components/Post/PostList.vue";
import { getPosts } from "../api/getPosts.js";

export default defineComponent({
  components: { PostList },

  setup() {
    const { posts, error, load } = getPosts();
    load();

    return { posts, error };
  },
});
</script>

<style scoped></style>

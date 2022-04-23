<template>
  <div class="home">
    <BlogPost v-for="(post, index) in dummyData" :key="index" :post="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BlogPost from "@/components/BlogPost.vue";

export type Blog = {
  title: string;
  blogPost?: string;
  blogHTML?: string;
  welcomeScreen?: boolean;
  photo?: string;
  blogCoverPhoto?: string;
};

export default defineComponent({
  components: { BlogPost },
  setup() {
    const dummyData: Blog[] = [
      {
        title: "fist title",
        blogPost: "lorem lorem lorem lorem lorem lorem",
        welcomeScreen: true,
        photo: "coding",
      },
      {
        title: "second title",
        blogHTML: "lorem lorem lorem lorem lorem lorem",
        blogCoverPhoto: "beautiful-stories",
      },
      {
        title: "third title",
        blogPost: "lorem lorem lorem lorem lorem lorem",
        blogCoverPhoto: "designed-for-everyone",
      },
    ];
    return { dummyData };
  },
});
</script>

<style scoped>
</style>
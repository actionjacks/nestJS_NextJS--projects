<template>
  <div class="home">
    <BlogPost v-for="(post, index) in dummyData" :key="index" :post="post" />

    <div class="blog-card-wrap">
      <div class="container">
        <h3>Lorem lorem</h3>
        <div class="blog-cards">
          <BlogCard
            v-for="(post, index) in dummyCards"
            :key="index"
            :post="post"
          />
        </div>
      </div>
    </div>

    <div class="updates">
      <div class="container">
        <h2>lotem lotemlotemlotem</h2>
        <router-link class="router-button" to="#">
          Regiset for fire <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import BlogPost from "@/components/BlogPost.vue";
import BlogCard from "@/components/BlogCard.vue";
import Arrow from "@/assets/Icons/arrow-right-light.vue";
import { key, Blog, BlogCardData } from "@/store/index";

export default defineComponent({
  components: { BlogPost, BlogCard, Arrow },
  setup() {
    const store = useStore(key);
    const dummyCards = ref<BlogCardData[]>(store.state.dummyCards);

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

    return { dummyData, dummyCards };
  },
});
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
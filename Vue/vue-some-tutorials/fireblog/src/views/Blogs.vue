<template>
  <div class="blog-card-wrap">
    <div class="blog-cards container">
      <div class="toggle-edit">
        <span>Toggle editing post</span>
        <input type="checkbox" v-model="editPost" />
      </div>
      <div v-if="dummyCards">
        <BlogCard
          v-for="(post, index) in dummyCards"
          :key="index"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  WritableComputedRef,
  onBeforeUnmount,
} from "vue";
import { Store, useStore } from "vuex";
import BlogCard from "@/components/BlogCard.vue";
import { key, BlogCardData, State } from "@/store/index";

export default defineComponent({
  components: { BlogCard },
  setup() {
    const store: Store<State> = useStore(key);

    const dummyCards = ref<BlogCardData[]>(store.state.dummyCards);
    const editPost: WritableComputedRef<boolean> = computed({
      get: () => {
        return store.state.editPost;
      },
      set: (newValue) => {
        return store.commit("toggleEditPost", newValue);
      },
    });

    onBeforeUnmount(() => store.commit("toggleEditPost", false));

    return { dummyCards, editPost };
  },
});
</script>

<style lang="scss" scoped>
.blog-cards {
  position: relative;

  .toggle-edit {
    display: flex;
    align-items: center;
    position: absolute;
    top: -70px;
    right: 0;

    span {
      margin-right: 16px;
    }

    input[type="checkbox"] {
      position: relative;
      border: none;
      --webkit-appearance: none;
      background: #fff;
      outline: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input[type="checkbox"]::before {
      position: absolute;
      content: "";
      background: #303030;
      outline: none;
      width: 30px;
      height: 30px;
      top: 0;
      left: 0;
      transform: scale(1.1);
      transition: 750ms ease all;
      border-radius: 20px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    input:checked[type=":checked"]:before {
      background: #fff;
      left: 52px;
    }
  }
}
</style>
<template>
  <div class="blog-card">
    <div v-show="editPost" class="icons">
      <div class="icon">
        <Edit class="icon" />
      </div>
      <div class="icon">
        <Delete class="icon" />
      </div>
    </div>
    <img
      :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)"
      alt=""
    />
    <div class="info">
      <h4>{{ post.blogTitle }}</h4>
      <h6>Post on: {{ post.blogDate }}</h6>
      <router-link class="link" to="#">
        View the post <Arrow class="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { Store, useStore } from "vuex";
import Arrow from "@/assets/Icons/arrow-right-light.vue";
import Edit from "@/assets/Icons/edit-regular.vue";
import Delete from "@/assets/Icons/trash-regular.vue";
import { key, BlogCardData, State } from "@/store/index";

export default defineComponent({
  components: { Arrow, Edit, Delete },
  props: {
    post: { type: Object as PropType<BlogCardData>, required: true },
  },
  setup() {
    const store: Store<State> = useStore(key);
    const editPost = computed(() => store.state.editPost);

    return { editPost };
  },
});
</script>

<style lang="scss" scoped>
.blog-card {
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #fff;
  min-height: 420px;
  transition: 0.5s ease all;
  width: 100%;
  max-width: 100%;

  &:hover {
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  .icons {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 98;
    .icon {
      display: flex;
      justify-content: content;
      align-items: center;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      transition: 0.5s ease all;

      &:hover {
        background-color: #303030;

        .edit,
        .delete {
          path {
            fill: #fff;
          }
        }
      }
      &:nth-child(1) {
        margin-right: 8px;
      }
      .edit,
      .delete {
        pointer-events: none;
        height: 15px;
        width: auto;
      }
    }
  }

  img {
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;

    .info {
      display: flex;
      flex-direction: column;
      height: 100%;
      z-index: 3;
      padding: 32px 16px;
      color: #000;
      h4 {
        padding-bottom: 8px;
        font-size: 20px;
        font-weight: 300;
      }
    }
    h6 {
      font-weight: 400;
      font-size: 12px;
      padding-bottom: 16px;
    }

    .link {
      display: inline-flex;
      align-items: center;
      margin-top: auto;
      font-weight: 500;
      padding-top: 20px;
      font-size: 12px;
      padding-bottom: 4px;
      transition: 0.5s ease-in all;
    }
    &:hover {
      color: rgba(48, 48, 48, 0.8);
    }
    .arrow {
      width: 10px;
    }
  }
}
</style>
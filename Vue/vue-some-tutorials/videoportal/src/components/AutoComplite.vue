<template>
  <section ref="autocomplite" class="dropdown-wrapper">
    <div @click="isVisible = !isVisible" class="selected-item">
      <span v-for="item in selectedItem" :key="item" @click="removeItem(item)">
        {{ item }}
      </span>
      <span class="drop-down-icon" :class="[{ isVisible }]">==</span>
    </div>

    <div class="dropdown-popver" v-if="isVisible">
      <input v-model="searchQuery" type="text" />
      <div class="options">
        <ul v-if="tags">
          <li v-for="(tag, index) in filteredQuery()" @click="selectItem(tag)" :key="index">
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
export default defineComponent({
  props: {
    displayTag: {
      type: Array as PropType<string[]>, required: false,
      default: () => ([])
    }
  },
  setup(props) {
    const searchQuery = ref<string>("")
    const selectedItem = ref<string[]>([])
    const isVisible = ref<boolean>(false)
    const tags = ref(props.displayTag)

    function filteredQuery() {
      const query = searchQuery.value.toLocaleLowerCase()
      if (query === "") {
        return tags.value
      }
      //not perfect solution
      let req = new RegExp(query)
      return tags.value.filter((tag) => {
        const tag_ = tag.toLocaleLowerCase()
        if (tag_.match(req)) {
          return tag
        }
      })
    }

    function selectItem(tag: string) {
      isVisible.value = !isVisible.value;
      if (selectedItem.value.includes(tag)) {
        return
      }
      selectedItem.value.push(tag)
    }

    function removeItem(item: string) {
      const temSelected = selectedItem.value.filter((tag) => tag !== item)
      selectedItem.value = temSelected
    }

    return {
      searchQuery,
      isVisible,
      selectedItem,
      removeItem,
      tags,
      filteredQuery,
      selectItem,
    };
  },
});
</script>

<style lang='scss' scoped>
.dropdown-wrapper {
  max-width: 50%;
  position: relative;
  margin: 0 auto;

  .drop-down-icon {
    transition: 0.3s;
  }

  .isVisible {
    transition: 0.3s;
    transform: rotate(90deg);
  }

  .selected-item {
    height: 10px;
    border: 2px solid lightblue;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
      cursor: pointer;
    }
  }

  .dropdown-popver {
    position: absolute;
    border: 2px solid lightcyan;
    top: 46px;
    left: 0;
    right: 0;
    background-color: #fff;
    max-width: 100%;

    input {
      width: 90%;
      height: 30px;
      border: 2px solid lightcoral;
      padding-left: 5px;
    }

    .options {
      width: 100%;

      ul {
        list-style: none;
        text-align: left;
        padding-left: 8px;
        max-height: 100px;
        overflow-y: scroll;
        overflow-x: hidden;

        li {
          width: 100%;
          border-bottom: 1px solid lightcoral;
          padding: 10px;
          background-color: #f1f1f1;
          cursor: pointer;

          &:hover {
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
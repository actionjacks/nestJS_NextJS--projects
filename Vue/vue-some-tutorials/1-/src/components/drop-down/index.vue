<template>
  <section class="dropdown-wrapper">
    <div @click="isVisible = !isVisible" class="selected-item">
      <span>{{ selectedItem.name ?? "" }}</span>
      <span class="drop-down-icon" :class="[{ isVisible }]">==</span>
    </div>

    <div class="dropdown-popver" v-if="isVisible">
      <input v-model="searchQuery" type="text" />
      <div class="options">
        <ul v-if="dataFromFetch">
          <li
            @click="selectItem(user)"
            v-for="user in filteredQuery()"
            :key="user.id"
          >
            {{ user.name }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { UserResponse } from "@/components/types";

export default defineComponent({
  setup() {
    const searchQuery = ref<string>("");
    const selectedItem = ref<string | UserResponse>("");
    const isVisible = ref<boolean>(false);
    const dataFromFetch = ref<UserResponse[]>([]);

    function filteredQuery(): UserResponse[] {
      const query = searchQuery.value;

      if (searchQuery.value === "") {
        return dataFromFetch.value;
      }

      return dataFromFetch.value.filter((user) =>
        Object.values(user).some((word) =>
          String(word).toLowerCase().includes(query)
        )
      );
    }

    function selectItem(selectedUser: UserResponse) {
      isVisible.value = !isVisible.value;
      return (selectedItem.value = selectedUser);
    }

    onMounted(async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await data.json();

      dataFromFetch.value = response;
      console.log(response);
    });

    return {
      searchQuery,
      isVisible,
      selectedItem,
      dataFromFetch,
      filteredQuery,
      selectItem,
    };
  },
});
</script>

<style lang='scss' scoped>
.dropdown-wrapper {
  max-width: 350px;
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
    height: 40px;
    border: 2px solid lightblue;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
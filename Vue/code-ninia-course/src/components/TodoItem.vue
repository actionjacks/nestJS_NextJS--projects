<template>
  <div class="actions">
    <hr />
    <h3 @click="showDetails = !showDetails">{{ todo.title }}</h3>
    <div class="icons">
      <div class="icon"><font-awesome-icon icon="user-ninja" />done</div>
      <div class="icon"><font-awesome-icon icon="user-ninja" />edit</div>
      <div class="icon" @click="deleteProject">
        <font-awesome-icon icon="user-ninja" />delete
      </div>
    </div>
  </div>
  <div v-if="showDetails" class="details">
    <h4>{{ todo.details }}</h4>
  </div>
  <hr />
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { ToDo } from "../types/todo";

  export default defineComponent({
    props: {
      todo: { require: true, type: Object as () => ToDo, required: true },
    },

    setup(props) {
      const showDetails = ref<boolean>(false);
      const url = `http://localhost:3000/todo/${props.todo.id}`;

      async function deleteProject() {
        const response = await fetch(url, {
          method: "DELETE",
        });
        if (!response.ok) {
          //chandle error
        }
      }

      return { showDetails, deleteProject };
    },
  });
</script>

<style scoped>
  .actions {
    cursor: pointer;
  }
  .icons {
    display: flex;
    justify-content: space-around;
  }
  .icon {
    border: 1px solid lightgoldenrodyellow;
  }
</style>

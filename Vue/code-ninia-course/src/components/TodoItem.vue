<template>
  <div class="actions" :class="{ complete: todo.complete }">
    <hr />
    <h3 @click="showDetails = !showDetails">{{ todo.title }}</h3>
    <div class="icons">
      <div class="icon" @click="toggleComplete">
        <font-awesome-icon icon="user-ninja" />done
      </div>
      <div class="icon">
        <router-link :to="{ name: 'edittodo', params: { id: todo.id } }">
          <font-awesome-icon icon="user-ninja" />edit
        </router-link>
      </div>
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
  emits: ["delete", "complete"],

  setup(props, { emit }) {
    const showDetails = ref<boolean>(false);
    const url = `http://localhost:3000/todo/${props.todo.id}`;

    async function deleteProject() {
      const response = await fetch(url, {
        method: "DELETE",
      });
      if (!response.ok) {
        //chandle error
      } else {
        //delete after delete fetch is OK
        emit("delete", props.todo.id);
      }
      //observer pattern
    }

    async function toggleComplete() {
      const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !props.todo.complete }),
      });
      if (!response.ok) {
        //chandle error
      } else {
        //delete after delete fetch is OK
        emit("complete", props.todo.id);
      }
      //observer pattern
    }

    return { showDetails, deleteProject, toggleComplete };
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
.complete {
  color: green;
}
</style>

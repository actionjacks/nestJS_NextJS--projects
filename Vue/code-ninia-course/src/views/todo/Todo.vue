<template>
  <div class="todo">
    <div v-if="todoData">
      <FilterNav @filterChange="current2 = $event" :current="current2" />
      <div v-for="todo in filteredTodo" :key="todo.id">
        <TodoItem
          :todo="todo"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
// types
import { ToDo } from "../../types/todo";
import TodoItem from "../../components/TodoItem.vue";
import FilterNav from "../../components/FilterNav.vue";

enum Filters {
  all,
  completed,
  ongoing,
}

export default defineComponent({
  components: {
    TodoItem,
    FilterNav,
  },

  setup() {
    const todoData = ref<ToDo[] | null>(null);
    const current = ref<Filters>(Filters.all);
    const current2 = ref("all");

    onMounted(async () => {
      const response: Response = await fetch("http://localhost:3000/todo");
      const data: ToDo[] = await response.json();

      if (!response.ok) {
        throw new Error("Wlacz json--server !");
      }
      todoData.value = data;
      console.log(todoData);
    });

    function handleDelete(id: number): void {
      if (!todoData.value) {
        return;
      }
      todoData.value = todoData.value?.filter((todo) => todo.id !== id);
    }

    function handleComplete(id: number): void {
      if (!todoData.value) {
        return;
      }
      let todoDataForUpdate = todoData.value.find((todo: ToDo) => {
        return todo.id === id;
      });
      todoDataForUpdate!.complete = !todoDataForUpdate?.complete;
    }
    //fix to do any
    const filteredTodo = computed((): any => {
      if (current2.value === "completed") {
        return todoData.value?.filter((todo) => todo.complete);
      }
      if (current2.value === "ongoing") {
        return todoData.value?.filter((todo) => !todo.complete);
      }
      return todoData.value;
    });

    return {
      todoData,
      handleDelete,
      handleComplete,
      current,
      current2,
      filteredTodo,
    };
  },
});
</script>

<style scoped></style>

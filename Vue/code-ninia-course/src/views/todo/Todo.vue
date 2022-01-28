<template>
  <div class="todo">
    <div v-if="todoData">
      <div v-for="todo in todoData" :key="todo.id">
        <TodoItem :todo="todo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  // types
  import { ToDo } from "../../types/todo";
  import TodoItem from "../../components/TodoItem.vue";

  export default defineComponent({
    components: {
      TodoItem,
    },

    setup() {
      const todoData = ref<ToDo[] | null>(null);

      onMounted(async () => {
        const response: Response = await fetch("http://localhost:3000/todo");
        const data: ToDo[] = await response.json();

        if (!response.ok) {
          throw new Error("Wlacz json--server !");
        }
        todoData.value = data;
        console.log(todoData);
      });

      return { todoData };
    },
  });
</script>

<style scoped></style>

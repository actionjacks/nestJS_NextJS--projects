<template>
  <form @submit.prevent="handleUpdateTodo">
    <label>{{ title }}</label>
    <input type="text" v-model="title" required />
    <label>{{ details }}</label>
    <textarea v-model="details" required />
    <button>Edit todo</button>
  </form>
</template>

<script lang="ts">
import { ToDo } from "@/types/todo";
import { useRouter, useRoute } from "vue-router";
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  props: {
    id: { require: true, type: String },
  },
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const title = ref<string>("");
    const details = ref<string>("");
    const url = `http://localhost:3000/todo/${props.id}`;

    onMounted(async () => {
      const response = await fetch(url);
      const data: ToDo = await response.json();
      console.log(data);
      title.value = data.title;
      details.value = data.details;
    });

    async function handleUpdateTodo() {
      const response = await fetch(url, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title.value, details: details.value }),
      });
      if (!response.ok) {
        //chandle error
      }
      router.push("/todo");
    }

    return { title, details, handleUpdateTodo };
  },
});
</script>

<style scoped></style>

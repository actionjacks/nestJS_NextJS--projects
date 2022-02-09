<template>
  <form @submit.prevent="handleSubmit">
    <label>title</label>
    <input type="text" v-model="title" required />
    <label>Details</label>
    <textarea v-model="details" required />
    <button>Add project</button>
  </form>
</template>

<script lang="ts">
import { useRouter, useRoute } from "vue-router";
import { defineComponent, ref } from "vue";
import { ToDo } from "../../types/todo";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const title = ref<string>("");
    const details = ref<string>("");

    async function handleSubmit() {
      let project: ToDo = {
        title: title.value,
        details: details.value,
        complete: false,
      };
      const response = await fetch(`http://localhost:3000/todo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });
      if (!response.ok) {
        //chandle error
      } else {
        console.log(project);
        router.push("/todo");
      }
      //observer pattern
    }

    return { title, details, handleSubmit };
  },
});
</script>

<style scoped></style>

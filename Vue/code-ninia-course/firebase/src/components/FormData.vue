<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <h1>Add new data</h1>

      <label for="title">Data title</label>
      <input type="text" name="title" v-model="title" required />

      <label for="description">Data description</label>
      <input type="text" name="description" v-model="description" required />

      <button>Add Data</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const title = ref<string>("");
    const description = ref<string>("");

    const handleSubmit = async () => {
      console.log(title.value, description.value);
    };

    return { title, description, handleSubmit };
  },
});
</script>

<style scoped></style>

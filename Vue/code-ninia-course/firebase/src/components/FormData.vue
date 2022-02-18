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
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { defineComponent, ref } from "vue";
import { getUser } from "../api/GetUser";

export default defineComponent({
  setup() {
    const title = ref<string>("");
    const description = ref<string>("");

    const { user } = getUser();

    const handleSubmit = async () => {
      const colRef = collection(db, "vue");

      await addDoc(colRef, {
        title: title.value,
        description: description.value,
        isFav: false,
        userUid: user.value?.uid,
      });

      title.value = "";
      description.value = "";
    };

    return { title, description, handleSubmit };
  },
});
</script>

<style scoped></style>

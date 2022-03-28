<template>
  <div style="margin-bottom: 10px">
    <p>{{ quote }}</p>
    <p>POST DATA USING AXIOS</p>
    <button @click="createPost">POST</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import KanyeAPI from "@/axios/KanyeAPI";

export default defineComponent({
  setup() {
    const quote = ref<string>("");

    onMounted(async () => {
      try {
        const resposne = await KanyeAPI.getQuote();
        quote.value = resposne.data.quote;
      } catch (err) {
        alert(err);
      }
    });

    const createPost = async () => {
      const resposne = await KanyeAPI.createPost(
        JSON.stringify({
          title: "foo",
          body: "bo",
          userId: 1,
        })
      );
      console.log(resposne);
    };

    return { quote, createPost };
  },
});
</script>

<style scoped>
</style>
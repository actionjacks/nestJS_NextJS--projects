@typescript-eslint/explicit-module-boundary-types
<template>
  <div class="home">
    <div v-for="data in data" :key="data.id">
      <div class="details">
        {{ data.description }}
        <h1>{{ data.title }}</h1>
      </div>
    </div>
  </div>
  <hr />
  <FormData />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FormData from "@/components/FormData.vue";
import { FirebaseData } from "@/types/FirebaseData";
//firebase depen
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import getCollections from "@/api/getCollections";

export default defineComponent({
  components: { FormData },
  setup() {
    // get data from fire store after render
    //const data = ref<FirebaseData[]>([]);
    // const collectionRef = collection(db, "vue");

    // getDocs(collectionRef).then((snap) => {
    //   let docs = [] as FirebaseData[];

    //   snap.docs.forEach((doc) => {
    //     docs.push({ ...(doc.data() as FirebaseData), id: doc.id });
    //   });
    //   data.value = docs;
    // });

    //realtime db
    const { data } = getCollections("vue");

    return { data };
  },
});
</script>

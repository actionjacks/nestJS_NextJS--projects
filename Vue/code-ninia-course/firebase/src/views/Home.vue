@typescript-eslint/explicit-module-boundary-types
<template>
  <div class="home">
    <div v-for="data in data" :key="data.id">
      <div class="details">
        {{ data.description }}
        <h1 @click="handleDelete(data)">{{ data.title }}</h1>
        <div @click="handleUpdate(data)">
          <span :class="{ 'is-fav': data.isFav }">{{ data.isFav }}</span>
        </div>
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
import { getUser } from "../api/GetUser";

//firebase depen
import { db } from "../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
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

    function handleDelete(collectionToRemove: FirebaseData) {
      const docRef = doc(db, "vue", collectionToRemove.id);
      deleteDoc(docRef);
    }

    function handleUpdate(collectionToUpdate: FirebaseData) {
      const docRef = doc(db, "vue", collectionToUpdate.id);

      updateDoc(docRef, {
        isFav: !collectionToUpdate.isFav,
      });
    }

    const { user } = getUser();

    //realtime db
    const { data } = getCollections("vue", [
      "userUid",
      "==",
      user.value?.uid ?? "",
    ]);

    return { data, handleDelete, handleUpdate };
  },
});
</script>

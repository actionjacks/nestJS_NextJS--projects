import { ref, watchEffect } from "vue";
//firebase
import { db } from "../firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FirebaseData } from "@/types/FirebaseData";
//todo fix any type

const getCollection = (
  collectionName: string,
  querry: [string, string, string]
) => {
  const data = ref<FirebaseData[]>([]);

  let collectionRef = collection(db, collectionName);

  if (querry) {
    collectionRef = query(collectionRef, where(...querry));
  }

  const unsub = onSnapshot(collectionRef, (snapshot) => {
    let results = [] as FirebaseData[];

    snapshot.docs.forEach((doc) => {
      results.push({ ...(doc.data() as FirebaseData), id: doc.id });
    });

    data.value = results;
  });

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { data };
};

export default getCollection;

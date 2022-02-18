import { ref, watchEffect } from "vue";
//firebase
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  WhereFilterOp,
} from "firebase/firestore";
import { FirebaseData } from "@/types/firebase";
//todo fix any type

const getCollection = (collectionName: string, _query: WhereFilterOp) => {
  const data = ref<FirebaseData[]>([]);

  let collectionRef = collection(db, collectionName);

  if (_query) {
    collectionRef = query(collectionRef, where(_query, "==", _query));
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

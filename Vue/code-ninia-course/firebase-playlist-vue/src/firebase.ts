import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FirebaseConfig } from "@/types/firebase";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyBa-e13x7ZFaYrxKZU-qRD2LFe8UnV2ejU",
  authDomain: "jackmessenger-e9aff.firebaseapp.com",
  databaseURL: "https://jackmessenger-e9aff.firebaseio.com",
  projectId: "jackmessenger-e9aff",
  storageBucket: "jackmessenger-e9aff.appspot.com",
  messagingSenderId: "308423447401",
  appId: "1:308423447401:web:ded8d7c7eb45520979a3f8",
  measurementId: "G-V66427K0VY",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };

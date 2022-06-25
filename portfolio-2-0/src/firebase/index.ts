import { FirebaseConfig } from "@/types/firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyBIbuBZOHmkpSwtMkvbcj0PR4Zmi7N0rkE",
  authDomain: "my-portfolio-b3fe5.firebaseapp.com",
  databaseURL: "https://my-portfolio-b3fe5.firebaseio.com",
  projectId: "my-portfolio-b3fe5",
  storageBucket: "my-portfolio-b3fe5.appspot.com",
  messagingSenderId: "258486117113",
  appId: "1:258486117113:web:5911ec36cdf30118b67828",
  measurementId: "G-8JSWK06KX5",
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };

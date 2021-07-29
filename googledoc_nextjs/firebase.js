import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAgqiy-bh8Cew3JrcQtaM81zMNH4tHrr5k",
  authDomain: "fake-gogle-doc.firebaseapp.com",
  projectId: "fake-gogle-doc",
  storageBucket: "fake-gogle-doc.appspot.com",
  messagingSenderId: "1053441001599",
  appId: "1:1053441001599:web:932d6e579cb9cfdfb1174a",
  measurementId: "G-QDWFD3TW5E",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };

export type FirebaseConfig = {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

export type FirebaseData = {
  description: string;
  title: string;
  isFav: boolean;
  id: string;
};

import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getUser } from "@/api/GetUser";

export type DataToAdd = {
  title: string;
  description: string;
  isFav: boolean;
  userUid: string | undefined;
};

export const addToColletion = async (
  collectionName: string,
  dataToAdd: DataToAdd
) => {
  const { user } = getUser();

  const collectionRef = collection(db, collectionName);
  if (!user) {
    return console.log("need login");
  }
  try {
    await addDoc(collectionRef, { ...dataToAdd });
  } catch (err) {
    throw new Error("dupa");
  }
};

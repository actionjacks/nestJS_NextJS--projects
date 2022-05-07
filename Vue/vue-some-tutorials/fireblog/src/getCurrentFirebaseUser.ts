import { ref } from "vue";

import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(auth.currentUser);

//auto changes when user change
onAuthStateChanged(auth, (_user) => {
  user.value = _user;
});

export const getUser = () => {
  return { user };
};

export const getUserToken = async () => {
  if (!user.value) {
    return
  }
  return await user.value?.getIdTokenResult()
}
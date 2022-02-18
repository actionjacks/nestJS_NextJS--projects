import { ref } from "vue";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const error = ref<unknown | null>(null);
const isPending = ref(false);

const signup = async (email: string, password: string) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("could not completed");
    }
    error.value = null;
    isPending.value = false;
  } catch (err: unknown) {
    error.value = err;
    isPending.value = false;
  }
};

export const useSignup = () => {
  return { error, isPending, signup };
};

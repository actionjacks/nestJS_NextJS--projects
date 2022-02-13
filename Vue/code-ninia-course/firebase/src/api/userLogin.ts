import { ref } from "vue";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const error = ref<unknown | null>(null);
const isPending = ref(false);

const login = async (email: string, password: string) => {
  error.value = null;
  isPending.value = true;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
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

export const useLogin = () => {
  return { error, isPending, login };
};

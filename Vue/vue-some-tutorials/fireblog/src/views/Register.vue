<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Allredy have an account
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </p>

      <h2>Create new account</h2>
      <div class="inputs">
        <div class="input">
          <input
            type="text"
            placeholder="First Name"
            v-model="model.firstName"
          />
        </div>
        <div class="input">
          <input
            :disabled="model.isPending"
            type="text"
            placeholder="Last Name"
            v-model="model.lastName"
          />
        </div>
        <div class="input">
          <input
            :disabled="model.isPending"
            type="text"
            placeholder="Username"
            v-model="model.username"
          />
        </div>
        <div class="input">
          <input
            :disabled="model.isPending"
            type="text"
            placeholder="Email"
            v-model="model.email"
          />
        </div>
        <div class="input">
          <input
            :disabled="model.isPending"
            type="text"
            placeholder="Password"
            v-model="model.password"
          />
        </div>
        <div v-show="model.error" class="error">{{ model.errorMessage }}</div>
      </div>
      <button @click.prevent="registerNewUser">Sign up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { auth, db } from "@/firebase";
import { setDoc, doc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const model = reactive({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: false,
      errorMessage: "",
      isPending: false,
    });

    //todo Export this method
    async function registerNewUser() {
      model.error = false;
      model.errorMessage = "";
      model.isPending = true;
      if (
        model.firstName !== "" &&
        model.lastName !== "" &&
        model.username !== "" &&
        model.email !== "" &&
        model.password !== ""
      ) {
        try {
          const res = await createUserWithEmailAndPassword(
            auth,
            model.email,
            model.password
          );
          if (!res) {
            model.error = true;
            model.errorMessage = `${res}`;
          } //get collection users use user ID to create collection inside user collection
          const resultRegisteredUser: UserCredential = res;
          const collectionRef = collection(db, "users");
          try {
            await setDoc(
              doc(collectionRef, `${resultRegisteredUser.user.uid}`),
              {
                firstName: model.firstName,
                lastName: model.lastName,
                username: model.username,
              }
            );
          } catch (err) {
            throw new Error(err as string);
          }

          model.error = false;
          model.errorMessage = "";
          model.isPending = false;
          router.push({ name: "Home" });
        } catch (err: unknown) {
          model.error = true;
          model.errorMessage = `${err}`;
        }
        return;
      }
      model.error = true;
      model.errorMessage = "Pleas fill out all the fields";
      model.isPending = false;
    }

    return { model, registerNewUser };
  },
});
</script>


<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>
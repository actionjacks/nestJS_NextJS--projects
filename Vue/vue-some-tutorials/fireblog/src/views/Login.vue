<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        need account Register
        <router-link class="router-link" :to="{ name: 'Register' }"
          >Register</router-link
        >
      </p>

      <h2>login to blog</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="model.email" />
        </div>
        <div class="input">
          <input type="text" placeholder="Password" v-model="model.password" />
        </div>
      </div>
      <router-link class="forget-password" :to="{ name: 'ForgetPassword' }"
        >Forget Password</router-link
      >

      <div v-show="model.error" class="error">{{ model.errorMessage }}</div>
      <button @click.prevent="login">Login</button>
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
import { signInWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();

    const model = reactive({
      email: "",
      password: "",
      error: false,
      errorMessage: "",
      isPending: false,
    });

    async function login() {
      model.error = false;
      model.errorMessage = "";
      model.isPending = true;
      try {
        const { email, password } = model;
        const res = await signInWithEmailAndPassword(auth, email, password);
        if (!res) {
          model.errorMessage = `password or login, correct?`;
        }
        model.error = false;
        model.errorMessage = "";
        model.isPending = false;
        router.push({ name: "Home" });
      } catch (err: unknown) {
        model.errorMessage = `${err}`;
        model.error = true;
        model.isPending = false;
      }
    }

    return { model, login };
  },
});
</script>

<style  lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  widows: 90%;
  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;
    .router-link {
      color: #000;
    }
  }
  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 32px;
      color: #303030;
      margin-bottom: 40px;
      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      widows: 100%;
      max-width: 350px;
      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .forget-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: #303030;
      }
    }
  }

  .angle {
    display: none;
    position: absolute;
    background-color: #fff;
    transform: rotateZ(3deg);
    width: 60px;
    right: -30px;
    height: 101%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-image: url("../assets/background.png");
    width: 100%;
    height: 100%;
    @media (min-width: 900px) {
      display: initial;
    }
  }
}
</style>
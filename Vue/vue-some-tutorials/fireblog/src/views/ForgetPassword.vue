<template>
  <div class="reset-password">
    <Modal
      v-if="modalState.modalActive"
      :modalMessage="modalState.modalMessage"
      v-on:close-modal="closeModal"
    />
    <Loading v-if="modalState.loading" />

    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to login ?
          <router-link class="router-link" :to="{ name: 'Login' }"
            >Login</router-link
          >
        </p>

        <h2>Reset password</h2>
        <p>Forger ur password? Enter ur email to reset it</p>

        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="model.email" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Modal from "@/components/Modal.vue";
import Loading from "@/components/Loading.vue";
import { useRouter, useRoute } from "vue-router";
import { auth, db } from "@/firebase";
import { setDoc, doc, collection } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";

export type ModalState = {
  modalActive: boolean;
  modalMessage: string;
  loading: boolean;
};

export default defineComponent({
  components: { Modal, Loading },
  setup() {
    const modalState = reactive<ModalState>({
      modalActive: false,
      modalMessage: "",
      loading: false,
    });

    const model = reactive({
      email: "",
      error: false,
      errorMessage: "",
      isPending: false,
    });

    async function resetPassword() {
      model.error = false;
      model.errorMessage = "";
      model.isPending = true;
      try {
        const { email } = model;
        await sendPasswordResetEmail(auth, email);
        model.error = false;
        model.errorMessage = "";
        model.isPending = false;
        modalState.modalActive = true;
        modalState.modalMessage =
          "If ur account exist u will recive reset mail";
        model.email = "";
      } catch (err: unknown) {
        model.errorMessage = `${err}`;
        model.error = true;
        model.isPending = false;
        modalState.modalActive = true;
        modalState.modalMessage = `something went wrong ${err}`;
      }
    }

    function closeModal() {
      modalState.modalActive = !modalState.modalActive;
      model.email = "";
    }

    return { model, modalState, closeModal, resetPassword };
  },
});
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;

  .form-wrap {
    h2 {
      margin-bottom: 8px;
    }
    p {
      text-align: center;
      margin-bottom: 32px;
    }
  }
}
</style>
<template>
  <div class="profile">
    <Modal
      v-if="modalState.modalActive"
      :modalMessage="modalState.modalMessage"
      v-on:close-modal="closeModal"
    />
    <div class="container">
      <h2>Account Settings</h2>
      <button @click="downlandUserData">Get current user data</button>
      <div class="profile-info">
        <div class="admin-badge">
          <UserCrowIcons />
          <span>Admin when u first edit data we add ur email</span>
        </div>
        <div class="input">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model="model.firstName" />
        </div>

        <div class="input">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model="model.lastName" />
        </div>

        <div class="input">
          <label for="userName">User Name</label>
          <input type="text" id="userName" v-model="model.username" />
        </div>

        <button @click="saveChanges">Save Changes</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Modal from "@/components/Modal.vue";
import UserCrowIcons from "@/assets/Icons/user-crown-light.vue";
import { ModalState } from "./ForgetPassword.vue";
import { useStore } from "vuex";
import { setDoc, doc, collection } from "firebase/firestore";
import { key, UserDetailsFirebase } from "@/store/index";
import { getUser } from "@/getCurrentFirebaseUser";
import { db } from "@/firebase";

export default defineComponent({
  components: { Modal, UserCrowIcons },
  setup() {
    const store = useStore(key);

    const modalState = reactive<ModalState>({
      modalActive: false,
      modalMessage: "Profile data saved!",
      loading: false,
    });
    const model = reactive({
      username: "",
      lastName: "",
      firstName: "",
    });

    function closeModal() {
      modalState.modalActive = false;
    }

    function downlandUserData(): void {
      const data: UserDetailsFirebase = store.getters.getCurrentUserInfo;
      const { firstName, lastName, username } = data;
      model.lastName = lastName;
      model.firstName = firstName;
      model.username = username;
    }

    async function saveChanges(): Promise<void> {
      const user = getUser();
      if (!user) {
        return;
      }
      const collectionRef = collection(db, "users");
      try {
        await setDoc(doc(collectionRef, `${user.user.value?.uid}`), {
          firstName: model.firstName,
          lastName: model.lastName,
          username: model.username,
          email: user.user.value?.email,
        });
        modalState.modalActive = true;
      } catch (err) {
        throw new Error(err as string);
      }
    }

    return { model, modalState, closeModal, downlandUserData, saveChanges };
  },
});
</script>

<style lang="scss" scoped>
.profile {
  .container {
    max-width: 1000px;
    padding: 60px 25px;

    h2 {
      text-align: center;
      margin-bottom: 16px;
      font-weight: 300;
      font-size: 32px;
    }
    .profile-info {
      border-radius: 8px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
      padding: 32px;
      background-color: #f1f1f1;
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 32px auto;
    }
    .admin-badge {
      display: flex;
      align-self: center;
      color: #f1f1f1;
      font-size: 14px;
      padding: 8px 24px;
      border-radius: 8px;
      background-color: #303030;
      margin: 16px 0;
      text-align: center;
      text-transform: capitalize;

      .icon {
        width: 14px;
        height: auto;
        margin-right: 8px;
      }
    }
    .input {
      margin: 16px 0;
      label {
        font-size: 14px;
        display: block;
        padding-bottom: 6px;
      }
      input {
        width: 100%;
        border: none;
        background-color: #f2f2f6;
        padding: 8px;
        height: 50px;
        @media (min-width: 900px) {
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
  button {
    align-self: center;
  }
}
</style>
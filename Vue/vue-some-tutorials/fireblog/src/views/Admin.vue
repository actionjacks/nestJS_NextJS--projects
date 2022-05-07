<template>
  <div class="admin">
    <div class="container">
      <h2>Administrator</h2>
      <div class="admin-info">
        <h2>add admin</h2>
        <div class="input">
          <input
            placeholder="Enter user email to make then an admin"
            id="addAdmins"
            v-model="adminEmail"
            type="text"
          />
        </div>
        <span>{{ functionMessage }}</span>
        <button class="button">Submit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const adminEmail = ref("");
    const functionMessage = ref("");

    return { adminEmail, functionMessage };
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
    .admin-info {
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
    span {
      font-size: 14px;
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
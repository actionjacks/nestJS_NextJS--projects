<template>
  <form>
    <div class="wrapper">
      <p>
        <input v-model="state.email" type="text" placeholder="Email" />
        <span v-if="v$.email?.$errors">
          {{ v$.email?.$errors[0] }}
        </span>
      </p>
      <p>
        <input
          v-model="state.password"
          type="password"
          placeholder="Password"
        />
        <span v-if="v$.password?.$errors">
          {{ v$.password?.$errors[0] }}
        </span>
      </p>
      <p>
        <input
          v-model="state.confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <span v-if="v$.confirmPassword?.$errors">
          {{ v$.confirmPassword?.$errors[0] }}
        </span>
      </p>
      <button @click.prevent="submitForm">Submit</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";

type State = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default defineComponent({
  setup() {
    const state = reactive<State>({
      email: "",
      password: "",
      confirmPassword: "",
    });

    const customRule = (val: string) => val.includes("jacek");

    const rulesForValidate = computed<any>(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(6) },
        confirm: { required, sameAs: sameAs(state.password) },
      };
    });

    const v$ = useValidate(rulesForValidate.value, state);

    async function submitForm(): Promise<any> {
      await v$.value.$validate();
      if (await !v$.value.$error) {
        alert("FROM submitted");
      } else {
        alert("FORM IS INVALID");
      }
    }

    return { state, v$, submitForm };
  },
});
</script>

<style scoped>
</style>
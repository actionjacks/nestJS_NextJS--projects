<template>
  <form>
    <div class="field">
      <label for="email">Email</label>
      <input v-model="model.email" type="text" id="email">
    </div>
    <div class="field">
      <label for="password">Password</label>
      <input v-model="model.password" :type="showPassword ? 'text' : 'password'" id="password">
      <button @click.prevent="showPassword = !showPassword">toggle show password</button>
    </div>
    <button @click.prevent="$emit('submit')">Login</button>
  </form>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import { defineComponent, PropType, ref } from 'vue'

type Login = {
  email: string
  password: string
}

export default defineComponent({
  emits: [
    'update:modelValue',
    'submit'
  ],
  props: {
    modelValue: {
      type: Object as PropType<Login>,
      default: () => ({})
    },
  },
  setup(props, { emit }) {

    const model = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit('update:modelValue', value)
      },
    });

    const showPassword = ref(true)

    return {
      model,
      showPassword
    }
  }
})
</script>

<style scoped>
</style>
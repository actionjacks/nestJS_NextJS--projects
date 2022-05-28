<template>
  <form>
    <div v-if="nameInput" class="field">
      <label for="name">Name</label>
      <input v-model="model.name" type="text" id="name">
    </div>
    <div class="field">
      <label for="email">Email</label>
      <input v-model="model.email" type="text" id="email">
    </div>
    <div class="field">
      <label for="password">Password</label>
      <input v-model="model.password" :type="showPassword ? 'text' : 'password'" id="password">
      <button @click.prevent="showPassword = !showPassword">toggle show password</button>
    </div>
    <button @click.prevent="$emit('submit')">{{ buttonSubmitText }}</button>
  </form>
</template>

<script lang="ts">
import { computed } from '@vue/reactivity'
import { defineComponent, PropType, ref } from 'vue'

type Model = {
  name?: string
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
      type: Object as PropType<Model>,
      default: () => ({})
    },
    nameInput: {
      type: Boolean, required: false
    },
    buttonSubmitText: {
      type: String,
      required: false,
      default: ''
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
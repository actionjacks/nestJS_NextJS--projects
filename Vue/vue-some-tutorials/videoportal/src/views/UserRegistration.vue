<template>
  <div>
    <UserAuthForm v-model="model" nameInput @submit="registerUser" :buttonSubmitText="'Register'" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { key } from "@/store/index"
import UserAuthForm from '@/components/UserAuthForm.vue'
import { useStore } from "vuex"

export default defineComponent({
  components: { UserAuthForm },
  setup() {
    const store = useStore(key)

    const model = reactive({
      name: '',
      email: 'allmight@ua.edu',
      password: ''
    })

    function registerUser() {
      if (!model.name &&
        !model.email.length &&
        !model.password.length) {
        return
      }
      store.dispatch('registerUser', model)
    }

    return {
      model,
      registerUser
    }
  }
})
</script>

<style scoped>
</style>
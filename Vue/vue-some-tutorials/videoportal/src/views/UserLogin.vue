<template>
  <div>
    <UserAuthForm v-model="model" @submit="loginUser" />
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
      email: 'allmight@ua.edu',
      password: ''
    })

    function loginUser() {
      if (!model.email.length && !model.password.length) {
        return
      }
      store.dispatch('loginUser', model)
    }

    return {
      model,
      loginUser
    }
  }
})
</script>

<style scoped>
</style>
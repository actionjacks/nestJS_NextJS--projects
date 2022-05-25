<template>
  <div v-if="usersList.value">
    <div v-for="user in usersList.value" :key="user.id">
      {{ user.name }} <button @click="loginUser(user)">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { key } from "@/store/index"
import { useStore } from "vuex"
import { mapGetters } from "@/store/map-state"
import { computed } from '@vue/reactivity'
import { User } from '@/Classes/Users'

export default defineComponent({
  setup() {
    const store = useStore(key)
    const { users } = mapGetters()
    const usersList = computed(() => users ?? [])

    function loginUser(user: User) {
      store.dispatch('loginUser', user)
    }

    onMounted(() => {
      store.dispatch('clearUsers')
      store.dispatch('getUsers')
    })

    return {
      usersList,
      loginUser
    }
  }
})
</script>CLEAR_USERS

<style scoped>
</style>
<template>
  <ul>
    <button @click="someClick">KLIK</button>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import { useRouter } from 'vue-router';
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },

  inject: ['users'],

  setup() {
    const router = useRouter();
    function someClick() {
      router.push('/teams');
    }

    return { someClick };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>

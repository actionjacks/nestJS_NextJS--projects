<template>
  <transition-group tag="ul" name="user-list">
    <li @click="removeUser(user)" v-for="user in users" :key="user">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input ref="userNameInput" type="text" />
    <button @click="addUser">Add user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newUser: '',
      users: ['jacek', 'placek', 'sracek', 'dupa', 'kaka', 'sraka'],
    };
  },
  methods: {
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
    addUser() {
      this.users.unshift(this.$refs.userNameInput.value);
      this.$refs.userNameInput.value = '';
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0.4em;
}
li {
  list-style: none;
  padding: 0.6em;
  border: 1px solid gray;
}
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-in-out;
}
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.user-list-leave-active {
  position: absolute;
  transition: all 1s ease-in-out;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* anim lists when other is removed */
.user-list-move {
  transition: transform 0.8s ease;
}
</style>

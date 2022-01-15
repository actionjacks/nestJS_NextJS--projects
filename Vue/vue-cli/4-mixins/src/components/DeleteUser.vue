<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from '../components/UserAlert.vue';
import alertMixin from '../mixins/alert';

export default {
  components: {
    UserAlert,
  },
  mixins: [alertMixin],
  data() {
    return {
      alertTitle: 'Delete User?___from domponent using mixins',
    };
  },
};
</script>

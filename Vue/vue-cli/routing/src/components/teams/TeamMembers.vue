<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <UserItem
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      />
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';
//get qury string and pass this string and = with some data
export default {
  inject: ['users', 'teams'],
  components: {
    UserItem,
  },
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMembers(route) {
      // { path: '/teams/:id', component: TeamMembers },
      //:id
      const teamId = route.params.teamId; //team id from query string
      const selectedTeam = this.teams.find((team) => team.id === teamId); //select team from ijected prop using query id
      const members = selectedTeam.members; //get member from selected team
      const selectedMembers = []; //declate tem array

      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  created() {
    //passed props from query-string
    console.log(this.teamId);
    this.loadTeamMembers(this.$route);
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

<template>
  <div>    
    <div v-bind:key="task.id" v-for="task in allTasks">
      <Task v-bind:task="task" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Task from './Task';

export default {
  components: {
    Task
  },
  name: 'TaskManager',
  props: ["tasks"],
  methods: {
    ...mapActions(['fetchTasks'])
  },
  computed: mapGetters(['allTasks']),
  created() {
    this.fetchTasks()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

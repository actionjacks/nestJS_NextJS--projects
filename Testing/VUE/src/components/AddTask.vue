<template>
    <div>
        <form @submit="onSubmit">
            <input type="text" v-model="name" name ="name" 
            placeholder="Add Task">
            <input type="submit" value="Add Task" class="btn">
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import uuid from 'uuid';

export default {
    name: "AddTask",
    data() {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(['addTask']),
        onSubmit(e) {
            e.preventDefault();
            const task = {
                name: this.name,
                completed: false
            }
            this.addTask(task);
        }
    }
}
</script>

<style scoped>
  form {
    display: flex;
  }

  input[type="text"] {
    flex: 10;
    padding: 5px;
  }

  input[type="submit"] {
    flex: 2;    
  }
</style>
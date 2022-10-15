// Tasks module
import axios from 'axios';

const resource_uri = "http://localhost:3000/task/";

const state = {
    tasks: []
};

const getters = {
    allTasks: state => state.tasks
};

const actions = {
    async fetchTasks({ commit }) {
        const response = await axios.get(resource_uri);    
        commit('setTasks', response.data);
    },
    async addTask( { commit }, task) {
        const response = await axios.post(resource_uri, task);
        commit('newTask', response.data);
    },
    async updateTask( { commit }, task) {
        const response = await axios.put(`${resource_uri}${task.id}`, task);
        commit('updTask', response.data);
    },
    async removeTask( { commit }, task) {
        const response = await axios.delete(`${resource_uri}${task.id}`);
        commit('deleteTask', task);
    }
};

const mutations = {
    setTasks: (state, tasks) => state.tasks = tasks,
    newTask: (state, task) => state.tasks.unshift(task),
    updTask: (state, updatedTask) => {
        const index = state.tasks.findIndex(t => t.id === updatedTask.id);
        if(index !== -1) {
            state.tasks.splice(index, 1, updatedTask);
        }        
    },
    deleteTask: (state, task) => state.tasks = state.tasks.filter(t => task.id !== t.id),
};

export default {
    state, getters, actions, mutations
}
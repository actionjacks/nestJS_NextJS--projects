import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { makeServer } from '@/mockApi/server'
makeServer()
createApp(App).use(router).mount('#app')

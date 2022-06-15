import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Slot from '@/views/Slot.vue'
import DataTable from '@/views/DataTableSlot.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Slot',
    component: Slot
  },
  {
    path: '/table',
    name: 'DataTable',
    component: DataTable
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

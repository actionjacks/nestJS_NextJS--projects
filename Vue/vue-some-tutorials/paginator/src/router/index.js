import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Part2 from '@/views/Part2.vue';
import Part2_1 from '@/views/Part2-1.vue';
import Part3 from '@/views/Part3.vue';
import Part3_1 from '@/views/Part3-1.vue';
import Pagination from '@/views/Pagination.vue';
import Pagination_1 from '@/views/Pagination-1.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/part-2',
    name: 'part-2',
    component: Part2
  },
  {
    path: '/part-2-1',
    name: 'part-2-1',
    component: Part2_1
  },
  {
    path: '/part-3',
    name: 'part-3',
    component: Part3
  },
  {
    path: '/part-3-1',
    name: 'part-3-1',
    component: Part3_1
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: Pagination
  },
  {
    path: '/pagination-1',
    name: 'pagination-1',
    component: Pagination_1
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

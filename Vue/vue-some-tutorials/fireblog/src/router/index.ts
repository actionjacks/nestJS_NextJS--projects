import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Blogs from '@/views/Blogs.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import ForgetPassword from '@/views/ForgetPassword.vue'
import Profile from '@/views/Profile.vue'
import Admin from '@/views/Admin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs,
    meta: { title: 'Blogs' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { title: 'Register' }
  },
  {
    path: '/forget-password',
    name: 'ForgetPassword',
    component: ForgetPassword,
    meta: { title: 'Forget Password' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { title: 'Profile' }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { title: 'Admin' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | jack fireblog`
  next()
})

export default router

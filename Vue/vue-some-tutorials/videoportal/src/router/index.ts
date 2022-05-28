import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Video from "@/views/Video.vue"
import VideoWatch from "@/views/VideoWatch.vue"
import TagVideoList from '@/views/TagVideoList.vue'
import VideoCreate from '@/views/VideoCreate.vue'
import Admin from '@/views/Admin/Index.vue'
import AdminVideoList from '@/views/Admin/AdminVideoList.vue'
import AdminVideoEdit from '@/views/Admin/AdminVideoEdit.vue'
import AdminUserList from '@/views/Admin/AdminUserList.vue'
import UserLogin from '@/views/UserLogin.vue'
import UserRegistration from '@/views/UserRegistration.vue'
import { CurrentUser } from "@/Classes/Users";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "video",
    component: Video,
  },
  {
    path: "/login",
    name: "user-login",
    component: UserLogin,
  },
  {
    path: "/registration",
    name: "user-registration",
    component: UserRegistration,
  },
  {
    path: "/video/:id",
    name: "video-watch",
    component: VideoWatch,
    props: true
  },
  {
    path: "/tag/:id",
    name: "tag",
    component: TagVideoList,
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter(to, from, next) {
      if (window.localStorage.getItem('currentUser') === null) {
        next('/')
      }
      const currentUser: CurrentUser = JSON.parse(window.localStorage.currentUser)
      if (currentUser.admin && currentUser.name) {
        next()
      }
    },
    children: [{
      path: "videos",
      name: "admin-video-list",
      component: AdminVideoList,
      props: true,
    },
    {
      path: "videos/:id/edit",
      name: "admin-video-edit",
      component: AdminVideoEdit,
      props: true
    },
    {
      path: "video/new",
      name: "video-create",
      component: VideoCreate,
    },
    {
      path: "users",
      name: "admin-user-list",
      component: AdminUserList,
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router;

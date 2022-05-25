import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Video from "@/views/Video.vue"
import VideoWatch from "@/views/VideoWatch.vue"
import TagVideoList from '@/views/TagVideoList.vue'
import VideoCreate from '@/views/VideoCreate.vue'
import AdminVideoList from '@/views/AdminVideoList.vue'
import AdminVideoEdit from '@/views/AdminVideoEdit.vue'
import AdminUserList from '@/views/AdminUserList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "video",
    component: Video,
  },
  {
    path: "/video/new",
    name: "video-create",
    component: VideoCreate,
  },
  {
    path: "/video/:id",
    name: "video-watch",
    component: VideoWatch,
    props: true
  },
  {
    path: "/admin/videos",
    name: "admin-video-list",
    component: AdminVideoList,
    props: true
  },
  {
    path: "/admin/users",
    name: "admin-user-list",
    component: AdminUserList,
  },
  {
    path: "/admin/videos/:id/edit",
    name: "admin-video-edit",
    component: AdminVideoEdit,
    props: true
  },
  {
    path: "/tag/:id",
    name: "tag",
    component: TagVideoList,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

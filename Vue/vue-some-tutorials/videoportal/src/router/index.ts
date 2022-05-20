import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Video from "@/views/Video.vue"
import VideoWatch from "@/views/VideoWatch.vue"
import TagVideoList from '@/views/TagVideoList.vue'
import VideoCreate from '@/views/VideoCreate.vue'

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

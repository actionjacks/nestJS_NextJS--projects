import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Video from "@/views/Video.vue"
import VideoWatch from "@/views/VideoWatch.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "video",
    component: Video,
  },
  {
    path: "/video/:id",
    name: "video-watch",
    component: VideoWatch,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { ROUTING_URLS } from "../router/routing";

import Home from "../views/Home.vue";
import SigninForm from "../views/form/SigninForm.vue";
import RenderData from "../views/renderData/RenderData.vue";
import RenderDataItem from "../components/RenderDataItem.vue";
import NotFound from "../views/NotFound.vue";
import Todo from "../views/todo/Todo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTING_URLS.MAIN,
    name: "form__",
    component: SigninForm,
  },
  {
    path: ROUTING_URLS.HOME,
    name: "Home",
    component: Home,
  },
  {
    path: ROUTING_URLS.RENDER_DATA,
    name: "RenderData",
    component: RenderData,
  },
  {
    path: ROUTING_URLS.RENDER_DATA_ITEM,
    name: "RenderDataItem",
    component: RenderDataItem,
    props: true,
  },
  {
    path: ROUTING_URLS.PROJECT_TODO,
    name: "todo",
    component: Todo,
    props: true,
  },
  // redirect
  {
    path: "/all-renderData",
    redirect: ROUTING_URLS.RENDER_DATA,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

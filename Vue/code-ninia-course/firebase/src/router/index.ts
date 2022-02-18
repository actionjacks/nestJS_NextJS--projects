import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/components/Login.vue";
import Signup from "@/components/Signup.vue";

import { auth } from "../firebase";
//auth guard
const requireAuth = (
  _to: any,
  _from: any,
  next: (arg0: { name?: string; Home?: any }) => void
) => {
  let user = auth.currentUser;
  if (!user) {
    next({ name: "Login" });
  }
  next({ name: "Home" });
};

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requireAuth,
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
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

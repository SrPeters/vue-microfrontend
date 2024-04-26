import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/remote/",
    name: "Remote",
    component: () => import("remoteApp/App"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

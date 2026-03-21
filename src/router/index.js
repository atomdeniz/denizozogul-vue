import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/telsizci/privacy-policy",
    name: "TelsizciPrivacyPolicy",
    component: () => import("../views/TelsizciPrivacyPolicy.vue"),
  },
  {
    path: "/telsizci/support",
    name: "TelsizciSupport",
    component: () => import("../views/TelsizciSupport.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { metaFor } from "../seo/meta.mjs";
import { applyHead } from "../seo/head";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/Resume.vue"),
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, top: 60 };
    return { top: 0 };
  },
});

router.afterEach((to) => {
  const path = to.path.length > 1 ? to.path.replace(/\/+$/, "") : to.path;
  applyHead(metaFor(path));
});

export default router;

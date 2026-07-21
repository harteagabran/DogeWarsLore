import { createRouter, createWebHistory } from "vue-router";
import ArticlePage from "../pages/ArticlePage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/characters/:slug",
      component: ArticlePage,
    },
  ],
});

export default router;

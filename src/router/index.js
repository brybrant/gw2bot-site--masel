import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import Commands from "@/pages/Commands.vue";
import FAQ from "@/pages/FAQ.vue";
import PrivacyPolicy from "@/pages/PrivacyPolicy.vue";
import NotFound from "@/pages/NotFound.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/faq", component: FAQ },
  { path: "/commands", component: Commands },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "*", component: NotFound }
];

export default new Router({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {x: 0, y: 0};
    }
  }
});


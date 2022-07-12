import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home.vue";
import Commands from "@/components/Commands.vue";
import FAQ from "@/components/FAQ.vue";
import PrivacyPolicy from "@/components/Privacy-Policy.vue";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/faq", component: FAQ },
  { path: "/commands", component: Commands },
  { path: "/privacy-policy", component: PrivacyPolicy }
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


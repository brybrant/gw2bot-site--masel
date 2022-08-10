// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueHead from "vue-head";
import LoadScript from "vue-plugin-load-script";
Vue.use(VueHead);
Vue.use(LoadScript);

Vue.config.productionTip = false;

Vue.prototype.$inviteLink = "https://discord.com/api/oauth2/authorize?client_id=310050883100737536&permissions=939879488&scope=bot%20applications.commands";

Vue.prototype.$supportServerLink = "https://discord.gg/VyQTrwP";

Vue.filter("twoOrphans",function(text) {
  // Replace the last whitespace character with a non-breaking space to force a
  // minimum of two orphan words in a given block of text
  return text.replace(/\s+[\w")]+$/, function(x) {
    return x.replace(/\s+/,"\xa0");// non-breaking space (javascript entity)
  });
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

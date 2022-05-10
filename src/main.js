// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

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

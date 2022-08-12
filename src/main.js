// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

Vue.prototype.$inviteLink = "https://discord.com/api/oauth2/authorize?client_id=310050883100737536&permissions=939879488&scope=bot%20applications.commands";

Vue.prototype.$supportServerLink = "https://discord.gg/VyQTrwP";

Vue.prototype.$botDescription = "GW2Bot is a free and open-source interactive software tool (&ldquo;bot&rdquo;) created for use exclusively with the <a class='external' href='https://discord.com/' target='_blank'>Discord</a> application, and is designed to provide helpful and convenient features that compliment <a class='external' href='https://www.guildwars2.com' target='_blank'>Guild&nbsp;Wars&nbsp;2</a> (<abbr>GW2</abbr>)&nbsp;gameplay. GW2Bot is licensed under the <a class='external' href='https://www.gnu.org/licenses/gpl-3.0.en.html'>GNU General Public Licence</a> with no warranty, and permission is granted to copy, distribute and/or modify <a class='external' href='https://github.com/Maselkov/GW2Bot'>the source code</a> on the basis that you grant the same freedoms offered by this licence to users of your&nbsp;copy.";

Vue.filter("twoOrphans",function(text) {
  // Replace the last whitespace character with a non-breaking space to force a
  // minimum of two orphan words in a given block of text
  return text.replace(/\s+[\w")]+$/, function(x) {
    return x.replace(/\s+/,"\xa0");// non-breaking space (javascript entity)
  });
});

// To specify the page <title> in the vue file:
// export default {title: 'title'}
Vue.mixin({
  created: function() {
    const title = this.$options.title;
    if (title) {
      document.title = title;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

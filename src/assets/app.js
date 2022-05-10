import Vue from "vue";

export default {
  data() {
    return {navActive: false}
  },
  methods: {
    toggleNavigation(navActive) {
      if (navActive) {
        Vue.set(this, "navActive", false);
      } else {
        Vue.set(this, "navActive", true);
      }
    },
    hideNavigation(navActive) {
      Vue.set(this, "navActive", false);
    }
  },
  mounted() {
    // object-fit fallback
    // dependency: https://github.com/aFarkas/lazysizes
    if(!("objectFit" in document.documentElement.style)) {
      document.addEventListener('lazybeforeunveil',function(e) {
        if(/feature-media__media/.test(e.target.className)) {
          var imgUrl = e.target.getAttribute('data-src');
          e.target.style.backgroundImage = 'url('+imgUrl+')';
        }
      });
      document.addEventListener('lazyloaded',function(e) {
        if(/feature-media__media/.test(e.target.className)) {
          e.target.removeAttribute('src');
        }
      });
    }
    /*var request = new XMLHttpRequest(),
        element = document.getElementById("api-status");
    request.open("GET", "https://api.guildwars2.com/v2/quaggans", true);

    request.onreadystatechange = function() {
      if(request.readyState==4) {
        if (request.status >=200 && request.status < 400) {
          element.innerHTML = "API is Online!";
          element.className = "success";
        } else {
          element.innerHTML = "Error reaching API";
          element.className = "failure";
        }
      }
    };

    request.send();*/
    /* Masel says API check is redundant now */
  }
};
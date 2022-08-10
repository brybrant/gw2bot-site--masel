<template>
  <div id="app">
    <TopBarComponent/>
    <div class="page">
      <router-view/>
    </div>
    <PatreonComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
import TopBarComponent from "@/components/TopBarComponent.vue";
import PatreonComponent from "@/components/PatreonComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    TopBarComponent,
    PatreonComponent,
    FooterComponent
  },
  mounted() {
    // object-fit fallback
    // dependency: https://github.com/aFarkas/lazysizes
    if(!("objectFit" in document.documentElement.style)) {
      document.addEventListener("lazybeforeunveil",function(e) {
        if(/feature-media__media/.test(e.target.className)) {
          var imgUrl = e.target.getAttribute("data-src");
          e.target.style.backgroundImage = "url("+imgUrl+")";
        }
      });
      document.addEventListener("lazyloaded",function(e) {
        if(/feature-media__media/.test(e.target.className)) {
          e.target.removeAttribute("src");
        }
      });
    }
  }
};
</script>

<style src="@/assets/scss/main.scss" lang="scss"></style>

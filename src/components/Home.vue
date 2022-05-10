<template>
  <main id="index">
    <div class="alert" v-if="!alert">
      <span class="close-button" title="Dismiss" v-on:click="closeAlert">&times;</span>
      A major update is now live along with Patreon!
    </div>
    <div class="feature-media" :class="month">
      <picture>
        <img data-sizes="auto" class="feature-media__media lazyload" :src="'/static/img/feature-images/'+featureMedia[month]+'--low.jpg'" :data-src="'/static/img/feature-images/'+featureMedia[month]+'.jpg'" :data-srcset="'/static/img/feature-images/'+featureMedia[month]+'.jpg 960w, /static/img/feature-images/'+featureMedia[month]+'--high.jpg 1920w'">
      </picture>
      <!--<video class="feature-media__media" autoplay loop playsinline>
        <source src="/static/img/feature-images/spring.mp4" type="video/mp4">
      </video>-->
      <div class="feature-media__content vertical-align vertical-align--middle">
        <div class="vertical-align__content">
          <div class="page-width">
            <h1 class="feature-title">Bring The World of Tyria Into&nbsp;Discord</h1>
            <a class="feature-button button button--giant" :href="inviteLink" target="_blank">Add To Your Server!</a>
          </div>
        </div>
      </div>
    </div>
    <div class="page-width page-padding">
      <h2 class="bot-demo-title">GW2Bot Demo</h2>

      <div class="bot-demo">
        <picture>
          <source media="(min-width: 801px)" srcset="/static/img/demo.webp" type="image/webp">
          <source media="(min-width: 801px)" srcset="/static/img/demo.gif" type="image/gif">
          <source media="(min-width: 601px)" srcset="/static/img/demo--tablet.webp" type="image/webp">
          <source media="(min-width: 601px)" srcset="/static/img/demo--tablet.gif" type="image/gif">
          <source media="(min-width: 1px)" srcset="/static/img/demo--mobile.webp" type="image/webp">
          <img src="/static/img/demo--mobile.gif" alt="A demonstration of GW2Bot" loading="lazy">
        </picture>
      </div>

      <router-link to="/commands" class="button button--giant">View all Commands</router-link>
    </div>
  </main>
</template>

<script scoped>
export default {
  props: ["inviteLink"],
  methods: {
    closeAlert: function(event) {
      event.target.parentElement.style.display = "none";
      document.cookie = "alert=off";
    }
  },
  data() {
    return {
      alert: document.cookie,
      month: ["january","february","march","april","may","june","july","august","september","october","november","december"][(new Date()).getMonth()],
      featureMedia: {
        january: "lunar-new-year",
        february: "lunar-new-year",
        march: "spring",
        april: "spring",
        may: "spring2",
        june: "dragon-bash",
        july: "dragon-bash",
        august: "festival-of-the-four-winds",
        september: "festival-of-the-four-winds",
        october: "halloween",
        november: "autumn",
        december: "wintersday"
      }
    };
  },
  mounted() {
    var lazySizesScript = document.createElement("script");
    lazySizesScript.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    document.body.appendChild(lazySizesScript);

    var parallaxScript = document.createElement("script");
    parallaxScript.src = "https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js";
    parallaxScript.onload = function() {
      var parallaxInit = document.createElement("script");
      var parallaxInitCode = "var rellax = new Rellax('.feature-media__media',{speed: -3})";
      try {
        parallaxInit.appendChild(document.createTextNode(parallaxInitCode));
        document.body.appendChild(parallaxInit);
      } catch(e) {
        parallaxInit.text = parallaxInitCode;
        document.body.appendChild(parallaxInit);
      }
    };
    document.body.appendChild(parallaxScript);
  }
};
</script>

<style scoped>
.alert {
  padding: 24px;
  background-color: #b40000;
  color: #fff;
  font-weight: 700;
}

.close-button {
  margin-left: 15px;
  color: #fff;
  float: right;
  font-size: 32px;
  cursor: pointer;
}

.close-button:hover {
  color: #000;
}
</style>


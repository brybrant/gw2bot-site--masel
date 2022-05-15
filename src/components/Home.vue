<template>
  <main id="index">
    <div class="alert" v-if="!alert">
      <span class="close-button" title="Dismiss" @click="closeAlert">&times;</span>
      A major update is now live along with Patreon!
    </div>
    <div class="feature-media" :class="month">
      <picture>
        <source media="(max-width: 720px)" :data-srcset="'/static/img/feature-images/'+featureMedia[month]+'.webp'" type="image/webp">
        <source :data-srcset="'/static/img/feature-images/'+featureMedia[month]+'--high.webp'" type="image/webp">
        <img data-sizes="auto" class="feature-media__media lazyload" :src="'/static/img/feature-images/'+featureMedia[month]+'--low.jpg'" :data-src="'/static/img/feature-images/'+featureMedia[month]+'.jpg'" :data-srcset="'/static/img/feature-images/'+featureMedia[month]+'.jpg 960w, /static/img/feature-images/'+featureMedia[month]+'--high.jpg 1920w'" alt="">
      </picture>
      <!--<video class="feature-media__media" autoplay loop muted playsinline>
        <source src="/static/img/feature-images/Sea_Dragon.mp4" type="video/mp4">
      </video>-->
      <div class="feature-media__content vertical-align vertical-align--middle">
        <div class="vertical-align__content">
          <div class="page-width">
            <h1 class="feature-title">Bring The World&nbsp;of Tyria Into&nbsp;Discord</h1>
            <a class="feature-button button button--giant" :href="inviteLink" target="_blank">Add To Your Server!</a>
          </div>
        </div>
      </div>
    </div>
    <div class="page-width page-padding">
      <h2>GW2Bot Demo</h2>

      <div class="bot-demo">
        <video id="demo" autoplay loop muted playsinline>
          <source src="/static/img/demo.webm" type="video/webm">
          <source src="/static/img/demo.mp4" type="video/mp4">
        </video>
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
      document.cookie = "alert=off;SameSite=Strict";
    }
  },
  data() {
    return {
      alert: /alert=off/.test(document.cookie),
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
    this.$loadScript("https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js");

    this.$loadScript("https://cdnjs.cloudflare.com/ajax/libs/rellax/1.12.1/rellax.min.js").then(() => {
      // eslint-disable-next-line
      new Rellax(".feature-media__media",{speed: -3});
    });
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


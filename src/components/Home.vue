<template>
  <main id="index">
    <div class="alert" v-if="!alert">
      <span class="close-button" title="Dismiss" v-on:click="closeAlert">&times;</span>
      A major update is now live along with Patreon!
    </div>
    <div class="feature-image">
      <div class="page-width">
        <h1 class="feature-title">Bring The World of Tyria Into&nbsp;Discord</h1>
        <a class="feature-button button button--giant button--gw2" :href="inviteLink" target="_blank">Add To Your Server!</a>
      </div>
    </div>
    <div class="page-width page-padding">
      <h2 class="bot-demo-title">GW2Bot Demo</h2>

      <div class="bot-demo">
        <picture>
          <source media="(min-width: 801px)" srcset="/static/img/demo.gif">
          <source media="(min-width: 601px)" srcset="/static/img/demo--tablet.gif">
          <img src="/static/img/demo--mobile.gif" alt="A .gif demonstration of the bot" loading="lazy">
        </picture>

        <picture>
          <source media="(min-width: 801px)" srcset="/static/img/demo-border.png">
          <source media="(min-width: 601px)" srcset="/static/img/demo-border--tablet.png">
          <img class="bot-demo-border" src="/static/img/demo-border--mobile.png" role="presentation" loading="lazy">
        </picture>
      </div>

      <router-link to="/commands" class="button button--giant button--gw2">View all Commands</router-link>
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
      alert: document.cookie
    };
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


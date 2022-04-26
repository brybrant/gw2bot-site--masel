<template>
  <div id="app">
    <nav class="flexbox" aria-label="Navigation" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
      <div class="flexbox__item">
        <router-link to="/" active-class="active" itemprop="url" exact>Home</router-link>
      </div>
      <div class="flexbox__item">
        <router-link to="/commands" active-class="active" itemprop="url">Commands</router-link>
      </div>
      <div class="flexbox__item">
        <router-link to="/faq" active-class="active" itemprop="url">F.A.Q</router-link>
      </div>
      <div class="flexbox__item">
        <a href="https://discord.gg/VyQTrwP" target="_blank" itemprop="url">Support</a>
      </div>
    </nav>

    <router-view :invite-link='"https://discord.com/api/oauth2/authorize?client_id=310050883100737536&permissions=939879488&scope=bot%20applications.commands"'/>
  </div>
</template>

<script src="./assets/app.js"></script>

<style src="./assets/scss/main.scss" lang="scss"></style>

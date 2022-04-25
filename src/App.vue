<template>
  <div id="app">
    <nav class="main-nav" aria-label="Navigation" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
      <router-link to="/" active-class="active" itemprop="url" exact>Home</router-link>
      <router-link to="/commands" active-class="active" itemprop="url">Commands</router-link>
      <router-link to="/faq" active-class="active" itemprop="url">F.A.Q</router-link>
      <a href="https://discord.gg/VyQTrwP" target="_blank" itemprop="url">Support</a>
    </nav>

    <router-view :invite-link='"https://discord.com/api/oauth2/authorize?client_id=310050883100737536&permissions=939879488&scope=bot%20applications.commands"'/>
  </div>
</template>

<script src="./assets/app.js"></script>

<style src="./assets/scss/main.scss" lang="scss"></style>

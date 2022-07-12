<template>
  <div id="app">
    <div class="top-bar">
      <div class="top-bar__shadow">
        <div class="page-width page-padding">
          <router-link class="top-bar__logo" to="/"><picture><source srcset="/static/img/nav-bar-logo.webp" type="image/webp"><img src="/static/img/nav-bar-logo.png" alt="GW2Bot Logo"></picture><span class="top-bar__logo-wordmark">GW2Bot</span><span class="sr-only"> - A Discord Bot for Guild Wars 2</span></router-link>

          <div class="top-bar__toggles">
            <div class="top-bar__toggle">
              <button @click="toggleDarkMode(darkMode)" class="dark-mode-button" :class="{active: darkMode}" :title="darkMode?'Switch to light mode':'Switch to dark mode'"></button>
            </div>

            <div class="top-bar__toggle top-bar__toggle--navigation">
              <button @click="toggleNavigation(navActive)" class="main-nav-button" :class="{active: navActive}" :title="navActive?'Hide navigation':'Show navigation'"><div></div></button>
            </div>
          </div>
        </div>
      </div>

      <div @click="hideNavigation(navActive)" class="mobile-navigation-cover" :class="{active: navActive}"></div>

      <div class="page-width">
        <div class="main-nav__container" :class="{active: navActive}">
          <nav @click="hideNavigation(navActive)" class="main-nav" aria-label="Navigation" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
            <router-link to="/" class="main-nav__link" active-class="active" itemprop="url" exact><span class="main-nav__link-name">Home</span></router-link>
            <router-link to="/commands" class="main-nav__link" active-class="active" itemprop="url"><span class="main-nav__link-name">Commands</span></router-link>
            <router-link to="/faq" class="main-nav__link" active-class="active" itemprop="url"><span class="main-nav__link-name">F.A<span class="q-kern">.</span>Q</span></router-link>
            <a class="main-nav__link" href="https://discord.gg/VyQTrwP" target="_blank" itemprop="url"><span class="main-nav__link-name">Support</span></a>
          </nav>
        </div>
      </div>
    </div>

    <div class="page">
      <router-view :invite-link='"https://discord.com/api/oauth2/authorize?client_id=310050883100737536&permissions=939879488&scope=bot%20applications.commands"' :support-server-link='"https://discord.gg/VyQTrwP"'/>
      <!--<div class="api-status-bar">
        <div class="page-width page-padding">
          <span id="api-status" title="If API is offline, the bot will not function properly">Checking API...</span>
        </div>
      </div>-->
      <!-- Masel says API check is redundant now -->
    </div>
  </div>
</template>

<script src="./assets/app.js"></script>

<style src="./assets/scss/main.scss" lang="scss"></style>

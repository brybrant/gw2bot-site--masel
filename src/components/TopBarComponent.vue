<template>
  <div class="top-bar">
    <div class="top-bar__shadow">
      <div class="page-width page-padding">
        <router-link class="top-bar__logo" to="/">
          <picture>
            <source srcset="/static/img/nav-bar-logo.webp" type="image/webp">
            <img src="/static/img/nav-bar-logo.png" alt="GW2Bot Logo">
          </picture>
          <span class="top-bar__logo-wordmark">GW2Bot</span><span class="sr-only"> - A Discord Bot for Guild Wars 2</span>
        </router-link>

        <div class="top-bar__toggles">
          <div class="top-bar__toggle">
            <button
              class="dark-mode-button"
              :class="{active: darkMode}"
              :title="darkMode?'Switch to light mode':'Switch to dark mode'"
              @click="toggleDarkMode(darkMode)"
            />
          </div>

          <div class="top-bar__toggle top-bar__toggle--navigation">
            <button
              class="main-nav-button"
              :class="{active: navActive}"
              :title="navActive?'Hide navigation':'Show navigation'"
              @click="toggleNavigation(navActive)"
            >
              <div />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-navigation-cover" :class="{active: navActive}" @click="hideNavigation()" />

    <div class="page-width">
      <div class="main-nav__container" :class="{active: navActive}">
        <nav class="main-nav" aria-label="Navigation" itemscope itemtype="http://www.schema.org/SiteNavigationElement" @click="hideNavigation()">
          <router-link to="/" class="main-nav__link" active-class="active" itemprop="url" exact>
            <span class="main-nav__link-name">Home</span>
          </router-link>

          <router-link to="/commands" class="main-nav__link" active-class="active" itemprop="url">
            <span class="main-nav__link-name">Commands</span>
          </router-link>

          <router-link to="/faq" class="main-nav__link" active-class="active" itemprop="url">
            <span class="main-nav__link-name">F.A<span class="q-kern">.</span>Q</span>
          </router-link>

          <a class="main-nav__link" :href="$supportServerLink" target="_blank" itemprop="url">
            <span class="main-nav__link-name">Support</span>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { set } from "vue";

export default {
  data() {
    return {
      navActive: false,
      darkMode: (/darkMode=true/.test(document.cookie)||/dark-mode/.test(document.documentElement.className))
    };
  },
  methods: {
    toggleNavigation(navActive) {
      if (navActive) {
        set(this, "navActive", false);
      } else {
        set(this, "navActive", true);
      }
    },
    hideNavigation() {
      set(this, "navActive", false);
    },
    toggleDarkMode(darkMode) {
      var html = document.documentElement;
      if (darkMode) {
        set(this, "darkMode", false);
        html.removeAttribute("class");
        document.cookie = "darkMode=false;SameSite=Strict";
      } else {
        set(this, "darkMode", true);
        html.className = "dark-mode";
        document.cookie = "darkMode=true;SameSite=Strict";
      }
    }
  }
};
</script>

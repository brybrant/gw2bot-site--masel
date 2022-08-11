<template>
  <div id="app">
    <TopBarComponent />
    <div class="page">
      <router-view />
    </div>
    <PatreonComponent />
    <FooterComponent />
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
  }
};
</script>

<style src="@/assets/scss/main.scss" lang="scss"></style>

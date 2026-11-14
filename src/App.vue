<template>
  <div id="app">
    <main class="wrapper"><router-view /></main>
    <template v-if="!isStandalonePage">
      <SiteFooter></SiteFooter>
      <!-- Lives outside <router-view> so music keeps playing across pages. -->
      <audio id="my_audio" src="/music/sad.mp3" loop muted preload="none"></audio>
      <div class="line top"></div>
      <div class="line bottom"></div>
      <div class="line left"></div>
      <div class="line right"></div>
    </template>
  </div>
</template>

<script>
import SiteFooter from "./components/SiteFooter.vue";
export default {
  name: "App",
  components: { SiteFooter },
  computed: {
    isStandalonePage() {
      return this.$route.path.startsWith("/telsizci/");
    },
  },
};
</script>

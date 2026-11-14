<template>
  <div id="app">
    <main class="wrapper"><router-view /></main>
    <template v-if="!isStandalonePage">
      <Footer></Footer>
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
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Footer },
  computed: {
    isStandalonePage() {
      return this.$route.path.startsWith("/telsizci/");
    },
  },
};
</script>

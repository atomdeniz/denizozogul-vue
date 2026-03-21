<template>
  <div id="app">
    <div class="wrapper"><router-view /></div>
    <template v-if="!isStandalonePage">
      <Footer></Footer>
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

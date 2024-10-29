<template>
  <div id="app">
    <div class="wrapper"><router-view /></div>
    <Footer></Footer>
    <div class="line top"></div>
    <div class="line bottom"></div>
    <div class="line left"></div>
    <div class="line right"></div>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: { Footer },
};
</script>

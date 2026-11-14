<template>
  <section class="section started" aria-label="Introduction">
    <div class="centrize full-width">
      <div class="vertical-center">
        <div class="started-content">
          <h1
            class="h-title glitch-effect"
            id="headertext"
            data-text="I'm DENİZ ÖZOĞUL"
          >
            I'm <span>DENİZ ÖZOĞUL</span>
          </h1>
          <div class="h-subtitle typing-subtitle">
            <p>Full-Stack Developer and Mobile Developer</p>
            <p>Amateur Photographer</p>
            <p>Based in Istanbul</p>
          </div>
          <span class="typed-subtitle"> </span>
          <div class="home-actions">
            <router-link class="btn" to="/resume">Resume</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { themePage } from "../theme";

export default {
  name: "Home",
  mixins: [themePage],
};
</script>

<style scoped>
.home-actions {
  margin-top: 30px;
}
</style>

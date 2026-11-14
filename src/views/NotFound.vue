<template>
  <section class="section started" aria-label="Page not found">
    <div class="centrize full-width">
      <div class="vertical-center">
        <div class="started-content">
          <h1 class="h-title glitch-effect" data-text="404">404</h1>
          <p class="h-subtitle">This page doesn't exist.</p>
          <div class="nf-actions">
            <router-link class="btn" to="/">&larr; Home</router-link>
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
  name: "NotFound",
  mixins: [themePage],
};
</script>

<style scoped>
.nf-actions {
  margin-top: 30px;
}
.nf-actions .btn {
  margin: 0 6px 10px;
}
</style>

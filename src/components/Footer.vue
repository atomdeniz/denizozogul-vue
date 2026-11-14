<template>
  <footer>
    <div class="soc">
      <a target="_blank" rel="noopener me" href="https://github.com/atomdeniz" aria-label="GitHub">
        <span class="ion ion-social-github" aria-hidden="true"></span>
      </a>
      <a target="_blank" rel="noopener me" href="https://www.instagram.com/denizozogul97" aria-label="Instagram">
        <span class="ion ion-social-instagram-outline" aria-hidden="true"></span>
      </a>
      <a target="_blank" rel="noopener me" href="https://linkedin.com/in/denizozogul" aria-label="LinkedIn">
        <span class="ion ion-social-linkedin" aria-hidden="true"></span>
      </a>
      <a target="_blank" rel="noopener me" href="mailto:admin@denizozogul.com" aria-label="E-mail">
        <span class="ion ion-email" aria-hidden="true"></span>
      </a>
      <a target="_blank" rel="noopener me" href="https://www.instagram.com/idkmyphoto" aria-label="Photography on Instagram">
        <span class="ion ion-camera" aria-hidden="true"></span>
      </a>
    </div>
    <div
      class="clr"
      style="cursor:pointer"
      id="playstop"
      role="button"
      tabindex="0"
      @click="toggleAudio"
      @keydown.enter.prevent="toggleAudio"
      @keydown.space.prevent="toggleAudio"
    >
      Play
    </div>
    <br />
    <div class="copy">
      © {{ currentYear }} Deniz ÖZOĞUL. All rights reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      isPlaying: false,
    };
  },
  methods: {
    toggleAudio() {
      const audio = document.getElementById("my_audio");
      if (!audio) {
        console.error("Audio element not found.");
        return;
      }

      // Toggle play/pause
      if (!this.isPlaying) {
        audio.muted = false; // Ensure audio is not muted
        audio
          .play()
          .then(() => {
            this.isPlaying = true;
            document.getElementById("playstop").textContent = "Stop";
            this.toggleColorInversion();
          })
          .catch((error) => {
            console.error("Audio play failed:", error);
          });
      } else {
        audio.pause();
        this.isPlaying = false;
        document.getElementById("playstop").textContent = "Play";
        this.toggleColorInversion();
      }
    },
    toggleColorInversion() {
      const css = this.isPlaying
        ? "html { filter: invert(100%); }"
        : "html { filter: invert(0%); }";

      const styleElement = document.getElementById("invert-style");
      if (styleElement) {
        styleElement.textContent = css;
      } else {
        const style = document.createElement("style");
        style.id = "invert-style";
        style.textContent = css;
        document.head.appendChild(style);
      }
    },
  },
};
</script>


<style scoped>
/* 24x24 tap targets (WCAG 2.5.8) with the same visual spacing as before. */
.soc a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  margin-left: 5px;
}
#playstop {
  display: inline-block;
  min-height: 24px;
  line-height: 24px;
}
</style>

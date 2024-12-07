<template>
  <footer>
    <div class="soc">
      <a target="_blank" href="https://github.com/atomdeniz">
        <span class="ion ion-social-github"></span>
      </a>
      <a target="_blank" href="https://www.instagram.com/denizozogul97">
        <span class="ion ion-social-instagram-outline"></span>
      </a>
      <a target="_blank" href="https://linkedin.com/in/denizozogul">
        <span class="ion ion-social-linkedin"></span>
      </a>
      <a target="_blank" href="mailto:admin@denizozogul.com">
        <span class="ion ion-email"></span>
      </a>
      <a target="_blank" href="https://www.instagram.com/idkmyphoto">
        <span class="ion ion-camera"></span>
      </a>
    </div>
    <div class="clr" style="cursor:pointer" id="playstop" @click="toggleAudio">
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

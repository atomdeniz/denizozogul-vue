<template>
  <footer>
    <div class="soc">
      <a target="_blank" href="https://github.com/atomdeniz"
        ><span class="ion ion-social-github"></span
      ></a>
      <a target="_blank" href="https://www.instagram.com/denizozogul97"
        ><span class="ion ion-social-instagram-outline"></span
      ></a>
      <a target="_blank" href="https://linkedin.com/in/denizozogul"
        ><span class="ion ion-social-linkedin"></span
      ></a>
      <a target="_blank" href="mailto:admin@denizozogul.com"
        ><span class="ion ion-email"></span
      ></a>
      <a target="_blank" href="https://www.instagram.com/idkmyphoto"
        ><span class="ion ion-camera"></span
      ></a>
    </div>
    <div class="clr" style="cursor:pointer" id="playstop" @click="playAudio">
      Play
    </div>

    <br />
    <div class="copy">
      © {{ currentYear }} Deniz ÖZOĞUL. All lefts reserved.
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      isPlay: false,
    };
  },
  methods: {
    colorChanger() {
      let css =
        "html {-webkit-filter: invert(100%); -moz-filter: invert(100%); -o-filter: invert(100%); -ms-filter: invert(100%); }";
      const head = document.getElementsByTagName("head")[0];
      const style = document.createElement("style");

      // A hack to toggle invert color back and forth
      if (!window.counter) {
        window.counter = 1;
      } else {
        window.counter++;
        if (window.counter % 2 === 0) {
          css =
            "html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }";
        }
      }

      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    },
    playAudio() {
      const audio = document.getElementById("my_audio");
      const playstop = document.getElementById("playstop");

      if (!this.isPlay) {
        audio.play();
        this.isPlay = true;
        playstop.innerHTML = "Stop";
        this.colorChanger();
      } else {
        audio.pause();
        this.isPlay = false;
        playstop.innerHTML = "Play";
        this.colorChanger();
      }
    },
  },
};
</script>

// Bridges the jQuery-based Glitche theme with client-side (no reload) navigation.
// The theme script (public/js/glitche-scripts.js) only initialises the page
// once, on the first load. Pages use this mixin so the typed subtitle and the
// full-height intro are set up again after every in-app navigation.

function $() {
  return typeof window !== "undefined" ? window.jQuery : undefined;
}

export const themePage = {
  mounted() {
    const jq = $();
    if (!jq) return;
    const root = jq(this.$el);
    root.filter(".section.started").add(root.find(".section.started")).css({
      height: jq(window).height() - 60,
    });
    // On the very first load the theme script starts the typing after the preloader.
    if (!document.body.classList.contains("loaded")) return;
    const subtitle = root.find(".typed-subtitle");
    if (subtitle.length && jq.fn.typed) {
      subtitle.typed({ stringsElement: root.find(".typing-subtitle"), loop: true });
    }
  },
  beforeUnmount() {
    const jq = $();
    if (!jq) return;
    // Stop the typing loop so its timers don't keep running on a detached node.
    jq(this.$el)
      .find(".typed-subtitle")
      .each(function () {
        const typed = jq(this).data("typed");
        if (typed) {
          typed.stop = true;
          clearTimeout(typed.timeout);
        }
      });
  },
};

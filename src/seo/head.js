// Keeps <head> in sync with the current route during client-side navigation.
// The initial values are already baked into each page's HTML at build time
// by scripts/prerender.mjs; this only matters after in-app navigation.

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!url) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

export function applyHead(meta) {
  document.title = meta.title;
  document.documentElement.lang = meta.lang || "en";
  setMeta("name", "description", meta.description);
  setMeta("name", "robots", meta.robots);
  setMeta("property", "og:title", meta.title);
  setMeta("property", "og:description", meta.description);
  setMeta("name", "twitter:title", meta.title);
  setMeta("name", "twitter:description", meta.description);
  if (meta.url) setMeta("property", "og:url", meta.url);
  setCanonical(meta.url);
}

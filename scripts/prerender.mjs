// Post-build step: turns the single SPA shell (dist/index.html) into one HTML
// file per route, each with its own <title>, meta description, canonical,
// Open Graph / Twitter tags and JSON-LD, plus the page content as static HTML
// inside #app so crawlers and link previews see it without running JS.
// Vue replaces the #app contents on mount, so visitors get the normal app.
//
// Also writes dist/sitemap.xml and dist/404.html.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { SITE_URL, OG_IMAGE, pages, notFound, metaFor, personJsonLd } from "../src/seo/meta.mjs";
import { profile, jobs, education, skills, interests } from "../src/data/resume.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const shell = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

// ---------- structured data ----------

const person = {
  ...personJsonLd(),
  knowsAbout: [...new Set(skills.flatMap((g) => g.items))],
  hasCredential: education
    .filter((e) => e.type === "certificate")
    .map((e) => ({
      "@type": "EducationalOccupationalCredential",
      name: e.name,
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: e.text },
    })),
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: profile.name,
  inLanguage: "en",
  publisher: { "@id": person["@id"] },
};

function structuredData(path, meta) {
  if (path === "/") {
    return { "@context": "https://schema.org", "@graph": [website, person] };
  }
  if (path === "/resume") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        website,
        person,
        {
          "@type": "ProfilePage",
          "@id": `${meta.url}#webpage`,
          url: meta.url,
          name: meta.title,
          description: meta.description,
          inLanguage: "en",
          isPartOf: { "@id": website["@id"] },
          mainEntity: { "@id": person["@id"] },
          dateModified: new Date().toISOString().slice(0, 10),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Resume", item: meta.url },
          ],
        },
      ],
    };
  }
  return null;
}

// ---------- static body content ----------

function homeBody() {
  return `
<section class="section started prerendered">
  <h1>I'm ${esc(profile.name)}</h1>
  <p>Full-Stack Developer and Mobile Developer · Amateur Photographer · Based in Istanbul</p>
  <p>${esc(profile.summary)}</p>
  <nav><a href="/resume">Resume</a></nav>
</section>`;
}

function resumeBody() {
  const jobHtml = jobs
    .map(
      (j) => `
    <article>
      <h3>${esc(j.role)} — ${esc(j.company)}</h3>
      <p>${esc(j.period)}</p>
      <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
    </article>`
    )
    .join("");
  const eduHtml = education
    .map((e) => `<article><h3>${esc(e.name)}</h3><p>${esc(e.period)} · ${esc(e.text)}</p></article>`)
    .join("");
  const skillHtml = skills
    .map((g) => `<h3>${esc(g.title)}</h3><ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`)
    .join("");
  const interestHtml = interests
    .map((i) => `<h3>${esc(i.title)}</h3><p>${esc(i.text)}${i.link ? ` <a href="${esc(i.link)}">${esc(i.linkLabel)}</a>` : ""}</p>`)
    .join("");
  return `
<div class="prerendered">
  <h1>${esc(profile.name)} — Resume</h1>
  <p>${esc(profile.headline)} · ${esc(profile.location)}</p>
  <nav><a href="/">Home</a></nav>
  <section><h2>About Me</h2><p>${esc(profile.summary)}</p>
    <p>E-mail: <a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a></p></section>
  <section><h2>Experience</h2>${jobHtml}</section>
  <section><h2>Education</h2>${eduHtml}</section>
  <section><h2>Skills</h2>${skillHtml}</section>
  <section><h2>Beyond the Code</h2>${interestHtml}</section>
  <section><h2>Let's Talk</h2>
    <p><a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a> ·
    <a href="https://linkedin.com/in/denizozogul">LinkedIn</a> ·
    <a href="https://github.com/atomdeniz">GitHub</a></p></section>
</div>`;
}

const bodies = { "/": homeBody, "/resume": resumeBody };

// ---------- render ----------

function headFor(path, meta) {
  const locale = meta.lang === "tr" ? "tr_TR" : "en_US";
  const ogType = path === "/resume" ? "profile" : "website";
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="${esc(meta.robots)}" />`,
  ];
  if (meta.url) {
    tags.push(
      `<link rel="canonical" href="${esc(meta.url)}" />`,
      `<meta property="og:type" content="${ogType}" />`,
      `<meta property="og:site_name" content="${esc(profile.name)}" />`,
      `<meta property="og:locale" content="${locale}" />`,
      `<meta property="og:url" content="${esc(meta.url)}" />`,
      `<meta property="og:title" content="${esc(meta.title)}" />`,
      `<meta property="og:description" content="${esc(meta.description)}" />`,
      `<meta property="og:image" content="${OG_IMAGE}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta property="og:image:alt" content="${esc(profile.name)}: ${esc(profile.headline)}" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${esc(meta.title)}" />`,
      `<meta name="twitter:description" content="${esc(meta.description)}" />`,
      `<meta name="twitter:image" content="${OG_IMAGE}" />`
    );
    if (ogType === "profile") {
      tags.push(
        `<meta property="profile:first_name" content="${esc(profile.givenName)}" />`,
        `<meta property="profile:last_name" content="${esc(profile.familyName)}" />`
      );
    }
  }
  const ld = structuredData(path, meta);
  if (ld) tags.push(jsonLd(ld));
  return tags.map((t) => `    ${t}`).join("\n");
}

function render(path, meta) {
  // The default tags from public/index.html are swapped for per-page ones.
  // (Comments are stripped by the HTML minifier, so we match the tags.)
  const defaults = [
    /<title>[\s\S]*?<\/title>/,
    /<meta name="description"[^>]*>/,
    /<meta name="robots"[^>]*>/,
    /<link rel="canonical"[^>]*>/,
  ];
  let html = shell;
  for (const re of defaults) {
    if (!re.test(html)) throw new Error(`default head tag ${re} not found in dist/index.html`);
    html = html.replace(re, "");
  }
  html = html.replace(/(<meta name="viewport"[^>]*>)/, `$1\n${headFor(path, meta)}\n`);
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${meta.lang || "en"}"`);
  const body = bodies[path];
  if (body) {
    const before = html;
    html = html.replace('<div id="app"></div>', `<div id="app">${body()}</div>`);
    if (html === before) throw new Error('<div id="app"></div> not found in dist/index.html');
  }
  return html;
}

function write(rel, content) {
  const file = join(dist, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
  console.log(`  prerender: ${rel}`);
}

for (const path of Object.keys(pages)) {
  const file = path === "/" ? "index.html" : `${path.slice(1)}.html`;
  write(file, render(path, metaFor(path)));
}
write("404.html", render("/404", { ...notFound, url: null }));

const today = new Date().toISOString().slice(0, 10);
const urls = Object.entries(pages)
  .map(([path, p]) => {
    const loc = SITE_URL + (path === "/" ? "/" : path);
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.sitemap.changefreq}</changefreq>\n    <priority>${p.sitemap.priority}</priority>\n  </url>`;
  })
  .join("\n");
write(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

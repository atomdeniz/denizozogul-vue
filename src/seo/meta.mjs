// Per-route SEO metadata. Shared by the router (client-side head updates)
// and scripts/prerender.mjs (static per-route HTML at build time).
import { SITE_URL, profile } from "../data/resume.mjs";

export { SITE_URL };

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const pages = {
  "/": {
    title: "Deniz Özoğul | Software Developer & Team Lead in Istanbul",
    description:
      "Deniz Özoğul is a full-stack and mobile developer and Team Lead at Aras Kargo in Istanbul, building high-load, event-driven microservices, web and mobile apps.",
    lang: "en",
    sitemap: { changefreq: "monthly", priority: "1.0" },
  },
  "/resume": {
    title: "Resume | Deniz Özoğul, Team Lead & Full-Stack Developer",
    description:
      "Resume of Deniz Özoğul: 7+ years of experience at Aras Kargo, Healthily and BilgeAdam with .NET, Node.js, React, React Native, AWS, Kubernetes and Kafka.",
    lang: "en",
    sitemap: { changefreq: "monthly", priority: "0.9" },
  },
  "/telsizci/support": {
    title: "Telsizci Destek | Amatör Radyo Sınav & Araçlar",
    description:
      "Telsizci uygulaması için destek sayfası: sık sorulan sorular ve iletişim bilgileri. Amatör radyo sınavına hazırlık ve telsiz araçları.",
    lang: "tr",
    sitemap: { changefreq: "yearly", priority: "0.4" },
  },
  "/telsizci/privacy-policy": {
    title: "Telsizci Gizlilik Politikası",
    description:
      "Telsizci uygulamasının gizlilik politikası: hangi verilerin toplandığı, nasıl kullanıldığı ve haklarınız.",
    lang: "tr",
    sitemap: { changefreq: "yearly", priority: "0.3" },
  },
};

export const notFound = {
  title: "Page not found | Deniz Özoğul",
  description: "The page you are looking for does not exist.",
  lang: "en",
  robots: "noindex, follow",
};

export function metaFor(path) {
  const page = pages[path];
  if (!page) return { ...notFound, url: null };
  return { robots: "index, follow", ...page, url: SITE_URL + (path === "/" ? "/" : path) };
}

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profile.name,
    givenName: profile.givenName,
    familyName: profile.familyName,
    jobTitle: profile.jobTitle,
    url: `${SITE_URL}/`,
    email: `mailto:${profile.email}`,
    image: OG_IMAGE,
    description: profile.summary,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Istanbul",
      addressCountry: "TR",
    },
    worksFor: { "@type": "Organization", name: "Aras Kargo", url: "https://www.araskargo.com.tr" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Düzce University" },
    sameAs: profile.sameAs,
  };
}

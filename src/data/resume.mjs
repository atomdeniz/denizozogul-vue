// Single source of truth for resume content.
// Used by Resume.vue at runtime and by scripts/prerender.mjs at build time
// (static HTML + JSON-LD for crawlers), so keep it plain data with no imports.

export const SITE_URL = "https://denizozogul.com";

export const profile = {
  name: "Deniz Özoğul",
  givenName: "Deniz",
  familyName: "Özoğul",
  jobTitle: "Team Lead & Software Developer",
  headline: "Team Lead, Full-Stack & Mobile Developer",
  location: "Istanbul, Turkey",
  email: "admin@denizozogul.com",
  summary:
    "Software developer since 2018 and Team Lead at Aras Kargo, building high-load, event-driven microservice architectures. Previously built React interfaces and scalable AWS solutions at UK-based Healthily and worked on Mercedes-Benz projects at BilgeAdam.",
  sameAs: [
    "https://github.com/atomdeniz",
    "https://linkedin.com/in/denizozogul",
    "https://www.instagram.com/denizozogul97",
    "https://www.instagram.com/idkmyphoto",
  ],
};

export const jobs = [
  {
    company: "Aras Kargo",
    role: "Team Lead",
    period: "2023 - Present",
    startYear: 2023,
    points: [
      "Handling real-time challenges in a high-load, event-driven microservice project.",
      "Building microservice architectures across multiple languages.",
      "Leading the team and taking code ownership.",
    ],
  },
  {
    company: "Healthily (UK)",
    role: "Software Developer",
    period: "2021 - 2023",
    startYear: 2021,
    endYear: 2023,
    points: [
      "Developed projects in multiple languages with a focus on clean, maintainable code.",
      "Built scalable, cloud-based solutions on AWS.",
      "Created React interfaces that improved the user experience.",
    ],
  },
  {
    company: "BilgeAdam",
    role: "Software Developer",
    period: "2018 - 2021",
    startYear: 2018,
    endYear: 2021,
    points: [
      "Delivered custom software solutions for various Mercedes-Benz projects.",
      "Used different languages to hit performance goals.",
      "Managed several projects at the same time.",
    ],
  },
];

export const education = [
  {
    name: "Düzce University",
    period: "2015 - 2019",
    text: "B.Sc. in Computer Engineering.",
    type: "degree",
  },
  { name: "Flutter & Dart", period: "Certificate", text: "Udemy", type: "certificate" },
  { name: "La Vista @ SaaS", period: "Certificate", text: "Kodluyoruz", type: "certificate" },
  {
    name: "Python & Machine Learning",
    period: "Certificate",
    text: "Kodluyoruz",
    type: "certificate",
  },
];

export const skills = [
  { title: "Languages", icon: "ion-code", items: ["TypeScript", "JavaScript", "C#", "Python"] },
  { title: "Front-End", icon: "ion-monitor", items: ["React", "Next.js", "Angular"] },
  { title: "Back-End", icon: "ion-gear-a", items: ["Node.js", ".NET"] },
  { title: "Mobile", icon: "ion-iphone", items: ["React Native"] },
  {
    title: "Cloud / DevOps",
    icon: "ion-cloud",
    items: ["AWS Lambda", "SQS/SNS", "EventBridge", "S3", "Docker", "Kubernetes", "Jenkins", "Ansible"],
  },
  {
    title: "Data / Messaging",
    icon: "ion-network",
    items: ["MongoDB", "MSSQL", "DynamoDB", "Kafka", "Debezium", "RabbitMQ", "Redis", "Airflow"],
  },
  { title: "Testing", icon: "ion-bug", items: ["Jest", "React Testing Library", "xUnit"] },
  { title: "Observability", icon: "ion-ios-pulse", items: ["Grafana", "Graylog"] },
];

export const interests = [
  {
    title: "Electric Guitar",
    icon: "ion-music-note",
    text: "Riffs, solos and trying to play by ear.",
  },
  {
    title: "Motorcycles",
    icon: "ion-speedometer",
    text: "Two wheels and an open road: the best way to clear my head.",
  },
  {
    title: "Photography",
    icon: "ion-camera",
    text: "Amateur photographer, sharing my shots at",
    link: "https://www.instagram.com/idkmyphoto",
    linkLabel: "@idkmyphoto",
  },
];

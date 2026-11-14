<template>
  <div class="resume-page">
    <!-- Started -->
    <section class="section started" aria-label="Introduction">
      <div class="centrize full-width">
        <div class="vertical-center">
          <div class="started-content">
            <h1 class="h-title glitch-effect" data-text="RESUME">
              <span class="sr-only">{{ profile.name }} </span><span>RESUME</span>
            </h1>
            <div class="h-subtitle typing-subtitle">
              <p>Team Lead @ Aras Kargo</p>
              <p>7+ years of building software</p>
              <p>Microservices · Full-Stack · Mobile</p>
            </div>
            <span class="typed-subtitle"></span>
            <div class="started-actions">
              <router-link class="btn" to="/">&larr; Home</router-link>
              <a class="btn fill" :href="`mailto:${profile.email}`">Hire me</a>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#section-about"
        class="mouse_btn"
        aria-label="Scroll to About Me"
        @click.prevent="scrollTo('section-about')"
      >
        <span class="ion ion-mouse" aria-hidden="true"></span>
      </a>
    </section>

    <!-- About -->
    <section class="section about" id="section-about" aria-labelledby="h-about">
      <div class="content">
        <div class="title">
          <h2 id="h-about" class="title_inner">About Me</h2>
        </div>
        <div class="desc">
          <p>
            I've been building software since 2018. I'm currently a
            <strong class="accent">Team Lead at Aras Kargo</strong>, working on
            high-load, event-driven microservice architectures, leading the team
            and owning the code. Before that I built React interfaces and
            scalable AWS solutions at UK-based <strong class="accent">Healthily</strong>,
            and worked on Mercedes-Benz projects at
            <strong class="accent">BilgeAdam</strong>.
          </p>
          <div class="info-list">
            <ul>
              <li><strong>Role . . .</strong> Software Developer / Team Lead</li>
              <li><strong>Residence . . .</strong> {{ profile.location }}</li>
              <li><strong>Experience . . .</strong> 7+ years</li>
              <li><strong>Degree . . .</strong> B.Sc. Computer Engineering</li>
              <li>
                <strong>E-mail . . .</strong>
                <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
              </li>
              <li>
                <strong>GitHub . . .</strong>
                <a href="https://github.com/atomdeniz" target="_blank" rel="noopener">@atomdeniz</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </section>

    <!-- Resume -->
    <section class="section resume" aria-label="Experience and education">
      <div class="content">
        <div class="cols">
          <div class="col col-md">
            <div class="title">
              <h2 class="title_inner">Experience</h2>
            </div>
            <div class="resume-items">
              <article v-for="job in jobs" :key="job.company" class="resume-item">
                <div class="date">{{ job.period }}</div>
                <h3 class="name">{{ job.role }} &mdash; {{ job.company }}</h3>
                <ul class="points">
                  <li v-for="p in job.points" :key="p">{{ p }}</li>
                </ul>
              </article>
            </div>
          </div>
          <div class="col col-md">
            <div class="title">
              <h2 class="title_inner">Education</h2>
            </div>
            <div class="resume-items">
              <article v-for="ed in education" :key="ed.name" class="resume-item">
                <div class="date">{{ ed.period }}</div>
                <h3 class="name">{{ ed.name }}</h3>
                <p>{{ ed.text }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="section service" aria-labelledby="h-skills">
      <div class="content">
        <div class="title">
          <h2 id="h-skills" class="title_inner">Skills</h2>
        </div>
        <div class="service-items">
          <div v-for="group in skills" :key="group.title" class="service-item">
            <div class="icon" aria-hidden="true"><span :class="['ion', group.icon]"></span></div>
            <h3 class="name">{{ group.title }}</h3>
            <ul class="tags">
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Interests -->
    <section class="section service" aria-labelledby="h-beyond">
      <div class="content">
        <div class="title">
          <h2 id="h-beyond" class="title_inner">Beyond the Code</h2>
        </div>
        <div class="service-items">
          <div v-for="item in interests" :key="item.title" class="service-item">
            <div class="icon" aria-hidden="true"><span :class="['ion', item.icon]"></span></div>
            <h3 class="name">{{ item.title }}</h3>
            <p>
              {{ item.text }}
              <a v-if="item.link" :href="item.link" target="_blank" rel="noopener">{{ item.linkLabel }}</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="section contact-cta" aria-labelledby="h-contact">
      <div class="content">
        <div class="title">
          <h2 id="h-contact" class="title_inner">Let's Talk</h2>
        </div>
        <p>Have an idea or a role in mind? I'm always happy to chat.</p>
        <div class="started-actions left">
          <a class="btn fill" :href="`mailto:${profile.email}`">
            <span class="ion ion-email" aria-hidden="true"></span> {{ profile.email }}
          </a>
          <a class="btn" href="https://linkedin.com/in/denizozogul" target="_blank" rel="noopener">
            <span class="ion ion-social-linkedin" aria-hidden="true"></span> LinkedIn
          </a>
          <a class="btn" href="https://github.com/atomdeniz" target="_blank" rel="noopener">
            <span class="ion ion-social-github" aria-hidden="true"></span> GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { profile, jobs, education, skills, interests } from "../data/resume.mjs";
import { themePage } from "../theme";

export default {
  name: "ResumeView",
  mixins: [themePage],
  data() {
    return { profile, jobs, education, skills, interests };
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
/* Brighter orange for small text on the dark background (WCAG AA 4.5:1). */
.resume-page {
  --accent-text: #f58a5e;
}

.started-actions {
  margin-top: 30px;
}
/* Keep the last section clear of the fixed footer, which is taller on small screens. */
.section.contact-cta {
  padding-bottom: 220px;
}
@media (max-width: 840px) {
  .section.contact-cta {
    padding-bottom: 260px;
  }
}
.started-actions .btn {
  margin: 0 6px 10px;
}
.started-actions.left {
  text-align: left;
}
.started-actions.left .btn {
  margin: 0 12px 12px 0;
}
.started-actions .btn .ion {
  margin-right: 6px;
}
/* Dark label on the orange fill button keeps it readable (white fails contrast). */
.btn.fill {
  color: #1b1b20;
  font-weight: 500;
}
.btn.fill:hover {
  color: #1b1b20;
}

.title .title_inner {
  margin: 0;
}

.section.about .desc {
  margin-left: 0;
}
.info-list ul li {
  width: 48%;
}
.info-list ul li strong {
  color: var(--accent-text);
}
@media (max-width: 580px) {
  .info-list ul li {
    width: 100%;
  }
}
.accent {
  font-weight: 400;
  color: var(--accent-text);
}
.desc a,
.service-item p a {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.resume-items .resume-item .date {
  color: var(--accent-text);
}
.resume-items .resume-item .name {
  font-size: 13px;
  line-height: 20px;
  margin: 0 0 15px 0;
}
.resume-items .points {
  margin: 0;
  padding: 0;
  list-style: none;
}
.resume-items .points li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 6px;
}
.resume-items .points li:before {
  content: ">";
  position: absolute;
  left: 0;
  color: var(--accent-text);
}

.service-items .service-item .name {
  line-height: 20px;
}
.service-items .service-item .tags {
  margin: 12px 0 0 46px;
  padding: 0;
  list-style: none;
}
.service-items .service-item .tags li {
  display: inline-block;
  margin: 0 6px 6px 0;
  padding: 0 6px;
  font-size: 11px;
  line-height: 20px;
  border: 1px solid #3a3a42;
}
.service-items .service-item p {
  margin-left: 46px;
}

@media (max-width: 400px) {
  .service-items .service-item .tags,
  .service-items .service-item p {
    margin-left: 0;
  }
}
</style>

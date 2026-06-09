const state = {
  currentProject: null,
  activeFlow: 0,
  videoSrcs: {},
  lightboxSrc: null,
};
const app = document.getElementById("app");
const Utils = {
  scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  },
  initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    document
      .querySelectorAll(".reveal:not(.vis)")
      .forEach((el) => observer.observe(el));
  },
  updateActiveNav() {
    const sections = ["about", "skills", "projects", "experience", "contact"];
    const links = document.querySelectorAll(".nav-links a");
    const current =
      sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      }) || "about";
    links.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + current,
      );
    });
  },
};
const Home = {
  render() {
    const projectsHtml = ` ${Components.catBlock("Capstone", Projects.capstone, 0.05)} ${Components.catBlock("Internship", Projects.intern, 0.1)} ${Components.catBlock("Personal", Projects.personal, 0.15)} `;
    app.innerHTML = ` ${Components.nav(false)} <section class="hero" id="about"> <div class="hero-glow"></div> <div class="hero-content"> <div class="hero-tag">Portfolio</div> <h1 class="hero-h1">Christine Jade<br/><span class="grad">L. Duran</span></h1> <p class="hero-tagline">Aspiring Developer ✦</p> <p class="hero-desc">A creative developer and designer who loves building things that look good and work even better. From mobile apps to landing pages — I do it all.</p> <div class="hero-btns"> <a href="#projects" class="btn-primary" onclick="Utils.scrollTo('projects')">View Projects</a> <a href="#contact" class="btn-outline" onclick="Utils.scrollTo('contact')">Get in Touch</a> </div> </div> </section> <hr class="section-divider"/> <div class="section" id="skills"> <div class="reveal"> <div class="section-label">What I Work With</div> <h2 class="section-title">Skills & Technologies</h2> </div> <div class="skills-grid"> <div class="skill-card reveal" style="transition-delay:.1s"> <h3>Frontend</h3> <div class="tags"> <span class="tag">HTML</span> <span class="tag">CSS</span> <span class="tag">JavaScript</span> <span class="tag">React Native</span> <span class="tag">TypeScript</span> </div> </div> <div class="skill-card reveal" style="transition-delay:.2s"> <h3>Backend & Data</h3> <div class="tags"> <span class="tag">Supabase</span> <span class="tag">PHP</span> <span class="tag">MySQL</span> <span class="tag">Power BI</span> </div> </div> <div class="skill-card reveal" style="transition-delay:.3s"> <h3>Design & Tools</h3> <div class="tags"> <span class="tag">Figma</span> <span class="tag">Vercel</span> </div> </div> </div> </div> <hr class="section-divider"/> <div class="section" id="projects"> <div class="reveal"> <div class="section-label">Things I Built</div> <h2 class="section-title">Projects</h2> </div> ${projectsHtml} </div> <hr class="section-divider"/> <div class="section" id="experience"> <div class="reveal"> <div class="section-label">My Journey</div> <h2 class="section-title">Experience</h2> </div> <div class="timeline"> <div class="timeline-item reveal" style="transition-delay:.1s"> <div class="timeline-dot">2026</div> <div class="timeline-card"> <h3>Assistant Data Analyst Intern</h3> <p class="timeline-role">Department of Trade and Industry — Region VII</p> <p class="timeline-period">January 2026 — May 2026</p> <p class="timeline-desc">Supported the data analytics team by collecting, processing, and visualizing data for business intelligence and decision-making. Produced Power BI reports and dashboards for internal use, and assisted in building internal web tools.</p> </div> </div> <div class="timeline-item reveal" style="transition-delay:.2s"> <div class="timeline-dot">2025</div> <div class="timeline-card"> <h3>Capstone Developer</h3> <p class="timeline-role">Chickify — Mobile App, Web App & Landing Page</p> <p class="timeline-period">2025</p> <p class="timeline-desc">Led the design and development of Chickify — a multi-platform project spanning a React Native mobile app with two user types, a web dashboard, and a marketing landing page. Managed everything from UI/UX in Figma to backend integration with Supabase.</p> </div> </div> </div> </div> <hr class="section-divider"/> <div class="section" id="contact"> <div class="reveal"> <div class="section-label">Let's Connect</div> <h2 class="section-title">Contact</h2> </div> <div class="contact-grid"> <div class="contact-card reveal" style="transition-delay:.1s"> <div class="contact-icon"> <svg viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.364l-6.545-4.636v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.273l6.545-4.636 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg> </div> <div class="contact-label">Email</div> <div class="contact-value"><a href="mailto:jadeduranchristine@gmail.com">jadeduranchristine@gmail.com</a></div> </div> <div class="contact-card reveal" style="transition-delay:.2s"> <div class="contact-icon"> <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> </div> <div class="contact-label">Phone</div> <div class="contact-value"><a href="tel:+639482797023">09482797023</a></div> </div> </div> <div class="social-sub reveal">Find me online</div> <div class="social-row reveal" style="transition-delay:.1s"> <a href="https://www.linkedin.com/in/christine-jade-duran-b7b073303" target="_blank" rel="noopener noreferrer" class="social-card"> <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> <div class="social-card-info"> <span class="social-card-name">LinkedIn</span> <span class="social-card-handle">christine-jade-duran</span> </div> </a> <a href="https://github.com/sashimijadi" target="_blank" rel="noopener noreferrer" class="social-card"> <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> <div class="social-card-info"> <span class="social-card-name">GitHub</span> <span class="social-card-handle">sashimijadi</span> </div> </a> </div> </div> ${Components.footer()} `;
    Utils.initReveal();
    window.addEventListener("scroll", Utils.updateActiveNav, { passive: true });
    Utils.updateActiveNav();
  },
};
const Detail = {
  render(projectId) {
    const p = Projects.findById(projectId);
    if (!p) return Router.goHome();
    state.currentProject = p;
    state.activeFlow = 0;
    const heroClass =
      p.type === "web-only" ? "detail-hero single" : "detail-hero";
    let mockup = "";
    if (p.type === "apk" || p.type === "apk-multi" || p.type === "apk-web") {
      mockup = Components.mockupPhones(p.icon);
    } else {
      mockup = Components.mockupWeb(p.icon);
    }
    let screensHtml = "";
    if (p.type === "apk-web") {
      screensHtml = p.users
        .map((user) =>
          Components.phoneScreens(
            `${user.label} (Mobile)`,
            user.screenLabels,
            p.icon,
          ),
        )
        .join("");
      if (p.webScreenLabels) {
        screensHtml += Components.webScreens(
          "Landing Page (Web)",
          p.webScreenLabels,
          "🌐",
          "",
          p.liveUrl,
        );
      }
    } else if (p.type === "apk") {
      screensHtml = Components.phoneScreens(
        "App Screens",
        p.screenLabels,
        p.icon,
      );
    } else if (p.type === "web-internal") {
      screensHtml = Components.webScreens(
        "Screenshots",
        p.screenLabels,
        p.icon,
        "Internal — not publicly accessible",
      );
    } else if (p.type === "web") {
      screensHtml = Components.webScreens(
        "Live Website",
        p.screenLabels,
        p.icon,
        "",
        p.liveUrl,
      );
    }
    app.innerHTML = ` ${Components.nav(true)} <div class="detail-page"> <div class="${heroClass}"> <div> <div class="detail-cat-label">${p.category}</div> <h1 class="detail-title">${p.title}</h1> <p class="detail-sub">${p.shortDesc}</p> <div class="detail-meta tags">${Components.tags(p.stack)}</div> </div> ${mockup} </div> <div class="detail-content"> <div class="solutions-strip${p.solutionRight === false ? " full" : ""}"> <div> <div class="solutions-label">The Problem</div> <div class="solutions-title">PROBLEM</div> <p class="solutions-body">${p.problem}</p> </div> ${p.solutionRight === false ? "" : ` <div> <div class="solutions-label">Our Approach</div> <div class="solutions-title">SOLUTIONS</div> <p class="solutions-body">${p.solution}</p> </div>`} </div> ${p.solutionRight === false ? ` <div class="solutions-strip full"> <div> <div class="solutions-label">Our Approach</div> <div class="solutions-title">SOLUTIONS</div> <p class="solutions-body">${p.solution}</p> </div> </div>` : ""} ${Components.userFlowSection(p)} ${p.hasVideo ? Components.videoSection(p.id) : ""} ${screensHtml} </div> ${Components.footer()} </div> `;
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  switchFlow(index) {
    state.activeFlow = index;
    document.querySelectorAll(".user-tab").forEach((tab, i) => {
      tab.classList.toggle("active", i === index);
    });
    document.querySelectorAll(".flow-diagram").forEach((diagram, i) => {
      diagram.style.display = i === index ? "block" : "none";
    });
  },
  handleVideoUpload(event, projectId) {
    const file = event.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    state.videoSrcs[projectId] = url;
    const container = document.getElementById(`video-container-${projectId}`);
    if (container) {
      container.innerHTML = ` <div class="video-player"> <video controls src="${url}"></video> </div> `;
    }
  },
};
const Router = {
  openProject(id) {
    history.pushState({ projectId: id }, "", `#${id}`);
    Detail.render(id);
  },
  goHome() {
    history.pushState({}, "", window.location.pathname);
    state.currentProject = null;
    Home.render();
  },
  init() {
    window.addEventListener("popstate", () => {
      const id = location.hash.replace("#", "");
      if (id && Projects.findById(id)) {
        Detail.render(id);
      } else {
        Home.render();
      }
    });
    const initialId = location.hash.replace("#", "");
    if (initialId && Projects.findById(initialId)) {
      Detail.render(initialId);
    } else {
      Home.render();
    }
  },
};
document.addEventListener("DOMContentLoaded", Router.init);

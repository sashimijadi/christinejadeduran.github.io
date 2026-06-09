const Components = {

  nav(isDetail) {
    if (isDetail) {
      return `
        <nav>
          <div class="nav-logo" onclick="Router.goHome()">cjd.dev</div>
          <button class="nav-back" onclick="Router.goHome()">
            <svg viewBox="0 0 24 24"><path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>
            Back to Portfolio
          </button>
        </nav>`;
    }
    return `
      <nav id="main-nav">
        <div class="nav-logo" onclick="Router.goHome()">cjd.dev</div>
        <ul class="nav-links">
          <li><a href="#about" onclick="Utils.scrollTo('about')">About</a></li>
          <li><a href="#skills" onclick="Utils.scrollTo('skills')">Skills</a></li>
          <li><a href="#projects" onclick="Utils.scrollTo('projects')">Projects</a></li>
          <li><a href="#experience" onclick="Utils.scrollTo('experience')">Experience</a></li>
          <li><a href="#contact" onclick="Utils.scrollTo('contact')">Contact</a></li>
        </ul>
      </nav>`;
  },

  footer() {
    return `
      <footer>
        <p>Built with <span>♥</span> by Christine Jade L. Duran &nbsp;·&nbsp; <span>cjd.dev</span></p>
      </footer>`;
  },

  tags(stack) {
    return stack.map(t => `<span class="tag">${t}</span>`).join('');
  },

  projCard(p) {
    return `
      <div class="proj-card" onclick="Router.openProject('${p.id}')">
        <div class="proj-thumb">
          <img src="${p.thumbnail}" alt="${p.title}">
          <div class="proj-thumb-overlay"><span>View Case Study ↗</span></div>
        </div>
        <div class="proj-body">
          <div class="proj-top">
            <span class="proj-title">${p.title}</span>
            <span class="proj-badge">${p.badge}</span>
          </div>
          <p class="proj-desc">${p.shortDesc}</p>
          <div class="proj-tags tags">${Components.tags(p.stack)}</div>
        </div>
      </div>`;
  },

  catBlock(label, projects, delay) {
    const cards = projects.map(p => Components.projCard(p)).join('');
    return `
      <div class="cat-block reveal" style="transition-delay:${delay}s">
        <div class="cat-header">
          <span class="cat-badge">${label}</span>
          <div class="cat-line"></div>
        </div>
        <div class="projects-list">${cards}</div>
      </div>`;
  },

  flowDiagram(flow) {
    const steps = flow.steps.map((step, i) => {
      const isStart = i === 0;
      const isEnd = i === flow.steps.length - 1;
      const boxClass = isStart || isEnd ? 'flow-step-box start' : 'flow-step-box';
      const arrow = i < flow.steps.length - 1 ? '<div class="flow-arrow">→</div>' : '';
      return `
        <div class="flow-step">
          <div class="${boxClass}">${step.label}</div>
          <div class="flow-step-label">${step.note}</div>
        </div>
        ${arrow}`;
    }).join('');
    return `<div class="flow-steps">${steps}</div>`;
  },

  userFlowSection(project) {
    const count = project.userFlows.length;
    const tabs = count > 1
      ? `<div class="user-tabs" id="flow-tabs">
          ${project.userFlows.map((f, i) =>
            `<button class="user-tab${i === 0 ? ' active' : ''}" onclick="Detail.switchFlow(${i})">${f.label}</button>`
          ).join('')}
        </div>`
      : '';

    const diagrams = project.userFlows.map((flow, i) =>
      `<div class="flow-diagram" id="flow-${i}" ${i > 0 ? 'style="display:none"' : ''}>
        ${Components.flowDiagram(flow)}
      </div>`
    ).join('');

    return `
      <div class="userflow-section">
        <div class="userflow-header">
          <span class="userflow-title">User Flow</span>
          <span class="flow-count">${count} flow${count > 1 ? 's' : ''}</span>
        </div>
        ${tabs}
        ${diagrams}
      </div>`;
  },

  phoneScreens(label, screenLabels, icon, note) {
    const screens = screenLabels.map(s => `
      <div class="screen-phone">
        <div class="screen-phone-placeholder"><span>${icon}</span>${s}</div>
        <div class="screen-phone-label">${s}</div>
      </div>`).join('');

    const noteHtml = note ? `<span class="internal-note">${note}</span>` : '';
    return `
      <div class="screen-section">
        <div class="screen-section-header">
          <span class="screen-section-title">${label}</span>
          ${noteHtml}
        </div>
        <div class="screen-row">${screens}</div>
      </div>`;
  },

  webScreens(label, screenLabels, icon, note, liveUrl) {
    const screens = screenLabels.map(s => `
      <div class="screen-web">
        <div class="screen-web-bar">
          <div class="screen-web-dot" style="background:#ff5f56"></div>
          <div class="screen-web-dot" style="background:#ffbd2e"></div>
          <div class="screen-web-dot" style="background:#27c93f"></div>
        </div>
        <div class="screen-web-placeholder"><span>${icon}</span>${s}</div>
        <div class="screen-web-label">${s}</div>
      </div>`).join('');

    const linkHtml = liveUrl
      ? `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="visit-btn">Visit ↗</a>`
      : '';
    const noteHtml = note ? `<span class="internal-note">${note}</span>` : '';

    return `
      <div class="screen-section">
        <div class="screen-section-header">
          <span class="screen-section-title">${label}</span>
          ${linkHtml}${noteHtml}
        </div>
        <div class="screen-row">${screens}</div>
      </div>`;
  },

  videoSection(projectId) {
    return `
      <div class="video-section">
        <div class="video-label">App Demo — 1 min walkthrough</div>
        <div id="video-container-${projectId}">
          <label class="video-upload-zone" for="video-input-${projectId}">
            <span class="upload-icon">🎬</span>
            <div>Drop your 1-min demo video here</div>
            <div class="upload-sub">MP4 / MOV / WEBM</div>
            <input type="file" id="video-input-${projectId}" accept="video/*"
              onchange="Detail.handleVideoUpload(event, '${projectId}')"/>
          </label>
        </div>
      </div>`;
  },

  mockupPhones(icon) {
    return `
      <div class="detail-mockup">
        <div class="mockup-phone">
          <div class="mockup-phone-placeholder"><span>${icon}</span>Screenshot</div>
        </div>
        <div class="mockup-phone primary">
          <div class="mockup-phone-placeholder"><span>${icon}</span>Screenshot</div>
        </div>
        <div class="mockup-phone">
          <div class="mockup-phone-placeholder"><span>${icon}</span>Screenshot</div>
        </div>
      </div>`;
  },

  mockupWeb(icon) {
    return `
      <div class="mockup-web">
        <div class="mockup-web-bar">
          <div class="mockup-web-dot" style="background:#ff5f56"></div>
          <div class="mockup-web-dot" style="background:#ffbd2e"></div>
          <div class="mockup-web-dot" style="background:#27c93f"></div>
          <div class="mockup-web-url"></div>
        </div>
        <div class="mockup-web-placeholder"><span>${icon}</span>Screenshot</div>
      </div>`;
  }
};
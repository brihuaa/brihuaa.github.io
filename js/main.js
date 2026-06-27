let lang = localStorage.getItem('language') || 'es';
let theme = localStorage.getItem('theme') || 'dark';

function applyLang() {
  document.getElementById('langBtn').textContent = lang.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[lang][k] !== undefined) el.textContent = t[lang][k];
  });
  renderProjects();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', theme);
  document.getElementById('themeBtn').textContent = theme === 'dark' ? '🌙' : '☀️';
}

document.getElementById('langBtn').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  localStorage.setItem('language', lang);
  applyLang();
});

document.getElementById('themeBtn').addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  applyTheme();
});

// CV MODAL
function openCV() {
  document.getElementById('cvModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCV() {
  document.getElementById('cvModal').classList.remove('open');
  document.body.style.overflow = '';
}

function handleBackdropClick(e) {
  if (e.target === document.getElementById('cvModal')) closeCV();
}

document.addEventListener('keydown', e => { 
  if (e.key === 'Escape') closeCV(); 
});

// PROJECTS DATA
const projects = [
  { icon: '💻', domain: 'NATIVO · C++', titleKey: 'p1_title', descKey: 'p1_desc', tags: ['C++', 'Valgrind', 'Threads'], github: 'https://github.com/brihuaa/core-scheduler' },
  { icon: '🎛️', domain: 'HARDWARE · VHDL', titleKey: 'p2_title', descKey: 'p2_desc', tags: ['VHDL', 'Xilinx', 'FPGA'], github: 'https://github.com/brihuaa/vhdl-alu' },
  { icon: '📊', domain: 'DATOS · SPSS', titleKey: 'p3_title', descKey: 'p3_desc', tags: ['SPSS', 'Syntax', 'Data-Mining'], github: 'https://github.com/brihuaa/labor-statistics' },
  { icon: '🔄', domain: 'REDES · INFRA', titleKey: 'p4_title', descKey: 'p4_desc', tags: ['Nginx', 'Proxies', 'Bash'], github: 'https://github.com/brihuaa/proxy-layer' },
  { icon: '🐧', domain: 'LINUX · SHELL', titleKey: 'p5_title', descKey: 'p5_desc', tags: ['Bash', 'Automation', 'Cron'], github: 'https://github.com/brihuaa/unix-suite' },
  { icon: '🗄️', domain: 'BACKEND · CORE', titleKey: 'p6_title', descKey: 'p6_desc', tags: ['TS', 'TCP Sockets', 'Buffers'], github: 'https://github.com/brihuaa/db-engine' },
];

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = projects.map((p) => `
    <div class="project-card">
      <div class="project-header">
        <div class="project-icon">${p.icon}</div>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" class="project-link">[SRC]</a>` : ''}
        </div>
      </div>
      <div style="margin-bottom:0.4rem"><span class="project-domain">${p.domain}</span></div>
      <div class="project-title">${t[lang][p.titleKey]}</div>
      <div class="project-desc">${t[lang][p.descKey]}</div>
      <div class="project-tags">${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    </div>
  `).join('');
}

// SCROLL
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (scrollBtn) scrollBtn.classList.toggle('visible', window.scrollY > 400);
});
if (scrollBtn) {
  scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// FORM
const sendBtn = document.getElementById('sendBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', async () => {
    const name = document.getElementById('f-name').value;
    const email = document.getElementById('f-email').value;
    const msg = document.getElementById('f-msg').value;
    const msgEl = document.getElementById('form-message');
    if (!name || !email || !msg) return;
    
    msgEl.textContent = t[lang].form_err;
    msgEl.className = 'form-message error';
    msgEl.style.display = 'block';
    setTimeout(() => { msgEl.style.display = 'none'; }, 5000);
  });
}

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  applyTheme();
  applyLang();
});
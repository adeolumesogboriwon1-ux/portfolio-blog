/* ============================================================
   SHARED SITE BEHAVIOR — used on every page (Home + Field Log).
   Edit CVs list below to add/remove downloadable CV versions.
   ============================================================ */
const cvs = [
  { label: "Data Science & ML CV", file: "Resume/Data_Science_&_ML/Adeolu.ML_CV.pdf" },
  { label: "Tutoring CV", file: "Resume/tutoring/Adeolu_Tutoring-CV.pdf" },
  { label: "Data Analyst CV", file: "Resume/Data_Analyst/Adeolu_Data-CV.pdf" },
  { label: "AI & Annotation CV", file: "Resume/AI_&_Annotation/Adeolu_AI_Annotation-CV.pdf" },
  { label: "Design & Editor CV", file: "Resume/Graphic_Design_&_Video_Editor/ADEOLU_VideoEditor-CV.pdf" },
  { label: "Business Analyst CV", file: "Resume/Business_Analyst/Adeolu_BusinessAnalyst-CV.pdf" },
  { label: "Academic CV", file: "Resume/Academic_CV/ADEOLU_CanAcademic-CV.pdf" },
  { label: "Chemical & Process Engr CV", file: "Resume/Chemical_&_Process_Engr/Adeolu_ProcessEngineer-CV.pdf" },
  { label: "Automation CV", file: "Resume/Automation/Adeolu_Automation-CV.pdf" },
  { label: "2nd Automation CV", file: "Resume/Automation/Adeolu_Automation2-CV.pdf" }
];

/* ============================================================
   EDIT YOUR RECENT LINKEDIN / X POSTS HERE.
   platform: "linkedin" or "twitter". url: the real post link.
   ============================================================ */
const socialPosts = [
  { platform: "linkedin", excerpt: "Placeholder — swap this for a real LinkedIn post excerpt.", date: "2026-06-01", url: "https://linkedin.com/in/adeolu-mesogboriwon" },
  { platform: "twitter", excerpt: "Placeholder — swap this for a real X/Twitter post excerpt.", date: "2026-06-05", url: "https://linkedin.com/in/adeolu-mesogboriwon" },
  { platform: "linkedin", excerpt: "Placeholder — swap this for a real LinkedIn post excerpt.", date: "2026-06-10", url: "https://linkedin.com/in/adeolu-mesogboriwon" }
];

const ICONS = {
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  github: `<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
};

document.addEventListener('DOMContentLoaded', () => {

  /* mobile nav */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if(navToggle && navLinks){
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  /* theme toggle */
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  function applyTheme(theme){
    body.setAttribute('data-theme', theme);
    if(themeToggle) themeToggle.textContent = theme === 'light' ? '\u25D1' : '\u25D0';
  }
  let savedTheme = 'dark';
  try{ savedTheme = localStorage.getItem('portfolio-theme') || 'dark'; }catch(e){}
  applyTheme(savedTheme);
  if(themeToggle){
    themeToggle.addEventListener('click', () => {
      const next = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try{ localStorage.setItem('portfolio-theme', next); }catch(e){}
    });
  }

  /* active nav link highlighting by current page */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    if(link.dataset.page === currentPage){
      link.classList.add('active');
    }
  });

  /* year in footer */
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  /* social icons on contact buttons */
  const linkedinIconSlot = document.getElementById('linkedinIcon');
  if(linkedinIconSlot) linkedinIconSlot.innerHTML = ICONS.linkedin;
  const githubIconSlot = document.getElementById('githubIcon');
  if(githubIconSlot) githubIconSlot.innerHTML = ICONS.github;

  /* CV dropdown -> opens viewer modal instead of downloading directly */
  const cvMenu = document.getElementById('cvMenu');
  const cvDropdownBtn = document.getElementById('cvDropdownBtn');
  const cvDropdown = document.getElementById('cvDropdown');
  const cvViewerOverlay = document.getElementById('cvViewerOverlay');
  const cvViewerFrame = document.getElementById('cvViewerFrame');
  const cvViewerTitle = document.getElementById('cvViewerTitle');
  const cvViewerDownload = document.getElementById('cvViewerDownload');
  const cvViewerShare = document.getElementById('cvViewerShare');
  const cvViewerClose = document.getElementById('cvViewerClose');
  const shareToast = document.getElementById('shareToast');

  function showToast(msg){
    if(!shareToast) return;
    shareToast.textContent = msg;
    shareToast.classList.add('show');
    setTimeout(() => shareToast.classList.remove('show'), 2200);
  }

  function openCvViewer(file, label){
    if(!cvViewerOverlay) return;
    cvViewerTitle.textContent = label;
    cvViewerFrame.src = file;
    cvViewerDownload.href = file;
    cvViewerDownload.setAttribute('download', '');
    cvViewerShare.onclick = () => {
      const fullUrl = new URL(file, window.location.href).href;
      if(navigator.share){
        navigator.share({ title: label, url: fullUrl }).catch(() => {});
      } else if(navigator.clipboard){
        navigator.clipboard.writeText(fullUrl).then(() => showToast('Link copied to clipboard'));
      } else {
        showToast(fullUrl);
      }
    };
    cvViewerOverlay.classList.add('open');
  }
  function closeCvViewer(){
    if(!cvViewerOverlay) return;
    cvViewerOverlay.classList.remove('open');
    cvViewerFrame.src = '';
  }
  if(cvViewerClose) cvViewerClose.addEventListener('click', closeCvViewer);
  if(cvViewerOverlay) cvViewerOverlay.addEventListener('click', (e) => { if(e.target === cvViewerOverlay) closeCvViewer(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeCvViewer(); });

  if(cvMenu && cvDropdownBtn && cvDropdown){
    if(cvs.length === 0){
      cvMenu.innerHTML = `<div class="cv-empty">No CVs added yet.</div>`;
    } else {
      cvMenu.innerHTML = cvs.map((cv, i) =>
        `<button type="button" data-cv-index="${i}">${cv.label}</button>`
      ).join('');
      cvMenu.querySelectorAll('button[data-cv-index]').forEach(btn => {
        btn.addEventListener('click', () => {
          const cv = cvs[parseInt(btn.dataset.cvIndex, 10)];
          openCvViewer(cv.file, cv.label);
          cvMenu.classList.remove('open');
          cvDropdownBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
    cvDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = cvMenu.classList.toggle('open');
      cvDropdownBtn.setAttribute('aria-expanded', isOpen);
    });
    document.addEventListener('click', (e) => {
      if(!cvDropdown.contains(e.target)){
        cvMenu.classList.remove('open');
        cvDropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape'){
        cvMenu.classList.remove('open');
        cvDropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* social activity marquee */
  const socialTrack = document.getElementById('socialTrack');
  if(socialTrack && socialPosts.length){
    const cardHtml = (p) => `
      <a class="social-card" href="${p.url}" target="_blank" rel="noopener">
        <div class="social-platform">${ICONS[p.platform] || ''} ${p.platform === 'linkedin' ? 'LinkedIn' : 'X / Twitter'}</div>
        <p>${p.excerpt}</p>
        <span class="social-date mono">${new Date(p.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
      </a>`;
    const doubled = [...socialPosts, ...socialPosts].map(cardHtml).join('');
    socialTrack.innerHTML = doubled;
  }

  /* scroll reveal for any element with class="reveal" */
  const revealEls = document.querySelectorAll('.reveal');
  if(revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  }

  /* animated stat counters — element needs data-count="65" and data-suffix="%" */
  const statEls = document.querySelectorAll('[data-count]');
  if(statEls.length){
    const animateCount = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();
      function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        el.textContent = value + suffix;
        if(progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };
    const statIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          animateCount(entry.target);
          statIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statEls.forEach(el => statIo.observe(el));
  }

});

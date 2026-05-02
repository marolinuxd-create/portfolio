/* ============================================================
   Shared site behavior: tweaks panel host wiring, theme,
   reveal-on-scroll, cursor dot, i18n.
   ============================================================ */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "intensity": 1,
  "typePair": "manrope",
  "heroLayout": "asymmetric",
  "lang": "en"
}/*EDITMODE-END*/;

// --- i18n strings ----------------------------------------------------
window.I18N = {
  en: {
    'nav.work': 'Case Studies', 'nav.about': 'About', 'nav.contact': 'Contact', 'nav.resume': 'Resume',
    'home.eyebrow': 'UX / Interaction Designer · Toronto',
    'home.title.a': 'Hi,', 'home.title.b': "I'm Marolin.",
    'home.lead': "A UX / Interaction Designer with 5+ years designing end-to-end digital and service experiences in complex environments — including banking and large-scale platforms. I translate user insights into intuitive, scalable solutions across mobile and web.",
    'home.cta.work': 'See case studies', 'home.cta.contact': 'Get in touch',
    'home.status': 'Open to senior roles',
    'home.metricsEyebrow': 'By the numbers',
    'home.workEyebrow': 'Case Studies',
    'home.workTitle': 'Selected work.',
    'home.aboutEyebrow': 'About Me',
    'home.aboutTitle': 'Designing for users, business, and the system — at the same time.',
    'home.aboutBody': "Industrial designer turned UX / Interaction Designer. Currently a Master of Design candidate in Strategic Foresight & Innovation at OCAD University, Toronto.",
    'home.aboutCta': 'Read more',
    'home.contactEyebrow': "Let's connect",
    'home.contactTitle': "Like what you see?",
    'home.contactBody': 'Open to senior UX / Interaction Designer roles. Based in Toronto, available remote across North America.',
    'home.contactCta': 'Get in touch',
    'cs.cta': 'Read case study',
    'about.title': 'About me.',
    'about.bio': "I'm Marolin Solano, a UX / Interaction Designer with 5+ years of experience designing end-to-end digital and service experiences in complex environments — including banking and large-scale platforms. I specialize in translating user insights into intuitive, scalable solutions across mobile and web.",
    'contact.title': "Let's connect.",
    'contact.lead': "Open to senior UX / Interaction Designer roles. Tell me about your team or the problem you're working on. I'll reply within a day."
  },
  es: {
    'nav.work': 'Casos de Estudio', 'nav.about': 'Sobre mí', 'nav.contact': 'Contacto', 'nav.resume': 'CV',
    'home.eyebrow': 'Diseñadora UX / Interacción · Toronto',
    'home.title.a': 'Hola,', 'home.title.b': 'soy Marolin.',
    'home.lead': 'Diseñadora UX / Interacción con +5 años creando experiencias digitales y de servicio en entornos complejos — incluyendo banca y plataformas a gran escala. Traduzco insights de usuario en soluciones intuitivas y escalables para móvil y web.',
    'home.cta.work': 'Ver casos de estudio', 'home.cta.contact': 'Contáctame',
    'home.status': 'Abierta a roles senior',
    'home.metricsEyebrow': 'En números',
    'home.workEyebrow': 'Casos de Estudio',
    'home.workTitle': 'Trabajo seleccionado.',
    'home.aboutEyebrow': 'Sobre mí',
    'home.aboutTitle': 'Diseñando para usuario, negocio y sistema — al mismo tiempo.',
    'home.aboutBody': 'Diseñadora industrial reconvertida en UX / Interacción. Actualmente cursando un Máster en Diseño Estratégico e Innovación en OCAD University, Toronto.',
    'home.aboutCta': 'Leer más',
    'home.contactEyebrow': 'Conectemos',
    'home.contactTitle': '¿Te gusta lo que ves?',
    'home.contactBody': 'Abierta a roles senior UX / Interacción. Basada en Toronto, disponible remoto en Norteamérica.',
    'home.contactCta': 'Contactar',
    'cs.cta': 'Leer caso de estudio',
    'about.title': 'Sobre mí.',
    'about.bio': 'Soy Marolin Solano, Diseñadora UX / Interacción con +5 años de experiencia creando experiencias digitales y de servicio de extremo a extremo en entornos complejos — incluyendo banca y plataformas a gran escala.',
    'contact.title': 'Conectemos.',
    'contact.lead': 'Abierta a roles senior UX / Interacción. Cuéntame sobre tu equipo o el problema en el que trabajas — te respondo en menos de 24 horas.'
  }
};

window.applyI18n = function(lang) {
  const dict = window.I18N[lang] || window.I18N.en;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
};

// --- theme / typography / intensity application ----------------------
const TYPE_PAIRS = {
  manrope:    { display: "'Manrope', sans-serif", body: "'Manrope', sans-serif" },
  spaceFraunces: { display: "'Fraunces', serif", body: "'Space Grotesk', sans-serif" },
  intertight: { display: "'Inter Tight', sans-serif", body: "'Inter Tight', sans-serif" }
};

window.applyTweaks = function(t) {
  const root = document.documentElement;
  root.setAttribute('data-theme', t.theme || 'light');
  root.setAttribute('data-intensity', String(t.intensity ?? 1));
  root.setAttribute('data-hero', t.heroLayout || 'asymmetric');
  root.setAttribute('data-connect-padding', t.connectPadding || 'large');
  
  // Update text elements (home)
  if (t.heroSubLead) {
    const heroEl = document.querySelector('.hh-sub-lead');
    if (heroEl) heroEl.textContent = t.heroSubLead;
  }
  if (t.aboutTitle) {
    const aboutTitleEl = document.querySelector('.peek-grid h2');
    if (aboutTitleEl) aboutTitleEl.innerHTML = t.aboutTitle.replace(/\*\*(.*?)\*\*/g, '<em>$1</em>');
  }
  if (t.aboutP1) {
    const paragraphs = document.querySelectorAll('.peek-grid > div:nth-child(2) > p');
    if (paragraphs.length > 0) paragraphs[0].textContent = t.aboutP1;
  }
  if (t.aboutP2) {
    const paragraphs = document.querySelectorAll('.peek-grid > div:nth-child(2) > p');
    if (paragraphs.length > 1) paragraphs[1].textContent = t.aboutP2;
  }
  if (t.noteMessage) {
    const noteEl = document.querySelector('.note-text');
    if (noteEl) noteEl.textContent = t.noteMessage;
  }
  
  // Update About page texts
  if (t.aboutHeroTitle) {
    const aboutHeroTitle = document.querySelector('.about-hero h1');
    if (aboutHeroTitle) aboutHeroTitle.textContent = t.aboutHeroTitle;
  }
  if (t.aboutHeroLead) {
    const aboutHeroLead = document.querySelector('.about-hero .lead');
    if (aboutHeroLead) aboutHeroLead.textContent = t.aboutHeroLead;
  }
  
  // Update Contact page texts
  if (t.contactTitle) {
    const contactTitle = document.querySelector('.ct-hero h1');
    if (contactTitle) contactTitle.textContent = t.contactTitle;
  }
  if (t.contactLead) {
    const contactLead = document.querySelector('.ct-hero .lead');
    if (contactLead) contactLead.textContent = t.contactLead;
  }
  if (t.contactEmailMsg) {
    const emailMsg = document.querySelector('.ct-direct p:first-of-type');
    if (emailMsg) emailMsg.textContent = t.contactEmailMsg;
  }
  const pair = TYPE_PAIRS[t.typePair] || TYPE_PAIRS.manrope;
  root.style.setProperty('--f-display', pair.display);
  root.style.setProperty('--f-body', pair.body);
  if (window.applyI18n) window.applyI18n(t.lang || 'en');
};

// Persist preferred tweaks across pages via localStorage.
window.loadTweaks = function() {
  try {
    const saved = JSON.parse(localStorage.getItem('msolano:tweaks') || 'null');
    return { ...TWEAK_DEFAULTS, ...(saved || {}) };
  } catch { return { ...TWEAK_DEFAULTS }; }
};
window.saveTweaks = function(t) {
  try { localStorage.setItem('msolano:tweaks', JSON.stringify(t)); } catch {}
};

// Apply on load (before React mounts)
window.applyTweaks(window.loadTweaks());

// --- reveal on scroll -----------------------------------------------
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(e => e.classList.add('in')); return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  els.forEach(el => io.observe(el));
}

// --- cursor dot ------------------------------------------------------
function initCursor() {
  if (window.matchMedia('(hover: none)').matches) return;
  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  document.body.appendChild(dot);
  let x = 0, y = 0;
  document.addEventListener('mousemove', (e) => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
  });
  document.querySelectorAll('a, button, .case-card, .placeholder').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// Init common bits
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initCursor();
});

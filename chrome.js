/* Shared site chrome (nav + footer) — vanilla JS, includes by data-include */

window.renderChrome = function(activePage) {
  // NAV
  const nav = document.querySelector('[data-chrome="nav"]');
  if (nav) {
    nav.innerHTML = `
      <nav class="nav" aria-label="Primary">
        <div class="container nav-inner">
          <a class="brand" href="index.html" aria-label="Marolin Solano — home">
            <span class="brand-mark">M</span>
            <span>Marolin Solano</span>
          </a>
          <div class="nav-links">
            <a href="index.html#work" class="${activePage==='work'?'active':''}" data-i18n="nav.work">Work</a>
            <a href="about.html" class="${activePage==='about'?'active':''}" data-i18n="nav.about">About</a>
            <a href="contact.html" class="${activePage==='contact'?'active':''}" data-i18n="nav.contact">Contact</a>
          </div>
        </div>
      </nav>
    `;
  }

  // FOOTER
  const ft = document.querySelector('[data-chrome="footer"]');
  if (ft) {
    ft.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-grid">
            <div>
              <h2 style="font-size: clamp(28px, 3.5vw, 48px); margin-bottom: 16px; max-width: 12ch;">
                Let's build something <em style="color: var(--accent); font-style: normal;">useful.</em>
              </h2>
              <a href="mailto:marolinuxd@gmail.com" class="btn btn-ghost">
                marolinuxd@gmail.com
                <span class="arrow">↗</span>
              </a>
            </div>
            <div>
              <h5>Sitemap</h5>
              <a href="index.html">Home</a>
              <a href="index.html#work">Work</a>
              <a href="about.html">About</a>
              <a href="contact.html">Contact</a>
            </div>
            <div>
              <h5>Elsewhere</h5>
              <a href="https://www.linkedin.com/in/marolinsolano" target="_blank" rel="noopener">LinkedIn ↗</a>
              <a href="mailto:marolinuxd@gmail.com">marolinuxd@gmail.com</a>
            </div>
            <div>
              <h5>Currently</h5>
              <p style="font-size: 13px; color: var(--fg-2); line-height: 1.5;">
                Master of Design — Strategic Foresight & Innovation, OCAD University, Toronto.
              </p>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2026 Marolin Solano</span>
            <span>Toronto</span>
          </div>
        </div>
      </footer>
    `;
  }

  if (window.applyI18n) window.applyI18n((window.loadTweaks && window.loadTweaks().lang) || 'en');
};

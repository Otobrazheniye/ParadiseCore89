

export function renderFooter(){
    return `
<section class="footer-gateway">
  <div class="footer-gateway__inner">
    <button class="footer-gateway__sphere" type="button" data-footer="directory">
      <img src="../content/icons/directory-sphere.png" alt="Directory" />
      <span>Directory</span>
    </button>

    <button class="footer-gateway__sphere" type="button" data-footer="vault">
      <img src="../content/icons/vault-sphere.png" alt="Vault" />
      <span>Vault</span>
    </button>

    <button class="footer-gateway__sphere" type="button" data-footer="nexus">
      <img src="../content/icons/nexus-sphere.png" alt="Nexus" />
      <span>Nexus</span>
    </button>
  </div>
</section>

<div id="footer-switch"></div>
    `
}


export function renderFooterDirectory(){
    return `
      <footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__brand">
      <span class="site-footer__eyebrow">Corporate System</span>
      <h2>Paradise Core 89</h2>
      <p>
        Integrated industrial, research and strategic infrastructure platform.
      </p>
    </div>

    <nav class="site-footer__nav">
      <div class="site-footer__col">
        <h3>Navigation</h3>
        <a href="#">Research</a>
        <a href="#">Divisions</a>
        <a href="#">Archives</a>
        <a href="#">Access</a>
      </div>

      <div class="site-footer__col">
        <h3>Divisions</h3>
        <a href="#">Logistics</a>
        <a href="#">Medical Research</a>
        <a href="#">Security</a>
        <a href="#">SCORB Project</a>
      </div>

      <div class="site-footer__col">
        <h3>Network</h3>
        <a href="#">GitHub</a>
        <a href="#">Instagram</a>
        <a href="#">Telegram</a>
        <a href="#">LinkedIn</a>
      </div>
    </nav>
  </div>

  <div class="site-footer__controls">
    <button class="footer-back-btn" type="button">
      ← Back
    </button>
   </div>

  <div class="site-footer__bottom">
    <span>© 2026 Paradise Core 89</span>
    <span>System status: Stable</span>
  </div>
</footer>
    `
}

export function renderFooterNexus(){
    return `
    <footer class="nexus-footer">
  <div class="nexus-footer__inner">
    <section class="nexus-footer__hero">
      <span class="nexus-footer__eyebrow">External Gateway</span>
      <h2>NEXUS</h2>
      <p>
        Communication layer for external channels, encrypted contact routes
        and partnership transmission lines.
      </p>
    </section>

    <section class="nexus-footer__grid">
      <div class="nexus-footer__panel">
        <h3>Live Channels</h3>
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
        <a href="#">Telegram</a>
      </div>

      <div class="nexus-footer__panel">
        <h3>Transmission</h3>
        <a href="mailto:contact@paradisecore89.com">contact@paradisecore89.com</a>
        <span>Encrypted Line</span>
        <span>Partnership Requests</span>
      </div>

      <div class="nexus-footer__panel nexus-footer__panel--signal">
        <h3>Current Signal</h3>

        <div class="nexus-footer__stat">
          <span>Global Reach</span>
          <strong>Active</strong>
        </div>

        <div class="nexus-footer__stat">
          <span>External Nodes</span>
          <strong>14</strong>
        </div>

        <div class="nexus-footer__stat">
          <span>Response Time</span>
          <strong>2.4s</strong>
        </div>
      </div>
    </section>
  </div>

    <div class="site-footer__controls">
    <button class="footer-back-btn" type="button">
      ← Back
    </button>
   </div>

  <div class="nexus-footer__bottom">
    <span>© 2026 Paradise Core 89</span>
    <span>Nexus signal: Online</span>
  </div>
</footer>
    `
}

export function renderFooterVault(){
    return `
    <footer class="vault-footer">
  <div class="vault-footer__inner">
    <section class="vault-footer__hero">
      <span class="vault-footer__eyebrow">Restricted Archive</span>
      <h2>VAULT</h2>
      <p>
        Internal storage layer for classified assets, active project records
        and protected operational metrics.
      </p>
    </section>

    <section class="vault-footer__grid">
      <div class="vault-footer__panel">
        <h3>Classified Assets</h3>
        <a href="#">Reports</a>
        <a href="#">Internal Logs</a>
        <a href="#">Case Studies</a>
        <a href="#">Research Files</a>
      </div>

      <div class="vault-footer__panel">
        <h3>Active Projects</h3>
        <a href="#">SCORB</a>
        <a href="#">Medical Program</a>
        <a href="#">Logistics Grid</a>
        <a href="#">Security Expansion</a>
      </div>

      <div class="vault-footer__panel vault-footer__panel--metrics">
        <h3>Internal Metrics</h3>

        <div class="vault-footer__stat">
          <span>Active Facilities</span>
          <strong>12</strong>
        </div>

        <div class="vault-footer__stat">
          <span>Personnel</span>
          <strong>2.4k</strong>
        </div>

        <div class="vault-footer__stat">
          <span>Growth</span>
          <strong>+18%</strong>
        </div>

        <div class="vault-footer__stat">
          <span>Security Level</span>
          <strong>High</strong>
        </div>
      </div>
    </section>
  </div>

   <div class="site-footer__controls">
    <button class="footer-back-btn" type="button">
      ← Back
    </button>
   </div>

  <div class="vault-footer__bottom">
    <span>© 2026 Paradise Core 89</span>
    <span>Vault access: Restricted</span>
  </div>
</footer>
    `
}

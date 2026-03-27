import logoParadise from '../content/logo/logoParadisePng.png'

export function renderHeader() {
  return `
    <header class="pc89-header">
        <nav class="navbar">
<!-- F -->
          <div class="header-list header-list-display">
                <ul>
                    <li class="header-item">
                        <a class="header-link"  href="frames/reseach.html"><p>Research</p></a>
                    </li>
                    <li class="header-item">
                        <a  class="header-link" href="frames/division.html"><p>Divisions</p></a>
                    </li>
                  </ul>
          </div>
            <!-- лого -->
          <div class="header-list">
            <ul>
                <li class="header-item">
                    <img class="navbar-logo_img" src="${logoParadise}" alt="Logo">
                </li>
            </ul>
          </div>

          <div class="header-list header-list-display">
                <ul>
                    <li class="header-item">
                        <a class="header-link"  href="frames/archives.html"><p>Archives</p></a>
                    </li>

                    <li class="header-item">
                        <a  class="header-link" href="#"><p>Access</p></a>
                    </li>

                </ul>
          </div>
     </nav>
    </header>
  `
}   
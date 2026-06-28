export function renderAIBusinessBasepage() {
  return `
    <main class="ai-business-page" id="ai-business">

      <section class="ai-business-topbar" aria-label="AI Business account navigation">
        <div class="ai-business-topbar__inner">

          <div class="ai-business-topbar__brand">
            <span class="ai-business-topbar__logo">
              AI Business
            </span>
          </div>

          <nav class="ai-business-auth" aria-label="User account actions">

            <a class="ai-business-auth__link ai-business-auth__link--register" href="#" data-auth-action="register">
              <span class="ai-business-auth__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M15 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <path d="M20 8v6"/> <path d="M23 11h-6"/>
                </svg>
              </span>
              <span class="ai-business-auth__text">
                Registration
              </span>
            </a>

            <a class="ai-business-auth__link ai-business-auth__link--login" href="#" data-auth-action="login">
              <span class="ai-business-auth__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <path d="M10 17l5-5-5-5"/>
                  <path d="M15 12H3"/>
                </svg>
              </span>
              <span class="ai-business-auth__text">
                Login
              </span>
            </a>

            <a class="ai-business-auth__link ai-business-auth__link--profile" href="#" data-auth-action="profile">
              <span class="ai-business-auth__avatar" aria-hidden="true">
                <span class="ai-business-auth__avatar-core">
                  AI
                </span>
              </span>
              <span class="ai-business-auth__text">
                Profile
              </span>
            </a>

            <a class="ai-business-auth__link ai-business-auth__link--logout" href="#" data-auth-action="logout">
              <span class="ai-business-auth__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <path d="M16 17l5-5-5-5"/>
                  <path d="M21 12H9"/>
                </svg>
              </span>
              <span class="ai-business-auth__text">
                Logout
              </span>
            </a>


             <button class="header-burger" type="button" aria-label="Open menu" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>

        <div class="header-mobile-menu">
          <ul class="header-mobile-list">
            <li class="header-item header-item-first">
              <a class="header-link link-research pageButton" href="#">
                <span class="header-link__text" data-i18n="header.research" data-page="research">Research</span>
              </a>
            </li>
        
            <li class="header-item header-item-second">
              <a class="header-link link-divisions pageButton" href="#">
                <span class="header-link__text" data-i18n="header.division" data-page="division">Divisions</span>
              </a>
            </li>
        
            <li class="header-item header-item-third">
              <a class="header-link link-archives" href="#">
                <span class="header-link__text" data-i18n="header.archives">Archives</span>
              </a>
            </li>
        
            <li class="header-item header-item-fourth">
              <a class="header-link link-access pageButton" data-page="aibusiness" href="#">
                <span class="header-link__text" data-i18n="header.aibusiness">AI Business</span>
              </a>
            </li>
          </ul>
        </div>

          </nav>

        </div>
      </section>


      <section class="ai-business-hero" id="ai-business-about">
        <div class="ai-business-hero__overlay"></div>

        <div class="ai-business-hero__inner">

          <div class="ai-business-hero__content">

            <span class="ai-business-hero__eyebrow">
              About AI Business
            </span>

            <h1 class="ai-business-hero__title">
              Corporate AI systems for companies that need clarity, speed, and control.
            </h1>

            <div class="ai-business-hero__text">

              <p class="ai-business-hero__lead">
                AI Business is a structured direction created for companies that want to turn artificial intelligence into a practical working system, not just a fashionable digital feature.
              </p>

              <p class="ai-business-hero__description">
                We focus on real business processes: documents, accounting, marketing, CRM, communications, internal routine, analytics, training, and operational management. The goal is not to decorate a company with AI, but to build a reliable layer that reduces manual workload, improves decision-making, and helps teams work faster without losing control.
              </p>

            </div>

            <div class="ai-business-hero__actions" aria-label="AI Business hero actions">
              <a class="ai-business-hero__btn ai-business-hero__btn--primary" href="#" data-aibusiness-page="services">
                Explore Services
              </a>

              <a class="ai-business-hero__btn ai-business-hero__btn--secondary" href="#" data-aibusiness-page="training">
                View Training
              </a>
            </div>

          </div>

        </div>
      </section>

    </main>
  `
}
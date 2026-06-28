import logoParadise from '../content/logo/logoParadisePng.png'
import headerBgr from '../content/back_photo/headerBcgr.png'

export function renderHeader() {
  return `
<header class="pc89-header">
  <img class="pc89-header__bg" src="${headerBgr}" alt="">

  <nav class="navbar">
    <div class="header-list header-list-display">
      <ul>
        <li class="header-item header-item-first">
          <a class="header-link link-research pageButton" href="#" data-i18n="header.research" data-page="research">Research</a>
        </li>
        <li class="header-item header-item-second">
          <a class="header-link link-divisions pageButton" href="#" data-i18n="header.division" data-page="division">Divisions</a>
        </li>
      </ul>
    </div>
    
    <div class="header-list">
      <ul>
        <li class="header-item header-item-img">
          <img class="navbar-logo_img pageButton headerButton" data-page='home' src="${logoParadise}" alt="Logo">
        </li>
      </ul>
    </div>

    <div class="header-list header-list-display">
      <ul>
        <li class="header-item header-item-third">
          <a class="header-link link-archives" href="#" data-i18n="header.archives" >Archives</a>
        </li>
        <li class="header-item header-item-fourth">
          <a class="header-link link-access pageButton headerButton" href="#" data-i18n="header.aibusiness"  data-page="aibusiness">AI Business</a>
        </li>
      </ul>
    </div>

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
</header>
  `
}   


export function renderHeaderAIBusiness() {
  return `
<header class="pc89-header">
  <img class="pc89-header__bg" src="${headerBgr}" alt="">

  <nav class="navbar">

    <div class="header-list header-list-display">
      <ul>
        <li class="header-item header-item-first">
          <a class="header-link headeraiButton"  href="#" data-i18n="header.about"  data-page="about">
            About
          </a>
        </li>

        <li class="header-item header-item-second">
          <a class="header-link headeraiButton" href="#" data-i18n="header.services" data-page="services">
            Services
          </a>
        </li>
      </ul>
    </div>

    <div class="header-list">
      <ul>
        <li class="header-item header-item-img">
          <img class="navbar-logo_img pageButton headerButton" data-page='home' src="${logoParadise}" alt="Logo">
        </li>
      </ul>
    </div>

    <div class="header-list header-list-display">
      <ul>
        <li class="header-item header-item-third">
          <a class="header-link headeraiButton" href="#" data-i18n="header.reviews" data-page="reviews">
            Reviews
          </a>
        </li>

        <li class="header-item header-item-fourth">
          <a class="header-link headeraiButton"  href="#"  data-i18n="header.training"  data-page="training">
            Training
          </a>
        </li>
      </ul>
    </div>

  </nav>


  <section class="ai-business-topbar" aria-label="AI Business account navigation">
    <div class="ai-business-topbar__inner">

      <div class="ai-business-topbar__brand">
        <span class="ai-business-topbar__logo">
          AI Business
        </span>
      </div>

      <nav class="ai-business-auth" aria-label="User account actions">
        <a class="ai-business-auth__link ai-business-auth__link--register" href="#" data-auth-open="register">
          <span class="ai-business-auth__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M15 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="8.5" cy="7" r="4"/>
              <path d="M20 8v6"/>
              <path d="M23 11h-6"/>
            </svg>
          </span>

          <span class="ai-business-auth__text" data-i18n="auth.registration">
            Registration
          </span>
        </a>

        <a class="ai-business-auth__link ai-business-auth__link--login" href="#" data-auth-open="login">
          <span class="ai-business-auth__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <path d="M10 17l5-5-5-5"/>
              <path d="M15 12H3"/>
            </svg>
          </span>
          
          <span class="ai-business-auth__text" data-i18n="auth.login">
            Login
          </span>
        </a>

        <a   class="ai-business-auth__link ai-business-auth__link--profile headeraiButton" href="#" data-page="user-access">
        
          <span class="ai-business-auth__avatar" aria-hidden="true">
            <span class="ai-business-auth__avatar-core">
              AI
            </span>
          </span>
          <span class="ai-business-auth__text headeraiButton" data-page="user-acces">
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
        
      <dialog id="auth-dialog" aria-labelledby="authTitle">
        <div class="auth-modal">
          <div class="auth-modal__header">
            <h2 id="authTitle" data-i18n="auth.authentication">Authentication</h2>
            <button type="button" data-auth-close aria-label="Close">×</button>
          </div>

          <div class="auth-modal__tabs">
            <button type="button" class="active" data-auth-tab="login" data-i18n="auth.login"> Login
            </button>

            <button type="button" data-auth-tab="register"  data-i18n="auth.registration">
              Registration
            </button>
            </div>

            <form data-auth-form="login">
              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                <span data-i18n="auth.password">Password</span>
                <input type="password" name="password" data-i18n-placeholder="auth.passwordPlaceholder" placeholder = "Enter password" required />
              </label>

              <button type="submit">Sign in</button>
              <button type="button" data-auth-logout> Logout </button>
            </form>

            <form data-auth-form="register" hidden>
              <label>
                Email
                <input type="email" name="email" required />
              </label>

              <label>
                Password
                <input type="password" name="password" required />
              </label>

              <label> 
                <span data-i18n="auth.full_name">Full Name</span> 
                <input type="text" name="full_name" data-i18n-placeholder="auth.fullname" placeholder = "Enter your full name" required /> 
              </label> 

              <label> 
                <span data-i18n="auth.company">Company</span> 
                <input type="text" name="company" data-i18n-placeholder="auth.company" placeholder = "Enter Your Company"> 
              </label>


              <button type="submit">Create account</button>
            </form>
        </div>
      </dialog>

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
</header>
  `
}
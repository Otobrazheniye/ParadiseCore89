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
          <a class="header-link link-access pageButton" href="#">
            <span class="header-link__text" data-i18n="header.aibusiness" data-page="aibusiness">AI Business</span>
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
          <a 
            class="header-link pageButton" 
            href="#" 
            data-i18n="header.about" 
            data-page="about"
          >
            About
          </a>
        </li>

        <li class="header-item header-item-second">
          <a 
            class="header-link pageButton" 
            href="#" 
            data-i18n="header.services" 
            data-page="services"
          >
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
          <a 
            class="header-link pageButton" 
            href="#" 
            data-i18n="header.reviews" 
            data-page="reviews"
          >
            Reviews
          </a>
        </li>

        <li class="header-item header-item-fourth">
          <a 
            class="header-link pageButton" 
            href="#" 
            data-i18n="header.training" 
            data-page="training"
          >
            Training
          </a>
        </li>

        <li class="header-item header-item-fifth">
          <a 
            class="header-link pageButton" 
            href="#" 
            data-i18n="header.contact" 
            data-page="contact"
          >
            Contact
          </a>
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

        <li class="header-item">
          <a 
            class="header-link pageButton" 
            href="#" 
            data-i18n="header.about" 
            data-page="about"
          >
            About
          </a>
        </li>

        <li class="header-item">
          <a 
            class="header-link pageButton" 
            href="#" 
            data-i18n="header.services" 
            data-page="services"
          >
            Services
          </a>
        </li>

        <li class="header-item">
          <a 
            class="header-link pageButton" 
            href="#" 
            data-i18n="header.reviews" 
            data-page="reviews"
          >
            Reviews
          </a>
        </li>

        <li class="header-item">
          <a 
            class="header-link pageButton" 
            href="#" 
            data-i18n="header.training" 
            data-page="training"
          >
            Training
          </a>
        </li>

        <li class="header-item">
          <a 
            class="header-link pageButton" 
            href="#" 
            data-i18n="header.contact" 
            data-page="contact"
          >
            Contact
          </a>
        </li>

      </ul>
    </div>
  </nav>
</header>
  `
}
import './main.scss'

//Import Frame
import { renderHeader, renderHeaderAIBusiness } from './components/header.js'
import { renderFooter, renderFooterDirectory, renderFooterNexus, renderFooterVault} from './components/footer.js'
import { initFooterSwitcher } from './components/footer-dev.js'
import { renderBasePageJS } from './components/basepage.js'
// import { renderBasePageMain, renderBasePageTopics} from './components/basepage.js'
//Import Dev
import { LanguageSwitchButton } from './components/translations/dev-lang.js'
import { authModal } from './components/basepage-dev.js'
import { tabsLoginRegister } from './components/basepage-dev.js'


import { renderResearch } from './components/page-research.js'
import { renderDivision } from './components/page-division.js'

//Frame
const app = document.querySelector('#app')


app.innerHTML = `
  <header id="header-root"></header>
  

  <main id="page-root"></main>

  <div id="footer-switcher">
    ${renderFooter()}
  </div>
`
const headerRoot = document.querySelector('#header-root')
const pageRoot = document.querySelector('#page-root')
const pageaiRoot = document.querySelectorAll('#pageai-root')


function headerSwitchButton(){
  const headerButton = document.querySelectorAll('.headerButton')
  headerButton.forEach((btn)=> {
    btn.addEventListener('click',(event)=>{
      event.preventDefault()
      const activePage = btn.dataset.page

      headerSwitch(activePage)
    })
  })
}

function headerSwitch(activePage){
  switch(activePage){
    case 'home':
      headerRoot.innerHTML = renderHeader()
      break

    case 'aibusiness':
      headerRoot.innerHTML = renderHeaderAIBusiness()
      break

    default:
      headerRoot.innerHTML = `<h1>Page not found</h1>`
  }

  headerSwitchButton()
  bodySwitchButton()
  LanguageSwitchButton()
}


function bodySwitchButton(){
  const pageButton = document.querySelectorAll('.pageButton')
  pageButton.forEach((btn)=> {
    btn.addEventListener('click',(event)=>{
    event.preventDefault()
    const activePage = btn.dataset.page
    
    bodySwitch(activePage)
    })
  })
}


function bodySwitch(activePage){
  switch(activePage){
    case 'home':
      pageRoot.innerHTML = renderBasePageJS()
      break
    case 'research':
      pageRoot.innerHTML = renderResearch()
      break
    case 'division':
      pageRoot.innerHTML = renderDivision()
      break
    case 'aibusiness':
      pageRoot.innerHTML = renderResearch()
      break
    default:
      pageRoot.innerHTML = `<h1>Page not found<h1>`
  }
}

function bodySwitchAiBusinessButton(){
  const headeraiButton = document.querySelectorAll('.headeraiButton')
  headeraiButton.forEach((btn), ()=>{
    btn.addEventListener('click',(event)=>{
      event.preventDefault()
      const activePage = btn.dataset.page

      bodySwitchAiBusiness(activePage)
    })
  })
}

function bodySwitchAiBusiness(activePage) {
  switch (activePage) {
    case 'home':
      pageRoot.innerHTML = renderHome()
      break

    case 'about':
      pageRoot.innerHTML = renderAbout()
      break

    case 'services':
      pageRoot.innerHTML = renderServices()
      break

    case 'reviews':
      pageRoot.innerHTML = renderReviews()
      break

    case 'training':
      pageRoot.innerHTML = renderTraining()
      break

    case 'contact':
      pageRoot.innerHTML = renderContact()
      break

    default:
      pageRoot.innerHTML = `<h1>Page not found</h1>`
  }
}

headerSwitch('home')
bodySwitch('home')

headerSwitchButton()
bodySwitchButton()

initFooterSwitcher()

LanguageSwitchButton()
authModal()
tabsLoginRegister()



const burgerBtn = document.querySelector('.header-burger');
const mobileMenu = document.querySelector('.header-mobile-menu');

if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-open');

    const expanded = burgerBtn.classList.contains('is-active');
    burgerBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  document.addEventListener('click', (event) => {
    const clickInsideBurger = burgerBtn.contains(event.target);
    const clickInsideMenu = mobileMenu.contains(event.target);

    if (!clickInsideBurger && !clickInsideMenu) {
      burgerBtn.classList.remove('is-active');
      mobileMenu.classList.remove('is-open');
      burgerBtn.setAttribute('aria-expanded', 'false');
    }
  });
}
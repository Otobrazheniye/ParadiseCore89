import './main.scss'

//Import Frame
import { renderHeader } from './components/header.js'
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
  ${renderHeader()}

  <main id="page-root"></main>

  <div id="footer-switcher">
    ${renderFooter()}
  </div>
`
const pageRoot = document.querySelector('#page-root')

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
    default:
      pageRoot.innerHTML = `<h1>Page not found<h1>`
  }
}


bodySwitch('home')

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
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


// Import Burger menu
import { initBurgerMenu } from './components/burgermenu.js'


// Import AIBusiness
import { renderAIBusinessServices, serviceDragScroll, renderaiaccounting } from './components/aibusiness-services.js'
import { renderPackagePlansPrepare } from './components/aibusiness-package-prepare.js'

import { renderAIBusinessReview } from './components/aibusiness-review.js'

import { renderAIBusinessAbout } from './components/aibusiness-about.js'
import { renderAIBusinessTrainingProgram } from './components/aibusiness-training.js'

//Backend
import { renderServices } from './components/aibusiness-services.js'
import { setupContactForm } from './components/aibusiness-contact.js'
import { renderReviews, setupReviewForm } from './components/aibusiness-review.js'
import { renderTrainingPrograms } from './components/aibusiness-training.js'
import { setupPackageOrderForm } from './components/aibusiness-package-prepare.js'

import { hydrateAboutAi } from './components/aibusiness-about.js'
import { hydratePackagePlans, hydratePackagePlansPrepare } from './components/aibusiness-hydrate.js'

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
const pageProtocolSwitcher = document.querySelector('#page-protocol-switcher')
//#region Switch functions
//#region Header Switch
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
      initBurgerMenu()
      bodySwitchAiBusinessButton()
      break

    default:
      headerRoot.innerHTML = `<h1>Page not found</h1>`
  }

  headerSwitchButton()
  bodySwitchButton()
  bodySwitchAiBusinessButton()
  initFooterSwitcher()

  LanguageSwitchButton()
}
//#endregion


//#region Body Switch
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
      headerRoot.innerHTML = renderHeaderAIBusiness()
      
      initBurgerMenu()
      bodySwitchAiBusinessButton()
      break

    default:
      pageRoot.innerHTML = `<h1>Page not found<h1>`
  }
}

function bodySwitchAiBusinessPackagePrepareButton(){
  const packagePrepareButton = document.querySelectorAll(".body-aibutton-packageprepare")

  packagePrepareButton.forEach((btn)=>{
    btn.addEventListener("click", async (event)=>{
      event.preventDefault()
      const packageSlug = btn.dataset.packageSlug

      await bodySwitchAiBusinessPackagePrepare(packageSlug)
    })
  })
}


async function bodySwitchAiBusinessPackagePrepare(packageSlug){
  pageRoot.innerHTML = renderPackagePlansPrepare(packageSlug)

  await hydratePackagePlans()
  await hydratePackagePlansPrepare(packageSlug)
  setupPackageOrderForm(packageSlug)
  setupContactForm()
  bodySwitchAiBusinessPackagePrepareBackButton()

  function bodySwitchAiBusinessPackagePrepareBackButton(){
    const packagePrepareBackButton = document.querySelector(".pageBackButton")

    if (!packagePrepareBackButton) return

    packagePrepareBackButton.addEventListener("click", async (event) => {
      event.preventDefault()
      const activePage = packagePrepareBackButton.dataset.page

      await bodySwitchAiBusiness(activePage)
      // await bodySwitchAiBusinessPackagePrepareBack(activePage)
    })
  }
  console.log("Selected package:", packageSlug)
}


function bodySwitchAiBusinessButton(){
  const headeraiButton = document.querySelectorAll('.headeraiButton')
  headeraiButton.forEach((btn) =>{
    btn.addEventListener('click',(event)=>{
      event.preventDefault()
      const activePage = btn.dataset.page

      bodySwitchAiBusiness(activePage)
    })
  })
}

async function bodySwitchAiBusiness(activePage) {
  switch (activePage) {
    case 'home':
      pageRoot.innerHTML = renderHome()
      break

    case 'about':
      pageRoot.innerHTML = renderAIBusinessAbout()

      await hydrateAboutAi()
      break

    case 'services':
      pageRoot.innerHTML = renderAIBusinessServices()

      await renderServices()
      setupContactForm()
      await hydratePackagePlans()
      
      bodySwitchAiBusinessPackagePrepareButton()
      
      serviceDragScroll()
      bodySwitchAiBusinessProtocolButton()
      
      break

    case 'reviews':
      pageRoot.innerHTML = renderAIBusinessReview()

      await renderReviews()
      await setupReviewForm()
      break

    case 'training':
      pageRoot.innerHTML = renderAIBusinessTrainingProgram()

      await renderTrainingPrograms()
      break

    case 'contact':
      pageRoot.innerHTML = renderContact()
      break

    default:
      pageRoot.innerHTML = `<h1>Page not found</h1>`
  }
}

function bodySwitchAiBusinessProtocolButton(){
  const protocolButton = document.querySelectorAll(".protocolButton")

  protocolButton.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
      event.preventDefault()
      const activePage = btn.dataset.page

      bodySwitchAiBusinessProtocol(activePage)
    })
  })
}


function bodySwitchAiBusinessProtocol(activePage) {
  const pageProtocolSwitcher = document.querySelector("#page-protocol-switcher");

  if (!pageProtocolSwitcher) return;

  switch (activePage) {
    case "aiaccounting":
      pageProtocolSwitcher.innerHTML = renderaiaccounting();
      break;

    case "aimarketingdesign":
      pageProtocolSwitcher.innerHTML = renderNone();
      break;

    case "crmintelligence":
      pageProtocolSwitcher.innerHTML = renderNone();
      break;

    case "operationsautomation":
      pageProtocolSwitcher.innerHTML = renderNone();
      break;

    case "businessanalyticsaiauditor":
      pageProtocolSwitcher.innerHTML = renderNone();
      break;

    default:
      pageProtocolSwitcher.innerHTML = `<h1>Page not found</h1>`;
  }

  pageProtocolSwitcher.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
  
}
//#endregion
//#endregion


//#region Default function
headerSwitch('home')
bodySwitch('home')

headerSwitchButton()
bodySwitchButton()
bodySwitchAiBusinessButton()
bodySwitchAiBusinessProtocolButton()
// bodySwitchAiBusinessPackagePrepareButton()

initBurgerMenu()
initFooterSwitcher()


LanguageSwitchButton()
serviceDragScroll()
authModal()
tabsLoginRegister()
//#endregion




// TEST API
import { getServices } from './api/servicesApi.js';

async function testServicesApi() {
  try {
    const services = await getServices();
    console.log('SERVICES FROM API:', services);
  } catch (error) {
    console.error('API ERROR:', error);
  }
}

testServicesApi();
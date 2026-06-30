import './main.scss'
//#region GLOBAL
import './main.scss'
//#endregion


//#region FRAME / LAYOUT
import {
  renderHeader, renderHeaderAIBusiness,
} from './components/header.js'

import {
  renderFooter,
  renderFooterDirectory, renderFooterNexus,
  renderFooterVault,
} from './components/footer.js'

import { initFooterSwitcher } from './components/footer-dev.js'
import { initBurgerMenu } from './components/burgermenu.js'
//#endregion


//#region BASE PAGE
import { renderBasePageJS } from './components/basepage.js'
import { renderResearch } from './components/page-research.js'
import { renderDivision } from './components/page-division.js'
//#endregion


//#region DEV / UI HELPERS
import { LanguageSwitchButton } from './components/translations/dev-lang.js'
import {
  authModal, tabsLoginRegister,
} from './components/basepage-dev.js'
//#endregion


//#region AUTH
import {
  setupRegistrationForm, setupLoginForm,
  setupLogoutButton, initAuth,
} from './components/basepage.js'
//#endregion


//#region USER ACCOUNT
import { renderUserAccount } from './components/user.js'
//#endregion


//#region AI BUSINESS PAGES
import { renderAIBusinessBasepage } from './components/aibusiness-basepage.js'

import {
  renderAIBusinessServices, serviceDragScroll,
  renderAIAccounting, renderAIMarketingDesign,
  renderAICRMIntelligence, renderAIOperationsAutomation,
  renderAIBusinessAnalyticsAuditor,
} from './components/aibusiness-services.js'

import {
  renderPackagePlansPrepare, setupPackageOrderForm,
} from './components/aibusiness-package-prepare.js'

import {
  renderAIBusinessReview, renderReviews,
  setupReviewForm,
} from './components/aibusiness-review.js'

import { 
  renderAIBusinessContactPage 
} from './components/aibusiness-contact.js'

import {
  renderAIBusinessAbout, hydrateAboutAi,
} from './components/aibusiness-about.js'

import {
  renderAIBusinessTrainingProgram, renderTrainingPrograms,
} from './components/aibusiness-training.js'

import { setupContactForm } from './components/aibusiness-contact.js'
//#endregion


//#region HYDRATE
import {
  hydratePackagePlans, hydratePackagePlansPrepare,
  hydrateUserAccess, renderServices
} from './components/aibusiness-hydrate.js'
//#endregion

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
      break

    default:
      headerRoot.innerHTML = `<h1>Page not found</h1>`
  }

  initBurgerMenu()

  headerSwitchButton()
  bodySwitchButton()
  bodySwitchAiBusinessButton()

  initFooterSwitcher()
  LanguageSwitchButton()
}
//#endregion

//#region Prepare
function prepareAIBusiness(){
  headerRoot.innerHTML = renderHeaderAIBusiness()
  // pageRoot.innerHTML = renderAIBusinessBasepage()
  pageRoot.innerHTML = renderAIBusinessServices()
  prepareServices()

  initBurgerMenu()

  headerSwitchButton()
  bodySwitchButton()
  bodySwitchAiBusinessButton()

  initAuthUI()
  initFooterSwitcher(() => {
  bodySwitchButton()
  LanguageSwitchButton()
  })

  LanguageSwitchButton()
}

async function prepareServices(){
  pageRoot.innerHTML = renderAIBusinessServices()
  await renderServices()
  setupContactForm()
  await hydratePackagePlans()
  
  bodySwitchAiBusinessPackagePrepareButton()
  bodySwitchAiBusinessProtocol("business-analytics-ai-auditor")
  
  serviceDragScroll()
  bodySwitchAiBusinessProtocolButton()
}


async function prepareAbout(){
  pageRoot.innerHTML = renderAIBusinessAbout()
  await hydrateAboutAi()
  bodySwitchAiBusinessAboutButton()
  bodySwitchAiBusinessButton()
}

async function prepareReview(){
  pageRoot.innerHTML = renderAIBusinessReview()

  await renderReviews()
  await setupReviewForm()
}

function initPageNavigation() {
  headerSwitchButton()
  bodySwitchButton()
  bodySwitchAiBusinessButton()
}

//#endregion

//#region Body Switch
//Base Page
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
      initHomePage()

      break
    case 'research':
      pageRoot.innerHTML = renderResearch()
      break
    case 'division':
      pageRoot.innerHTML = renderDivision()
      break
    case 'archives':
      pageRoot.innerHTML = `<h1>Archives</h1>`
      break
    case 'aibusiness':
      prepareAIBusiness()
      break

    default:
      pageRoot.innerHTML = `<h1>Page not found<h1>`
  }
}

async function prepareTraining(){
  pageRoot.innerHTML = renderAIBusinessTrainingProgram()

  await renderTrainingPrograms()
}

//AI Business 
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
      
      initHomePage()
      break

    case 'about':
      prepareAbout()
      break

    case 'services':
      prepareServices()
      break

    case 'reviews':
      prepareReview()
      break

    case 'training':
      prepareTraining()
      break

    case 'contact':
      pageRoot.innerHTML = renderAIBusinessContactPage()
      break

    case 'user-access':
      pageRoot.innerHTML = renderUserAccount()
      await hydrateUserAccess()
      break;
    
    default:
      pageRoot.innerHTML = `<h1>Page not found</h1>`
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


//AI Busines Service
function bodySwitchAiBusinessAboutButton(){
  const aboutButton = document.querySelectorAll(".aboutButton")

  aboutButton.forEach((btn) => {
    btn.addEventListener('click', (event)=>{
      event.preventDefault()
      const activePage = btn.dataset.aboutpage

      bodySwitchAiBusinessAbout(activePage)
    })
  })
}

async function bodySwitchAiBusinessAbout(activePage){
  switch (activePage) {
    case "viewservices":
      prepareServices()
      break

    case "opencontact":
      pageRoot.innerHTML = renderAIBusinessContactPage();

      setupContactForm()
      break

    default:
      pageProtocolSwitcher.innerHTML = `<h1>Page not found</h1>`;
  }
}


function bodySwitchAiBusinessServiceButton(){
  const aboutButton = document.querySelectorAll(".serviceButton")

  aboutButton.forEach((btn) => {
    btn.addEventListener('click', (event)=>{
      event.preventDefault()
      const activePage = btn.dataset.servicepage

      bodySwitchAiBusinessService(activePage)
    })
  })
}

async function bodySwitchAiBusinessService(activePage){
  switch (activePage) {
    case "opencontact":
      pageProtocolSwitcher.innerHTML = renderNone();
      break

    default:
      pageProtocolSwitcher.innerHTML = `<h1>Page not found</h1>`;
  }
}


function bodySwitchAiBusinessProtocolButton(){
  const protocolButton = document.querySelectorAll(".protocolButton")

  protocolButton.forEach((btn)=>{
    btn.addEventListener('click',(event)=>{
      event.preventDefault()
      const searchBySlug= btn.dataset.page

      bodySwitchAiBusinessProtocol(searchBySlug)
    })
  })
}


function bodySwitchAiBusinessProtocol(searchBySlug) {
  const pageProtocolSwitcher = document.querySelector("#page-protocol-switcher");

  if (!pageProtocolSwitcher) return;

  switch (searchBySlug) {
    case "ai-accounting":
      pageProtocolSwitcher.innerHTML = renderAIAccounting();
      break

    case "ai-marketing-design":
      pageProtocolSwitcher.innerHTML = renderAIMarketingDesign();
      break

    case "crm-intelligence":
      pageProtocolSwitcher.innerHTML = renderAICRMIntelligence();
      break

    case "operations-automation":
      pageProtocolSwitcher.innerHTML = renderAIOperationsAutomation();
      break

    case "business-analytics-ai-auditor":
      pageProtocolSwitcher.innerHTML = renderAIBusinessAnalyticsAuditor();
      break

    default:
      pageProtocolSwitcher.innerHTML = `<h1>Page not found</h1>`;
  }

  
}
//#endregion
//#endregion


function initHomePage() {
  initAuthUI()
  initBurgerMenu()
}


function initAuthUI() {
  authModal()
  tabsLoginRegister()
  setupRegistrationForm()
  setupLoginForm()
  initAuth()
  setupLogoutButton()
}


//#region Default function
headerSwitch('home')
bodySwitch('home')

headerSwitchButton()
bodySwitchButton()
bodySwitchAiBusinessButton()
bodySwitchAiBusinessProtocolButton()
// bodySwitchAiBusinessPackagePrepareButton()

initBurgerMenu()
initFooterSwitcher(() => {
  bodySwitchButton()
  LanguageSwitchButton()
})


LanguageSwitchButton()
serviceDragScroll()

// authModal()
// tabsLoginRegister()
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

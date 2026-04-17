import './main.scss'
//Import Frame
import { renderHeader } from './components/header.js'
import { renderBasePageMain, renderBasePageTopics} from './components/basepage.js'
//Import Dev
import { authModal } from './components/basepage-dev.js'
import { tabsLoginRegister } from './components/basepage-dev.js'

//Frame
document.querySelector('#app').innerHTML = `
  ${renderHeader()}
`


document.querySelector('#basepage-topics').innerHTML = `
  ${renderBasePageTopics()}
`

document.querySelector('#basepage-main').innerHTML = `
  ${renderBasePageMain()}
`


// Dev
authModal();
tabsLoginRegister();


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
export function initBurgerMenu() {
  const burger = document.querySelector('.header-burger')
  const mobileMenu = document.querySelector('.header-mobile-menu')

  if (!burger || !mobileMenu) return

  if (burger.dataset.burgerInitialized === 'true') return

  burger.dataset.burgerInitialized = 'true'

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active')
    mobileMenu.classList.toggle('is-open')

    const isOpen = mobileMenu.classList.contains('is-open')
    burger.setAttribute('aria-expanded', String(isOpen))
  })
}

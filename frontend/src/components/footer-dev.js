import { renderFooterDirectory, renderFooterNexus, renderFooterVault } from './footer.js'

export function initFooterSwitcher(afterRender){
  const footerSwitch = document.querySelector('#footer-switch')
  const footerButtons = document.querySelectorAll('.footer-gateway__sphere')

  if (!footerSwitch || !footerButtons.length) return

  const footerMap = {
    directory: renderFooterDirectory,
    nexus: renderFooterNexus,
    vault: renderFooterVault,
  }

  function setupBackButton() { 
    const backButton = document.querySelector('.footer-back-btn')

    if (!backButton) return

    backButton.addEventListener('click', () => { 
      footerSwitch.innerHTML = ''

      const footerGateway = document.querySelector('.footer-gateway')
      if (footerGateway) {
        footerGateway.style.display = 'flex'
      }
    })
  }

  function changeFooter(footerName){
    const renderSelectedFooter = footerMap[footerName]

    if (!renderSelectedFooter) return

    footerSwitch.innerHTML = renderSelectedFooter()

    setupBackButton()

    const footerGateway = document.querySelector('.footer-gateway')
    if (footerGateway) {
      footerGateway.style.display = 'none'
    }

    footerButtons.forEach((button) => {
      button.classList.toggle(
        'is-active',
        button.dataset.footer === footerName
      )
    })

    if (afterRender) {
      afterRender()
    }
  }

  footerButtons.forEach((button) => {
    button.addEventListener('click', () => { 
      const footerName = button.dataset.footer
      changeFooter(footerName)
    })
  })
}
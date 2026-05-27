import { renderFooter, renderFooterDirectory, renderFooterNexus, renderFooterVault} from './footer.js'


export function initFooterSwitcher(){
    const footerSwitch = document.querySelector('#footer-switch');
    const footerButtons = document.querySelectorAll('.footer-gateway__sphere');

    const footerMap = {
    directory: renderFooterDirectory,
    nexus: renderFooterNexus,
    vault: renderFooterVault,
    };

    function setupBackButton() { 
        const backButton = document.querySelector('.footer-back-btn'); 
        if (!backButton) return; 
        backButton.addEventListener('click', () => { 
            footerSwitch.innerHTML = ''; 
            // document .querySelector('.footer-gateway') .classList.remove('is-hidden');
            document.querySelector('.footer-gateway').style.display = 'flex';
        }); }
   

    function changeFooter(footerName){
        footerSwitch.innerHTML = footerMap[footerName]()

        setupBackButton();
        document.querySelector('.footer-gateway').style.display = 'none';

        footerButtons.forEach((button) => {
            button.classList.toggle( 'is-active', button.dataset.footer === footerName ); }); 
    }

    footerButtons.forEach((button) => { button.addEventListener('click', () => { 
        const footerName = button.dataset.footer; 
        changeFooter(footerName); 
        }); 
    });

    // changeFooter('directory');
    }

export function authModal() {
  const dialog = document.querySelector('#auth-dialog')
  const openButtons = document.querySelectorAll('[data-auth-open]')
  const closeBtn = document.querySelector('[data-auth-close]')

  if (!dialog  || !closeBtn) return;

 openButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const mode = button.dataset.authOpen

      dialog.showModal()

      const forms = document.querySelectorAll('[data-auth-form]')
      const tabButtons = document.querySelectorAll('[data-auth-tab]')

      forms.forEach((form) => {
        form.hidden = true
      })

      const activeForm = document.querySelector(`[data-auth-form="${mode}"]`)
      if (activeForm) activeForm.hidden = false

      tabButtons.forEach((tabButton) => {
        tabButton.classList.remove('active')
      })

      const activeTab = document.querySelector(`[data-auth-tab="${mode}"]`)
      if (activeTab) activeTab.classList.add('active')
    })
  })

  closeBtn.addEventListener('click', () => {
    dialog.close()
  })
}

export function tabsLoginRegister(){
    const tabButtons = document.querySelectorAll('[data-auth-tab]')
    const forms = document.querySelectorAll('[data-auth-form]')

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.authTab;

        forms.forEach(form => {
          form.hidden = true;
        });
        const activeForm = document.querySelector(`[data-auth-form="${tab}"]`);
        if(activeForm) activeForm.hidden = false;
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
}
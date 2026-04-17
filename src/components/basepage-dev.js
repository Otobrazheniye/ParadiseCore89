export function authModal() {
  const dialog = document.querySelector('#auth-dialog');
  const openBtn = document.querySelector('.wish-auth__btn--login');
  const closeBtn = document.querySelector('[data-auth-close]');

  if (!dialog || !openBtn || !closeBtn) return;

  openBtn.addEventListener('click', () => {
    dialog.showModal();
  });

  closeBtn.addEventListener('click', () => {
    dialog.close();
  });
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
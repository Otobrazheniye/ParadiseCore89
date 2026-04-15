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
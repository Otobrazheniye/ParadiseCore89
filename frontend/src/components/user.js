export function renderUserAccount() {
  return `
    <section class="user-account">
      <div class="user-account__inner">

        <header class="user-account__header">
          <span class="user-account__eyebrow">Personal access</span>
          <h1 class="user-account__title">My Account</h1>
          <p class="user-account__text">
            Here you can see your purchased packages, unlocked services and training access.
          </p>
        </header>

        <div class="user-access">

          <section class="user-access__block">
            <div class="user-access__block-header">
              <h2>My Packages</h2>
              <p>Packages purchased or activated for your account.</p>
            </div>

            <div class="user-access__list" data-user-packages>
              <p class="user-access__empty">Loading packages...</p>
            </div>
          </section>

          <section class="user-access__block">
            <div class="user-access__block-header">
              <h2>My Services</h2>
              <p>Services unlocked through packages, direct purchase or admin access.</p>
            </div>

            <div class="user-access__list" data-user-services>
              <p class="user-access__empty">Loading services...</p>
            </div>
          </section>

          <section class="user-access__block">
            <div class="user-access__block-header">
              <h2>My Trainings</h2>
              <p>Training programs connected to your account.</p>
            </div>

            <div class="user-access__list" data-user-trainings>
              <p class="user-access__empty">Loading trainings...</p>
            </div>
          </section>

        </div>

      </div>
    </section>
  `
}
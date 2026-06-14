import { hydratePackagePlans } from "./aibusiness-services"

export function renderPackagePlansPrepare(packageSlug){
   const allowedSlugs = ["basic", "pro", "enterprise"]

  if (!allowedSlugs.includes(packageSlug)) {
    return `<h1>Page not found</h1>`
  }

  return `
  <section class="package-checkout">
    <div class="package-checkout__inner">
      <aside class="package-checkout__summary">
        <span data-checkout-field="package.name" data-package-plan-field="${packageSlug}.name"></span>
        <h1 data-checkout-field="package.title" data-package-plan-field="${packageSlug}.title"></h1>
        <p data-checkout-field="package.summary"></p>
        <div>
          Max services:
          <strong data-checkout-field="package.max_services"></strong>
        </div>
        <div data-checkout-trainings></div>
      </aside>
      <div class="package-checkout__config">
        <h2>Choose AI protocols</h2>
        <div id="checkout-services-list"></div>
        <h2>Your information</h2>
        <form id="package-order-form">
          ...
        </form>
      </div>
    </div>
  </section>
    `
}
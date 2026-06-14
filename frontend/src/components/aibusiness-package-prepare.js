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
          <span 
            data-checkout-field="package.name" 
            data-package-plan-field="${packageSlug}.name"
          ></span>

          <h1 
            data-checkout-field="package.title" 
            data-package-plan-field="${packageSlug}.title"
          ></h1>

          <p 
            data-checkout-field="package.summary" 
            data-package-plan-field="${packageSlug}.summary"
          ></p>

          <div>
            Max services:
            <strong data-checkout-field="package.max_services">
              <!-- later -->
            </strong>
          </div>

          <div class="package-checkout__description" data-package-plan-paragraphs="${packageSlug}">
          </div>

          <div class="package-checkout__includes">
            <h3 data-package-plan-field="${packageSlug}.includes_title">
              What is included
            </h3>

            <ul data-package-plan-includes="${packageSlug}">
            </ul>
          </div>

          <div class="package-checkout__best">
            <h3 data-package-plan-field="${packageSlug}.best_for_title">
              Best suited for
            </h3>

            <div data-package-plan-best="${packageSlug}">
            </div>
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
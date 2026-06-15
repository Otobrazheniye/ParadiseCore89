import { getPackagePlans, getServices } from "../api/servicesApi";

 

export function renderPackagePlansPrepare(packageSlug){
  const allowedSlugs = ["basic", "pro", "enterprise"]

  if (!allowedSlugs.includes(packageSlug)) {
    return `<h1>Page not found</h1>`
  }

  return `
    <section class="package-checkout" data-selected-package="${packageSlug}">
      <div class="package-checkout__inner">

        <aside class="package-checkout__summary">
          <div class="package-checkout__summary-card">

            <a href="/services" class="package-checkout__back pageBackButton" data-page="services">
             ← Back to packages
            </a>

            <span class="package-checkout__eyebrow">
              Selected implementation package
            </span>

            <div class="package-checkout__package-head">
              <span 
                class="package-checkout__package-name"
                data-package-plan-field="${packageSlug}.name"
              >
                Package
              </span>

              <span 
                class="package-checkout__badge"
                data-package-plan-field="${packageSlug}.badge"
              ></span>
            </div>

            <h1 
              class="package-checkout__title"
              data-package-plan-field="${packageSlug}.title"
            >
              Package title
            </h1>

            <p 
              class="package-checkout__summary-text"
              data-package-plan-field="${packageSlug}.summary"
            >
              Package summary
            </p>

            <div class="package-checkout__limit">
              <span class="package-checkout__limit-label">
                Available AI protocols
              </span>

              <strong 
                class="package-checkout__limit-value"
                data-checkout-field="${packageSlug}.max_services"
              >
                —
              </strong>
            </div>

            <div 
              class="package-checkout__description"
              data-package-plan-paragraphs="${packageSlug}"
            >
              <p>Package description will be loaded here.</p>
            </div>

            <div class="package-checkout__block package-checkout__block--includes">
              <h3 
                class="package-checkout__block-title"
                data-package-plan-field="${packageSlug}.includes_title"
              >
                What is included
              </h3>

              <ul 
                class="package-checkout__list"
                data-package-plan-includes="${packageSlug}"
              >
                <li>Included items will be loaded here.</li>
              </ul>
            </div>

            <div class="package-checkout__block package-checkout__block--best">
              <h3 
                class="package-checkout__block-title"
                data-package-plan-field="${packageSlug}.best_for_title"
              >
                Best suited for
              </h3>

              <div 
                class="package-checkout__best-text"
                data-package-plan-best="${packageSlug}"
              >
                <p>Best suited information will be loaded here.</p>
              </div>
            </div>

            <div class="package-checkout__block package-checkout__block--training">
              <h3 class="package-checkout__block-title">
                Included training
              </h3>

              <div 
                class="package-checkout__trainings"
                data-checkout-trainings
              >
                <p>Included training programs will be loaded here later.</p>
              </div>
            </div>

          </div>
        </aside>


        <section class="package-checkout__config">
          <div class="package-checkout__config-card">

            <div class="package-checkout__step">
              <span class="package-checkout__step-number">
                01
              </span>

              <div class="package-checkout__step-content">
                <h2 class="package-checkout__step-title">
                  Choose AI protocols
                </h2>

                <p class="package-checkout__step-text">
                  Select the AI services you want to include in this implementation package.
                  The available limit depends on the selected package.
                </p>

                <div class="package-checkout__selection-status">
                  <span>
                    Selected:
                  </span>

                  <strong data-checkout-selected-count>
                    0
                  </strong>

                  <span>
                    /
                  </span>

                  <strong data-checkout-field="${packageSlug}.max_services">
                    —
                  </strong>
                </div>

                <div 
                  class="package-checkout__services-list"
                  id="checkout-services-list"
                >
                  <p>AI protocols will be loaded here.</p>
                </div>
              </div>
            </div>


            <div class="package-checkout__step">
              <span class="package-checkout__step-number">
                02
              </span>

              <div class="package-checkout__step-content">
                <h2 class="package-checkout__step-title">
                  Training access
                </h2>

                <p class="package-checkout__step-text">
                  Your package already includes selected training. Later, additional training
                  options can be added here as upgrades.
                </p>

                <div 
                  class="package-checkout__training-options"
                  id="checkout-training-options"
                >
                  <p>Additional training options will be added later.</p>
                </div>
              </div>
            </div>


            <div class="package-checkout__step">
              <span class="package-checkout__step-number">
                03
              </span>

              <div class="package-checkout__step-content">
                <h2 class="package-checkout__step-title">
                  Your information
                </h2>
                <form class="contact-form" id="contact-form">
                  <input name="name" type="text" placeholder="Your name" required>
                  <input name="email" type="email" placeholder="Your email" required>
                  <input name="company" type="text" placeholder="Company">
                  <textarea name="message" placeholder="Message" required></textarea>
                  <button type="submit">Send request</button>
                </form>
              </div>
            </div>

          </div>
        </section>

      </div>
    </section>
  `
}
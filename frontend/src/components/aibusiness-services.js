import { getServices, getPackagePlan } from "../api/servicesApi";



export async function renderServices(){
  const serviceGrid = document.querySelector("#services-grid") 
  if(!serviceGrid) return


  try{
    const serviceList = await getServices()
    serviceGrid.innerHTML = ''

    serviceList.forEach((service) => {
      const listItem = document.createElement("li")
      listItem.classList.add("ai-protocol-list__item")
      listItem.classList.add(`ai-protocol-list__item--${service.icon_name}`)
      listItem.id= service.slug
      const subTitleItem = document.createElement("h3")
      subTitleItem.classList.add("protocolButton")
      subTitleItem.dataset.page = service.slug
      subTitleItem.textContent = service.title


      listItem.append(subTitleItem)


      serviceGrid.append(listItem)
  })
  }

  catch (error){
    console.log("Failed to load services:", error)
  }
}


export function renderAIBusinessServices(){
    return `  
    <section class="ai-protocols" id="ai-protocols">
      <div class="ai-protocols__inner">

        <aside class="ai-protocols__map" aria-label="AI Protocols page map">
          <span class="ai-protocols__map-label">Protocol Map</span>

          <nav class="ai-protocols__nav">
            <a class="ai-protocols__nav-main" href="#ai-protocols">
              AI Protocols
            </a>

            <a class="ai-protocols__nav-link" href="#ai-payoff">
              AI where it pays off
            </a>

            <a class="ai-protocols__nav-link" href="#growth-protocols">
              Five protocols of growth and efficiency
            </a>

            <div class="ai-protocols__nav-group">
              <a class="ai-protocols__nav-sub" href="#ai-accounting">
                AI Accounting
              </a>
              <a class="ai-protocols__nav-sub" href="#ai-marketing">
                AI Marketing &amp; Design
              </a>
              <a class="ai-protocols__nav-sub" href="#crm-intelligence">
                CRM Intelligence
              </a>
              <a class="ai-protocols__nav-sub" href="#operations-automation">
                Operations Automation
              </a>
              <a class="ai-protocols__nav-sub" href="#business-analytics">
                Business Analytics &amp; AI Auditor
              </a>
            </div>

            <a class="ai-protocols__nav-link" href="#implementation-process">
              Implementation process
            </a>

            <a class="ai-protocols__nav-link" href="#implementation-packages">
              Implementation packages
            </a>

            <a class="ai-protocols__nav-link" href="#cases-results">
              Cases and results
            </a>

            <a class="ai-protocols__nav-link" href="#next-step">
              Next step
            </a>
          </nav>
        </aside>

        <div class="ai-protocols__content">
          <div class="ai-protocols__hero">
            <span class="ai-protocols__eyebrow">
              Project Paradise Core 89 / Applied Intelligence Division
            </span>

            <h1 class="ai-protocols__title">
              AI~ ~Protocols
            </h1>

            <h2 class="ai-protocols__subtitle" >
              We implement AI where it actually pays off
            </h2>

            <div class="ai-protocols__text">
              <p>
                Project AI DLC implements applied AI into the business processes where technology creates not just a feeling of being modern, but a real management effect: reducing routine work, accelerating data processing, improving the quality of client communication, and increasing decision transparency.
              </p>

              <p>
                We do not sell abstract “AI for everything”. We design working operational circuits where AI becomes part of your business operating system.
              </p>

              <p>
                Our model does not begin with a tool demonstration. It begins with a loss map. We identify where manual work accumulates, where leads are lost, where documents slow down the deal cycle, where analytics arrive too late, and where employees spend valuable time on repetitive actions.
              </p>

              <p>
                After that, we build a specific implementation protocol around the problem and connect it to measurable performance indicators.
              </p>

              <p>
                Today, this approach gives businesses the strongest chance of receiving real value from AI. Companies get results not when they “try a trendy tool”, but when they choose a limited and clear use case, integrate it into the process, train people, and track the result through KPI.
              </p>
            </div>

            <div class="ai-protocols__actions" aria-label="AI Protocols actions">
              <a class="ai-protocols__btn ai-protocols__btn--primary" href="#next-step">
                Request AI Audit
              </a>

              <a class="ai-protocols__btn ai-protocols__btn--secondary" href="#implementation-packages">
                Get Implementation Plan
              </a>

              <a class="ai-protocols__btn ai-protocols__btn--ghost" href="#growth-protocols">
                View Protocols
              </a>
            </div>
          </div>

          <div class="ai-protocols__value">
            <span class="ai-protocols__value-label">
              Value Proposition
            </span>

            <div class="ai-protocols__value-grid">
              <article class="ai-protocols__value-card">
                <h3 class="ai-protocols__value-title">
                  Less Routine
                </h3>
                <p class="ai-protocols__value-text">
                  Automate repetitive tasks and free your team for decisions, sales, and client work.
                </p>
              </article>

              <article class="ai-protocols__value-card">
                <h3 class="ai-protocols__value-title">
                  Faster Cycles
                </h3>
                <p class="ai-protocols__value-text">
                  Speed up documents, communication, reporting, and internal approvals.
                </p>
              </article>

              <article class="ai-protocols__value-card">
                <h3 class="ai-protocols__value-title">
                  Measurable Effect
                </h3>
                <p class="ai-protocols__value-text">
                  Every AI implementation is connected to clear metrics, not abstract innovation.
                </p>
              </article>
            </div>
          </div>
        </div>

      </div>
    </section>

  <section class="ai-services-flow" id="ai-payoff">
    <div id="growth-protocols" class="ai-anchor"></div>
    <div class="ai-services-flow__inner">

      <article class="ai-services-flow__intro">
        <span class="ai-services-flow__eyebrow">
          Business-First AI Implementation
        </span>

        <h2 class="ai-services-flow__title">
          We implement AI where it actually pays off
        </h2>

        <div class="ai-services-flow__text">
          <p>
            For small and medium-sized businesses, the critical factor is not the depth of the technology stack, but the speed of moving from an idea to a working business scenario. That is why the Services page speaks the language of directors, operations leaders, marketers, sales teams, and business owners: less manual input, fewer lead losses, faster processing, better KPI visibility, and a shorter cycle between request and action.
          </p>

          <p>
            The most mature AI teams today focus on business functions where the effect can be seen quickly: marketing and sales, service operations, knowledge work, document workflows, and analytics. Project Paradise Core 89 follows the same practical direction: AI is valuable when it is connected to a specific process, a measurable outcome, and a clear operating model.
          </p>

          <p>
            For Project Paradise Core 89, this creates a simple rule: every protocol is described through four questions. What exactly changes in the process? Why does it work? What does the business receive within 30–90 days? And what control system remains visible after implementation?
          </p>

          <p>
            This structure makes the page feel premium in presentation while staying clear and business-focused. The logic remains practical, commercial, and easy to understand.
          </p>
        </div>
      </article>

      <div class="ai-services-flow__benefits" aria-label="AI implementation advantages">
        <article class="ai-services-flow__benefit ai-services-flow__benefit--up">
          <span class="ai-services-flow__benefit-number">01</span>
          <p class="ai-services-flow__benefit-text">
            Business language instead of overloaded technical terminology.
          </p>
        </article>

        <article class="ai-services-flow__benefit ai-services-flow__benefit--down">
          <span class="ai-services-flow__benefit-number">02</span>
          <p class="ai-services-flow__benefit-text">
            Focus on scenarios with a fast first measurable effect.
          </p>
        </article>

        <article class="ai-services-flow__benefit ai-services-flow__benefit--up">
          <span class="ai-services-flow__benefit-number">03</span>
          <p class="ai-services-flow__benefit-text">
            Result measurement before, during, and after implementation.
          </p>
        </article>

        <article class="ai-services-flow__benefit ai-services-flow__benefit--down">
          <span class="ai-services-flow__benefit-number">04</span>
          <p class="ai-services-flow__benefit-text">
            Clear transition from business problem to concrete AI protocol.
          </p>
        </article>
      </div>

      <div class="ai-services-flow__grid">
          <article class="ai-services-flow__panel ai-services-flow__panel--protocols">
          <span class="ai-services-flow__panel-label">
            Protocol Overview Block
          </span>

          <h2 class="ai-services-flow__panel-title">
            Five protocols of growth and efficiency
          </h2>

          <div class="ai-services-flow__panel-text">
            <p>
              Instead of presenting a long list of disconnected services, Project Paradise Core 89 presents its solutions as five protocols. Visually, this feels stronger. Strategically, it positions the website as a consulting AI platform rather than a typical automation agency.
            </p>

            <p>
              Each protocol is responsible for a specific business layer: documents and accounting, acquisition and creative production, sales and client data, internal operations, reporting and control.
            </p>

            <p>
              This protocol-based structure is especially effective for a B2B website because buyers recognize themselves through business problems, not through technology. A user does not usually arrive with the request “we need an LLM and automation”. They arrive with problems like “our accounting is too slow”, “managers are losing leads”, “marketing does too much manual work”, “we have no visibility into performance”, or “we need to train the team without breaking the implementation”.
            </p>

            <p>
              Below, each protocol should work as a mini-landing page inside the larger Services page: description, how it works, who it fits, timeline, ROI direction, risks, and the method used to reduce those risks.
            </p>

            <p>
              This format helps move the page from informational content to a commercial decision-making system.
            </p>
          </div>
        </article>

        <article class="ai-services-flow__panel ai-services-flow__panel--implementation" id="implementation-process">
          <span class="ai-services-flow__panel-label">
            Implementation Block
          </span>

          <h2 class="ai-services-flow__panel-title">
            How implementation works
          </h2>

          <div class="ai-services-flow__panel-text">
            <p>
              Implementation should be described as a controlled trajectory, not as “we connect AI and everything will take off”. Successful projects begin with process definition, quality control, governance, training, and change management. Without this foundation, even a strong AI solution can become just another interface for old manual work.
            </p>

            <p>
              Project Paradise Core 89 can describe its approach as a sequence: first, a loss audit and use case selection; then a fast pilot contour with human-in-the-loop control; then integrations and exception automation; after that, role-based training and KPI monitoring; and only then, scaling into new departments or additional protocols.
            </p>

            <p>
              A separate focus should be placed on the fact that implementation includes not only the technical layer, but also the decision-making model: who owns the process, which data source is treated as the source of truth, where manual control is required, which AI outputs need user confirmation, how errors are recorded, and how the operating logic is updated after the first month of real use.
            </p>

            <p>
              This is especially important as expectations around AI governance, transparency, responsibility, and risk management continue to grow.
            </p>
          </div>
        </article>
      </div>

      <article class="ai-services-flow__closing" id="next-step">
        <span class="ai-services-flow__closing-label">
          Closing Block
        </span>

        <h2 class="ai-services-flow__closing-title">
          Next step
        </h2>

        <div class="ai-services-flow__closing-text">
          <p>
            A strong service page does not end with a promise. It ends with a concrete action. The user should understand that after submitting a request, they will not be sent into uncertainty. They will enter a short and clear process: preliminary brief, discovery call, opportunity map, proposal for one or several protocols, pilot contour, and launch.
          </p>

          <p>
            The CTA should sound business-focused, but not heavy. For this type of website, the strongest call-to-action texts promise a clear next artifact: an audit, implementation map, short plan, current process review, or ROI estimate.
          </p>
        </div>

        <div class="ai-services-flow__closing-actions" aria-label="Next step actions">
          <a class="ai-services-flow__btn ai-services-flow__btn--primary" href="#contact">
            Get Implementation Map
          </a>

          <a class="ai-services-flow__btn ai-services-flow__btn--secondary" href="#contact">
            Request AI Audit
          </a>

          <a class="ai-services-flow__btn ai-services-flow__btn--ghost" href="#growth-protocols">
            Discuss Team Protocol
          </a>
        </div>
      </article>

    </div>
  </section>

  <section class="ai-protocol-list" id="growth-protocols">
    <div class="ai-protocol-list__inner">
      <h2 class="ai-protocol-list__title">
        Five protocols of growth and efficiency
      </h2>
      <ul class="ai-protocol-list__grid" id="services-grid"></ul>
      


    </div>
  </section>
  <section id="page-protocol-switcher"></section> 
  


  <section class="ai-packages" id="implementation-packages">
    <div class="ai-packages__inner">

      <div class="ai-packages__head">
        <span class="ai-packages__eyebrow">
          Implementation Packages
        </span>

        <h2 class="ai-packages__title">
          Packages and service cards
        </h2>

        <p class="ai-packages__lead">
          Choose the level of AI implementation that matches your current business stage: pilot, functional growth, or company-wide operating system.
        </p>
      </div>

      <div class="ai-packages__grid">

        <article class="ai-packages__card ai-packages__card--basic">
          <div class="ai-packages__top">
            <span class="ai-packages__name">
              Basic
            </span>

            <h3 class="ai-packages__card-title">
              Launch Protocol
            </h3>

            <p class="ai-packages__summary">
              A fast launch of one AI scenario to test business value without taking a large risk.
            </p>
          </div>

          <div class="ai-packages__body">
            <p>
              This package is designed for a company that wants to start small: choose one process, test an AI solution, and understand whether there is real value. We analyze the current workflow, find one automation point, launch a pilot, and show the first measurable results.
            </p>

            <p>
              As a result, the company receives not just an “AI test”, but a clear proof of value: what works, which metric improved, and how it can be scaled further.
            </p>
          </div>

          <div class="ai-packages__includes">
            <h4>
              What is included
            </h4>

            <ul>
              <li>1 AI protocol for a specific task</li>
              <li>Audit of one business process</li>
              <li>Pilot implementation contour</li>
              <li>1–2 basic integrations</li>
              <li>Human-in-the-loop control</li>
              <li>Basic dashboard with one key metric</li>
              <li>Initial team training</li>
            </ul>
          </div>

          <div class="ai-packages__best-for">
            <h4>
              Best suited for
            </h4>

            <p>
              Quickly testing ROI on one use case and understanding whether it is worth scaling AI further.
            </p>
          </div>

          <a class="ai-packages__btn ai-packages__btn--basic" href="#contact">
            Launch Pilot
          </a>
        </article>


        <article class="ai-packages__card ai-packages__card--pro ai-packages__card--popular">
          <span class="ai-packages__badge">
            Popular
          </span>

          <div class="ai-packages__top">
            <span class="ai-packages__name">
              Pro
            </span>

            <h3 class="ai-packages__card-title">
              Growth Protocol
            </h3>

            <p class="ai-packages__summary">
              A working AI contour for a business function that needs stable results, not just an experiment.
            </p>
          </div>

          <div class="ai-packages__body">
            <p>
              This package fits a business that already understands the problem and wants to implement AI into real workflows: sales, marketing, operations, CRM, documents, or analytics. The focus is not only on launch, but on making the solution part of the team’s daily work.
            </p>

            <p>
              As a result, the company receives a functional AI contour with integrations, roles, metrics, responsible people, and support after launch.
            </p>
          </div>

          <div class="ai-packages__includes">
            <h4>
              What is included
            </h4>

            <ul>
              <li>1–3 AI protocols</li>
              <li>Integrations with CRM / ERP / marketing systems</li>
              <li>Extended process automation</li>
              <li>KPI dashboard for result tracking</li>
              <li>SLA and operating rules</li>
              <li>Role-based training for different employees</li>
              <li>30–60 days of post-launch support</li>
            </ul>
          </div>

          <div class="ai-packages__best-for">
            <h4>
              Best suited for
            </h4>

            <p>
              Moving one function or department into a stable AI-powered operating mode.
            </p>
          </div>

          <a class="ai-packages__btn ai-packages__btn--pro" href="#contact">
            Get Implementation Plan
          </a>
        </article>


        <article class="ai-packages__card ai-packages__card--enterprise">
          <div class="ai-packages__top">
            <span class="ai-packages__name">
              Enterprise
            </span>

            <h3 class="ai-packages__card-title">
              Operating System Protocol
            </h3>

            <p class="ai-packages__summary">
              A scalable AI architecture for a company that wants to transform several areas of work.
            </p>
          </div>

          <div class="ai-packages__body">
            <p>
              This package fits companies where AI should not be a separate tool, but part of the operating model. Implementation affects several teams, functions, or departments, including access rules, risk management, policies, analytics, and training systems.
            </p>

            <p>
              As a result, the company receives not one use case, but the foundation for an AI Operating System: structure, governance, roadmap, center of excellence, and a clear scaling model.
            </p>
          </div>

          <div class="ai-packages__includes">
            <h4>
              What is included
            </h4>

            <ul>
              <li>Multi-protocol architecture</li>
              <li>AI implementation across several functions or departments</li>
              <li>Data governance and data usage rules</li>
              <li>AI policy and risk register</li>
              <li>Audit trail and access control</li>
              <li>Advanced analytics and management views</li>
              <li>Center of excellence</li>
              <li>AI Academy program with internal champions</li>
              <li>Step-by-step expansion roadmap</li>
            </ul>
          </div>

          <div class="ai-packages__best-for">
            <h4>
              Best suited for
            </h4>

            <p>
              Scaling AI at company level and building a controlled AI operating model.
            </p>
          </div>

          <a class="ai-packages__btn ai-packages__btn--enterprise" href="#contact">
            Discuss Architecture
          </a>
        </article>

      </div>

    </div>
  </section>
  <section class="ai-package-comparison" id="package-comparison">
  <div class="ai-package-comparison__inner">

    <div class="ai-package-comparison__head">
      <span class="ai-package-comparison__eyebrow">
        Package Comparison
      </span>

      <h2 class="ai-package-comparison__title">
        Compare implementation levels
      </h2>

      <p class="ai-package-comparison__lead">
        A clear view of how Basic, Pro, and Enterprise packages differ by scope, integrations, analytics, governance, timeline, and best business scenario.
      </p>
    </div>

    <div class="ai-package-comparison__table-wrap">
      <button class="ai-package-comparison__copy" type="button" aria-label="Copy comparison table">
        ⧉
      </button>

      <table class="ai-package-comparison__table">
        <thead>
          <tr>
            <th scope="col">Parameter</th>
            <th scope="col">Basic</th>
            <th scope="col">Pro</th>
            <th scope="col">Enterprise</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">Goal</th>
            <td>Fast pilot and first proof of value</td>
            <td>Working functional AI contour</td>
            <td>Scalable AI operating model</td>
          </tr>

          <tr>
            <th scope="row">Number of protocols</th>
            <td>1</td>
            <td>1–3</td>
            <td>3+</td>
          </tr>

          <tr>
            <th scope="row">Scale</th>
            <td>1 team / 1 process</td>
            <td>1 function / several processes</td>
            <td>Several functions / several departments</td>
          </tr>

          <tr>
            <th scope="row">Integrations</th>
            <td>Basic</td>
            <td>Extended</td>
            <td>Complex</td>
          </tr>

          <tr>
            <th scope="row">Analytics</th>
            <td>Basic KPI view</td>
            <td>Dashboard + regular review</td>
            <td>BI + AI Auditor + management views</td>
          </tr>

          <tr>
            <th scope="row">Training</th>
            <td>Initial workshop</td>
            <td>Role-based training</td>
            <td>AI Academy program + internal champions</td>
          </tr>

          <tr>
            <th scope="row">Governance</th>
            <td>Basic operating rules</td>
            <td>Access control and process owner</td>
            <td>Policy, audit trail, risk register</td>
          </tr>

          <tr>
            <th scope="row">Timeline</th>
            <td>2–6 weeks</td>
            <td>6–12 weeks</td>
            <td>3–6+ months, step by step</td>
          </tr>

          <tr>
            <th scope="row">Best scenario</th>
            <td>Test ROI on one use case</td>
            <td>Move one function into a working AI contour</td>
            <td>Rebuild several business contours at company level</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

  <form class="contact-form" id="contact-form">
    <input name="name" type="text" placeholder="Your name" required>
    <input name="email" type="email" placeholder="Your email" required>
    <input name="company" type="text" placeholder="Company">
    <input name="service_interest" type="text" placeholder="Service interest">
    <textarea name="message" placeholder="Message" required></textarea>
    <button type="submit">Send request</button>
  </form>
    `
}


export function renderaiaccounting(){
  return `
  rrrrrrrrrrrrrr
  `
}

export function serviceDragScroll() {
  const slider = document.querySelector('.ai-protocol-list__grid');

  if (!slider) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  slider.addEventListener('mousedown', (event) => {
    isDown = true;
    slider.classList.add('is-dragging');

    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

   slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('is-dragging');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('is-dragging');
  });

  slider.addEventListener('mousemove', (event) => {
    if (!isDown) return;

    event.preventDefault();

    const x = event.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.4;

    slider.scrollLeft = scrollLeft - walk;
  });
}




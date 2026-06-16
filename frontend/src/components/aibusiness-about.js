import { getAboutAiBusiness } from "../api/aboutaibusiness.js"
import operationlDiagnosis from "../content/back_photo/OperationalDiagnosis.png"
import corporateAISystem from "../content/back_photo/CorporateAISystem.png"
import whyItIsConvenient from "../content/back_photo/WhyItIsConvenient.png"
import practicalAIAutomation from "../content/back_photo/PracticalAIAutomation.png"


function setText(selector, value){
  const element = document.querySelector(selector)

  if (!element || value === undefined || value === null) return

  element.textContent = value
}

function setParagraphs(selector, paragraphs){
  const container = document.querySelector(selector)
  if(!container || !Array.isArray(paragraphs)) return

  container.innerHTML = ""

  paragraphs.forEach((paragraphText)=> {
    const paragraph = document.createElement("p")
    paragraph.textContent = paragraphText
    container.append(paragraph)
  })

}

export async function hydrateAboutAi(){
  try{
    const blocks = await getAboutAiBusiness()
    console.log("ABOUT BLOCKS FROM API:", blocks)

    blocks.forEach((block) => {
      setText( `[data-aboutai-field="${block.key}.eyebrow"]`, block.eyebrow)

      setText( `[data-aboutai-field="${block.key}.title"]`, block.title)

      setParagraphs( `[data-aboutai-paragraphs="${block.key}"]`, block.paragraphs)
    })
  }
  catch(error){
      console.error("Failed to load About AI Business", error)
  } 
}

export function renderAIBusinessAbout(){
    return `
    <section class="about-core" id="about">
      <div class="about-core__inner">
        <section class="about-core__hero">
          <span class="about-core__eyebrow" data-aboutai-field="corporate-core.eyebrow">
            About
          </span>

          <h1 class="about-core__title" data-aboutai-field="corporate-core.title">
            Corporate Core
          </h1>

          <div class="about-core__hero-text" data-aboutai-paragraphs="corporate-core">
            <p>
              Project Paradise Core 89 is a corporate AI direction created for companies that need clear operational results, not technological noise.
            </p>

            <p>
              We help businesses implement artificial intelligence into real working processes: documents, accounting, marketing, CRM, communications, internal routine, and analytics. Our goal is not simply to add an “AI feature” to a company, but to build a system that reduces manual workload, accelerates decision-making, and makes business processes more manageable.
            </p>
          </div>
        </section>

        <section class="about-core__split about-core__split--text-image">
          <div class="about-core__content">
            <span class="about-core__section-label" data-aboutai-field="operational-diagnosis.eyebrow">
              Operational Diagnosis
            </span>

            <h2 class="about-core__section-title" data-aboutai-field="operational-diagnosis.title">
              We start with the place where the business loses time, money, and control
            </h2>

            <p data-aboutai-paragraphs="operational-diagnosis">
              We begin with the main question: where does the business lose time, money, and control? After that, we identify bottlenecks, design an automation scenario, and create a solution that the team can use in everyday work.
            </p>
          </div>

          <div class="about-core__media about-core__media--diagnosis">
            <img src="${operationlDiagnosis}" alt="AI business process diagnosis">
          </div>
        </section>

        <section class="about-core__split about-core__split--image-text">
          <div class="about-core__media about-core__media--system">
            <img src="${corporateAISystem}" alt="Corporate AI operating system">
          </div>

          <div class="about-core__content">
            <span class="about-core__section-label" data-aboutai-field="corporate-ai-system.eyebrow">
              Corporate AI System
            </span>

            <h2 class="about-core__section-title" data-aboutai-field="corporate-ai-system.title">
              We turn overloaded processes into scalable AI scenarios
            </h2>

            <p data-aboutai-paragraphs="corporate-ai-system">
              Paradise Core 89 does not replace business logic with a beautiful interface. We transform chaotic, repetitive, and overloaded processes into clear AI scenarios that can be maintained, developed, and scaled.
            </p>

            <div class="about-core__actions" aria-label="About page actions">
              <a class="about-core__btn about-core__btn--primary" href="#services" data-page="services">
                View Services
              </a>

              <a class="about-core__btn about-core__btn--secondary" href="#contact" data-page="contact">
                Discuss Implementation
              </a>
            </div>
          </div>
        </section>

        </div>
    </section>

    

    <section class="about-work" id="what-we-do">
      <div class="about-work__inner">

        <article class="about-work__block">
          <span class="about-work__eyebrow" data-aboutai-field="what-we-do.eyebrow">
            What We Do
          </span>

          <h2 class="about-work__title" data-aboutai-field="what-we-do.title">
            What we do
          </h2>

          <div class="about-work__text" data-aboutai-paragraphs="what-we-do">
            <p>
              We create applied AI solutions for companies that need to accelerate work without losing control over their processes. At the center of our approach is not the technology itself, but a specific business task.
            </p>

            <p>
              This may include document workflow automation, invoice and contract processing, marketing material generation, CRM scenario setup, internal AI assistants, customer request structuring, or analytical dashboards for performance control.
            </p>

            <p>
              We do not start a project with the question: “Which neural network should we use?” We start with the question: “Which process prevents the company from working faster and more accurately?”
            </p>

            <p>
              After that, we analyze the task, define the automation zone, select the right tools, and create a working architecture. This approach allows AI to be implemented not as a fashionable add-on, but as a practical layer of business management.
            </p>

            <p>
              Paradise Core 89 works at the intersection of strategy, processes, and technology. That is why every solution must be not only modern, but also clear for the team, the manager, and the end user.
            </p>
          </div>
        </article>

        <article class="about-work__block" id="fast-ai-effect">
          <span class="about-work__eyebrow" data-aboutai-field="fast-effect-zones.eyebrow">
            Fast Effect Zones
          </span>

          <h2 class="about-work__title" data-aboutai-field="fast-effect-zones.title">
            Where AI creates a fast effect
          </h2>

          <div class="about-work__text" data-aboutai-paragraphs="fast-effect-zones">
            <p>
              Artificial intelligence is especially useful in areas where a company has many repetitive actions. If employees manually transfer data every day, answer similar questions, collect reports, prepare similar documents, or check the same indicators, then this process already has automation potential.
            </p>

            <p>
              AI can accelerate these areas without completely changing the company structure. It can prepare drafts, classify information, detect errors, generate options, process requests at the first stage, and collect data for analysis.
            </p>

            <p>
              We do not offer one universal package “for everyone”. Instead, we build the solution around a specific business pain: an overloaded team, slow response time, fragmented data, weak visibility, or a process that depends too much on one person.
            </p>

            <p>
              In this way, AI becomes not a decorative element, but a working tool that helps the company move faster, see the situation more clearly, and manage operations more precisely.
            </p>
          </div>
        </article>

        <ul class="about-work__areas" aria-label="AI implementation areas">
          <li class="about-work__area about-work__area--finance">
            <h3>
              Finance and documents
            </h3>

            <p>
              Automation of invoices, acts, contracts, template documents, requests, and approvals. AI helps find the required information faster, reduce manual actions, and simplify document preparation.
            </p>
          </li>

          <li class="about-work__area about-work__area--marketing">
            <h3>
              Marketing and communications
            </h3>

            <p>
              Generation of texts, ideas, visual concepts, campaign drafts, email messages, and advertising materials. This helps the marketing team move faster from an idea to a complete set of materials.
            </p>
          </li>

          <li class="about-work__area about-work__area--crm">
            <h3>
              CRM and operations
            </h3>

            <p>
              Classification of customer requests, support for managers, task control, sales funnel support, and internal assistant launch. AI helps the team respond faster and lose fewer important details.
            </p>
          </li>
        </ul>

      </div>
    </section>


    <section class="about-workflow" id="how-we-work" >
      <div class="about-workflow__inner">

        <section class="about-workflow__intro">
          <span class="about-workflow__eyebrow" data-aboutai-field="how-we-work.eyebrow">
            How We Work
          </span>

          <h2 class="about-workflow__title" data-aboutai-field="how-we-work.title">
            How we work
          </h2>

          <div class="about-workflow__text" data-aboutai-paragraphs="how-we-work">
            <p>
              Every Paradise Core 89 implementation follows a clear sequence. We do not start with a chaotic set of tools, and we do not implement AI just for the sake of implementation. First, we study the process that needs to be improved.
            </p>

            <p>
              At the first stage, we conduct an audit: we identify where the team loses time, where the same actions are repeated, where information is transferred manually, where errors appear, and where management lacks transparency.
            </p>

            <p>
              After that, we design the solution architecture. At this stage, it is important to understand how the AI scenario will be embedded into the real working rhythm of the company: who will use the system, what data is needed, which actions can be automated, and which decisions should remain under human control.
            </p>

            <p>
              Then the pilot is launched. We check the quality of the result, test scenarios, refine the logic, configure roles, and prepare the system for regular use.
            </p>

            <p>
              The final stage is the handover of the solution into operation. For us, implementation is not considered complete when the system is launched for the first time, but when the team understands how to use it without constant external support.
            </p>
          </div>
        </section>

        <section class="about-workflow__process" aria-label="Implementation process">
          <h2 class="about-workflow__process-title">
            Process
          </h2>

          <ol class="about-workflow__steps">
            <li class="about-workflow__step">
              <h3>
                Audit
              </h3>

              <p>
                We study the process, identify the bottleneck, and define where AI can create a practical effect.
              </p>
            </li>

            <li class="about-workflow__step">
              <h3>
                Architecture
              </h3>

              <p>
                We design the automation scenario, select the tools, and describe the future structure of the solution.
              </p>
            </li>

            <li class="about-workflow__step">
              <h3>
                Launch
              </h3>

              <p>
                We launch the pilot, check the result, configure the logic, and adapt the system to real working tasks.
              </p>
            </li>

            <li class="about-workflow__step">
              <h3>
                Handover
              </h3>

              <p>
                We transfer the solution to the team, define usage rules, and prepare the foundation for scaling.
              </p>
            </li>
          </ol>
        </section>

        <section class="about-workflow__split about-workflow__split--text-image">
          <div class="about-workflow__content">
            <span class="about-workflow__section-label" data-aboutai-field="why-convenient.eyebrow">
              Why It Is Convenient
            </span>

            <h2 class="about-workflow__section-title" data-aboutai-field="why-convenient.title">
              Why it is convenient to work with us
            </h2>
            <div data-aboutai-paragraphs="why-convenient">
              <p>
                We speak with business in the language of processes, tasks, and results. For the client, this means that the project is not built around abstract “AI magic”, but around a concrete scope of work, a clear next step, and an expected business effect.
              </p>

              <p>
                We believe that reliable implementation begins with transparency. That is why we define the project boundaries in advance, explain the logic of the solution, describe the deliverables, and show what role AI will perform inside the process.
              </p>
            </div>
          </div>

          <div class="about-workflow__media about-workflow__media--convenient">
            <img src="${whyItIsConvenient}" alt="Structured AI implementation discussion">
          </div>
        </section>

        <section class="about-workflow__statement">
          <p>
            We do not promise to “automate everything in one week”. That approach almost always creates false expectations. Instead, we choose a realistic entry point, launch a controlled scenario, and build a system that can be developed further.
          </p>
        </section>

        <section class="about-workflow__split about-workflow__split--image-text">
          <div class="about-workflow__media about-workflow__media--practical">
            <img src="${practicalAIAutomation}" alt="Practical AI automation system">
          </div>

          <div class="about-workflow__content">
            <span class="about-workflow__section-label" data-aboutai-field="practical-ai-automation.eyebrow">
              Practical AI Automation
            </span>

            <h2 class="about-workflow__section-title" data-aboutai-field="practical-ai-automation.title">
              A calm and structured path to AI automation
            </h2>

            <p data-aboutai-paragraphs="practical-ai-automation">
              Paradise Core 89 is suitable for companies that need a calm, structured, and practical path to AI automation. Without unnecessary technical overload, without chaotic experiments, and without solutions that only look impressive in a presentation.
            </p>
          </div>
        </section>

      </div>
    </section>

    <section class="about-cta" id="about-next-step">
      <div class="about-cta__inner">

        <span class="about-cta__eyebrow" data-aboutai-field="about-next-step.eyebrow">
          Next Step
        </span>

        <h2 class="about-cta__title" data-aboutai-field="about-next-step.title">
          Ready to see what can be automated?
        </h2>

        <div class="about-cta__text" data-aboutai-paragraphs="about-next-step">
          <p>
            If your company needs a clear entry point into AI automation, start with an overview of our services. The Services page brings together the areas that most often create a fast and visible effect: documents, accounting, marketing, CRM, operational routine, and analytics.
          </p>

          <p>
            If you already understand where the main problem is, you can move directly to a request. We will help define the starting scenario, estimate the automation potential, and choose an implementation format that fits your team.
          </p>

          <p>
            Project AI DLC helps you start with one concrete process, receive the first working result, and gradually expand AI infrastructure inside the company.
          </p>
        </div>

        <div class="about-cta__actions" aria-label="About call to action">
          <a class="about-cta__btn about-cta__btn--primary" href="#" data-page="services">
            View Services
          </a>

          <a class="about-cta__btn about-cta__btn--secondary" href="#contact" data-page="contact">
            Discuss Implementation
          </a>

          <a class="about-cta__btn about-cta__btn--ghost" href="#contact" data-page="contact">
            Open Contact
          </a>
        </div>

      </div>
    </section>
    `
}
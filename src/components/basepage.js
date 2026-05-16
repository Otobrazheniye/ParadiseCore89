import researchImg from '../content/back_photo/ResearchBckg.png'
import divisionover from '../content/back_photo/DivisionBckg.png'
import topicLogistic from '../content/back_photo/1originalSize/basepage-topics-automationn.png'
import topicAutomation from '../content/back_photo/basepage-topics-automation.png'
import topicLeadership from '../content/back_photo/basepage-topics-leadership.png'
import topicMedical from '../content/back_photo/basepage-topics-medical.png'
import topicSecurity from '../content/back_photo/basepage-topics-security.png'


export function renderBasePageMain(){
  return `
  <div class="basepage-bckg">
    <section class="basepage-main">
      <div class="wish-hero__space"></div>

      <div class="basepage-main-auth">
        <button class="basepage-main-auth__btn wish-auth__btn--register" type="button" data-i18n="auth.registration">
          Registration
        </button>
        <button class="basepage-main-auth__btn wish-auth__btn--login" type="button" data-i18n="auth.login">
          Login
        </button>

      <dialog id="auth-dialog" aria-labelledby="authTitle">
        <div class="auth-modal">
          <div class="auth-modal__header">
            <h2 id="authTitle" data-i18n="auth.authentication">Authentication</h2>
            <button type="button" data-auth-close aria-label="Close">×</button>
          </div>

          <div class="auth-modal__tabs">
            <button type="button"  class="active" data-i18n="auth.login">Login</button>
            <button type="button" data-i18n="auth.registration">Registration</button>
          </div>

          <form data-auth-form="login">
            <label>
              Email
              <input type="email" name="email" required />
            </label>

            <label>
              <span data-i18n="auth.password">Password</span>
              <input type="password" name="password" data-i18n-placeholder="auth.passwordPlaceholder" placeholder = "Enter password" required />
            </label>

            <button type="submit">Sign in</button>
          </form>

          <form data-auth-form="register" hidden>
            <label>
              Email
              <input type="email" name="email" required />
            </label>

            <label>
              Password
              <input type="password" name="password" required />
            </label>

            <button type="submit">Create account</button>
          </form>
        </div>
      </dialog>
    </div>

    <div class="wish-language">
      <button class="basepage-main-language__btn" type="button">
        Language
      </button>
    </div>

    <div class="wish-language">
      <button class="basepage-main-language__btn" type="button" data-lang="EN">EN</button>
      <button class="basepage-main-language__btn" type="button" data-lang="CZ">CZ</button>
      <button class="basepage-main-language__btn" type="button" data-lang="RU">RU</button>
      <button class="basepage-main-language__btn" type="button" data-lang="UA">UA</button>
      <button class="basepage-main-language__btn" type="button" data-lang="DE">DE</button>
      <button class="basepage-main-language__btn" type="button" data-lang="FR">FR</button>

      <button class="basepage-main-language__btn" type="button" data-lang="中文">中文</button>
      <button class="basepage-main-language__btn" type="button" data-lang="日本語">日本語</button>
      <button class="basepage-main-language__btn" type="button" data-lang="العربية">العربية</button>
      <button class="basepage-main-language__btn" type="button" data-lang="עברית">עברית</button>
    </div>
  </section>

  <section class="basepage-main-divisions">
    <div class="basepage-main-divisions__grid">

      <div class="division-card division-card--logistics">
        
        <div class="division-card__frame logistic-bckg-card">
          <div class="division-card__content">
            <button class="division-card__button phone1-division-card__button" type="button">Enter</button>
          </div>
        </div>
      </div>

      <div class="division-card division-card--scorb">
       
        <div class="division-card__frame scorb-bckg-card">
          <div class="division-card__content">
            <button class="division-card__button" type="button">Enter</button>
          </div>
        </div>
      </div>

      <div class="division-card division-card--medical">
        
        <div class="division-card__frame divisions-bckg-card">
          <div class="division-card__content">
            <button class="division-card__button" type="button">Enter</button>
          </div>
        </div>
      </div>

      <div class="division-card division-card--mining">
     
        <div class="division-card__frame mining-bckg-card">
          <div class="division-card__content">
            <button class="division-card__button phone1-division-card__button" type="button">Enter</button>
          </div>
        </div>
      </div>

    </div>
  </section>
</div> 


  `

}


export function renderBasePageTopics() {
    return `
    <section class="body-block">

      <div class="section-key-block1">
        <span class="section-key-block1_label" data-i18n="basepageResearchDivision.label">RESEARCH DIVISION</span>
        <h2 class="section-key-block1_title" data-i18n="basepageResearchDivision.title">Cognitive Systems & Intelligence</h2>
        <p class="section-key-block1_subtitle" data-i18n="basepageResearchDivision.subtitle">
          Exploring the convergence of artificial intelligence, bioanalysis, and neural architectures to redefine how knowledge is created, processed, and evolved.
        </p>
      </div>

      <div class="research-content">
        <div class="research-block1">
          <div class="body-intro">
            <p class="research-text" data-i18n="basepageResearchDivision.intro">
              Advancing the architecture of human consciousness through integrated cognitive systems, ethical AI frameworks, and next-generation bioanalysis.
            </p>
          </div>

          <div class="research-img">
            <img src="${researchImg}" loading="lazy" alt="Research Division">
          </div>  
        </div>
    
        <div class="research-block2">
          <div class="research-description">
            <p class="research-text" data-i18n="basepageResearchDivision.paragraph1">
              Our research division explores the convergence of intelligence, biology, and technology to redefine how knowledge is created, processed, and applied. 
              We develop systems that enhance memory, connect minds into unified networks, and analyze cognitive states in real time to support adaptive learning.
            </p>
            <p class="research-text" data-i18n="basepageResearchDivision.paragraph2">
              Ethical intelligence stands at the core of our work. We design AI systems capable of contextual understanding, fairness, and responsible decision-making 
              to ensure technology aligns with human values in complex environments.
            </p>
            <p class="research-text" data-i18n="basepageResearchDivision.paragraph3"> 
              Through bioanalysis and synthetic systems, we decode biological data to predict health conditions, monitor ecosystems, and engineer new materials. 
              Our goal is to harmonize technological progress with natural processes.
            </p>
            <p class="research-text" data-i18n="basepageResearchDivision.paragraph4">
              We also pioneer advanced human-machine interfaces, enabling seamless interaction between operators and complex systems across any distance or environment.
            </p>
          </div>

          <div class="research-fact">
            <p data-i18n="basepageResearchDivision.fact">
              Neural data processing efficiency increased by 63% through integrated cognitive network simulations within controlled environments.
            </p>
          </div>
        </div>
      </div>

      <div class="section-key-block1">
        <span class="section-key-block1_label" data-i18n="basepageDivisionOverview.label">DIVISION OVERVIEW</span>
        <h2 class="section-key-block1_title" data-i18n="basepageDivisionOverview.title">Strategic Architecture</h2>
        <p class="section-key-block1_subtitle" data-i18n="basepageDivisionOverview.subtitle">
          Five synchronized operational branches connected to one analytical core.
        </p>
      </div>
 
      
      <div class="divisions-content">
        <div class="divisions-hero">
          <div class="divisions-img">
            <img src="${divisionover}" loading="lazy" alt="Divisions topic">
          </div>

          <div class="divisions-intro">
            <p class="divisions-text" data-i18n="basepageDivisionOverview.intro">
              Paradise Core 89 unites strategic divisions into a single analytical organism — a system where extraction, logistics, workforce development, archives, and security no longer operate separately, but as one synchronized intelligence.
            </p>
          </div>

          <div class="divisions-fact" >
            <p data-i18n="basepageDivisionOverview.fact">
              Core stability remains at 99.7% across 42 active global networks, while all operational divisions continue to synchronize through a single protected analytical stream.
            </p>
          </div>
        </div>

        <div class="divisions-body">
          <div class="divisions-description">
            <p class="divisions-text" data-i18n="basepageDivisionOverview.paragraph1">
              Behind every visible operation stands a hidden framework of coordination. Each division functions as an independent analytical cell, yet remains permanently linked to the central core, where data is verified, contextualized, and transformed into strategic action across the entire network.
            </p>
            <p class="divisions-text" data-i18n="basepageDivisionOverview.paragraph2">
              From deep-resource extraction to adaptive logistics, from cognitive workforce programs to long-term archival intelligence and predictive security oversight, Paradise Core 89 maintains end-to-end continuity through a unified command philosophy built on precision, discipline, and controlled evolution.
            </p>
            <p class="divisions-text" data-i18n="basepageDivisionOverview.paragraph3">
              Our global infrastructure extends across active, monitored, standby, and review-stage regions, creating a tiered operational presence designed for expansion without disruption. Every signal entering the system contributes to a larger picture — one that allows the corporation to act with foresight rather than reaction.
            </p>
            <p class="divisions-quote" data-i18n="basepageDivisionOverview.quote">
              To enter the Divisions structure is to see how Paradise Core 89 truly functions: not as a company of separate departments, but as a living architecture of order, optimization, and industrial intelligence.
            </p>
          </div>
        </div>
      </div>  
    </section>


    <section class="archive-magazine">

      <div class="archive-content">

        <div class="archive-feature archive-card">
          <div class="archive-card__content">
            <span class="archive-card__label" data-i18n="basepageArchiveFeature.label">Strategic Archive</span>
            <h1 class="archive-card__title" data-i18n="basepageArchiveFeature.title">
              Paradise Core 89 expands from a closed operational system into a scalable strategic platform
            </h1>
            <p class="archive-card__desc" data-i18n="basepageArchiveFeature.desc">
              Recent internal developments indicate growing strength in security, automation,
              logistics refinement, and applied research — forming a structure with long-term
              infrastructure and innovation value.
            </p>
            <div class="archive-card__meta">
              <span data-i18n="basepageArchiveFeature.metaType">Core Review</span>
              <span>2026</span>
              <span data-i18n="basepageArchiveFeature.metaTime">8 min</span>
  
            </div>
          </div>
        </div>


        <div class="archive-small archive-card">
          <div class="archive-card__media">
            <img src="${topicSecurity}" alt="Security expansion preview">
          </div>
          <div class="archive-card__content">
            <span class="archive-card__label" data-i18n="basepageSecurity.label">Security</span>
            <h2 class="archive-card__title" data-i18n="basepageSecurity.title">
              Security operations now support expansion readiness
            </h2>
            <p class="archive-card__desc" data-i18n="basepageSecurity.desc">
              Controlled field stabilization improves territorial access,
              lowers operational risk, and supports future deployment.
            </p>
          </div>
        </div>


        <div class="archive-small archive-card">
          <div class="archive-card__media">
            <img src="${topicLogistic}" alt="Logistics systems preview">
          </div>
          <div class="archive-card__content">
            <span class="archive-card__label" data-i18n="basepageLogistics.label">Logistics</span>
            <h2 class="archive-card__title" data-i18n="basepageLogistics.title">
              Refined logistics architecture increases speed and precision
            </h2>
            <p class="archive-card__desc" data-i18n="basepageLogistics.desc">
              Process optimization and route control strengthen the flow of
              resources across divisions and reduce structural inefficiency.
            </p>
          </div>
        </div>


        <div class="archive-wide archive-card">
          
          <div class="archive-wide archive-card archive-card--system">
            <div class="archive-system">
              <div class="archive-system__header">
                <span class="archive-system__eyebrow" data-i18n="basepageArchivesystem.eyebrow">Live operational panel</span>
                <h2 class="archive-system__title" data-i18n="basepageArchivesystem.title">System Status</h2>
              </div>
          
              <div class="archive-system__metrics">
                <div class="archive-system__row">
                  <div class="archive-system__topline">
                    <span class="archive-system__name" data-i18n="basepageArchivesystem.security">Security</span>
                    <span class="archive-system__value" data-metric="security">78%</span>
                  </div>
                  <div class="archive-system__bar">
                    <div class="archive-system__fill" data-fill="security" style="width: 78%;"></div>
                  </div>
                </div>
          
                <div class="archive-system__row">
                  <div class="archive-system__topline">
                    <span class="archive-system__name" data-i18n="basepageArchivesystem.logistics">Logistics</span>
                    <span class="archive-system__value" data-metric="logistics">92%</span>
                  </div>
                  <div class="archive-system__bar">
                    <div class="archive-system__fill" data-fill="logistics" style="width: 92%;"></div>
                  </div>
                </div>
          
                <div class="archive-system__row">
                  <div class="archive-system__topline">
                    <span class="archive-system__name" data-i18n="basepageArchivesystem.automation">Automation</span>
                    <span class="archive-system__value" data-metric="automation">65%</span>
                  </div>
                  <div class="archive-system__bar">
                    <div class="archive-system__fill" data-fill="automation" style="width: 65%;"></div>
                  </div>
                </div>
              </div>
          
              <div class="archive-system__stats">
                <div class="archive-system__stat">
                  <span class="archive-system__stat-label" data-i18n="basepageArchivesystem.activeZones">Active zones</span>
                  <span class="archive-system__stat-value" data-stat="zones">12</span>
                </div>
          
                <div class="archive-system__stat">
                  <span class="archive-system__stat-label" data-i18n="basepageArchivesystem.riskLevel">Risk level</span>
                  <span class="archive-system__stat-value archive-system__stat-value--low" data-stat="risk" data-i18n="basepageArchivesystem.riskValue">LOW</span>
                </div>
          
                <div class="archive-system__stat">
                  <span class="archive-system__stat-label" data-i18n="basepageArchivesystem.sync">Sync</span>
                  <span class="archive-system__stat-value archive-system__stat-value--stable" data-stat="sync" data-i18n="basepageArchivesystem.syncValue">STABLE</span>
                </div>
              </div>
            </div>
          </div>

          <div class="archive-card__content">
            <span class="archive-card__label" data-i18n="basepageAutomation.label">Automation</span>
            <h2 class="archive-card__title" data-i18n="basepageAutomation.title">
              Autonomous systems are shifting the organization toward scalable execution
            </h2>
            <p class="archive-card__desc" data-i18n="basepageAutomation.desc">
              Intelligent transport and system-led coordination reduce routine human load
              while increasing long-term efficiency, adaptability, and strategic control.
            </p>
          </div>
        </div>


        <div class="archive-small archive-card">
          <div class="archive-card__media">
            <img src="${topicLeadership}" alt="Leadership preview">
          </div>
          <div class="archive-card__content">
            <span class="archive-card__label" data-i18n="basepageLeadership.label">Leadership</span>
            <h2 class="archive-card__title" data-i18n="basepageLeadership.title">
              Leadership quality remains a visible growth multiplier
            </h2>
            <p class="archive-card__desc" data-i18n="basepageLeadership.desc">
              Strong management signals institutional stability,
              internal trust, and better execution across complex initiatives.
            </p>
          </div>
        </div>

        <div class="archive-small archive-card">
          <div class="archive-card__media">
            <img src="${topicMedical}" alt="Medical innovation preview">
          </div>
          <div class="archive-card__content">
            <span class="archive-card__label" data-i18n="basepageMedical.label">Medical Research</span>
            <h2 class="archive-card__title" data-i18n="basepageMedical.title">
              Applied research opens a path beyond industrial operations
            </h2>
            <p class="archive-card__desc" data-i18n="basepageMedical.desc">
              Material-based therapeutic development suggests future intellectual property,
              diversification, and access to higher-value innovation sectors.
            </p>
          </div>
        </div>

      </div>
    </section>
    `
}

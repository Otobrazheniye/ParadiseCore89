import researchImg from '../content/back_photo/ResearchBckg.png'


export function renderBasePageMain(){
  return `
  <div class="basepage-bckg">

   
  <section class="basepage-main">
    <div class="wish-hero__space"></div>

    <div class="basepage-main-auth">
      <button class="basepage-main-auth__btn wish-auth__btn--register" type="button">
        Registration
      </button>
      <button class="basepage-main-auth__btn wish-auth__btn--login" type="button">
        Login
      </button>


    <dialog id="auth-dialog" aria-labelledby="authTitle">
      <div class="auth-modal">
        <div class="auth-modal__header">
          <h2 id="authTitle">Authentication</h2>
          <button type="button" data-auth-close aria-label="Close">×</button>
        </div>

        <div class="auth-modal__tabs">
          <button type="button" data-auth-tab="login" class="active">Login</button>
          <button type="button" data-auth-tab="register">Register</button>
        </div>

        <form data-auth-form="login">
            <label>
           Email
            <input type="email" name="email" required />
            </label>

         <label>
            Password
            <input type="password" name="password" required />
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
  </section>

  <section class="basepage-main-divisions">
    <div class="basepage-main-divisions__grid">

      <div class="division-card division-card--logistics">
        
        <div class="division-card__frame logistic-bckg-card">
          <div class="division-card__content">
            <button class="division-card__button" type="button">Enter</button>
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
            <button class="division-card__button" type="button">Enter</button>
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
        <span class="section-key-block1_label">RESEARCH DIVISION</span>
        <h2 class="section-key-block1_title">Cognitive Systems & Intelligence</h2>
        <p class="section-key-block1_subtitle">
          Exploring the convergence of artificial intelligence, bioanalysis, and neural architectures to redefine how knowledge is created, processed, and evolved.
        </p>
      </div>

      <div class="research-content">
        <div class="research-block1">
          <div class="body-intro">
            <p class="research-text">
              Advancing the architecture of human consciousness through integrated cognitive systems, ethical AI frameworks, and next-generation bioanalysis.
            </p>
          </div>

          <div class="research-img">
            <img src="${researchImg}" loading="lazy" alt="Research Division">
          </div>  
        </div>
    
        <div class="research-block2">
          <div class="research-description">
            <p class="research-text">
              Our research division explores the convergence of intelligence, biology, and technology to redefine how knowledge is created, processed, and applied. 
              We develop systems that enhance memory, connect minds into unified networks, and analyze cognitive states in real time to support adaptive learning.
            </p>
            <p class="research-text">
              Ethical intelligence stands at the core of our work. We design AI systems capable of contextual understanding, fairness, and responsible decision-making 
              to ensure technology aligns with human values in complex environments.
            </p>
            <p class="research-text"> 
              Through bioanalysis and synthetic systems, we decode biological data to predict health conditions, monitor ecosystems, and engineer new materials. 
              Our goal is to harmonize technological progress with natural processes.
            </p>
            <p class="research-text">
              We also pioneer advanced human-machine interfaces, enabling seamless interaction between operators and complex systems across any distance or environment.
            </p>
          </div>

          <div class="research-fact">
            <p>
              Neural data processing efficiency increased by 63% through integrated cognitive network simulations within controlled environments.
            </p>
          </div>
        </div>
      </div>

      <div class="section-key-block1">
        <span class="section-key-block1_label">DIVISION OVERVIEW</span>
        <h2 class="section-key-block1_title">Strategic Architecture</h2>
        <p class="section-key-block1_subtitle">
          Five synchronized operational branches connected to one analytical core.
        </p>
      </div>
 
      
      <div class="divisions-content">
        <div class="divisions-hero">
          <div class="divisions-img">
            <img src="/src/content/back_photo/DivisionBckg.png" loading="lazy" alt="Divisions topic">
          </div>

          <div class="divisions-intro">
            <p class="divisions-text">
              Paradise Core 89 unites strategic divisions into a single analytical organism — a system where extraction, logistics, workforce development, archives, and security no longer operate separately, but as one synchronized intelligence.
            </p>
          </div>

          <div class="divisions-fact">
            <p>
              Core stability remains at 99.7% across 42 active global networks, while all operational divisions continue to synchronize through a single protected analytical stream.
            </p>
          </div>
        </div>

        <div class="divisions-body">
          <div class="divisions-description">
            <p class="divisions-text">
              Behind every visible operation stands a hidden framework of coordination. Each division functions as an independent analytical cell, yet remains permanently linked to the central core, where data is verified, contextualized, and transformed into strategic action across the entire network.
            </p>
            <p class="divisions-text">
              From deep-resource extraction to adaptive logistics, from cognitive workforce programs to long-term archival intelligence and predictive security oversight, Paradise Core 89 maintains end-to-end continuity through a unified command philosophy built on precision, discipline, and controlled evolution.
            </p>
            <p class="divisions-text">
              Our global infrastructure extends across active, monitored, standby, and review-stage regions, creating a tiered operational presence designed for expansion without disruption. Every signal entering the system contributes to a larger picture — one that allows the corporation to act with foresight rather than reaction.
            </p>
            <p class="divisions-quote">
              To enter the Divisions structure is to see how Paradise Core 89 truly functions: not as a company of separate departments, but as a living architecture of order, optimization, and industrial intelligence.
            </p>
          </div>
        </div>
      </div>

    </section>
    `
}

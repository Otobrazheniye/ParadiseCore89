import { createContactRequest } from "../api/contactRequestApi.js";

export function setupContactForm(){
    const contactForm = document.querySelector('#contact-form')
    if(!contactForm) return

    contactForm.addEventListener('submit', async (event)=>{
        event.preventDefault()

        const formData = new FormData(contactForm)

        const contactData = {
            name: formData.get('name'), 
            email: formData.get('email'),
            company: formData.get('company'), 
            service_interest: formData.get('service_interest'),
            message: formData.get('message'),    
        }    

        try {
            const result = await createContactRequest(contactData)
            console.log('Contact request created', result)

            contactForm.reset()
            alert('Request sent successfully')
        }
        catch(error){
            console.error('Contact request error:', error)
            console.error('Status:', error.response?.status)

            console.log(
              'Backend validation errors:',
              JSON.stringify(error.response?.data, null, 2)
     )

  alert('Failed to send request.')
        }
    })
}


export function renderAIBusinessContactPage() {
  return `
    <section class="mint-contact">
      <div class="mint-contact__inner">

        <div class="mint-contact__hero">
          <div class="mint-contact__intro">
            <span class="mint-contact__eyebrow">
              Direct Business Contact
            </span>

            <h1>
              Let’s define the right AI direction for your company
            </h1>

            <p>
              Tell us what you want to improve. We will help you choose the right AI Business service, package or training path without unnecessary technical confusion.
            </p>
          </div>

          <aside class="mint-contact__support">
            <span class="mint-contact__support-label">
              We can help with
            </span>

            <ul>
              <li>Choosing the right AI Business package</li>
              <li>Understanding which services your company needs</li>
              <li>Preparing automation scenarios</li>
              <li>Structuring your business request</li>
              <li>Explaining training and access options</li>
            </ul>
          </aside>
        </div>

        <div class="mint-contact__layout">

          <section class="mint-contact__info">
            <span class="mint-contact__info-label">
              Why contact us?
            </span>

            <h2>
              Start with a clear request, not with chaos
            </h2>

            <p>
              Every company has different processes, limits and priorities. Some businesses need accounting automation, others need CRM logic, analytics, marketing support or internal workflow control.
            </p>

            <p>
              You can describe your current business challenge, the service you are interested in, your company size, or simply ask where to start. We will help you identify the most useful direction and explain the next steps clearly.
            </p>

            <p>
              This form is the fastest way to start a conversation about AI implementation, service access, package selection or training programs inside the AI Business direction.
            </p>
          </section>

          <section class="mint-contact__form-card">
            <span class="mint-contact__form-label">
              Send request
            </span>

            <h2>
              Contact AI Business
            </h2>

            <p class="mint-contact__form-text">
              Send us your request and we will help you understand what solution fits your company best.
            </p>

            <form class="mint-request-form" id="contact-form">
              <label class="mint-request-form__field">
                <span>Your name</span>
                <input name="name" type="text" placeholder="Your name" required>
              </label>

              <label class="mint-request-form__field">
                <span>Your email</span>
                <input name="email" type="email" placeholder="Your email" required>
              </label>

              <label class="mint-request-form__field">
                <span>Company</span>
                <input name="company" type="text" placeholder="Company">
              </label>

              <label class="mint-request-form__field">
                <span>Service interest</span>
                <select name="service_interest">
                  <option value="">Choose service interest</option>
                  <option value="AI Accounting">AI Accounting</option>
                  <option value="AI Marketing & Design">AI Marketing & Design</option>
                  <option value="CRM Intelligence">CRM Intelligence</option>
                  <option value="Operations Automation">Operations Automation</option>
                  <option value="Business Analytics & AI Auditor">Business Analytics & AI Auditor</option>
                  <option value="Training Programs">Training Programs</option>
                  <option value="Package Plans">Package Plans</option>
                </select>
              </label>

              <label class="mint-request-form__field">
                <span>Message</span>
                <textarea name="message" placeholder="Tell us what you need help with" required></textarea>
              </label>

              <button class="mint-request-form__submit" type="submit">
                Send request
              </button>
            </form>
          </section>

        </div>

      </div>
    </section>
  `
}
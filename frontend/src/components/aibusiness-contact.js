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

            alert('Failed to send request.');
        }
    })
}

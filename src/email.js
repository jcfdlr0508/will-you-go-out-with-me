import emailjs from '@emailjs/browser'

const publicKey = 'yRnPW0hL1Llm3LJ5z'

emailjs.init({ publicKey })

export function sendEmail(templateParams = {}) {
  return emailjs.send('service_0z04t0c', 'template_rg240xy', templateParams)
}

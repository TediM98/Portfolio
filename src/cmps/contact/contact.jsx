import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

export function Contact() {
  const form = useRef()

  function sendEmail(ev) {
    ev.preventDefault()

    emailjs
      .sendForm(
        'service_emhfa3m',
        'template_pxyg89f',
        form.current,
        'sAiCDY2LMXJ6YQNYj'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    ev.target.reset()
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options flex">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>tedimarunchak@gmail.com</h5>
            <a href="mailto:tedimarunchak@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Tedi Marunchak</h5>
            <a href="https://m.me/tedi.marunchack" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>0526056875</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+972526056875"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} className="flex" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

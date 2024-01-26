/* eslint-disable react/react-in-jsx-scope */
import React, { useRef } from 'react'
import { emailjs } from '@emailjs/browser'

export const ContactUs = () => {
  const form = useRef()
  let confirmMessage = ''

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_o6semg5', 'template_fngu4h2', form.current, '8Rs9RvEbWiGOIy4pj').then(
      result => {
        console.log(result.text)
        console.log('message send')
        confirmMessage = 'MESSAGE ENVOYÉ'
      },
      error => console.log(error.text)
    )
  }

  return (
          <div className="ContactUs">
              <h1>Contact Us</h1>
              <form className="ContactUs-form" ref={form} onSubmit={sendEmail}>
                  <input type="text" name="user_name" placeholder="Your name" />
                  <input type="email" name="user_mail" placeholder="Your mail" />
                  <textarea placeholder="Your message" name="message"/>
                  <input className="ContactUs-button" type="submit" value="Send" />
                  <p>{confirmMessage}</p>
              </form>
          </div>
  )
}

import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { FiInstagram } from 'react-icons/fi'
import { useRef } from 'react';

import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s3psc6v', 'template_uv7cxn2', form.current, 'dq9-H2f0O4cAGPnpn')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Connect Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='icon'/>
            <h4>Email</h4>
            <h5>jayasurya6720@gmail.com</h5>
            <a href="mailto:ilayabharathi178@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='icon'/>
            <h4>Messenger</h4>
            <h5>Jaser Lee</h5>
            <a href="https://www.messenger.com/t/100013065042799" target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <FiInstagram className='icon'/>
            <h4>Instagram</h4>
            <h5>rc_lee_offi</h5>
            <a href="https://www.instagram.com/direct/t/105334957530742/" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
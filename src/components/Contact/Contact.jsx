import React from 'react'
import './Contact.css'
import contact_img from '../../assets/contact.svg'

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us!</h1>

      <div className="contact_main">
      <div className="contact_img">
        <img src={contact_img} alt="Contact Visual" />
      </div>
        <div className="contact_info">
        <p>We’d love to hear from you! Whether you have a question, feedback, or want to explore collaboration opportunities — just drop us a message below.</p>
          <form action="https://formspree.io/f/xldnzgwo" method="POST" className="contact_form">
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact;

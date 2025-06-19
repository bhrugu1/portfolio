import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tclgp8j',     // replace with EmailJS service ID
      'template_j9ll7nn',    // replace with EmailJS template ID
      form.current,
      'cbeR8rSP3AQL0ISEZ'      // replace with your EmailJS public key
    ).then(
      () => {
        alert('Message sent!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Try again.');
        console.error(error);
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

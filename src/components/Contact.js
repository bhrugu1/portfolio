import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { motion } from 'framer-motion';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tclgp8j',
      'template_j9ll7nn',
      form.current,
      'cbeR8rSP3AQL0ISEZ'
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
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <motion.input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
        <motion.button
          type="submit"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;

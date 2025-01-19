import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function ContactUs() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2ooz43w', 
        'template_l1d72sq', 
        form.current, {
        publicKey: '248bpHNJIeRS-xIOS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully');

        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message not sent');
        },
      );
  };


  return (
    <div>
      <h1>Contact Us</h1>

      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      
    </div>
  )
}

export default ContactUs

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/EmailSender.css';

function EmailSender() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gdewdks', 'template_jdvcdp6', form.current, 'H38wJm5i0yMA3k6UV')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
}

export default EmailSender;

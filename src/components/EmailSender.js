import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/EmailSender.css';

function EmailSender() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {

      emailjs.sendForm('service_gdewdks', 'template_jdvcdp6', form.current, 'H38wJm5i0yMA3k6UV')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });

        setName("");
        setEmail("");
        setEmailMessage("");
    };

    const sendIfIsNotEmptyField = (e) => {
        e.preventDefault();
        if (name.trim().length === 0 || email.trim().length === 0 || emailMessage.trim().length === 0) {
            console.log("Input value is empty!");
        } else {
            sendEmail(e);
        }
    }

    return (
        <div className='email-form-container'>
            <form ref={form} onSubmit={sendIfIsNotEmptyField} className='email-form'>
                <label>Name</label>
                <input className='form-input' type="text" name="user_name" onChange={(event)=> setName(event.target.value)}/>
                <label>Email</label>
                <input className='form-input' type="email" name="user_email" onChange={(event)=> setEmail(event.target.value)} />
                <label>Message</label>
                <textarea name="message" onChange={(event)=> setEmailMessage(event.target.value)}/>
                <input className='send-btn' type="submit" value="Send Email" />
            </form>
        </div>
    );
}

export default EmailSender;

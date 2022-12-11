import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { themeContext } from "../../Context";
import { useContext } from "react";


const Contact = () => {

  const form = useRef();

  // const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9y87pwy', 'template_vegp3hu', form.current, 'GngX1EgmqY8VzW_d_')
      .then((result) => {
          console.log(result.text);
          // setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
         <div className="awesome">
            <span style={{color: darkMode? 'white' : ''}}>Get in touch</span>
            <span>Contact Me</span>
            <div className="blur s-blur1"
            style={{background: "#abf1ff94"}}
            ></div>
         </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea type="message" name='user_name' className='user' placeholder='Message' />
                <input type="submit" value='Send' className='button'/>
                {/* <span>{done && "Thanks for contacting"}</span> */}
                <div className="blur c-blur1"
                style={{background: 'var(--purple)'}}
                ></div>
            </form>
        </div>


    </div>
  )
}

export default Contact
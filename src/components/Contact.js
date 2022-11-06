import React from 'react';
import './style.css';


function Contact() {

  return (
    <div className="Wrapper">
      <h2 className='common-heading'>Feel Free to Contact us</h2>

      <div className='container'>
        <div className='contact-form'>
          <form action='https://formspree.io/f/mqkjgral' method="POST" className='contact-inputs'>
            <input 
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required/>

            <input 
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required/>

            <textarea 
              name='message'
              cols="30"
              rows="6"
              cutoComplete="off"
              required></textarea>

            <input type="submit" value="send"/>
          </form>
        </div>
      </div>
    </div>
      
    
  );
}

export default Contact;

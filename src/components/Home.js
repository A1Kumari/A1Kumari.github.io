import React from 'react';
import Typewriter from "typewriter-effect";

import './style.css';



function Home() {
  return (
    <>
      <img className='hero-img' src="./images/DALL_E2.png" alt="hero-img"/>
    
      <div className="typewrite">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("GeeksForGeeks")
         
       .pauseFor(1000)
       .deleteAll()
       .typeString("Welcomes You")
       .start();
       }}
       />
    </div>
    </>
  );
}

export default Home;

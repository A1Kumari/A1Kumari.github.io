import React from 'react';
import './style.css';

function Skills() {
  return (
    <>
    <div className='shapes'>
      <div className='triangle-topleft'></div>
      <div className='triangle-bottomleft2'></div>
    </div>

    <div className='abt'>
      <h2>Skills</h2>
      <img className='hero-img' src="./images/img5.png " alt="hero-img"/>
      <div className='skill-box'>
        <span className='title'>HTML</span>
        <div className='skill-bar'>
          <span className='skill-per html'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>

      <div className='skill-box'>
        <span className='title'>CSS</span>
        <div className='skill-bar'>
          <span className='skill-per css'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>

      <div className='skill-box'>
        <span className='title'>javaScript</span>
        <div className='skill-bar'>
          <span className='skill-per javascript'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>

      <div className='skill-box'>
        <span className='title'>Nodejs</span>
        <div className='skill-bar'>
          <span className='skill-per nodejs'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>

      <div className='skill-box'>
        <span className='title'>Reactjs</span>
        <div className='skill-bar'>
          <span className='skill-per reactjs'>
            <span className='tooltip'>95%</span>
          </span>
        </div>
      </div>

      
    </div>
    </>
  );
}

export default Skills;

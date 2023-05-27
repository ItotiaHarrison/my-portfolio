import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'


function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>
                    Hi I'm
                </span>
                <span>Harrison Itotia</span>
                <span>
                Am a Junior software developer keen to get real-world experience and help a dynamic software development team succeed.
Having a firm grounding in the fundamentals of software development and programming languages like Javascript and Python,
I'm excited to put my knowledge in use and continue to develop my abilities in a work setting.
                </span>
            </div>

            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <a href="https://github.com/ItotiaHarrison">
                <img src={Github} alt="" />
                </a>

                <a href="https://www.linkedin.com/in/harrison-itotia/">
                <img src={LinkedIn} alt="" />
                </a>
                
                
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            i AM RIGHT SIDE
        </div>
    </div>  )
}

export default Intro
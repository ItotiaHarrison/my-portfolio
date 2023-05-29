import React, { useContext } from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";


function Intro() {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="Intro" id='Intro'>
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>
            Hi I'm
          </span>
          <span>Harrison Itotia</span>
          <span>
            Am a Junior software developer keen to get real-world experience and help a dynamic software development team succeed.
            Having a firm grounding in the fundamentals of software development and programming languages like Javascript and Python,
            I'm excited to put my knowledge in use and continue to develop my abilities in a work setting.
          </span>
        </div>

        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>

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
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          
          <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        {/* blur parts */}
        <div className="blur" style={{ background: 'rgb(238 210 255)' }}>
        </div>

        <div className="blur" style={{ background: 'C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem' }}></div>

      </div>
    </div>)
}

export default Intro
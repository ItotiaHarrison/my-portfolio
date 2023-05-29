import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

export default function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>itotiacodes@gmail.com</span>
        <div className="f-icons">
          <Twitter color="white" size={"3rem"} />
          <Linkedin color="white" size={"3rem"} />
          <Github color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  )
}

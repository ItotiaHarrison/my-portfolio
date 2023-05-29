import React, {useContext} from 'react';
import { themeContext } from "../../Context";
import './Experience.css';

function Experience() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='experience'>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2+</div>
            <span style={{color: darkMode?'white':''}}>years </span>
            <span>experience </span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2+</div>
            <span style={{color: darkMode?'white':''}}>completed </span>
            <span>projects </span>
        </div>
        <div className="achievement">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2+</div>
            <span style={{color: darkMode?'white':''}}>companies </span>
            <span>worked for </span>
        </div>
    </div>
  )
}

export default Experience
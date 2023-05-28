import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Harrison Software development Resume.pdf'

function Services() {
    return (
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore atque soluta
                    <br />
                    autem blanditiis amet, quis id numquam. Voluptas veritatis quos at quibusdam</span>

                    <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                    </a>
                    
                    <div className="blur s-blur" style={{background: 'ABF1FF94'}}></div>
            </div>

            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card emoji={HeartEmoji} heading={'Design'} detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}/>
                </div>

                <div style={{top: '12rem', left: '-4rem'}}>
                    <Card emoji={Glasses} heading={'Developer'} detail={'Html, CSS, Javascript, React'}/>
                </div>

                <div style={{top: '19rem', left: '12rem'}}>
                    <Card emoji={Humble} heading={'UI/UX'} detail={'Html, CSS, Javascript, React'}/>
                </div>

            </div>
        </div>
    )
}

export default Services
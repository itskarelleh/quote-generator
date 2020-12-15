import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header({ setLightsOn, setRandomized }) {

    const [ isTouched, setIsTouched ] = useState(false);

    const changeLightMode = () => {
        var switchBtn = document.getElementById("switch-btn");

        if(isTouched) {
            switchBtn.style.left = '0px';
            setIsTouched(false);
            setLightsOn(false);
            console.log(isTouched);
        }

        if(!isTouched) {
            switchBtn.style.left = '20px';
            setIsTouched(true);
            setLightsOn(true);
            console.log(isTouched);
        }

        return null;
    }

    return(
        <nav className={`site-nav ${!isTouched ? "light-dim" : "dark-dim" }`}>
            <div className="brand">
                <h2>Quotes Inspo</h2>
            </div>

            <div className="menu">
                <button className={`${!isTouched ? "light-text" : "dark-text"}`} 
                onClick={() => {
                    setRandomized(true);
                }} style={{background: 'none', border: 'none'}}>
                    <i className="fas fa-random"><span>Randomize</span></i>
                </button>
                
                <div className="dark-mode">
                    <i className="fas fa-sun"></i>
                    <span className="switch">
                        <motion.button id="switch-btn" 
                        className={`button-switch ${!isTouched ? 'light-btn' : 'dark-btn'}`}
                        onTap={changeLightMode}></motion.button>
                        <div className={`switch-bar ${!isTouched ? "dark-bg" : "light-bg"}`}></div>
                    </span>
                    <i className="fas fa-moon"></i>
                </div>
            </div>
        </nav>
    )
}
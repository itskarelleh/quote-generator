import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header({ setLightsOn }) {

    const [ isTouched, setIsTouched ] = useState(false);

    const changeLightMode = () => {
        var switchBtn = document.getElementById("switch-btn");

        if(isTouched) {
            switchBtn.style.right = '25px';
            setIsTouched(false);
            setLightsOn(false);
        }

        if(!isTouched) {
            switchBtn.style.right = '75px';
            setIsTouched(true);
            setLightsOn(true);
        }

        return null;
    }

    return(
        <nav className={`site-nav ${!isTouched ? "light" : "dark" }`}>
            <div className="brand">
                <h6>So Many Quotes</h6>
            </div>

            <div className="menu">
                <i className="fas fa-random"></i>
                <div className="dark-mode">
                    <i className="fas fa-sun"></i>
                    <span className="switch">
                        <motion.button id="switch-btn" 
                        className="button-switch"
                        onTap={changeLightMode}></motion.button>
                        <div className="switch-bar"></div>
                    </span>
                    <i className="fas fa-moon"></i>
                </div>
            </div>
        </nav>
    )
}
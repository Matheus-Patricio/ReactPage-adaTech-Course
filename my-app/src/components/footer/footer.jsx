import logoImg from '../../assets/imgs/meteorite.png'
import React from "react";
import './footer_style.css'

export function Footer() {
    return(
        <footer id="footer-content">
            <div className="footer-brand">
                <img src={logoImg} alt="SpaceY" id='brand-logo' />
                <h1>SPACE Y</h1>
            </div>
            
            <span>
                <a href="https://github.com/Matheus-Patricio">By @matheus-patricio.</a>  
            </span>
        </footer>
    )
}
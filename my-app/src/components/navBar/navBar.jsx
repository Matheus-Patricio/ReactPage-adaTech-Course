import React from "react";
import './navbar_style.css'
import logoImg from '../../assets/imgs/meteorite.png'

class NavBar extends React.Component {
    render() {
        return (
            <header>
                <nav id="navbar">
                    <div className="nav-brand">
                        <img src={logoImg} alt="" className='brand-logo'/>
                        <h1>SPACE Y</h1>
                    </div>
        
                    <ul className="nav-List">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Trandings</a></li>
                        <li><a href="/">Categories</a></li>
                    <li><a href="/">About us</a></li>
                     </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar
import React from 'react';
import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/images/Images/Mohan-muruge.jpg";
import "./Header.scss";


const Header = () => {
    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <img className="nav__logo-image" src={logo} alt= "logo" />
            </div>
            <div className='nav__avatar'>
                <input className='nav__search' type="search" placeholder="Search" id="search" name="search"></input>
                <img className="nav__avatar-mohan" src={avatar} alt="Mohan Muruge Avatar"></img>
            </div>
            <div className='nav__button'>
                <input className='nav__search-tablet' type="search" placeholder="Search" id="search" name="search"></input>
                <button className='nav__button-upload'>UPLOAD</button>
                <img className="nav__avatar-mohan-tablet" src={avatar} alt="Mohan Muruge Avatar"></img>
            </div>

            
        </nav>
    );
};

export default Header;
import React, { useState } from 'react';
import skogLogo from "../../assets/skog_logo.png"
import "./NavBar.css"
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };



    return ( 
        <nav className='nav-bar'>
           <div className="nav-bar-wrapper">
                <div className="nav-bar-logo">
                    <img src={skogLogo} alt="Skog Logo" />
                </div>
                
      
                <div className={`nav-bar-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
                    <ul>
                        <li><a href="" onClick={closeMenu}>Home</a></li>
                        <li><a href="" onClick={closeMenu}>Products</a></li>
                        <li><a href="" onClick={closeMenu}>About Us</a></li>
                    </ul>
                    
                 
                    <div className='nav-bar-cta-mobile'>
                        <PrimaryButton 
                            text={"Request a Quote"} 
                            iconSide={"right"} 
                            icon={<i className="fa-regular fa-comment-dots"></i>}
                            onClick={closeMenu}
                        />
                    </div>
                </div>
                
               
                <div className='nav-bar-cta-wrapper'>
                    <PrimaryButton 
                        text={"Request a Quote"} 
                        iconSide={"right"} 
                        icon={<i className="fa-regular fa-comment-dots"></i>}
                    />
                </div>
                
              
                <button 
                    className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
                
             
                {isMenuOpen && (
                    <div className="mobile-menu-overlay" onClick={closeMenu}></div>
                )}
           </div>
        </nav>
     );
}
 
export default NavBar;
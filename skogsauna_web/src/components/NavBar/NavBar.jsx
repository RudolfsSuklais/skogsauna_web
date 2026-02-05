import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import skog_logo from "../../assets/skog_logo.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const languageRef = useRef(null);

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'FI', name: 'Suomi', flag: '🇫🇮' },
    { code: 'SE', name: 'Svenska', flag: '🇸🇪' },
    { code: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'NO', name: 'Norsk', flag: '🇳🇴' },
  ];

  const navItems = [
    { id: 1, name: 'Home', href: '#' },
    { id: 2, name: 'Models', href: '#' },
    { id: 3, name: 'Wellness', href: '#' },
    { id: 4, name: 'Materials', href: '#' },
    { id: 5, name: 'Showroom', href: '#' },
    { id: 6, name: 'Contact', href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (langCode) => {
    setSelectedLanguage(langCode);
    setIsLanguageOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          
          <div className="logo-image">
            <img src={skog_logo} alt="" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a href={item.href} className="nav-link">
                  <span className="nav-text">{item.name}</span>
                  <span className="nav-indicator"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side controls */}
        <div className="navbar-actions">
          {/* Language dropdown */}
          <div className="language-wrapper" ref={languageRef}>
            <button 
              className={`language-btn ${isLanguageOpen ? 'active' : ''}`}
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              aria-label="Select language"
            >
              <span className="language-flag">{currentLanguage.flag}</span>
              <span className="language-code">{currentLanguage.code}</span>
              <svg className="chevron" width="12" height="12" viewBox="0 0 12 12">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" fill="none" strokeWidth="1.2"/>
              </svg>
            </button>
            
            <div className={`language-menu ${isLanguageOpen ? 'show' : ''}`}>
              <div className="language-menu-header">
                <span>Select Language</span>
              </div>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`language-item ${selectedLanguage === lang.code ? 'selected' : ''}`}
                  onClick={() => handleLanguageSelect(lang.code)}
                >
                  <span className="item-flag">{lang.flag}</span>
                  <span className="item-name">{lang.name}</span>
                  <span className="item-code">{lang.code}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="cta-btn">
            <span className="cta-text">Request Quote</span>
            <svg className="cta-icon" width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 3V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Mobile menu toggle */}
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`toggle-icon ${isMenuOpen ? 'open' : ''}`}>
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      
      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <div className="mobile-logo">THERMAL SAUNA</div>
          <div className="mobile-language">
            <span className="mobile-flag">{currentLanguage.flag}</span>
            <span>{currentLanguage.name}</span>
          </div>
        </div>
        
        <ul className="mobile-nav">
          {navItems.map((item) => (
            <li key={item.id} className="mobile-item">
              <a 
                href={item.href} 
                className="mobile-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="mobile-footer">
          <button className="mobile-cta">Book Consultation</button>
          <div className="mobile-contact">
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M14 11V13C14 13.5304 13.7893 14.0391 13.4142 14.4142C13.0391 14.7893 12.5304 15 12 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V11" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8 11L10.5 8.5L8 6L5.5 8.5L8 11Z" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8 11V3" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 16 16">
                <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M2 4L8 8L14 4" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              <span>info@thermalsauna.com</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
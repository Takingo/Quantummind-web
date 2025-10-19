import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/app-development', label: t.nav.appDevelopment },
    { path: '/nfc-systems', label: t.nav.nfcSystems },
    { path: '/uwb-rtls', label: t.nav.uwbRtls },
    { path: '/solutions', label: t.nav.solutions },
    { path: '/innovation-hub', label: t.nav.innovationHub },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Logo width={60} height={25} showText={false} className="navbar-logo-svg" />
          <div className="logo-text">
            <span className="logo-quantum">QUANTUM</span>
            <span className="logo-mind">MIND</span>
            <span className="logo-subtitle">INNOVATION</span>
          </div>
        </Link>

        <div className="navbar-right">
          {/* Language Switcher */}
          <button 
            className="language-switcher"
            onClick={toggleLanguage}
            aria-label="Switch language"
            title={language === 'en' ? 'Deutsch' : 'English'}
          >
            <span className="lang-flag">{language === 'en' ? '🇬🇧' : '🇩🇪'}</span>
            <span className="lang-text">{language === 'en' ? 'DE' : 'EN'}</span>
          </button>

          <button 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <footer className="footer">
      <div className="footer-grid container">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-quantum">QUANTUM</span>
            <span className="logo-mind">MIND</span>
            <span className="logo-subtitle">INNOVATION</span>
          </div>
          <p className="footer-tagline">
            {t.footer.tagline}
          </p>
          <p className="footer-description">
            German technology company designing intelligent ecosystems that combine App Development, NFC Tracking, and UWB RTLS for industrial automation.
          </p>
        </div>

        <div className="footer-section">
          <h4>{t.footer.solutions}</h4>
          <ul className="footer-links">
            <li><Link to="/app-development">{t.nav.appDevelopment}</Link></li>
            <li><Link to="/nfc-systems">{t.nav.nfcSystems}</Link></li>
            <li><Link to="/uwb-rtls">{t.nav.uwbRtls}</Link></li>
            <li><Link to="/solutions">{t.nav.solutions}</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">{t.nav.contact}</Link></li>
            <li><Link to="/privacy-policy">{t.footer.privacy}</Link></li>
            <li><a href="#case-studies">Case Studies</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t.footer.contact}</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-icon">📧</span>
              <a href="mailto:info@quantummind-innovation.com">{t.footer.email}</a>
            </li>
            <li>
              <span className="contact-icon">📱</span>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </li>
            <li>
              <span className="contact-icon">💼</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <span>Germany</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {currentYear} Quantum Mind Innovation. {t.footer.rights}</p>
          <p className="footer-slogan">The Future of Things</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

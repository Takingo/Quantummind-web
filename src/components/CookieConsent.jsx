import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CookieConsent.css';

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already made a choice (accept or reject)
    const cookieChoice = localStorage.getItem('cookieChoice');
    
    if (!cookieChoice) {
      // Show banner after a small delay for better UX
      setTimeout(() => {
        setIsVisible(true);
      }, 500);
    }
  }, []);

  const handleAccept = () => {
    // Save acceptance to localStorage
    localStorage.setItem('cookieChoice', 'accepted');
    localStorage.setItem('cookiesAccepted', 'true');
    
    // Enable analytics/tracking here if you have any
    // Example: window.gtag && window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
    
    // Hide banner with animation
    setIsVisible(false);
  };

  const handleReject = () => {
    // Save rejection to localStorage
    localStorage.setItem('cookieChoice', 'rejected');
    localStorage.setItem('cookiesAccepted', 'false');
    
    // Clear any existing cookies (except essential ones)
    // Remove all non-essential cookies
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      // Don't delete essential cookies (add your essential cookie names here)
      if (name !== 'cookieChoice' && name !== 'preferred-language') {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
      }
    }
    
    // Disable analytics/tracking
    // Example: window.gtag && window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
    
    // Hide banner with animation
    setIsVisible(false);
  };

  const handleLearnMore = () => {
    // Navigate to privacy policy page
    navigate('/privacy-policy');
  };

  // Don't render anything if banner should not be visible
  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-consent-banner">
      <div className="cookie-consent-content">
        <div className="cookie-consent-icon">
          <span className="cookie-icon">🍪</span>
        </div>
        <div className="cookie-consent-main">
          <p className="cookie-consent-text">
            <strong>Cookie Notice:</strong> We use cookies to improve your experience and analyze site usage. You can accept or reject non-essential cookies.
          </p>
          <div className="cookie-consent-buttons">
            <button 
              className="cookie-btn cookie-btn-learn"
              onClick={handleLearnMore}
              aria-label="Learn more about cookies"
            >
              Learn More
            </button>
            <button 
              className="cookie-btn cookie-btn-reject"
              onClick={handleReject}
              aria-label="Reject cookies"
            >
              Reject
            </button>
            <button 
              className="cookie-btn cookie-btn-accept"
              onClick={handleAccept}
              aria-label="Accept cookies"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;

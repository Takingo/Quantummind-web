import React from 'react';
import logoImage from '../assets/Company Logo.jpg';

const Logo = ({ width = 60, height = 60, className = '', showText = true }) => {
  return (
    <div className={`quantum-logo-container ${className}`} style={{ display: 'flex', alignItems: 'center', gap: showText ? '0.8rem' : '0' }}>
      {/* Simple Logo Image */}
      <div 
        style={{
          position: 'relative',
          width: width,
          height: width,
        }}
      >
        <img 
          src={logoImage}
          alt="Quantum Mind Innovation Logo"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '100%',
            objectFit: 'contain',
            borderRadius: '15px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
          }}
        />
      </div>
      
      {/* Text */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ 
            fontSize: '1.2rem', 
            fontWeight: '900', 
            color: '#FFFFFF',
            fontFamily: 'Orbitron, sans-serif',
            lineHeight: '1.1',
            letterSpacing: '1px'
          }}>
            QUANTUM MIND
          </div>
          <div style={{ 
            fontSize: '0.4rem', 
            fontWeight: '600', 
            color: '#FFFFFF',
            fontFamily: 'Orbitron, sans-serif',
            letterSpacing: '4px',
            marginTop: '2px',
            textAlign: 'center'
          }}>
            INNOVATION
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
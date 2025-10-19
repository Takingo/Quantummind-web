import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import './AppDevelopment.css';

const AppDevelopment = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const applications = [
    {
      title: 'Workforce Tracking & Analytics',
      description: 'Comprehensive employee monitoring with real-time analytics, attendance tracking, and productivity insights.',
      features: ['Live location tracking', 'Time & attendance', 'Performance metrics', 'Custom reports']
    },
    {
      title: 'Smart Access & Production Dashboards',
      description: 'Intelligent dashboards for production monitoring, quality control, and facility access management.',
      features: ['Real-time production data', 'Quality metrics', 'Access control', 'Equipment status']
    },
    {
      title: 'AI Environment Monitoring',
      description: 'AI-powered environmental monitoring for safety, efficiency, and compliance in industrial settings.',
      features: ['Temperature & humidity', 'Air quality sensors', 'Predictive alerts', 'Compliance reporting']
    }
  ];

  const capabilities = [
    { icon: '📱', title: 'Mobile-First', description: 'Responsive apps for iOS and Android' },
    { icon: '🖥️', title: 'Web Platforms', description: 'Progressive web applications' },
    { icon: '📊', title: 'Data Visualization', description: 'Real-time dashboards and analytics' },
    { icon: '🔒', title: 'Secure', description: 'Enterprise-grade security' },
    { icon: '⚡', title: 'High Performance', description: 'Optimized for speed and reliability' },
    { icon: '🔧', title: 'Customizable', description: 'Tailored to your needs' }
  ];

  return (
    <div className="app-development">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{language === 'en' ? 'Applications engineered for' : 'Anwendungen entwickelt für'} <span className="text-gradient">{language === 'en' ? 'precision' : 'Präzision'}</span></h1>
            <p className="hero-subtitle">
              {language === 'en' 
                ? 'Custom mobile & web applications for industrial automation, live monitoring, and intelligent control'
                : 'Individuelle Mobile- und Web-Anwendungen für Industrieautomatisierung, Live-Überwachung und intelligente Steuerung'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section section-padding">
        <div className="container">
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{language === 'en' ? 'Intelligent Software for' : 'Intelligente Software für'} <span className="text-gradient">{language === 'en' ? 'Industrial Excellence' : 'Industrielle Exzellenz'}</span></h2>
            <p>
              {language === 'en'
                ? 'Quantum Mind Innovation designs custom mobile and web applications tailored for industrial use. Our solutions provide visual dashboards, live monitoring, and automation control that empower your workforce and optimize your operations.'
                : 'Quantum Mind Innovation entwickelt maßgeschneiderte Mobile- und Web-Anwendungen für industrielle Nutzung. Unsere Lösungen bieten visuelle Dashboards, Live-Überwachung und Automatisierungssteuerung, die Ihre Arbeitskräfte stärken und Ihre Abläufe optimieren.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="applications-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{language === 'en' ? 'Example' : 'Beispiel'} <span className="text-gradient">{language === 'en' ? 'Applications' : 'Anwendungen'}</span></h2>
            <p>{language === 'en' ? 'Powerful solutions designed for modern industrial environments' : 'Leistungsstarke Lösungen für moderne Industrieumgebungen'}</p>
          </motion.div>

          <div className="applications-grid">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="application-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <h3>{app.title}</h3>
                <p>{app.description}</p>
                <ul className="feature-list">
                  {app.features.map((feature, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="capabilities-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{language === 'en' ? 'Our' : 'Unsere'} <span className="text-gradient">{language === 'en' ? 'Capabilities' : 'Fähigkeiten'}</span></h2>
          </motion.div>

          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="capability-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="capability-icon">{capability.icon}</div>
                <h4>{capability.title}</h4>
                <p>{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="visual-section">
        <div className="container">
          <motion.div
            className="visual-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="visual-text">
              <h2>{language === 'en' ? 'Futuristic' : 'Futuristische'} <span className="text-gradient">{language === 'en' ? 'Interfaces' : 'Schnittstellen'}</span></h2>
              <p>
                {language === 'en'
                  ? 'Our applications feature cutting-edge interfaces designed for tablets, monitors, and mobile devices. Experience real-time data visualization with intuitive controls and stunning visual design.'
                  : 'Unsere Anwendungen bieten modernste Benutzeroberflächen für Tablets, Monitore und mobile Geräte. Erleben Sie Echtzeit-Datenvisualisierung mit intuitiven Steuerelementen und beeindruckendem visuellem Design.'}
              </p>
              <ul className="visual-features">
                <li>Interactive dashboards with live data feeds</li>
                <li>Touch-optimized controls for industrial environments</li>
                <li>Dark mode optimized for 24/7 operations</li>
                <li>Customizable widgets and layouts</li>
              </ul>
            </div>
            <div className="visual-mockup">
              <div className="mockup-screen">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p>Production Dashboard</p>
                </div>
                <div className="mockup-content">
                  <div className="mockup-stat">
                    <span className="stat-value">94.7%</span>
                    <span className="stat-label">Efficiency</span>
                  </div>
                  <div className="mockup-stat">
                    <span className="stat-value">1,247</span>
                    <span className="stat-label">Units/Hour</span>
                  </div>
                  <div className="mockup-chart"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>{language === 'en' ? 'Discover intelligent software' : 'Intelligente Software entdecken'}</h2>
            <p>{language === 'en' ? "Let's build the perfect application for your industrial needs" : 'Lassen Sie uns die perfekte Anwendung für Ihre industriellen Bedürfnisse entwickeln'}</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              {language === 'en' ? 'Start Your Project' : 'Projekt starten'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;

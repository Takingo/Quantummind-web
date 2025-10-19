import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import './Solutions.css';

const Solutions = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  return (
    <div className="solutions">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t.solutions.heroTitle} <span className="text-gradient">{t.solutions.heroTitleHighlight}</span></h1>
            <p className="hero-subtitle">
              {t.solutions.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integration Overview */}
      <section className="integration-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{language === 'en' ? 'Complete' : 'Vollständige'} <span className="text-gradient">{language === 'en' ? 'Integration' : 'Integration'}</span></h2>
            <p>{language === 'en' ? 'Three powerful technologies working as one intelligent system' : 'Drei leistungsstarke Technologien arbeiten als ein intelligentes System'}</p>
          </motion.div>

          <div className="integration-diagram">
            <motion.div
              className="integration-layer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="layer-icon">📱</div>
              <h3>{language === 'en' ? 'Applications' : 'Anwendungen'}</h3>
              <p>{language === 'en' ? 'Visual dashboards, analytics, and control interfaces' : 'Visuelle Dashboards, Analytik und Steuerungsschnittstellen'}</p>
            </motion.div>

            <motion.div
              className="integration-plus"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              +
            </motion.div>

            <motion.div
              className="integration-layer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="layer-icon">🏷️</div>
              <h3>{language === 'en' ? 'NFC Identity' : 'NFC-Identität'}</h3>
              <p>{language === 'en' ? 'Instant authentication and equipment tracking' : 'Sofortige Authentifizierung und Geräteverfolgung'}</p>
            </motion.div>

            <motion.div
              className="integration-plus"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              +
            </motion.div>

            <motion.div
              className="integration-layer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="layer-icon">📡</div>
              <h3>{language === 'en' ? 'UWB Location' : 'UWB-Ortung'}</h3>
              <p>{language === 'en' ? 'Centimeter-accurate real-time positioning' : 'Zentimetergenaue Echtzeit-Positionierung'}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Example Integration */}
      <section className="example-section section-padding">
        <div className="container">
          <motion.div
            className="example-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Integrated <span className="text-gradient">Example</span></h2>
            <div className="example-scenario">
              <div className="scenario-card">
                <div className="scenario-step">
                  <span className="step-number">1</span>
                  <div className="step-content">
                    <h4>Worker Identification</h4>
                    <p>Employee scans NFC badge at entrance</p>
                  </div>
                </div>
                <div className="scenario-arrow">↓</div>
                <div className="scenario-step">
                  <span className="step-number">2</span>
                  <div className="step-content">
                    <h4>Real-Time Tracking</h4>
                    <p>UWB tag tracks exact position throughout facility</p>
                  </div>
                </div>
                <div className="scenario-arrow">↓</div>
                <div className="scenario-step">
                  <span className="step-number">3</span>
                  <div className="step-content">
                    <h4>Live Visualization</h4>
                    <p>Dashboard shows worker location, status, and activity</p>
                  </div>
                </div>
              </div>

              <div className="example-benefits">
                <h3>Combined Benefits:</h3>
                <ul>
                  <li>Know who is where at all times</li>
                  <li>Automated time tracking and attendance</li>
                  <li>Enhanced safety with restricted zone alerts</li>
                  <li>Optimized workflow and resource allocation</li>
                  <li>Complete audit trail for compliance</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="architecture-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>System <span className="text-gradient">Architecture</span></h2>
          </motion.div>

          <motion.div
            className="architecture-diagram"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="arch-layer">
              <h4>Devices</h4>
              <div className="arch-items">
                <span>NFC Tags</span>
                <span>UWB Tags</span>
                <span>Anchors</span>
                <span>Readers</span>
              </div>
            </div>
            <div className="arch-arrow">↓</div>
            <div className="arch-layer">
              <h4>Cloud Platform</h4>
              <div className="arch-items">
                <span>Data Processing</span>
                <span>AI Analytics</span>
                <span>Storage</span>
              </div>
            </div>
            <div className="arch-arrow">↓</div>
            <div className="arch-layer">
              <h4>Applications</h4>
              <div className="arch-items">
                <span>Web Dashboard</span>
                <span>Mobile Apps</span>
                <span>APIs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="use-cases-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Industry <span className="text-gradient">Applications</span></h2>
          </motion.div>

          <div className="use-cases-grid">
            {[
              { icon: '🏭', title: 'Manufacturing', desc: 'Production tracking, worker safety, asset management' },
              { icon: '📦', title: 'Logistics', desc: 'Warehouse operations, fleet tracking, inventory control' },
              { icon: '🏗️', title: 'Construction', desc: 'Site safety, equipment tracking, access control' },
              { icon: '🏥', title: 'Healthcare', desc: 'Asset tracking, staff location, patient flow' },
              { icon: '✈️', title: 'Aviation', desc: 'Ground operations, baggage tracking, maintenance' },
              { icon: '🚂', title: 'Transportation', desc: 'Vehicle tracking, depot management, safety systems' }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                className="use-case-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="use-case-icon">{useCase.icon}</div>
                <h4>{useCase.title}</h4>
                <p>{useCase.desc}</p>
              </motion.div>
            ))}
          </div>
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
            <h2>{language === 'en' ? 'Request a personalized demo' : 'Fordern Sie eine personalisierte Demo an'}</h2>
            <p>{language === 'en' ? 'See how our integrated ecosystem can transform your operations' : 'Sehen Sie, wie unser integriertes Ökosystem Ihre Abläufe transformieren kann'}</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              {language === 'en' ? 'Get Your Demo' : 'Demo anfordern'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import './UWBRTLS.css';

const UWBRTLS = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const benefits = [
    { icon: '🎯', title: 'Centimeter Accuracy', description: 'Precision tracking within 10-30cm range' },
    { icon: '⚡', title: 'Real-Time Updates', description: 'Live position data with minimal latency' },
    { icon: '🏭', title: 'Industrial Grade', description: 'Robust performance in harsh environments' },
    { icon: '📈', title: 'Scalable', description: 'From single rooms to entire facilities' },
    { icon: '🔋', title: 'Low Power', description: 'Energy-efficient tags with long battery life' },
    { icon: '🛡️', title: 'Interference Resistant', description: 'Works reliably around metal and obstacles' }
  ];

  const applications = [
    {
      title: 'Vehicle & Fleet Tracking',
      description: 'Monitor forklifts, AGVs, and vehicles across your facility',
      example: 'Vehicle enters hall → Detected within 3 meters → Gate opens automatically'
    },
    {
      title: 'Personnel Safety',
      description: 'Track worker locations for safety and emergency response',
      example: 'Workers tracked on live map → Proximity alerts → Restricted zone monitoring'
    },
    {
      title: 'Asset Management',
      description: 'Locate tools, equipment, and materials instantly',
      example: 'Real-time asset location → Usage analytics → Theft prevention'
    }
  ];

  return (
    <div className="uwb-rtls">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{language === 'en' ? 'Location accuracy' : 'Ortungsgenauigkeit'} <span className="text-gradient">{language === 'en' ? 'redefined' : 'neu definiert'}</span></h1>
            <p className="hero-subtitle">
              {language === 'en' ? 'Ultra-Wideband Real-Time Location Systems with centimeter-level precision' : 'Ultra-Wideband Echtzeit-Ortungssysteme mit Zentimeter-Präzision'}
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
          >
            <h2>{language === 'en' ? 'Precision' : 'Präzisions'} <span className="text-gradient">{language === 'en' ? 'Indoor Positioning' : 'Indoor-Positionierung'}</span></h2>
            <p>
              {language === 'en' 
                ? 'UWB (Ultra-Wideband) technology enables real-time indoor positioning with unprecedented accuracy. Track vehicles, personnel, and assets with centimeter-level precision, enabling automation, safety improvements, and operational intelligence.'
                : 'UWB (Ultra-Wideband) Technologie ermöglicht Echtzeit-Indoor-Positionierung mit beispielloser Genauigkeit. Verfolgen Sie Fahrzeuge, Personal und Assets mit Zentimeter-Präzision und ermöglichen Sie Automatisierung, Sicherheitsverbesserungen und operative Intelligenz.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Visual Demo */}
      <section className="demo-section">
        <div className="container">
          <motion.div
            className="demo-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="demo-visual">
              <div className="factory-map">
                <div className="map-grid"></div>
                
                {/* UWB Anchors */}
                <div className="anchor anchor-1">
                  <div className="anchor-pulse"></div>
                  <span>A1</span>
                  <div className="anchor-label">UWB Anchor</div>
                </div>
                <div className="anchor anchor-2">
                  <div className="anchor-pulse"></div>
                  <span>A2</span>
                  <div className="anchor-label">UWB Anchor</div>
                </div>
                <div className="anchor anchor-3">
                  <div className="anchor-pulse"></div>
                  <span>A3</span>
                  <div className="anchor-label">UWB Anchor</div>
                </div>
                <div className="anchor anchor-4">
                  <div className="anchor-pulse"></div>
                  <span>A4</span>
                  <div className="anchor-label">UWB Anchor</div>
                </div>
                
                {/* Tracked Objects with Live Status */}
                <div className="tracked-object forklift">
                  <div className="object-icon">🚜</div>
                  <div className="signal-ring"></div>
                  <div className="status-badge moving">Moving</div>
                  <div className="tag-label">UWB Tag</div>
                  <div className="coordinates">X: 4.2m Y: 3.8m</div>
                </div>
                
                <div className="tracked-object worker">
                  <div className="object-icon">👷</div>
                  <div className="signal-ring"></div>
                  <div className="status-badge safe">Safe</div>
                  <div className="tag-label">UWB Tag</div>
                  <div className="coordinates">X: 7.1m Y: 5.3m</div>
                </div>
                
                <div className="tracked-object asset">
                  <div className="object-icon">📦</div>
                  <div className="signal-ring"></div>
                  <div className="status-badge idle">Idle</div>
                  <div className="tag-label">UWB Tag</div>
                  <div className="coordinates">X: 2.9m Y: 1.7m</div>
                </div>

                {/* Live Tracking Dashboard */}
                <div className="live-dashboard">
                  <div className="dashboard-header">
                    <div className="status-indicator active"></div>
                    <span className="dashboard-title">Live Tracking</span>
                    <span className="update-rate">10Hz</span>
                  </div>
                  
                  <div className="tracked-items">
                    <div className="track-item">
                      <div className="item-icon">🚜</div>
                      <div className="item-info">
                        <span className="item-name">Forklift-01</span>
                        <span className="item-status moving">●  Moving</span>
                      </div>
                      <div className="item-distance">4.2m</div>
                    </div>
                    
                    <div className="track-item">
                      <div className="item-icon">👷</div>
                      <div className="item-info">
                        <span className="item-name">Worker-07</span>
                        <span className="item-status safe">●  Safe Zone</span>
                      </div>
                      <div className="item-distance">7.1m</div>
                    </div>
                    
                    <div className="track-item">
                      <div className="item-icon">📦</div>
                      <div className="item-info">
                        <span className="item-name">Asset-23</span>
                        <span className="item-status idle">●  Stationary</span>
                      </div>
                      <div className="item-distance">2.9m</div>
                    </div>
                  </div>
                  
                  <div className="dashboard-stats">
                    <div className="stat">
                      <span className="stat-value">12</span>
                      <span className="stat-label">Active Tags</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">±15cm</span>
                      <span className="stat-label">Accuracy</span>
                    </div>
                  </div>
                </div>

                {/* Proximity Alert */}
                <div className="proximity-alert">
                  <div className="alert-icon">⚠️</div>
                  <div className="alert-text">
                    <span className="alert-title">Proximity Alert</span>
                    <span className="alert-desc">Forklift approaching worker (2.3m)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="demo-text">
              <h2>{language === 'en' ? 'Live' : 'Live'} <span className="text-gradient">{language === 'en' ? 'Tracking Dashboard' : 'Tracking Dashboard'}</span></h2>
              <p className="demo-description">
                {language === 'en'
                  ? 'Real-time monitoring with centimeter precision. Track multiple objects simultaneously with color-coded status indicators, proximity alerts, and live coordinate updates.'
                  : 'Echtzeit-Überwachung mit Zentimeter-Präzision. Verfolgen Sie mehrere Objekte gleichzeitig mit farbcodierten Statusindikatoren, Näherungswarnungen und Live-Koordinaten-Updates.'}
              </p>
              <div className="tech-specs">
                <div className="spec">
                  <span className="spec-label">{language === 'en' ? 'Accuracy' : 'Genauigkeit'}</span>
                  <span className="spec-value">10-30 cm</span>
                </div>
                <div className="spec">
                  <span className="spec-label">{language === 'en' ? 'Update Rate' : 'Aktualisierungsrate'}</span>
                  <span className="spec-value">10-100 Hz</span>
                </div>
                <div className="spec">
                  <span className="spec-label">{language === 'en' ? 'Range' : 'Reichweite'}</span>
                  <span className="spec-value">{language === 'en' ? 'Up to 200m' : 'Bis zu 200m'}</span>
                </div>
                <div className="spec">
                  <span className="spec-label">{language === 'en' ? 'Latency' : 'Latenz'}</span>
                  <span className="spec-value">&lt; 100ms</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{language === 'en' ? 'Why' : 'Warum'} <span className="text-gradient">{language === 'en' ? 'UWB RTLS?' : 'UWB RTLS?'}</span></h2>
          </motion.div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="applications-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{language === 'en' ? 'Real-World' : 'Reale'} <span className="text-gradient">{language === 'en' ? 'Applications' : 'Anwendungen'}</span></h2>
          </motion.div>
          <div className="applications-list">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="application-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="app-header">
                  <h3>{app.title}</h3>
                  <p>{app.description}</p>
                </div>
                <div className="app-example">
                  <span className="example-label">Example:</span>
                  <p>{app.example}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="use-case-section">
        <div className="container">
          <motion.div
            className="use-case-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Example Scenario: <span className="text-gradient">Automated Gate Control</span></h2>
            <div className="scenario-flow">
              <div className="flow-step">
                <div className="flow-icon">🚗</div>
                <p>Vehicle approaches facility entrance</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-icon">📡</div>
                <p>UWB tag detected within 3-meter zone</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-icon">✅</div>
                <p>System verifies authorization</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-step">
                <div className="flow-icon">🚪</div>
                <p>Gate opens automatically</p>
              </div>
            </div>
            <p className="scenario-result">
              No manual intervention required. Seamless, fast, and secure access control based on precise location data.
            </p>
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
            <h2>{language === 'en' ? 'Discover UWB Systems' : 'UWB-Systeme entdecken'}</h2>
            <p>{language === 'en' ? 'Transform your facility with precision indoor positioning' : 'Transformieren Sie Ihre Einrichtung mit präziser Indoor-Positionierung'}</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              {language === 'en' ? 'Schedule a Demo' : 'Demo vereinbaren'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UWBRTLS;

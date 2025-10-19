import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import './Home.css';

const Home = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      title: 'App Development',
      description: 'Intelligent applications for industrial precision and automation control.',
      icon: '📱',
      link: '/app-development',
      gradient: 'linear-gradient(135deg, #00E1FF 0%, #0077FF 100%)'
    },
    {
      title: 'NFC Systems',
      description: 'Smart tracking and identification for personnel and equipment management.',
      icon: '🏷️',
      link: '/nfc-systems',
      gradient: 'linear-gradient(135deg, #00E1FF 0%, #8B5CF6 100%)'
    },
    {
      title: 'UWB RTLS',
      description: 'Real-time location tracking with centimeter-level accuracy.',
      icon: '📡',
      link: '/uwb-rtls',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #FF6B35 100%)'
    }
  ];

  return (
    <div className="home">
      {/* Epic Hero Section with Full System Animation */}
      <section className="hero">
        <div className="hero-background">
          <div className="cyber-grid"></div>
          <div className="data-streams">
            <div className="stream stream-1"></div>
            <div className="stream stream-2"></div>
            <div className="stream stream-3"></div>
          </div>
        </div>
        
        <div className="container hero-content">
          {/* Tesla Quote with Quantum Effect */}
          <motion.div
            className="tesla-quote"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="quote-container">
              <div className="quantum-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
              <blockquote>
                "To invent, you need a good imagination and a pile of junk."
              </blockquote>
              <cite>- Nikola Tesla</cite>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h1 className="hero-title">
              {t.home.heroTitle} <span className="text-gradient">{t.home.heroTitleHighlight}</span>
            </h1>
          </motion.div>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {t.home.heroSubtitle}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link to="/solutions" className="btn btn-primary">
              {t.home.ctaButton}
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              {t.home.learnMore}
            </Link>
          </motion.div>
        </div>

        {/* Animated Factory Scenario */}
        <div className="factory-scenario">
          <div className="scenario-container">
            {/* Scenario 1: Entrance Gate with TWO Workers */}
            <div className="scenario-section entrance-section">
              {/* Factory Entrance Gate */}
              <div className="entrance-gate">
                <div className="gate-frame">
                  <div className="gate-door gate-left"></div>
                  <div className="gate-door gate-right"></div>
                  <div className="gate-sensor">
                    <div className="sensor-pulse"></div>
                  </div>
                </div>
                <div className="gate-label">ENTRANCE</div>
              </div>

              {/* UWB Anchors for entrance */}
              <div className="uwb-anchor anchor-entrance-1">A1</div>
              <div className="uwb-anchor anchor-entrance-2">A2</div>

              {/* Worker 1 - WITH UWB Tag (Gate Opens) */}
              <div className="worker-with-tag">
                <div className="worker-icon">👷</div>
                <div className="uwb-nfc-badge">
                  <div className="badge-signal"></div>
                  <span>UWB</span>
                </div>
                <div className="worker-status">✓ Authorized</div>
              </div>

              {/* Worker 2 - NO UWB Tag (Gate Stays Closed) */}
              <div className="worker-no-tag">
                <div className="worker-icon">🧑</div>
                <div className="worker-status denied">✗ No Tag</div>
              </div>

              {/* Distance indicator */}
              <div className="distance-indicator">
                <div className="distance-value">2.5m</div>
                <div className="distance-label">Scanning...</div>
              </div>

              {/* Detection zone */}
              <div className="detection-zone"></div>

              {/* Tracking Dashboard for Scenario 1 */}
              <div className="tracking-dashboard-left">
                <div className="dashboard-mini">
                  <div className="mini-header">
                    <span className="status-dot active"></span>
                    <span>Access Control</span>
                  </div>
                  <div className="mini-content">
                    <div className="track-item">
                      <span className="track-icon">👷</span>
                      <span className="track-status success">Authorized</span>
                    </div>
                    <div className="track-item">
                      <span className="track-icon">🧑</span>
                      <span className="track-status denied">Denied</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="scenario-divider"></div>

            {/* Scenario 2: Safety Zone with Forklift */}
            <div className="scenario-section safety-section">
              {/* Forklift moving */}
              <div className="forklift-moving">
                <div className="forklift-body">🚜</div>
                <div className="forklift-tag">
                  <div className="tag-signal"></div>
                  <span>UWB</span>
                </div>
              </div>

              {/* Worker in danger zone */}
              <div className="worker-danger">
                <div className="worker-icon">👷</div>
                <div className="worker-tag">
                  <div className="tag-signal"></div>
                  <span>UWB</span>
                </div>
              </div>

              {/* Safety zone visualization */}
              <div className="safety-zone"></div>
              <div className="danger-zone"></div>

              {/* UWB Anchors for safety area */}
              <div className="uwb-anchor anchor-safety-1">A3</div>
              <div className="uwb-anchor anchor-safety-2">A4</div>

              {/* Tracking Dashboard for Scenario 2 */}
              <div className="tracking-dashboard-right">
                <div className="dashboard-mini">
                  <div className="mini-header">
                    <span className="status-dot warning"></span>
                    <span>Collision Alert</span>
                  </div>
                  <div className="mini-content">
                    <div className="track-item">
                      <span className="track-icon">🚜</span>
                      <span className="track-distance">2.0m</span>
                    </div>
                    <div className="track-item">
                      <span className="track-icon">👷</span>
                      <span className="track-distance alert">1.5m</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROTATING RED SIREN - MOVED OUTSIDE scenario-section */}
            <div className="warning-system-overlay">
              <div className="siren-beacon">
                <div className="beacon-center">
                  <div className="warning-icon">⚠️</div>
                  <div className="warning-text">ALERT!</div>
                  <div className="warning-distance">2m</div>
                </div>
              </div>
            </div>

            {/* Control Dashboard */}
            <div className="control-dashboard">
              <div className="dashboard-screen">
                <div className="screen-header">
                  <div className="status-lights">
                    <span className="light active"></span>
                    <span className="light active"></span>
                    <span className="light warning"></span>
                  </div>
                  <span>QUANTUM SAFETY</span>
                </div>
                <div className="screen-content">
                  <div className="metric">
                    <span className="value">2.5m</span>
                    <span className="label">Gate</span>
                  </div>
                  <div className="metric">
                    <span className="value alert">1.5m</span>
                    <span className="label">Alert</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Flow Particles */}
            <div className="data-particles">
              <div className="particle p1"></div>
              <div className="particle p2"></div>
              <div className="particle p3"></div>
              <div className="particle p4"></div>
            </div>
          </div>
        </div>
        
        <div className="scenario-explanation">
          <motion.div 
            className="explanation-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p><strong>Scenario 1:</strong> 👷 Worker with UWB tag → 📡 Tag detected → 🚪 Gate opens | 🧑 Worker without tag → ❌ Access denied | <strong>Scenario 2:</strong> 🚜 Forklift moving → ⚠️ UWB detects worker 1.5m → 🚨 Collision alert → 🛑 Auto-brake</p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="pillars-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Three Pillars of <span className="text-gradient">Innovation</span></h2>
            <p>App Development • NFC Systems • UWB RTLS</p>
          </motion.div>

          <motion.div
            className="pillars-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="pillar-card"
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="pillar-icon" style={{ background: feature.gradient }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.link} className="pillar-link">
                  Discover More <span>→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-background">
          <div className="cta-overlay"></div>
        </div>
        <div className="container cta-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t.home.ctaTitle}</h2>
            <p>Experience the future of connected intelligence</p>
            <Link to="/contact" className="btn btn-primary btn-large">
              {t.home.ctaButton}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Innovation Marketplace Section */}
      <section className="innovation-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>We Buy <span className="text-gradient">Innovative Ideas</span></h2>
            <p>Your innovation could be our next breakthrough</p>
          </motion.div>

          <div className="innovation-grid">
            <motion.div
              className="innovation-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="innovation-icon">💡</div>
              <h3>Submit Your Idea</h3>
              <p>Have a groundbreaking concept? We're actively seeking innovative solutions in IoT, UWB, NFC, and industrial automation.</p>
              <Link to="/contact" className="innovation-link">Share Your Innovation →</Link>
            </motion.div>

            <motion.div
              className="innovation-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="innovation-icon">🤝</div>
              <h3>Collaboration Opportunities</h3>
              <p>We partner with inventors, researchers, and innovators to bring cutting-edge technologies to market.</p>
              <Link to="/contact" className="innovation-link">Partner With Us →</Link>
            </motion.div>

            <motion.div
              className="innovation-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="innovation-icon">🚀</div>
              <h3>Technology Acquisition</h3>
              <p>We invest in promising technologies and intellectual property that align with our vision for smart industry.</p>
              <Link to="/contact" className="innovation-link">Get in Touch →</Link>
            </motion.div>
          </div>

          <motion.div
            className="innovation-cta"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="innovation-cta-content">
              <h3>Open Innovation Philosophy</h3>
              <p>At Quantum Mind Innovation, we believe the best ideas can come from anywhere. We're committed to fostering a culture of open innovation, actively seeking and investing in breakthrough concepts that push the boundaries of what's possible.</p>
              <div className="innovation-stats">
                <div className="stat">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Ideas Evaluated</div>
                </div>
                <div className="stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Partnerships Formed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">IP Protection</div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary btn-large">
                Submit Your Innovation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

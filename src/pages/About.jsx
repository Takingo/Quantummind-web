import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import './About.css';

const About = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const highlights = [
    { icon: '🔧', title: 'Custom Integration', description: 'Software & hardware designed for your needs' },
    { icon: '💡', title: 'Innovation Leader', description: 'Cutting-edge NFC & UWB solutions' },
    { icon: '🇪🇺', title: 'European Quality', description: 'German engineering and production standards' },
    { icon: '🤖', title: 'AI-Enhanced', description: 'Machine learning analytics and insights' }
  ];

  const values = [
    { title: 'Precision', description: 'Engineering excellence in every detail' },
    { title: 'Innovation', description: 'Pushing boundaries of what\'s possible' },
    { title: 'Reliability', description: 'Industrial-grade systems you can trust' },
    { title: 'Partnership', description: 'Working together for your success' }
  ];

  return (
    <div className="about">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{language === 'en' ? 'Engineering the' : 'Entwicklung der'} <span className="text-gradient">{language === 'en' ? 'Future of Things' : 'Zukunft der Dinge'}</span></h1>
            <p className="hero-subtitle">
              {language === 'en' 
                ? 'German-based technology company merging digital intelligence with physical space'
                : 'Deutsches Technologieunternehmen, das digitale Intelligenz mit physischem Raum verbindet'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section section-padding">
        <div className="container">
          <motion.div
            className="mission-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our <span className="text-gradient">Mission</span></h2>
            <p className="mission-statement">
              "To make environments aware, responsive, and intelligent."
            </p>
            <p className="mission-description">
              At Quantum Mind Innovation, we believe the future belongs to connected ecosystems where 
              digital intelligence seamlessly integrates with physical space. We design and develop 
              intelligent systems that combine cutting-edge software, sensor technology, and data 
              analytics to transform how industries operate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>What Sets Us <span className="text-gradient">Apart</span></h2>
          </motion.div>

          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
            <div className="visual-image">
              <div className="team-visual">
                <div className="visual-badge">
                  <span className="badge-logo">Q</span>
                  <div className="badge-text">
                    <p className="badge-title">QUANTUM MIND</p>
                    <p className="badge-subtitle">INNOVATION</p>
                  </div>
                </div>
                <div className="visual-stats">
                  <div className="stat-item">
                    <span className="stat-number">100+</span>
                    <span className="stat-label">Projects</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">Uptime</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="visual-text">
              <h2>German <span className="text-gradient">Engineering</span></h2>
              <p>
                Based in Germany, we combine precision engineering with innovative technology. 
                Our team of experts develops custom solutions for industrial automation, bringing 
                together decades of experience in software development, IoT systems, and industrial design.
              </p>
              <p>
                From concept to deployment, we ensure every solution meets the highest standards 
                of quality, reliability, and performance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our <span className="text-gradient">Values</span></h2>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="tech-section">
        <div className="container">
          <motion.div
            className="tech-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Technologies We <span className="text-gradient">Master</span></h2>
            <div className="tech-categories">
              <div className="tech-category">
                <h4>Software</h4>
                <ul>
                  <li>React & React Native</li>
                  <li>Node.js & Python</li>
                  <li>Cloud Platforms (AWS, Azure)</li>
                  <li>AI & Machine Learning</li>
                </ul>
              </div>
              <div className="tech-category">
                <h4>Hardware</h4>
                <ul>
                  <li>UWB Positioning Systems</li>
                  <li>NFC Technology</li>
                  <li>IoT Sensors</li>
                  <li>Industrial Controllers</li>
                </ul>
              </div>
              <div className="tech-category">
                <h4>Integration</h4>
                <ul>
                  <li>Real-Time Data Processing</li>
                  <li>API Development</li>
                  <li>Database Management</li>
                  <li>System Architecture</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

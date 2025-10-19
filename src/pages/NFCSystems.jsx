import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import './NFCSystems.css';

const NFCSystems = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  // NFC App Intelligent Features
  const intelligentFeatures = [
    { icon: '📱', title: 'Cross-Platform App', description: 'Works on Android, iOS, and Web' },
    { icon: '⚡', title: 'Instant NFC Logging', description: 'Track employees, tools, and zones in one tap' },
    { icon: '📋', title: 'Workflow Dashboard', description: 'Visual task board inspired by Monday.com' },
    { icon: '⏰', title: 'Shift & Time Tracking', description: 'Automates attendance and work hours' },
    { icon: '👥', title: 'Role-Based Access', description: 'Separate dashboards for admin, manager, and operator' },
    { icon: '📊', title: 'Real-Time Data', description: 'Live view of who\'s working, what\'s used, and where' },
    { icon: '🔔', title: 'Smart Alerts', description: 'Late returns, inactive users, and tool misuse notifications' },
    { icon: '📴', title: 'Offline Mode', description: 'Works without internet, auto-syncs to Supabase cloud' },
    { icon: '📈', title: 'Cloud Analytics', description: 'Exportable performance reports and statistics' },
    { icon: '🔗', title: 'System Integration', description: 'Connects seamlessly with Door Intelligent and Production Check apps' }
  ];

  // Production Check Features
  const productionFeatures = [
    { icon: '🏷️', title: 'NFC Fault Logging', description: 'Scan machine tags to report issues instantly' },
    { icon: '📋', title: 'Task Workflow Board', description: 'Manage and assign tasks visually in real time' },
    { icon: '📊', title: 'Performance Dashboard', description: 'Live analytics of line efficiency and downtime' },
    { icon: '📄', title: 'Automatic Reporting', description: 'Generates production summaries and performance KPIs' },
    { icon: '👥', title: 'Role Management', description: 'Different access for operators, technicians, and managers' },
    { icon: '⏱️', title: 'Integrated Timelines', description: 'Track start, pause, and completion times per station' },
    { icon: '📴', title: 'Offline Support', description: 'Works locally during network outages, syncs later' },
    { icon: '☁️', title: 'Cloud Database', description: 'Secure data storage and history tracking via Supabase' },
    { icon: '🔧', title: 'Maintenance Alerts', description: 'Automatic reminders for recurring service tasks' },
    { icon: '🔗', title: 'Compatibility', description: 'Fully integrated with NFC App Intelligent and Door Intelligent modules' }
  ];

  const platforms = [
    { name: 'Android', icon: '🤖', color: '#3DDC84' },
    { name: 'iOS', icon: '🍎', color: '#000000' },
    { name: 'Web', icon: '🌐', color: '#00E1FF' }
  ];

  const taskStatuses = ['To Do', 'In Progress', 'Done'];

  return (
    <div className="nfc-systems">
      {/* ==================== SECTION 1: NFC App Intelligent ==================== */}
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{language === 'en' ? 'NFC App' : 'NFC App'} <span className="text-gradient">{language === 'en' ? 'Intelligent' : 'Intelligent'}</span></h1>
            <p className="hero-subtitle">
              {language === 'en' ? 'Smart Workforce & Asset Management' : 'Intelligente Personal- und Asset-Verwaltung'}
            </p>
            <p className="hero-description">
              {language === 'en'
                ? 'NFC App Intelligent bridges the gap between workforce and operations through NFC-powered intelligence. It digitizes how your employees check in, access tools, and complete daily tasks — giving you a live overview of every movement inside your operation. All activity is stored securely in the cloud, viewable from any device, anytime.'
                : 'NFC App Intelligent überbrückt die Lücke zwischen Arbeitskräften und Betrieb durch NFC-gestützte Intelligenz. Es digitalisiert, wie Ihre Mitarbeiter sich anmelden, auf Werkzeuge zugreifen und tägliche Aufgaben erledigen – und gibt Ihnen einen Live-Überblick über jede Bewegung in Ihrem Betrieb. Alle Aktivitäten werden sicher in der Cloud gespeichert und können jederzeit von jedem Gerät aus eingesehen werden.'}
            </p>
            <div className="platform-badges">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className="platform-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  style={{ borderColor: platform.color }}
                >
                  <span className="platform-icon">{platform.icon}</span>
                  <span className="platform-name">{platform.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== TAP & TAKE AUTOMATION SECTION ==================== */}
      
      {/* Tap & Take Automation Animation */}
      <section className="tap-take-animation section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Tap & Take <span className="text-gradient">Automation</span></h2>
            <p>Seamless access control and device management in real-time</p>
          </motion.div>

          <motion.div
            className="tap-take-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="industrial-hall">
              {/* Ambient Lighting */}
              <div className="ambient-lighting blue"></div>
              <div className="ambient-lighting orange"></div>
              
              {/* Tool Access Station */}
              <div className="access-station">
                <div className="station-body">
                  <div className="station-panel">
                    <div className="panel-light"></div>
                    <div className="panel-text">TOOL ACCESS</div>
                  </div>
                  <div className="tool-compartment">
                    <div className="tool-icon">🔧</div>
                    <div className="tool-icon">🔨</div>
                    <div className="tool-icon">⚙️</div>
                  </div>
                </div>
                
                {/* NFC Reader */}
                <div className="nfc-reader">
                  <div className="reader-body">
                    <div className="reader-icon">📱</div>
                    <div className="scan-waves">
                      <div className="wave"></div>
                      <div className="wave"></div>
                      <div className="wave"></div>
                    </div>
                  </div>
                  <div className="reader-label">Quantum NFC</div>
                </div>
              </div>

              {/* Worker with Badge */}
              <div className="worker-character">
                <div className="worker-body">
                  <div className="worker-head">👷</div>
                  <div className="worker-badge">
                    <div className="badge-chip"></div>
                  </div>
                  <div className="worker-hand">
                    <div className="nfc-chip">
                      <div className="chip-glow"></div>
                    </div>
                  </div>
                </div>
                <div className="tap-motion-line"></div>
              </div>

              {/* Holographic UI Display */}
              <div className="holographic-ui">
                <div className="ui-frame">
                  <div className="ui-header">
                    <div className="header-icon">✓</div>
                    <div className="header-text">User Identified</div>
                  </div>
                  <div className="ui-body">
                    <div className="user-info">
                      <div className="info-icon">👤</div>
                      <div className="info-text">
                        <div className="info-name">John Worker</div>
                        <div className="info-role">Operator</div>
                      </div>
                    </div>
                    <div className="access-status">
                      <div className="status-text">Access Granted</div>
                      <div className="status-check">✓</div>
                    </div>
                  </div>
                  <div className="ui-scanlines"></div>
                </div>
                <div className="ui-glow"></div>
              </div>

              {/* Dashboard Screen */}
              <div className="dashboard-screen">
                <div className="screen-frame">
                  <div className="screen-header">
                    <span className="screen-logo">QMI Dashboard</span>
                    <div className="sync-indicator">
                      <div className="sync-icon">🔄</div>
                      <span>Syncing...</span>
                    </div>
                  </div>
                  <div className="screen-content">
                    <div className="device-list">
                      <div className="device-item assigned">
                        <span className="device-icon">🔧</span>
                        <span className="device-name">Tool A</span>
                        <span className="device-status">Assigned</span>
                      </div>
                      <div className="device-item available">
                        <span className="device-icon">🔨</span>
                        <span className="device-name">Tool B</span>
                        <span className="device-status">Available</span>
                      </div>
                      <div className="device-item available">
                        <span className="device-icon">⚙️</span>
                        <span className="device-name">Tool C</span>
                        <span className="device-status">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Sync Visualization */}
              <div className="data-sync-flow">
                <svg className="sync-network" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <path d="M 40 50 L 100 50 L 160 50" className="sync-path" />
                  <circle cx="40" cy="50" r="3" className="sync-node reader" />
                  <circle cx="100" cy="50" r="4" className="sync-node cloud" />
                  <circle cx="160" cy="50" r="3" className="sync-node app" />
                </svg>
                <div className="sync-labels">
                  <span className="sync-label left">NFC Reader</span>
                  <span className="sync-label center">☁️ Cloud</span>
                  <span className="sync-label right">App</span>
                </div>
                <div className="data-packets">
                  <div className="data-packet packet-1"></div>
                  <div className="data-packet packet-2"></div>
                </div>
              </div>

              {/* Additional Stations (Background) */}
              <div className="background-stations">
                <div className="bg-station station-1">
                  <div className="bg-worker">👷‍♀️</div>
                  <div className="bg-activity"></div>
                </div>
                <div className="bg-station station-2">
                  <div className="bg-worker">👷</div>
                  <div className="bg-activity"></div>
                </div>
              </div>

              {/* Quantum Logo */}
              <div className="quantum-logo-watermark">
                <div className="logo-text">Quantum Mind Innovation</div>
                <div className="logo-tagline">Automation Begins with a Single Tap</div>
                <div className="logo-pulse"></div>
              </div>
            </div>
          </motion.div>

          {/* Feature Highlights */}
          <motion.div
            className="tap-take-features"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="feature-highlight">
              <div className="highlight-icon">⚡</div>
              <div className="highlight-text">
                <h4>Instant Recognition</h4>
                <p>User identified in milliseconds</p>
              </div>
            </div>
            <div className="feature-highlight">
              <div className="highlight-icon">📊</div>
              <div className="highlight-text">
                <h4>Live Dashboard</h4>
                <p>Real-time device tracking</p>
              </div>
            </div>
            <div className="feature-highlight">
              <div className="highlight-icon">☁️</div>
              <div className="highlight-text">
                <h4>Cloud Sync</h4>
                <p>Automatic data synchronization</p>
              </div>
            </div>
            <div className="feature-highlight">
              <div className="highlight-icon">🔗</div>
              <div className="highlight-text">
                <h4>Connected Ecosystem</h4>
                <p>Android, iOS, and Web platforms</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cinematic Production Check Animation */}
      <section className="production-check-animation section-padding">
        <div className="container">
          <motion.div
            className="animation-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="animation-container">
              <div className="factory-scene">
                {/* Factory Hall Background */}
                <div className="factory-hall">
                  <div className="hall-grid"></div>
                  <div className="volumetric-glow"></div>
                </div>

                {/* Robotic Arm 1 - Left Side */}
                <div className="robotic-arm arm-left">
                  <div className="arm-base"></div>
                  <div className="arm-joint joint-1"></div>
                  <div className="arm-segment segment-1"></div>
                  <div className="arm-joint joint-2"></div>
                  <div className="arm-segment segment-2"></div>
                  <div className="arm-gripper">
                    <div className="gripper-claw left"></div>
                    <div className="gripper-claw right"></div>
                    <div className="gripper-glow"></div>
                  </div>
                  <div className="data-connection left"></div>
                </div>

                {/* Robotic Arm 2 - Right Side */}
                <div className="robotic-arm arm-right">
                  <div className="arm-base"></div>
                  <div className="arm-joint joint-1"></div>
                  <div className="arm-segment segment-1"></div>
                  <div className="arm-joint joint-2"></div>
                  <div className="arm-segment segment-2"></div>
                  <div className="arm-gripper">
                    <div className="gripper-claw left"></div>
                    <div className="gripper-claw right"></div>
                    <div className="gripper-glow"></div>
                  </div>
                  <div className="data-connection right"></div>
                </div>

                {/* Conveyor Belt System */}
                <div className="conveyor-belt">
                  <div className="belt-surface">
                    <div className="belt-line"></div>
                    <div className="belt-line"></div>
                    <div className="belt-line"></div>
                  </div>
                  <div className="production-item item-1">📦</div>
                  <div className="production-item item-2">📦</div>
                  <div className="production-item item-3">📦</div>
                </div>

                {/* Smart Machine with Status */}
                <div className="smart-machine machine-1">
                  <div className="machine-body">
                    <div className="machine-panel">
                      <div className="status-led running"></div>
                      <div className="panel-display">M1</div>
                    </div>
                    <div className="machine-component rotating"></div>
                  </div>
                  <div className="machine-data-line"></div>
                </div>

                <div className="smart-machine machine-2">
                  <div className="machine-body">
                    <div className="machine-panel">
                      <div className="status-led running"></div>
                      <div className="panel-display">M2</div>
                    </div>
                    <div className="machine-component rotating"></div>
                  </div>
                  <div className="machine-data-line"></div>
                </div>

                {/* Operator with Tablet */}
                <div className="operator">
                  <div className="operator-avatar">👷</div>
                  <div className="tablet-device">
                    <div className="tablet-screen">
                      <div className="screen-content">
                        <div className="app-icon">📊</div>
                        <div className="data-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Holographic Dashboard - Main */}
                <div className="holographic-dashboard">
                  <div className="holo-frame">
                    <div className="holo-header">
                      <div className="holo-logo">QMI</div>
                      <div className="live-indicator">
                        <div className="pulse-dot"></div>
                        <span>LIVE</span>
                      </div>
                    </div>

                    {/* Control Plans Section */}
                    <div className="holo-section plans">
                      <div className="section-title">Control Plans</div>
                      <div className="plan-document">
                        <div className="doc-icon">📄</div>
                        <div className="doc-morph">
                          <div className="hologram-overlay"></div>
                        </div>
                      </div>
                    </div>

                    {/* Real-Time Metrics */}
                    <div className="holo-section metrics">
                      <div className="metric-card">
                        <div className="metric-label">Efficiency</div>
                        <div className="metric-value rising">94%</div>
                        <div className="metric-trend up">↑</div>
                      </div>
                      <div className="metric-card">
                        <div className="metric-label">Output</div>
                        <div className="metric-value">847/h</div>
                      </div>
                    </div>

                    {/* Performance Graph */}
                    <div className="holo-section graph">
                      <div className="graph-container">
                        <div className="graph-bar" style={{ height: '45%' }}></div>
                        <div className="graph-bar" style={{ height: '68%' }}></div>
                        <div className="graph-bar" style={{ height: '82%' }}></div>
                        <div className="graph-bar rising" style={{ height: '95%' }}></div>
                      </div>
                      <div className="graph-label">Error Rate: -23%</div>
                    </div>
                  </div>
                  <div className="holo-glow"></div>
                </div>

                {/* Shift Statistics Panel */}
                <div className="stats-panel">
                  <div className="panel-header">Shift Statistics</div>
                  <div className="stat-row">
                    <span className="stat-icon">⏱️</span>
                    <span className="stat-text">8h 24m</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-icon">✅</span>
                    <span className="stat-text">1,243 units</span>
                  </div>
                  <div className="stat-row">
                    <span className="stat-icon">👥</span>
                    <span className="stat-text">12 active</span>
                  </div>
                </div>

                {/* Glowing Data Lines connecting devices */}
                <svg className="data-network" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <line x1="20" y1="30" x2="50" y2="50" className="data-line" />
                  <line x1="80" y1="30" x2="50" y2="50" className="data-line" />
                  <line x1="50" y1="70" x2="50" y2="50" className="data-line" />
                  <circle cx="20" cy="30" r="2" className="data-node" />
                  <circle cx="80" cy="30" r="2" className="data-node" />
                  <circle cx="50" cy="50" r="3" className="data-node hub" />
                  <circle cx="50" cy="70" r="2" className="data-node" />
                </svg>

                {/* Floating Data Particles */}
                <div className="data-particles-flow">
                  <div className="data-particle"></div>
                  <div className="data-particle"></div>
                  <div className="data-particle"></div>
                  <div className="data-particle"></div>
                  <div className="data-particle"></div>
                  <div className="data-particle"></div>
                </div>

                {/* Logo Watermark */}
                <div className="qmi-watermark">
                  <div className="watermark-text">Production Check App</div>
                  <div className="watermark-subtitle">Smart Manufacturing Coordination System</div>
                </div>
              </div>
            </div>
            
            <div className="animation-description">
              <h2>{language === 'en' ? 'Production Check' : 'Produktionskontrolle'} <span className="text-gradient">{language === 'en' ? 'App' : 'App'}</span></h2>
              <p className="desc-text">
                {language === 'en'
                  ? 'Experience the digital heartbeat of modern manufacturing. Watch as robotic arms synchronize with precision, machines exchange glowing data streams, and operators coordinate seamlessly through tablets. Real-time dashboards transform production data into actionable intelligence, while holographic displays visualize efficiency gains and performance metrics.'
                  : 'Erleben Sie den digitalen Herzschlag der modernen Fertigung. Beobachten Sie, wie Roboterarme sich präzise synchronisieren, Maschinen leuchtende Datenströme austauschen und Bediener nahtlos über Tablets koordinieren. Echtzeit-Dashboards verwandeln Produktionsdaten in umsetzbare Intelligenz, während holografische Displays Effizienzgewinne und Leistungskennzahlen visualisieren.'}
              </p>
              <div className="animation-features">
                <div className="feature-item">
                  <div className="feature-icon">🤖</div>
                  <div className="feature-text">
                    <div className="feature-title">Robotic Coordination</div>
                    <div className="feature-desc">Synchronized automation</div>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">📊</div>
                  <div className="feature-text">
                    <div className="feature-title">Live Analytics</div>
                    <div className="feature-desc">Real-time performance tracking</div>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">💡</div>
                  <div className="feature-text">
                    <div className="feature-title">Digital Transformation</div>
                    <div className="feature-desc">Paperless workflow control</div>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">⚡</div>
                  <div className="feature-text">
                    <div className="feature-title">Instant Updates</div>
                    <div className="feature-desc">Millisecond synchronization</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="content-sections section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{language === 'en' ? 'Key' : 'Wichtige'} <span className="text-gradient">{language === 'en' ? 'Features' : 'Funktionen'}</span></h2>
            <p>{language === 'en' ? 'Comprehensive workforce and asset management capabilities' : 'Umfassende Funktionen für Personal- und Asset-Verwaltung'}</p>
          </motion.div>
          
          <div className="content-grid">
            {intelligentFeatures.map((section, index) => (
              <motion.div
                key={index}
                className="content-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="content-icon">{section.icon}</div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <div className="card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Visualization */}
      <section className="workflow-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{language === 'en' ? 'How It' : 'Wie es'} <span className="text-gradient">{language === 'en' ? 'Works' : 'funktioniert'}</span></h2>
            <p>{language === 'en' ? 'From scan to sync in milliseconds' : 'Vom Scannen zur Synchronisierung in Millisekunden'}</p>
          </motion.div>

          <div className="workflow-steps">
            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="step-icon">📱</div>
              <h4>Scan NFC</h4>
              <p>Employee taps badge on terminal or mobile device</p>
            </motion.div>

            <div className="workflow-arrow">→</div>

            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="step-icon">🔍</div>
              <h4>Authenticate</h4>
              <p>System verifies identity and permissions instantly</p>
            </motion.div>

            <div className="workflow-arrow">→</div>

            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="step-icon">📊</div>
              <h4>Update Dashboard</h4>
              <p>Live board shows activity, tasks, and analytics</p>
            </motion.div>

            <div className="workflow-arrow">→</div>

            <motion.div
              className="workflow-step"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="step-icon">☁️</div>
              <h4>Cloud Sync</h4>
              <p>Data backed up and accessible everywhere</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="tagline-section">
        <div className="container">
          <motion.div
            className="tagline-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="tagline-icon">🧠</div>
            <h2 className="tagline-text">
              <span className="text-gradient">Quantum Mind Innovation</span> — Engineering the Bridge Between Workforce and Data.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Section Divider with Neon Effect */}
      <div className="section-divider">
        <div className="divider-line">
          <div className="divider-glow"></div>
        </div>
      </div>

      {/* ==================== SECTION 2: Production Check App ==================== */}

      {/* Production Check App Hero */}
      <section className="production-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            className="production-hero-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h1>Production Check <span className="text-gradient">App</span></h1>
            <p className="hero-subtitle">
              Smart Workflow & Fault Management
            </p>
            <p className="hero-description">
              Production Check App transforms factory management into a connected, transparent, and data-driven process.
              Operators can instantly log production issues, maintenance requests, and task updates via NFC scan or mobile input.
              Supervisors view the entire line in real time — track performance, identify bottlenecks, and act fast when problems appear.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Production Line Animation */}
      <section className="production-animation section-padding">
        <div className="container">
          <motion.div
            className="animation-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="demo-visual">
              <div className="production-scene">
                {/* Factory Floor Background */}
                <div className="production-bg">
                  <div className="factory-floor"></div>
                  <div className="grid-overlay"></div>
                </div>

                {/* Production Machines - 4 Different Stations */}
                
                {/* Machine 1 - Working (Green) */}
                <div className="production-machine machine-1">
                  <div className="machine-body">
                    <div className="machine-display">
                      <div className="status-light green"></div>
                      <span className="machine-label">M1</span>
                    </div>
                    <div className="machine-part rotating"></div>
                  </div>
                  <div className="machine-status-tag green">
                    <span>✅ Running</span>
                    <span className="status-value">98%</span>
                  </div>
                </div>

                {/* Machine 2 - Working (Green) */}
                <div className="production-machine machine-2">
                  <div className="machine-body">
                    <div className="machine-display">
                      <div className="status-light green"></div>
                      <span className="machine-label">M2</span>
                    </div>
                    <div className="machine-part rotating"></div>
                  </div>
                  <div className="machine-status-tag green">
                    <span>✅ Running</span>
                    <span className="status-value">95%</span>
                  </div>
                </div>

                {/* Machine 3 - Fault (Red) */}
                <div className="production-machine machine-3">
                  <div className="machine-body fault">
                    <div className="machine-display">
                      <div className="status-light red pulsing"></div>
                      <span className="machine-label">M3</span>
                    </div>
                    <div className="machine-part stopped"></div>
                    <div className="fault-alert">
                      <div className="alert-ring"></div>
                      <div className="alert-ring"></div>
                      <span className="fault-icon">⚠️</span>
                    </div>
                  </div>
                  <div className="machine-status-tag red">
                    <span>🛑 Fault</span>
                    <span className="status-value">ERROR</span>
                  </div>
                </div>

                {/* Machine 4 - Warning (Orange) */}
                <div className="production-machine machine-4">
                  <div className="machine-body">
                    <div className="machine-display">
                      <div className="status-light orange"></div>
                      <span className="machine-label">M4</span>
                    </div>
                    <div className="machine-part rotating slow"></div>
                  </div>
                  <div className="machine-status-tag orange">
                    <span>⚠️ Warning</span>
                    <span className="status-value">78%</span>
                  </div>
                </div>

                {/* Operator with Tablet */}
                <div className="operator-station">
                  <div className="operator-icon">👷‍♂️</div>
                  <div className="operator-tablet">
                    <div className="tablet-screen">
                      <div className="tablet-content">
                        <span className="tablet-icon">📊</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Control Dashboard */}
                <div className="control-dashboard">
                  <div className="dashboard-header">
                    <div className="status-indicator">
                      <div className="status-dot red pulsing"></div>
                      <span>Production Line</span>
                    </div>
                    <span className="time-display">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  
                  {/* Live Problems List */}
                  <div className="problems-section">
                    <div className="section-title">Active Issues</div>
                    <div className="problem-item critical">
                      <span className="problem-icon">🔴</span>
                      <div className="problem-info">
                        <span className="problem-title">Machine 3 Down</span>
                        <span className="problem-time">2m ago</span>
                      </div>
                    </div>
                    <div className="problem-item warning">
                      <span className="problem-icon">🟠</span>
                      <div className="problem-info">
                        <span className="problem-title">M4 Performance</span>
                        <span className="problem-time">8m ago</span>
                      </div>
                    </div>
                  </div>

                  {/* Line Status Overview */}
                  <div className="line-status-section">
                    <div className="section-title">Line Status</div>
                    <div className="status-grid">
                      <div className="status-item">
                        <span className="status-label">Efficiency</span>
                        <span className="status-value-text red">67%</span>
                      </div>
                      <div className="status-item">
                        <span className="status-label">Output</span>
                        <span className="status-value-text orange">421/hr</span>
                      </div>
                    </div>
                    <div className="status-bar-container">
                      <div className="status-bar-fill" style={{ width: '67%', background: '#FF4444' }}></div>
                    </div>
                  </div>

                  {/* Machine Status Grid */}
                  <div className="machines-grid-section">
                    <div className="section-title">Machines</div>
                    <div className="machines-grid">
                      <div className="machine-mini green">
                        <span>M1</span>
                        <div className="mini-indicator"></div>
                      </div>
                      <div className="machine-mini green">
                        <span>M2</span>
                        <div className="mini-indicator"></div>
                      </div>
                      <div className="machine-mini red pulsing">
                        <span>M3</span>
                        <div className="mini-indicator"></div>
                      </div>
                      <div className="machine-mini orange">
                        <span>M4</span>
                        <div className="mini-indicator"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conveyor Belt with Products */}
                <div className="conveyor-system">
                  <div className="conveyor-belt">
                    <div className="belt-item product">📦</div>
                    <div className="belt-item product">📦</div>
                    <div className="belt-item product">📦</div>
                    <div className="belt-item product">📦</div>
                    <div className="belt-item product">📦</div>
                  </div>
                </div>

                {/* Robotic Arms */}
                <div className="robot-arm robot-1">
                  <div className="robot-base"></div>
                  <div className="robot-joint"></div>
                  <div className="robot-limb"></div>
                  <div className="robot-gripper">
                    <div className="gripper-left"></div>
                    <div className="gripper-right"></div>
                  </div>
                </div>

                <div className="robot-arm robot-2">
                  <div className="robot-base"></div>
                  <div className="robot-joint"></div>
                  <div className="robot-limb"></div>
                  <div className="robot-gripper">
                    <div className="gripper-left"></div>
                    <div className="gripper-right"></div>
                  </div>
                </div>

                {/* Quality Check Scanner */}
                <div className="quality-scanner">
                  <div className="scanner-body">
                    <div className="scanner-light"></div>
                    <div className="scan-beam"></div>
                  </div>
                  <div className="scanner-label">QC</div>
                </div>
              </div>
            </div>

            <div className="demo-text">
              <h2>Real-Time Production <span className="text-gradient">Intelligence</span></h2>
              <p className="demo-description">
                Experience complete visibility into your production line. Each machine broadcasts its status in real-time,
                while the central dashboard tracks active issues, line efficiency, and output metrics. Operators can instantly
                report problems via tablet, and supervisors monitor the entire operation from a unified command center.
              </p>
              <div className="demo-stats">
                <div className="stat">
                  <span className="stat-value">4</span>
                  <span className="stat-label">Machines Monitored</span>
                </div>
                <div className="stat">
                  <span className="stat-value">&lt;1s</span>
                  <span className="stat-label">Fault Detection</span>
                </div>
                <div className="stat">
                  <span className="stat-value">100%</span>
                  <span className="stat-label">Traceability</span>
                </div>
              </div>
              <div className="feature-tags">
                <span className="feature-tag">✅ Individual Machine Status</span>
                <span className="feature-tag">📊 Live Dashboard</span>
                <span className="feature-tag">🚨 Instant Alerts</span>
                <span className="feature-tag">📝 Problem Tracking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Production Check Features */}
      <section className="production-features">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Key <span className="text-gradient">Features</span></h2>
            <p>Complete production line management and optimization</p>
          </motion.div>

          <div className="content-grid">
            {productionFeatures.map((func, index) => (
              <motion.div
                key={index}
                className="content-card production"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="content-icon">{func.icon}</div>
                <h3>{func.title}</h3>
                <p>{func.description}</p>
                <div className="card-glow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Tagline */}
      <section className="tagline-section production">
        <div className="container">
          <motion.div
            className="tagline-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="tagline-icon">🏭</div>
            <h2 className="tagline-text">
              <span className="text-gradient">Quantum Mind Innovation</span> — Turning Production Data into Precision.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>{language === 'en' ? 'Ready to Transform Your Operations?' : 'Bereit, Ihre Abläufe zu transformieren?'}</h2>
            <p>
              {language === 'en' 
                ? 'Discover how NFC App Intelligent and Production Check App can revolutionize your workforce and production management. Join leading industrial facilities already benefiting from smart tracking and workflow solutions.'
                : 'Entdecken Sie, wie NFC App Intelligent und Production Check App Ihre Personal- und Produktionsverwaltung revolutionieren können. Schließen Sie sich führenden Industrieanlagen an, die bereits von intelligenten Tracking- und Workflow-Lösungen profitieren.'}
            </p>
            <div className="cta-stats">
              <div className="stat-item">
                <span className="stat-value">70%</span>
                <span className="stat-label">Efficiency Increase</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Real-Time Monitoring</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Cloud Synchronized</span>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary btn-large">
              {language === 'en' ? 'Request a Demo' : 'Demo anfordern'}
              <span className="btn-arrow">→</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NFCSystems;

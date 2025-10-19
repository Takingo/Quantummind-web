import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import './WebDevelopment.css';

const WebDevelopment = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [activeCategory, setActiveCategory] = useState('all');

  // Website Categories
  const categories = [
    { id: 'all', name: 'All Projects', icon: '🌐' },
    { id: 'corporate', name: 'Corporate', icon: '🏢' },
    { id: 'industrial', name: 'Industrial', icon: '🏭' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
    { id: 'portfolio', name: 'Portfolio', icon: '💼' },
    { id: 'dashboard', name: 'Dashboards', icon: '📊' },
    { id: 'iot', name: 'IoT Systems', icon: '🔗' }
  ];

  // Website Examples/Templates
  const websites = [
    {
      id: 1,
      title: 'Corporate Business Website',
      category: 'corporate',
      description: 'Professional corporate websites with modern design, CMS integration, and multi-language support',
      features: ['Responsive Design', 'SEO Optimized', 'Admin Panel', 'Contact Forms'],
      image: '🏢',
      tech: ['React', 'Node.js', 'MongoDB'],
      color: '#4A90E2'
    },
    {
      id: 2,
      title: 'Industrial IoT Dashboard',
      category: 'industrial',
      description: 'Real-time monitoring dashboards for manufacturing and industrial operations with live data visualization',
      features: ['Live Data Visualization', 'IoT Integration', 'Analytics', 'Alert System'],
      image: '🏭',
      tech: ['React', 'WebSocket', 'InfluxDB'],
      color: '#1E6B6B'
    },
    {
      id: 3,
      title: 'Creative Portfolio',
      category: 'portfolio',
      description: 'Stunning portfolio websites for designers, photographers, and creative professionals',
      features: ['Gallery System', 'Project Showcase', 'Client Testimonials', 'Blog Integration'],
      image: '🎨',
      tech: ['React', 'Framer Motion', 'Firebase'],
      color: '#FFB347'
    },
    {
      id: 4,
      title: 'Production Monitoring System',
      category: 'dashboard',
      description: 'Advanced production line monitoring with real-time KPIs and performance tracking',
      features: ['Real-Time Metrics', 'Machine Status', 'Production Analytics', 'Export Reports'],
      image: '📊',
      tech: ['React', 'Chart.js', 'PostgreSQL'],
      color: '#2D8A8A'
    },
    {
      id: 5,
      title: 'NFC Access Control Portal',
      category: 'iot',
      description: 'Employee and asset management systems with NFC integration and cloud synchronization',
      features: ['NFC Integration', 'User Management', 'Access Logs', 'Cloud Sync'],
      image: '🔐',
      tech: ['React', 'Supabase', 'NFC API'],
      color: '#00E1FF'
    },
    {
      id: 6,
      title: 'SaaS Application Platform',
      category: 'corporate',
      description: 'Subscription-based software platforms with user management and authentication systems',
      features: ['User Authentication', 'Role Management', 'API Integration', 'Analytics Dashboard'],
      image: '💻',
      tech: ['React', 'Node.js', 'AWS'],
      color: '#9B59B6'
    },
    {
      id: 7,
      title: 'UWB Location Tracking System',
      category: 'iot',
      description: 'Real-time location systems using UWB technology for precision tracking in industrial environments',
      features: ['Real-Time Tracking', 'Geofencing', 'Heat Maps', 'Asset Management'],
      image: '📍',
      tech: ['React', 'WebSocket', 'UWB SDK'],
      color: '#27AE60'
    },
    {
      id: 8,
      title: 'Quality Control Dashboard',
      category: 'dashboard',
      description: 'Comprehensive quality management system with defect tracking and statistical analysis',
      features: ['Defect Tracking', 'Statistical Analysis', 'Trend Reports', 'Multi-User Access'],
      image: '✅',
      tech: ['React', 'D3.js', 'MySQL'],
      color: '#E74C3C'
    },
    {
      id: 9,
      title: 'Company Landing Page',
      category: 'corporate',
      description: 'Modern, animated landing pages with engaging visuals and conversion-optimized design',
      features: ['Animated Sections', 'Contact Forms', 'SEO Ready', 'Mobile First'],
      image: '🚀',
      tech: ['React', 'Framer Motion', 'Vite'],
      color: '#3498DB'
    },
    {
      id: 10,
      title: 'Workflow Management System',
      category: 'industrial',
      description: 'Task and workflow management for industrial operations with role-based access control',
      features: ['Task Boards', 'Role Management', 'File Attachments', 'Activity Timeline'],
      image: '📋',
      tech: ['React', 'Node.js', 'MongoDB'],
      color: '#F39C12'
    },
    {
      id: 11,
      title: 'Cross-Platform Mobile App',
      category: 'mobile',
      description: 'Native mobile applications for Android and iOS with offline-first architecture',
      features: ['Offline Mode', 'Cloud Sync', 'Push Notifications', 'Native Performance'],
      image: '📱',
      tech: ['Flutter', 'Kotlin', 'Firestore'],
      color: '#02569B'
    }
  ];

  // Our Capabilities
  const capabilities = [
    {
      icon: '🎨',
      title: 'Custom Design',
      description: 'Unique, brand-focused designs tailored to your business identity'
    },
    {
      icon: '📱',
      title: 'Responsive Development',
      description: 'Perfect experience across all devices - mobile, tablet, and desktop'
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Lightning-fast loading times with optimized code and assets'
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Enterprise-grade security with SSL, encryption, and best practices'
    },
    {
      icon: '🔍',
      title: 'SEO Optimized',
      description: 'Built-in SEO strategies to rank higher in search results'
    },
    {
      icon: '🔧',
      title: 'Easy Maintenance',
      description: 'User-friendly admin panels for effortless content management'
    },
    {
      icon: '🌍',
      title: 'Multi-Language',
      description: 'Reach global audiences with multi-language support'
    },
    {
      icon: '📊',
      title: 'Analytics Integration',
      description: 'Track performance with integrated analytics and reporting'
    }
  ];

  // Technologies We Use
  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Flutter', icon: '📱', category: 'Mobile' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'Kotlin', icon: '🤖', category: 'Mobile' },
    { name: 'TypeScript', icon: '📘', category: 'Language' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Firestore', icon: '🔥', category: 'Database' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'WebSocket', icon: '🔌', category: 'Real-Time' },
    { name: 'Supabase', icon: '⚡', category: 'Backend' },
    { name: 'Vite', icon: '⚡', category: 'Build Tool' }
  ];

  // Development Process
  const process = [
    {
      step: 1,
      title: 'Discovery & Planning',
      description: 'Understanding your business goals, target audience, and project requirements',
      icon: '🔍',
      duration: '1-2 weeks'
    },
    {
      step: 2,
      title: 'Design & Prototyping',
      description: 'Creating wireframes, mockups, and interactive prototypes for approval',
      icon: '🎨',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Development',
      description: 'Building your website with clean code, best practices, and modern technologies',
      icon: '💻',
      duration: '4-8 weeks'
    },
    {
      step: 4,
      title: 'Testing & QA',
      description: 'Rigorous testing across devices, browsers, and performance optimization',
      icon: '🧪',
      duration: '1-2 weeks'
    },
    {
      step: 5,
      title: 'Launch & Support',
      description: 'Deploying to production with ongoing maintenance and support',
      icon: '🚀',
      duration: 'Ongoing'
    }
  ];

  const filteredWebsites = activeCategory === 'all' 
    ? websites 
    : websites.filter(site => site.category === activeCategory);

  return (
    <div className="web-development">
      {/* Hero Section */}
      <section className="web-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Professional <span className="text-gradient">Web Development</span>
            </h1>
            <p className="hero-subtitle">
              Transforming Ideas into Powerful Digital Experiences
            </p>
            <p className="hero-description">
              We create modern, responsive, and high-performance websites tailored to your business needs. 
              From corporate websites to complex web applications, we deliver solutions that drive results.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website Examples Section */}
      <section className="website-gallery section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Website <span className="text-gradient">Examples</span></h2>
            <p>Explore the types of websites we can build for you</p>
          </motion.div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-name">{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Website Grid */}
          <div className="website-grid">
            {filteredWebsites.map((website, index) => (
              <motion.div
                key={website.id}
                className="website-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="card-image" style={{ background: `linear-gradient(135deg, ${website.color}33 0%, ${website.color}11 100%)` }}>
                  <div className="image-icon" style={{ color: website.color }}>
                    {website.image}
                  </div>
                  <div className="card-overlay"></div>
                </div>
                <div className="card-content">
                  <h3>{website.title}</h3>
                  <p className="card-description">{website.description}</p>
                  
                  <div className="card-features">
                    {website.features.map((feature, i) => (
                      <span key={i} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>

                  <div className="card-tech">
                    <span className="tech-label">Tech Stack:</span>
                    <div className="tech-tags">
                      {website.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="capabilities-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our <span className="text-gradient">Capabilities</span></h2>
            <p>What makes our web development services exceptional</p>
          </motion.div>

          <div className="capabilities-grid">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="capability-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="capability-icon">{capability.icon}</div>
                <h4>{capability.title}</h4>
                <p>{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="process-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Development <span className="text-gradient">Process</span></h2>
            <p>Our proven workflow to deliver exceptional results</p>
          </motion.div>

          <div className="process-timeline">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="process-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="process-number">{item.step}</div>
                <div className="process-content">
                  <div className="process-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span className="process-duration">{item.duration}</span>
                </div>
                {index < process.length - 1 && <div className="process-connector"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Technologies <span className="text-gradient">We Use</span></h2>
            <p>Modern tools and frameworks for cutting-edge solutions</p>
          </motion.div>

          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="tech-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="tech-icon">{tech.icon}</div>
                <div className="tech-name">{tech.name}</div>
                <div className="tech-category">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="web-cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Build Your <span className="text-gradient">Dream Website?</span></h2>
            <p>
              Let's discuss your project and create a custom solution that exceeds your expectations. 
              Contact us today for a free consultation and quote.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Start Your Project
                <span className="btn-arrow">→</span>
              </Link>
              <a href="mailto:info@quantummind-innovation.com" className="btn btn-secondary btn-large">
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;

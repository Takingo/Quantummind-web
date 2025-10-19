import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setFormStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: ''
    });

    try {
      // Using PHP backend (sendmail.php)
      const response = await fetch('/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.projectDetails,
          _replyto: formData.email,
          _subject: `New Contact Form Submission from ${formData.name}`
        })
      });

      if (response.ok) {
        setFormStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        });
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitting: false,
            submitted: false,
            error: false,
            message: ''
          });
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            projectDetails: ''
          });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Oops! Something went wrong. Please try again or email us directly at info@quantummind-innovation.com'
      });
    }
  };

  return (
    <div className="contact">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{t.contact.heroTitle} <span className="text-gradient">{t.contact.heroTitleHighlight}</span></h1>
            <p className="hero-subtitle">
              {t.contact.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>{t.contact.formTitle} <span className="text-gradient">{t.contact.formTitleHighlight}</span></h2>
              
              {/* Success Message */}
              {formStatus.submitted && (
                <motion.div 
                  className="form-message success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="message-icon">✓</span>
                  <p>{formStatus.message}</p>
                </motion.div>
              )}
              
              {/* Error Message */}
              {formStatus.error && (
                <motion.div 
                  className="form-message error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <span className="message-icon">✗</span>
                  <p>{formStatus.message}</p>
                </motion.div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">{t.contact.nameLabel} {t.common.required}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">{t.contact.companyLabel}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t.contact.emailLabel} {t.common.required}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t.contact.phoneLabel}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+49 123 456 7890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectDetails">{t.contact.messageLabel} {t.common.required}</label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder={t.contact.messagePlaceholder}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? (
                    <>
                      <span className="spinner"></span>
                      {t.contact.submitting}
                    </>
                  ) : formStatus.submitted ? (
                    `✓ ${t.contact.successTitle}`
                  ) : (
                    t.contact.submitButton
                  )}
                </button>
                
                <p className="form-note">
                  By submitting this form, you agree to our <a href="/privacy-policy">Privacy Policy</a>.
                </p>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-info">
                <h2>Get in touch</h2>
                <p className="info-description">
                  We're here to help you transform your industrial operations with intelligent solutions.
                </p>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-content">
                      <h4>Email</h4>
                      <a href="mailto:info@quantummind-innovation.com">info@quantummind-innovation.com</a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📱</div>
                    <div className="info-content">
                      <h4>WhatsApp</h4>
                      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                        Message us on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">💼</div>
                    <div className="info-content">
                      <h4>LinkedIn</h4>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        Connect with us
                      </a>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <h4>Location</h4>
                      <p>Germany</p>
                    </div>
                  </div>
                </div>

                <div className="business-hours">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM CET</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div
            className="map-placeholder"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <h3>Headquartered in Germany</h3>
              <p>Serving clients across Europe and beyond</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="contact-cta">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Quantum Mind Innovation</h2>
            <p className="cta-slogan">The Future of Things</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

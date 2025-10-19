import React from 'react';
import { motion } from 'framer-motion';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      {/* Hero */}
      <section className="page-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Privacy Policy & <span className="text-gradient">Legal Information</span></h1>
            <p className="hero-subtitle">
              Your privacy and data protection rights are of the highest importance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="privacy-content section-padding">
        <div className="container">
          <motion.div
            className="content-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Privacy Policy */}
            <div className="legal-section">
              <h2>Privacy Policy</h2>
              <div className="legal-disclaimer">
                <p><strong>Last updated:</strong> October 2025</p>
                <p>
                  At Quantum Mind Innovation ("we", "our", or "us"), your privacy and data protection rights are of the highest importance.
                  This Privacy Policy explains how we collect, process, and protect your personal data in compliance with the EU General Data Protection Regulation (GDPR) and applicable German privacy laws.
                </p>
              </div>

              <div className="privacy-section">
                <h3>1. Data Controller</h3>
                <div className="contact-info">
                  <p><strong>Quantum Mind Innovation</strong><br />
                  Odenthal, North Rhine-Westphalia, Germany<br />
                  👤 <strong>Responsible person:</strong> İbrahim Bağyapan<br />
                  📧 <strong>Email:</strong> info@quantummind-innovation.com</p>
                </div>
                <p>We are responsible for determining the purposes and methods of processing your personal data.</p>
              </div>

              <div className="privacy-section">
                <h3>2. What Data We Collect</h3>
                <p>We may collect and process the following categories of data:</p>
                <ul>
                  <li><strong>Identification & Contact Data:</strong> name, email address, company name, job title</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device ID, operating system, access times</li>
                  <li><strong>Usage Data:</strong> pages visited, navigation patterns, interaction with our products</li>
                  <li><strong>System Data (for business clients):</strong> identifiers of devices such as NFC tags, UWB beacons, or IoT modules used in our systems</li>
                </ul>
                <p>We do not collect sensitive personal data (biometric, health, or financial data) through this website.</p>
              </div>

              <div className="privacy-section">
                <h3>3. Purpose of Processing</h3>
                <p>Your personal data is processed strictly for:</p>
                <ul>
                  <li>Providing access to our services and demos</li>
                  <li>Responding to support or contact requests</li>
                  <li>Maintaining security and system functionality</li>
                  <li>Analyzing website performance and improving experience</li>
                  <li>Fulfilling legal obligations where applicable</li>
                </ul>
                <p>Processing is based on Article 6(1)(b) (contract performance), Article 6(1)(f) (legitimate interest), or Article 6(1)(a) (your consent).</p>
              </div>

              <div className="privacy-section">
                <h3>4. Data Retention</h3>
                <p>Personal data is retained only as long as necessary for the purpose collected, unless longer retention is required by law (e.g., accounting or compliance).</p>
              </div>

              <div className="privacy-section">
                <h3>5. Data Security</h3>
                <p>We use encrypted connections, secure servers within the EEA, and strict access control. All persons handling data are bound by confidentiality agreements.</p>
              </div>

              <div className="privacy-section">
                <h3>6. Third-Party Processors</h3>
                <p>If third-party services (e.g., hosting, analytics, email) are used, they operate under GDPR-compliant Data Processing Agreements (DPAs) ensuring equivalent protection. We do not sell or share data with third parties for marketing.</p>
              </div>

              <div className="privacy-section">
                <h3>7. Cookies & Tracking</h3>
                <p>We use minimal cookies for site functionality and anonymous analytics. You may disable cookies in your browser at any time. When analytics tools are used, IP addresses are anonymized and stored for limited durations per GDPR guidelines.</p>
              </div>

              <div className="privacy-section">
                <h3>8. Your Rights (Articles 15–22 GDPR)</h3>
                <p>You have the right to:</p>
                <ul>
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Restrict or object to processing</li>
                  <li>Receive your data in a portable format</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p>To exercise these rights, contact: <strong>📩 info@quantummind-innovation.com</strong></p>
              </div>

              <div className="privacy-section">
                <h3>9. International Transfers</h3>
                <p>Data is stored and processed primarily within the European Economic Area (EEA). If transferred abroad (e.g., via cloud providers), it will be secured under Standard Contractual Clauses (SCCs) approved by the European Commission.</p>
              </div>

              <div className="privacy-section">
                <h3>10. Changes to This Policy</h3>
                <p>We may update this policy as technologies or regulations evolve. All updates will appear on this page with revised "Last Updated" dates.</p>
              </div>
            </div>

            {/* Impressum */}
            <div className="legal-section impressum-section">
              <h2>Impressum</h2>
              <div className="contact-info">
                <p><strong>Quantum Mind Innovation</strong><br />
                Odenthal, North Rhine-Westphalia, Germany</p>
                <p>👤 <strong>Responsible Person (Verantwortlich gemäß § 5 TMG):</strong><br />
                İbrahim Bağyapan</p>
                <p>📧 <strong>Email:</strong> info@quantummind-innovation.com</p>
              </div>

              <div className="impressum-section-content">
                <h3>Disclaimer</h3>
                <p>All information on this website is provided with care and reviewed for accuracy. However, we cannot guarantee that all content is always up to date, complete, or correct. Liability claims against the operator that refer to material or immaterial damages caused by the use or non-use of the presented information are excluded, unless intentional or grossly negligent fault can be proven.</p>

                <h3>Copyright Notice</h3>
                <p>All texts, images, designs, and concepts on this website are protected by copyright. Duplication, distribution, or use in any form is prohibited without prior written permission from Quantum Mind Innovation.</p>

                <h3>External Links</h3>
                <p>Despite careful control of content, we assume no liability for the content of external links. The operators of linked pages are solely responsible for their content.</p>

                <h3>Dispute Resolution</h3>
                <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
                <p>We are not obliged or willing to participate in dispute resolution proceedings before a consumer arbitration board.</p>
              </div>
            </div>

            {/* Accessibility Statement */}
            <div className="legal-section accessibility-section">
              <h2>Accessibility Statement</h2>
              <div className="accessibility-content">
                <p><strong>Last updated:</strong> October 2025</p>
                
                <h3>Our Commitment to Accessibility</h3>
                <p>Quantum Mind Innovation is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

                <h3>Conformance Status</h3>
                <p>We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain how to make web content more accessible to people with disabilities and user-friendly for everyone.</p>

                <h3>Measures to Support Accessibility</h3>
                <p>Quantum Mind Innovation takes the following measures to ensure accessibility:</p>
                <ul>
                  <li>Include accessibility as part of our mission statement</li>
                  <li>Include accessibility throughout our internal policies</li>
                  <li>Integrate accessibility into our procurement practices</li>
                  <li>Provide continual accessibility training for our staff</li>
                  <li>Assign clear accessibility goals and responsibilities</li>
                  <li>Employ formal accessibility quality assurance methods</li>
                </ul>

                <h3>Technical Specifications</h3>
                <p>Accessibility of this website relies on the following technologies to work with the combination of web browser and any assistive technologies or plugins installed on your computer:</p>
                <ul>
                  <li>HTML</li>
                  <li>WAI-ARIA</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>

                <h3>Limitations and Alternatives</h3>
                <p>Despite our best efforts to ensure accessibility, there may be some limitations. If you encounter any accessibility barriers, please contact us with details of the issue and we will work to address it promptly.</p>

                <h3>Assessment Approach</h3>
                <p>Quantum Mind Innovation assessed the accessibility of this website by the following approaches:</p>
                <ul>
                  <li>Self-evaluation</li>
                  <li>External evaluation using automated accessibility testing tools</li>
                  <li>User testing with assistive technologies</li>
                </ul>

                <h3>Feedback</h3>
                <p>We welcome your feedback on the accessibility of this website. Please let us know if you encounter accessibility barriers:</p>
                <ul>
                  <li><strong>Email:</strong> info@quantummind-innovation.com</li>
                  <li><strong>Subject line:</strong> Website Accessibility</li>
                </ul>
                <p>We try to respond to feedback within 5 business days.</p>

                <h3>Compatibility with Browsers and Assistive Technology</h3>
                <p>This website is designed to be compatible with the following assistive technologies:</p>
                <ul>
                  <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                  <li>Voice recognition software</li>
                  <li>Screen magnification software</li>
                  <li>Switch navigation</li>
                </ul>

                <h3>Technical Limitations</h3>
                <p>Some content may have limited accessibility due to technical constraints. We are working to address these limitations in future updates.</p>
              </div>
            </div>

            <div className="contact-footer">
              <div className="contact-card">
                <h3>Questions about this Policy?</h3>
                <p>If you have any questions about this Privacy Policy, Impressum, or our accessibility practices, please contact us:</p>
                <div className="contact-details">
                  <p><strong>Quantum Mind Innovation</strong><br />
                  Odenthal, North Rhine-Westphalia, Germany<br />
                  👤 İbrahim Bağyapan<br />
                  📧 info@quantummind-innovation.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
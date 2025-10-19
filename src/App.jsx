import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import AppDevelopment from './pages/AppDevelopment';
import NFCSystems from './pages/NFCSystems';
import UWBRTLS from './pages/UWBRTLS';
import Solutions from './pages/Solutions';
import WebDevelopment from './pages/WebDevelopment';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import InnovationHub from './pages/InnovationHub';

function App() {
  console.log('🟢 App component rendering...');
  
  return (
    <LanguageProvider>
      <Router>
        <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app-development" element={<AppDevelopment />} />
              <Route path="/nfc-systems" element={<NFCSystems />} />
              <Route path="/uwb-rtls" element={<UWBRTLS />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/innovation-hub" element={<InnovationHub />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

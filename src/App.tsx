import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import Services from './components/sections/Services';
import Footer from './components/layout/Footer'; 
import ContactModal from './components/ui/ContactModal';
import CTA from './components/sections/CTA';
import CaseStudies from './components/sections/CaseStudies';
import ScrollToTop from './components/ui/ScrollToTop'; 
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import SentinelAction from './components/sections/SentinelAction';

const HashScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && pathname === '/') {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150); // Increased slightly for smoother transition after route change
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const HomePage = () => (
    <>
      <section id="home">
        <Hero onOpenModal={() => setIsModalOpen(true)} />
      </section>
      
      <section id="about">
        <About />
      </section>

      <section id="architecture">
        <Features />
      </section>

      <section id="services">
        <Services />
      </section>

      {/* 🔥 Corrected: Wrapped Sentinel with the ID for Nav functionality */}
      <section id="sentinel">
        <SentinelAction />
      </section>

      <CaseStudies />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
    </>
  );

  return (
    <Router>
      <ScrollToTop />
      <HashScrollHandler />
      
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500/30">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>

        <Footer />
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
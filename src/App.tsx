import { useState, useEffect } from 'react'; // 🔥 Added useEffect
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

// 🔥 Legal Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// 🔥 NEW: Separate component to handle the Hash Scrolling
// This must be INSIDE the Router but OUTSIDE the main App logic
const HashScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && pathname === '/') {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reusable Home Page Component
  const HomePage = () => (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <About />
      <div id="architecture"> {/* Ensure your IDs match your NavLinks! */}
        <Features />
      </div>
      <Services />
      <CaseStudies />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
    </>
  );

  return (
    <Router>
      <ScrollToTop />
      <HashScrollHandler /> {/* 🔥 Now useLocation() works because it's a child of Router */}
      
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
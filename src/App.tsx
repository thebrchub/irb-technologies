import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ArrowUp } from 'lucide-react'; // 🔥 FIXED: Imported ArrowUp for our new button
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
// import Features from './components/sections/Features';
import Services from './components/sections/Services';
import Footer from './components/layout/Footer'; 
import ContactModal from './components/ui/ContactModal';
import CTA from './components/sections/CTA';
import CaseStudies from './components/sections/CaseStudies';
import ScrollManager from './components/ui/ScrollToTop'; 
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import MegaEvent from './pages/MegaEvent';
import SmeShield from './pages/SmeShield';
import StartupCompliance from './pages/StartupCompliance';
import NotFound from './pages/NotFound';

// 🔥 NEW: Dedicated BackToTop component with scroll-tracking logic and premium glass styling
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Shows the button after scrolling past the ~800px mark (Hero section height)
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[70] p-3 md:p-4 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:bg-slate-800 hover:text-amber-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Go to top"
    >
      <ArrowUp size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
    </button>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const HomePage = () => (
    <>
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <About />
      {/* <Features /> */}
      <Services />
      <CaseStudies />
      <CTA onOpenModal={() => setIsModalOpen(true)} />
      {/* 🔥 FIXED: Dropped the BackToTop button right here so it only exists on the HomePage */}
      <BackToTop />
    </>
  );

  return (
    <Router>
      <ScrollManager />
      
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-amber-500/30 flex flex-col">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/case-study/mega-event" element={<MegaEvent />} />
            <Route path="/case-study/sme-shield" element={<SmeShield />} />
            <Route path="/case-study/startup-compliance" element={<StartupCompliance />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
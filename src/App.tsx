import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// 🔥 FIXED: Swapped 'Plus' for 'MessageSquare' and 'X'
import { ArrowUp, MessageCircle, Phone, MessageSquare, X } from 'lucide-react';
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

// 🔥 SMART FAB: Seamlessly toggles between Contact Actions and Scroll To Top
const SmartFAB = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isFabOpen, setIsFabOpen] = useState(false); 

  useEffect(() => {
    let scrollTimer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolling(true);
      
      setIsFabOpen(false); 

      if (scrollTimer) window.clearTimeout(scrollTimer);
      
      scrollTimer = window.setTimeout(() => {
        setIsScrolling(false);
      }, 750);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (scrollTimer) window.clearTimeout(scrollTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const phoneNumber = '+919146466127';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;

  const showToTop = isScrolling && scrollY > 200;

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[70]">
      
      {/* ─── SCROLL TO TOP BUTTON ─── */}
      <button
        onClick={scrollToTop}
        aria-label="Go to top"
        className={`absolute bottom-0 right-0 flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:bg-slate-800 hover:text-amber-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          showToTop 
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 scale-50 translate-y-5 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} className="md:w-6 md:h-6" strokeWidth={2.5} />
      </button>

      {/* ─── CONTACT FAB GROUP ─── */}
      <div
        onMouseLeave={() => setIsFabOpen(false)}
        className={`flex flex-col items-end gap-3 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom ${
          showToTop 
            ? 'opacity-0 scale-50 translate-y-5 pointer-events-none' 
            : 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
        }`}
      >
        {/* Hidden Actions (WhatsApp & Call) */}
        <div className={`flex flex-col items-end gap-3 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom ${
            isFabOpen 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
              : 'opacity-0 translate-y-5 scale-95 pointer-events-none'
          }`}
        >
          <a
            href={`tel:${phoneNumber}`}
            aria-label="Call IRB Technology"
            className="group/action relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-end overflow-hidden rounded-full bg-blue-600 text-white shadow-[0_16px_32px_rgba(37,99,235,0.28)] hover:w-36 md:hover:w-40 hover:bg-blue-700 hover:-translate-y-1 focus:w-36 md:focus:w-40 focus:bg-blue-700 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <span className="absolute left-5 md:left-6 opacity-0 whitespace-nowrap text-base md:text-lg font-extrabold transition-opacity duration-300 group-hover/action:opacity-100 group-focus/action:opacity-100">
              Call Us
            </span>
            <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center">
              <Phone size={24} strokeWidth={2.5} />
            </div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="group/action relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-end overflow-hidden rounded-full bg-[#22c55e] text-white shadow-[0_16px_32px_rgba(34,197,94,0.28)] hover:w-40 md:hover:w-44 hover:bg-[#16a34a] hover:-translate-y-1 focus:w-40 md:focus:w-44 focus:bg-[#16a34a] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <span className="absolute left-5 md:left-6 opacity-0 whitespace-nowrap text-base md:text-lg font-extrabold transition-opacity duration-300 group-hover/action:opacity-100 group-focus/action:opacity-100">
              WhatsApp
            </span>
            <div className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center">
              <MessageCircle size={24} strokeWidth={2.4} />
            </div>
          </a>
        </div>

        {/* Primary Toggle Button */}
        <button
          type="button"
          onClick={() => setIsFabOpen(!isFabOpen)} 
          onMouseEnter={() => setIsFabOpen(true)} 
          aria-label="Contact quick actions"
          className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-slate-900 text-white border border-slate-700/60 shadow-[0_18px_35px_rgba(15,23,42,0.28)] hover:bg-slate-800 hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-10"
        >
          {/* 🔥 FIXED: Added dual-icon morph animation. Chat bubble shows when closed, X shows when open! */}
          <MessageSquare
            size={26}
            strokeWidth={2}
            className={`absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${isFabOpen ? 'opacity-0 scale-50 -rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
          />
          <X
            size={28}
            strokeWidth={2.5}
            className={`absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${isFabOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'}`}
          />
        </button>
      </div>

    </div>
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
      <SmartFAB />
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
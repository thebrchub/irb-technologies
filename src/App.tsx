import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { MessageCircle, Phone, MessageSquare, X } from 'lucide-react';
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

// 🔥 SMART FAB: Purely Contact Actions now. Stripped out all unnecessary scroll logic.
const SmartFAB = () => {
  const [isFabOpen, setIsFabOpen] = useState(false); 

  const phoneNumber = '+919146466127';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 2xl:bottom-12 2xl:right-12 z-[70]">
      
      {/* ─── CONTACT FAB GROUP ─── */}
      <div
        onMouseLeave={() => setIsFabOpen(false)}
        className="flex flex-col items-end gap-2 lg:gap-3 origin-bottom relative"
      >
        {/* Hidden Actions (WhatsApp & Call) */}
        <div className={`flex flex-col items-end gap-2 lg:gap-3 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom absolute bottom-[110%] right-0 ${
            isFabOpen 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
              : 'opacity-0 translate-y-5 scale-95 pointer-events-none'
          }`}
        >
          <a
            href={`tel:${phoneNumber}`}
            aria-label="Call IRB Technology"
            className="group/action relative flex h-9 w-9 md:h-9 md:w-9 2xl:h-14 2xl:w-14 items-center justify-end overflow-hidden rounded-full bg-blue-600 text-white shadow-[0_12px_24px_rgba(37,99,235,0.28)] hover:w-28 md:hover:w-32 2xl:hover:w-44 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <span className="absolute left-3 lg:left-4 2xl:left-6 opacity-0 whitespace-nowrap text-xs lg:text-sm 2xl:text-lg font-bold tracking-tight transition-opacity duration-300 group-hover/action:opacity-100">
              Call Us
            </span>
            <div className="flex h-9 w-9 md:h-9 md:w-9 2xl:h-14 2xl:w-14 shrink-0 items-center justify-center">
              <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 2xl:w-6 2xl:h-6" strokeWidth={2.5} />
            </div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="group/action relative flex h-9 w-9 md:h-9 md:w-9 2xl:h-14 2xl:w-14 items-center justify-end overflow-hidden rounded-full bg-[#22c55e] text-white shadow-[0_12px_24px_rgba(34,197,94,0.28)] hover:w-32 md:hover:w-32 2xl:hover:w-44 hover:bg-[#16a34a] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <span className="absolute left-3 lg:left-4 2xl:left-6 opacity-0 whitespace-nowrap text-xs lg:text-sm 2xl:text-lg font-bold tracking-tight transition-opacity duration-300 group-hover/action:opacity-100">
              WhatsApp
            </span>
            <div className="flex h-9 w-9 md:h-9 md:w-9 2xl:h-14 2xl:w-14 shrink-0 items-center justify-center">
              <MessageCircle className="w-[15px] h-[15px] md:w-4 md:h-4 2xl:w-[26px] 2xl:h-[26px]" strokeWidth={2.4} />
            </div>
          </a>
        </div>

        {/* Primary Toggle Button */}
        <button
          type="button"
          onClick={() => setIsFabOpen(!isFabOpen)} 
          onMouseEnter={() => setIsFabOpen(true)} 
          aria-label="Contact quick actions"
          className={`flex h-10 w-10 md:h-10 md:w-10 2xl:h-16 2xl:w-16 items-center justify-center rounded-full border shadow-[0_10px_30px_rgba(196,89,25,0.3)] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-10 
            ${isFabOpen 
              ? 'bg-white border-slate-200' 
              : 'bg-[#C45919] hover:bg-[#A34915] border-[#C45919]'
            }`}
        >
          {/* Morphing Message / X Icons perfectly scaled */}
          <MessageSquare
            strokeWidth={2.2}
            className={`absolute w-4 h-4 2xl:w-7 2xl:h-7 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${isFabOpen ? 'opacity-0 scale-50 -rotate-90 text-[#C45919]' : 'opacity-100 scale-100 rotate-0 text-white'}`}
          />
          <X
            strokeWidth={2.8}
            className={`absolute w-5 h-5 2xl:w-9 2xl:h-9 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${isFabOpen ? 'opacity-100 scale-100 rotate-0 text-[#C45919]' : 'opacity-0 scale-50 rotate-90 text-white'}`}
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
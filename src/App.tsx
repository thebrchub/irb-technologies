import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { MessageSquare, X } from 'lucide-react';
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

//   SMART FAB: Purely Contact Actions now. Stripped out all unnecessary scroll logic.
const SmartFAB = () => {
  const [isFabOpen, setIsFabOpen] = useState(false); 

  const phoneNumber = '+919146466127';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 2xl:bottom-12 2xl:right-12 z-[70]">
      
     
      <div
        onMouseLeave={() => setIsFabOpen(false)}
        className="flex flex-col items-end gap-2 lg:gap-3 origin-bottom relative"
      >
        
        <div className={`flex flex-col items-end gap-2 lg:gap-3 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-bottom absolute bottom-full pb-2 lg:pb-3 right-0 ${
            isFabOpen 
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
              : 'opacity-0 translate-y-5 scale-95 pointer-events-none'
          }`}
        >
          {/* Call Action */}
          <a
            href={`tel:${phoneNumber}`}
            aria-label="Call Us"
            className="group/action relative flex h-12 w-12 2xl:h-16 2xl:w-16 items-center justify-end overflow-hidden rounded-full bg-blue-600 text-white shadow-[0_12px_24px_rgba(37,99,235,0.28)] hover:w-36 2xl:hover:w-48 hover:bg-blue-700 hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <span className="absolute left-4 2xl:left-6 opacity-0 whitespace-nowrap text-sm 2xl:text-lg font-bold tracking-tight transition-opacity duration-300 group-hover/action:opacity-100">
              Call Us
            </span>
            <div className="flex h-12 w-12 2xl:h-16 2xl:w-16 shrink-0 items-center justify-center">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 2xl:w-7 2xl:h-7">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
          </a>

          {/* WhatsApp Action */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat on WhatsApp"
            className="group/action relative flex h-12 w-12 2xl:h-16 2xl:w-16 items-center justify-end overflow-hidden rounded-full bg-[#22c55e] text-white shadow-[0_12px_24px_rgba(34,197,94,0.28)] hover:w-36 2xl:hover:w-48 hover:bg-[#16a34a] hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
          >
            <span className="absolute left-4 2xl:left-6 opacity-0 whitespace-nowrap text-sm 2xl:text-lg font-bold tracking-tight transition-opacity duration-300 group-hover/action:opacity-100">
              WhatsApp
            </span>
            <div className="flex h-12 w-12 2xl:h-16 2xl:w-16 shrink-0 items-center justify-center">
               <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 2xl:w-8 2xl:h-8">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </div>
          </a>
        </div>

        {/* Primary Toggle Button */}
        <button
          type="button"
          onClick={() => setIsFabOpen(!isFabOpen)} 
          onMouseEnter={() => setIsFabOpen(true)} 
          aria-label="Contact quick actions"
          className={`flex h-12 w-12 2xl:h-16 2xl:w-16 items-center justify-center rounded-full border shadow-[0_10px_30px_rgba(196,89,25,0.3)] hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative z-10 
            ${isFabOpen 
              ? 'bg-white border-slate-200' 
              : 'bg-[#C45919] hover:bg-[#A34915] border-[#C45919]'
            }`}
        >
          <MessageSquare
            strokeWidth={2.2}
            className={`absolute w-5 h-5 2xl:w-7 2xl:h-7 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${isFabOpen ? 'opacity-0 scale-50 -rotate-90 text-[#C45919]' : 'opacity-100 scale-100 rotate-0 text-white'}`}
          />
          <X
            strokeWidth={2.8}
            className={`absolute w-6 h-6 2xl:w-9 2xl:h-9 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${isFabOpen ? 'opacity-100 scale-100 rotate-0 text-[#C45919]' : 'opacity-0 scale-50 rotate-90 text-white'}`}
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
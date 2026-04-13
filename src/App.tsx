import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
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

        <Footer onOpenModal={() => setIsModalOpen(true)} />
        
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
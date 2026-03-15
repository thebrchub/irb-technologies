 
import { ShieldCheck, Zap, ArrowRight, Globe } from 'lucide-react';
import ThreatDeflector from '../ui/ThreatDeflector'; 

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    
    <section id="home" className="relative bg-white pt-32 pb-16 md:pt-36 md:pb-24 xl:pt-32 xl:pb-12 overflow-hidden xl:h-[100dvh] xl:min-h-[700px] flex items-center">
      
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 w-full">
        {/* 🔥 FIX 2: Shifted the 2-column layout to 'xl'. iPads will securely stack vertically instead of squishing sideways. */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
          
          {/* LEFT: Copy & CTA */}
          <div className="xl:col-span-7 flex flex-col items-start pt-4 xl:pt-0">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-extrabold uppercase tracking-widest mb-6 shadow-sm">
              <ShieldCheck size={16} />
              Elite VAPT & Compliance
            </div>

            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold text-slate-900 tracking-tight lg:leading-[1.05] mb-6">
              Cybersecurity Tailored to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Your Business.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              From high-concurrency protection for <strong className="text-slate-900">Mega-Events</strong> to agile <strong className="text-slate-900">DPDP-ready</strong> audits for growing SMEs. We safeguard your digital assets, no matter the size of the stage.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl mb-8">
               <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold">
                     <Globe size={16} className="text-amber-500" /> Enterprise & Events
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                     Comprehensive, high-concurrency protection for large scale environments.
                  </p>
               </div>
               
               <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold">
                     <Zap size={16} className="text-amber-500" /> On-Demand Security
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                     Fast, affordable audits and VAPT tailored for SMEs and startups.
                  </p>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button 
                onClick={onOpenModal}
                className="group w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1"
              >
                Schedule an Audit <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              
              <a 
                href="#services"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white border border-slate-200 hover:border-amber-300 text-slate-700 hover:text-amber-600 font-bold rounded-xl flex items-center justify-center transition-all hover:bg-amber-50"
              >
                View Services
              </a>
            </div>

          </div>

          {/* RIGHT: The Interlinked 3D Component */}
          {/* 🔥 FIX 3: Replaced weird vh heights on tablets with solid pixel heights so the graphic scales perfectly without blowing out the container. */}
          <div className="xl:col-span-5 relative w-full h-[400px] md:h-[500px] lg:h-[550px] xl:h-[70vh] max-h-[600px] flex items-center justify-center mt-10 xl:mt-0">
             <ThreatDeflector />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
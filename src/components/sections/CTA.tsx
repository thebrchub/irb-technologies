import { ArrowRight, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

interface CTAProps {
  onOpenModal: () => void;
}

const CTA = ({ onOpenModal }: CTAProps) => {
  return (
   
    <section className="bg-[#FDFBF7] pt-6 md:pt-10 lg:pt-14 pb-10 md:pb-16 lg:pb-20 relative overflow-hidden">
      
      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 relative z-10">
        
        <ScrollReveal>
          {/* 🔥 FIXED: Reduced mobile padding (px-4 py-8) to give the text maximum horizontal width */}
          <div className="relative bg-slate-900 rounded-[2rem] lg:rounded-[3rem] px-4 py-8 sm:px-6 md:px-12 md:py-12 lg:px-16 lg:py-14 2xl:px-20 2xl:py-16 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
            
            {/* Ambient High-Tech Glows Inside the Card */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/15 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

            {/* 🔥 FIXED: Tightened mobile gap down to gap-5 */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 md:gap-8 lg:gap-16 2xl:gap-24">
              
              {/* Left Side: Text Content */}
              <div className="flex flex-col items-center lg:items-start w-full max-w-2xl 2xl:max-w-5xl">
                
                <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 lg:mb-6 shadow-sm text-center">
                  <ShieldCheck size={14} className="md:w-4 md:h-4" />
                  Secure Your Future
                </div>

                {/* 🔥 FIXED: Removed mb-5 on mobile (now mb-0) to kill the extra space above the button. Let the text stretch full width! */}
                <h2 className="text-center lg:text-left text-3xl sm:text-4xl md:text-5xl lg:text-5xl 2xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-0 md:mb-5 w-full [text-wrap:balance]">
                  
                  {/* MOBILE HEADING: Removed flex-col so it flows naturally and wide */}
                  <span className="md:hidden">
                    Don't wait for a breach to{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                      build your defenses.
                    </span>
                  </span>

                  {/* DESKTOP HEADING */}
                  <span className="hidden md:inline">
                    Start your security{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                      journey today!
                    </span>
                  </span>
                  
                </h2>

                <p className="hidden md:block text-center md:text-left text-base md:text-lg 2xl:text-xl text-slate-300 leading-relaxed font-light max-w-xl 2xl:max-w-2xl w-full">
                  Don't wait for a breach to build your defenses. Partner with IRB Technology for proactive, elite cybersecurity tailored to your exact scale.
                </p>
              </div>

              {/* Right Side: CTA Button & Status */}
              {/* 🔥 FIXED: Removed mt-2 to pull the button up tightly against the heading on mobile */}
              <div className="flex flex-col items-center lg:items-end shrink-0 w-full lg:w-auto mt-0 lg:translate-y-3">
                
                <button 
                  onClick={onOpenModal}
                  className="group w-full md:w-auto relative px-8 py-4 lg:px-10 lg:py-5 2xl:px-12 2xl:py-6 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-lg 2xl:text-xl rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_50px_rgba(245,158,11,0.4)] hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    Contact Our Team <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>

                <p className="mt-4 lg:mt-5 text-sm 2xl:text-base text-slate-400 flex items-center justify-center lg:justify-end gap-2 font-medium">
                   <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                   Security Architects available 24/7
                </p>
              </div>
              
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default CTA;
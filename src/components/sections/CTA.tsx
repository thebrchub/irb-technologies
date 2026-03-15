 
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

interface CTAProps {
  onOpenModal: () => void;
}

const CTA = ({ onOpenModal }: CTAProps) => {
  return (
    /* 🔥 UPDATED: Swapped bg-slate-50 for bg-[#FDFBF7] (Premium Cream) 🔥 */
    <section className="bg-[#FDFBF7] py-12 lg:py-16 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        <ScrollReveal>
          {/* The Sleek "Ribbon" CTA Card */}
          <div className="relative bg-slate-900 rounded-[2rem] lg:rounded-[3rem] p-8 md:p-10 lg:p-14 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
            
            {/* Ambient High-Tech Glows Inside the Card */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/15 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              
              {/* Left Side: Text Content */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-5 shadow-sm">
                  <ShieldCheck size={16} />
                  Secure Your Future
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                  Start your security{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                    journey today.
                  </span>
                </h2>

                <p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
                  Don't wait for a breach to build your defenses. Partner with IRB Technologies for proactive, elite cybersecurity tailored to your exact scale.
                </p>
              </div>

              {/* Right Side: CTA Button & Status */}
              <div className="flex flex-col items-center lg:items-end shrink-0 w-full lg:w-auto">
                <button 
                  onClick={onOpenModal}
                  className="group w-full sm:w-auto relative px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-lg rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_50px_rgba(245,158,11,0.4)] hover:-translate-y-1 overflow-hidden"
                >
                  {/* Button light sweep animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    Get a Quote <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </span>
                </button>

                <p className="mt-4 text-xs md:text-sm text-slate-400 flex items-center justify-center lg:justify-end gap-2 font-medium">
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
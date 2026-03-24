 
import { Target, Eye, ShieldCheck, Cpu } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const About = () => {
  return (
    <section id="about" className="bg-slate-50 py-24 relative overflow-hidden border-t border-slate-200">
      
      {/* Subtle Background Textures */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* NARRATIVE HEADER: Centered and grounded to feel like a true "About" section */}
        <header className="max-w-4xl mx-auto text-center mb-20">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              About IRB  Technology
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              Digital growth should <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">never be limited</span> by security fears.
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              In an era where digital threats move faster than traditional defenses, IRB  Technology was founded to provide more than just security—we provide <strong className="text-slate-900">resilience</strong>. We believe that robust cybersecurity must be the foundation of every growing business.
            </p>
          </ScrollReveal>
        </header>

        {/* BENTO GRID: Structured Company Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Mission */}
          <ScrollReveal delay={100}>
            <article className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-300 transition-all duration-300 group h-full">
               <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 group-hover:bg-amber-100 transition-colors mb-6 shadow-sm">
                  <Target className="w-7 h-7 text-amber-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
               <p className="text-slate-600 leading-relaxed">
                 To provide the shield of elite cybersecurity to every entity, from the local startup to the international mega-event, through rapid audits and expert-led resilience training.
               </p>
            </article>
          </ScrollReveal>

          {/* Card 2: Vision */}
          <ScrollReveal delay={200}>
            <article className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-300 transition-all duration-300 group h-full">
               <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 group-hover:bg-amber-100 transition-colors mb-6 shadow-sm">
                  <Eye className="w-7 h-7 text-amber-600" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
               <p className="text-slate-600 leading-relaxed">
                 To be the global benchmark for adaptive cybersecurity, where the scale of the challenge never compromises the integrity of the protection. We ensure every digital interaction is inherently secure.
               </p>
            </article>
          </ScrollReveal>

          {/* Card 3: What We Do (Spans full width on tablet/desktop) */}
          <div className="md:col-span-2">
            <ScrollReveal delay={300}>
              <article className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-300 transition-all duration-300 group flex flex-col md:flex-row gap-8 items-start">
                 <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 group-hover:bg-amber-100 transition-colors shrink-0 shadow-sm">
                    <ShieldCheck className="w-7 h-7 text-amber-600" />
                 </div>
                 <div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-4">What We Do</h3>
                   <p className="text-slate-600 leading-relaxed text-lg">
                     We partner with organizations for strategic digital security consulting, identifying critical vulnerabilities through high-precision <strong className="text-slate-900">VAPT (Vulnerability Assessment and Penetration Testing)</strong>. Our approach goes beyond automated scans; we simulate real-world attack vectors to harden your defenses.
                   </p>
                 </div>
              </article>
            </ScrollReveal>
          </div>

          {/* Card 4: The Security-First Culture (Spans full width, Dark Anchor) */}
          <div className="md:col-span-2">
            <ScrollReveal delay={400}>
              <article className="bg-slate-900 p-8 md:p-12 rounded-[2rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
                 {/* Internal Glow */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full group-hover:bg-amber-500/20 transition-colors duration-500"></div>
                 
                 <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-colors shrink-0">
                        <Cpu className="w-10 h-10 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-3">A Culture of Safety</h3>
                      <p className="text-slate-300 leading-relaxed text-lg font-light">
                        While we protect our clients today, we are engineering the next generation of cybersecurity tools. Our <strong>"Security-First"</strong> philosophy ensures that we don't just find problems; we help you build resilience from the inside out.
                      </p>
                    </div>
                 </div>
              </article>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
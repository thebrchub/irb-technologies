 
import { ShieldCheck, Zap, Globe, FileCheck } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

const partners = [
  "Microsoft", "Cisco", "CrowdStrike", "Palo Alto", "Fortinet", "Splunk", "Okta", "IBM Security"
];

const Features = () => {
  return (
    <section id="architecture" className="bg-slate-50 py-24 relative overflow-hidden border-t border-slate-200">
      
      {/* PART 1: LOGO MARQUEE */}
      <div className="mb-24 relative perspective-[1000px]" aria-hidden="true">
        <ScrollReveal>
          <p className="text-center text-slate-500 text-sm font-bold mb-10 uppercase tracking-[0.3em]">
            Strategic Ecosystem Partners
          </p>
        </ScrollReveal>
        
        <div className="flex overflow-hidden relative w-full group">
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10"></div>

          <div className="flex animate-scroll whitespace-nowrap group-hover:[animation-play-state:paused] py-4">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div 
                key={i} 
                className="mx-12 flex items-center gap-3 text-2xl font-bold text-slate-300 hover:text-amber-500 transition-all duration-500 cursor-default grayscale hover:grayscale-0 transform hover:scale-110"
              >
                 <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center border border-slate-200 group-hover:border-amber-200 transition-colors">
                    <ShieldCheck className="w-5 h-5 opacity-70" />
                 </div>
                 {partner}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        <header className="text-center mb-20 max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">IRB Tech</span> Architecture
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Redefining corporate infrastructure with zero-latency resilience.
            </p>
          </ScrollReveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 h-auto md:h-[650px] perspective-[2000px]">
          
          {/* Box 1: Global Intelligence - THE REAL MAP CARD */}
          <article className="md:col-span-2 md:row-span-2 relative bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-12 overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(245,158,11,0.1)] transition-all duration-700 hover:-translate-y-2 flex flex-col min-h-[500px] md:min-h-0">
             <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-xl transform group-hover:rotate-[10deg] transition-transform duration-500">
                   <Globe className="text-amber-500 w-8 h-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Global Threat <br className="hidden md:block"/>Neural Network</h3>
                <p className="text-lg md:text-xl text-slate-500 max-w-sm leading-relaxed font-light mb-8">
                   Leveraging high-fidelity sensors across 140+ countries to orchestrate instant operational pivots.
                </p>
                
                {/* 🌎 THE BULLETPROOF INLINE SVG MAP (NO LABELS) 🌎 */}
                <div className="mt-auto relative w-full h-[250px] md:h-[380px] pointer-events-auto overflow-hidden rounded-2xl [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] md:[mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]">
                   
                   <div className="absolute inset-0 transform scale-[2.2] md:scale-[1.25] group-hover:scale-[2.3] md:group-hover:scale-[1.3] transition-transform duration-[3s] ease-out origin-[68%_48%] md:origin-center">
                     
                     {/* THE SVG GRID (1000x500 Grid System) */}
                     <svg viewBox="0 0 1000 500" className="w-full h-full overflow-visible">
                        
                        {/* 1. Base Map Image - Embedded natively inside the SVG grid! */}
                        <image 
                           href="/world-map.png" 
                           width="1000" 
                           height="500" 
                           preserveAspectRatio="xMidYMid slice" 
                           className="opacity-40 group-hover:opacity-60 transition-opacity duration-500" 
                        />

                        {/* 2. Radar Sweep Line (Anchored EXACTLY to the India Node at X:690, Y:230) */}
                        <g transform="translate(690, 230)">
                           <line x1="0" y1="0" x2="800" y2="0" stroke="url(#radar-gradient)" strokeWidth="1.5" className="animate-[spin_8s_linear_infinite]" />
                        </g>

                        {/* 3. The Data Nodes (Tuned specifically to hit landmasses on a 2:1 map projection) */}
                        {[
                          { x: 180, y: 170, d: '0s', isHQ: false },    // North America (East Coast)
                          { x: 250, y: 320, d: '0.5s', isHQ: false },  // South America (Brazil)
                          { x: 490, y: 140, d: '1.2s', isHQ: false },  // Europe (UK/France region)
                          { x: 540, y: 360, d: '1.8s', isHQ: false },  // Africa (South Africa)
                          { x: 690, y: 230, d: '0.2s', isHQ: true },   // INDIA (HQ Node)
                          { x: 860, y: 170, d: '2s', isHQ: false },    // Asia (Japan region)
                          { x: 860, y: 380, d: '0.9s', isHQ: false },  // Australia (East Coast)
                        ].map((node, i) => (
                           <g key={i} transform={`translate(${node.x}, ${node.y})`} className="group/node cursor-pointer">
                              
                              {/* Permanent soft amber halo glow */}
                              <circle r={node.isHQ ? 45 : 30} fill="#f59e0b" opacity="0.1" className="group-hover/node:opacity-20 transition-opacity duration-300" />

                              {/* Pinging animation ring */}
                              <circle r={node.isHQ ? 16 : 10} fill="#fbbf24" className="animate-ping opacity-60" style={{ animationDelay: node.d }} />

                              {/* Solid center dot */}
                              <circle r={node.isHQ ? 6 : 4} fill="#d97706" />
                              
                           </g>
                        ))}

                        {/* Gradients and Definitions */}
                        <defs>
                           <linearGradient id="radar-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                           </linearGradient>
                        </defs>
                     </svg>
                   </div>
                </div>

             </div>
          </article>

          {/* Box 2: Speed */}
          <article className="relative bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-10 overflow-hidden group hover:border-slate-900 transition-all duration-500 hover:-translate-y-2">
             <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl group-hover:bg-amber-100 transition-colors duration-500"></div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className="p-3 bg-slate-400 w-fit rounded-xl mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                   <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">Ultra-Low Latency</h3>
                <p className="text-slate-500 leading-relaxed">
                   Proprietary routing algorithms ensuring &lt;10ms response times for global data synchronization.
                </p>
             </div>
          </article>

          {/* Box 3: Compliance */}
          <article className="relative bg-slate-900 rounded-[2.5rem] border border-slate-800 p-8 md:p-10 overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] transition-all duration-500 hover:-translate-y-2">
             <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 group-hover:opacity-100 transition-opacity"></div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 w-fit rounded-xl mb-6 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
                   <FileCheck className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Regulatory Mastery</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                   Real-time compliance monitoring tailored for ISO, GDPR, and localized sovereign standards.
                </p>
                <div className="mt-auto pt-6 flex items-center gap-2">
                   <div className="h-[1px] flex-grow bg-slate-800 group-hover:bg-amber-500/30 transition-colors"></div>
                   <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Verified System</span>
                </div>
             </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Features;
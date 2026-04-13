import { Zap, Globe, FileCheck } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { siteContent } from '../../config/siteContent';

const Features = () => {
  const content = siteContent.features;
  
  return (
    <section id="architecture" className="bg-slate-50 py-12 md:py-16 relative overflow-hidden border-t border-slate-200 min-h-[100dvh] flex flex-col justify-center">
      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 w-full">
        
        {/* 2-Column Header */}
       <header className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20 w-full">
          
          <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl lg:max-w-none mx-auto lg:mx-0">
            <ScrollReveal>
              
              {/* 🔥 FIXED: Wrapped IRB Tech Architecture in a single inline-block so it drops together! */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-[4.5rem] font-extrabold text-slate-900 mb-5 md:mb-6 tracking-tight leading-[1.1] [text-wrap:balance]">
                {content.headingPart1}
                <span className="inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">{content.headingHighlight}</span>
                  {content.headingPart2}
                </span>
              </h2>
              
              <p className="hidden md:block w-full text-lg lg:text-xl 2xl:text-2xl text-slate-600 leading-relaxed font-light">
                {content.description}
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Floating SVG Map (STRICTLY DESKTOP ONLY) */}
          <div className="hidden lg:flex w-full lg:w-[40%] justify-end items-center">
            <div className="w-full max-w-[260px] md:max-w-[300px] lg:max-w-[320px] 2xl:max-w-[380px]">
              <ScrollReveal>
                <div className="relative w-full h-[120px] md:h-[140px] lg:h-[160px] 2xl:h-[200px] pointer-events-auto overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] group cursor-default transition-all duration-500">
                  
                  <div className="absolute inset-0 transform scale-[1.8] md:scale-[1.1] group-hover:scale-[1.9] md:group-hover:scale-[1.15] transition-transform duration-[3s] ease-out origin-[68%_48%] md:origin-center">
                    <svg viewBox="0 0 1000 500" className="w-full h-full overflow-visible">
                      <image href="/world-map.png" width="1000" height="500" preserveAspectRatio="xMidYMid slice" className="opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                      <g transform="translate(690, 230)">
                        <line x1="0" y1="0" x2="800" y2="0" stroke="url(#radar-gradient)" strokeWidth="1.5" className="animate-[spin_8s_linear_infinite]" />
                      </g>
                      {[
                        { x: 180, y: 170, d: '0s', isHQ: false },
                        { x: 250, y: 320, d: '0.5s', isHQ: false },
                        { x: 490, y: 140, d: '1.2s', isHQ: false },
                        { x: 540, y: 360, d: '1.8s', isHQ: false },
                        { x: 690, y: 230, d: '0.2s', isHQ: true },
                        { x: 860, y: 170, d: '2s', isHQ: false },
                        { x: 860, y: 380, d: '0.9s', isHQ: false },
                      ].map((node, i) => (
                        <g key={i} transform={`translate(${node.x}, ${node.y})`} className="group/node cursor-pointer">
                          <circle r={node.isHQ ? 45 : 30} fill="#f59e0b" opacity="0.1" className="group-hover/node:opacity-20 transition-opacity duration-300" />
                          <circle r={node.isHQ ? 16 : 10} fill="#fbbf24" className="animate-ping opacity-60" style={{ animationDelay: node.d }} />
                          <circle r={node.isHQ ? 6 : 4} fill="#d97706" />
                        </g>
                      ))}
                      <defs>
                        <linearGradient id="radar-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                </div>
              </ScrollReveal>
            </div>
          </div>

        </header>

        {/* The 3 Perfectly Uniform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 2xl:gap-10 perspective-[2000px] items-stretch">
          
          {/* Box 1: Global Intelligence */}
          <article className="group relative bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-300 rounded-[2rem] p-6 lg:p-8 2xl:p-10 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col h-full hover:-translate-y-2">
            <div className="absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(245,158,11,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm mb-4 transform group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                <Globe className="text-amber-500 w-6 h-6 2xl:w-7 2xl:h-7" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-slate-900 mb-3 tracking-tight">{content.card1.title} {content.card1.titleHighlight}</h3>
              <p className="text-sm lg:text-base 2xl:text-lg text-slate-600 leading-relaxed">
                {content.card1.description}
              </p>
              
              <div className="mt-auto pt-6 flex items-center gap-2">
                <div className="h-[1px] flex-grow bg-slate-200 group-hover:bg-amber-300 transition-colors duration-500"></div>
                <span className="text-[9px] 2xl:text-[10px] font-mono text-slate-400 group-hover:text-amber-600 tracking-widest uppercase font-bold transition-colors duration-500">{content.card1.statusLabel || "GLOBAL COVERAGE"}</span>
              </div>
            </div>
          </article>

          {/* Box 2: Speed */}
          <article className="group relative bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-300 rounded-[2rem] p-6 lg:p-8 2xl:p-10 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col h-full hover:-translate-y-2">
            <div className="absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(245,158,11,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm mb-4 transform group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                <Zap className="text-amber-500 w-6 h-6 2xl:w-7 2xl:h-7" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-slate-900 mb-3 tracking-tight">{content.card2.title}</h3>
              <p className="text-sm lg:text-base 2xl:text-lg text-slate-600 leading-relaxed">
                {content.card2.description}
              </p>

              <div className="mt-auto pt-6 flex items-center gap-2">
                <div className="h-[1px] flex-grow bg-slate-200 group-hover:bg-amber-300 transition-colors duration-500"></div>
                <span className="text-[9px] 2xl:text-[10px] font-mono text-slate-400 group-hover:text-amber-600 tracking-widest uppercase font-bold transition-colors duration-500">{content.card2.statusLabel}</span>
              </div>
            </div>
          </article>

          {/* Box 3: Compliance (Dark Theme) */}
          <article className="group relative bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/30 rounded-[2rem] p-6 lg:p-8 2xl:p-10 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 flex flex-col h-full hover:-translate-y-2">
            <div className="absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(245,158,11,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-sm mb-4 transform group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                <FileCheck className="text-amber-500 w-6 h-6 2xl:w-7 2xl:h-7" strokeWidth={1.5} />
              </div>

              <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-white mb-3 tracking-tight">{content.card3.title}</h3>
              <p className="text-sm lg:text-base 2xl:text-lg text-slate-400 leading-relaxed font-light">
                {content.card3.description}
              </p>
              
              <div className="mt-auto pt-6 flex items-center gap-2">
                <div className="h-[1px] flex-grow bg-slate-700 group-hover:bg-amber-500/30 transition-colors duration-500"></div>
                <span className="text-[9px] 2xl:text-[10px] font-mono text-slate-500 group-hover:text-amber-500 tracking-widest uppercase font-bold transition-colors duration-500">{content.card3.statusLabel}</span>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Features;
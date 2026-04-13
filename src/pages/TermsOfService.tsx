import { ArrowLeft, Gavel, ShieldCheck, Scale, Globe, AlertTriangle, FileCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../config/siteContent';

const TermsOfService = () => {
  const content = siteContent.termsOfService;
  return (
    <div className="min-h-screen bg-white text-slate-600 pt-32 pb-20 px-6 md:px-12 lg:px-16 relative">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent) pointer-events-none -z-10"></div>

      {/* Outer 1920px Container */}
      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto relative z-10 w-full">
        
        {/* 🔥 FIXED: Replaced the restrictive max-w-7xl with w-full so it fills the 27-inch screen perfectly */}
        <div className="w-full">

          <Link to="/" className="inline-flex items-center text-sm md:text-base 2xl:text-lg font-bold text-[#C45919] hover:text-[#A34915] mb-8 md:mb-10 2xl:mb-12 transition-colors group">
            <ArrowLeft size={16} className="mr-2 2xl:w-5 2xl:h-5 group-hover:-translate-x-1 transition-transform" /> {content.backLinkText}
          </Link>

          {/* ── Header ── */}
          <div className="mb-12 md:mb-14 2xl:mb-20">
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6 2xl:mb-8">
              {content.badges.map((badge, index) => (
                <div key={index} className={`flex items-center gap-1.5 px-3 py-1.5 2xl:px-4 2xl:py-2 rounded-full text-[10px] md:text-xs 2xl:text-sm font-bold uppercase tracking-wider ${
                  badge.icon === 'shield' ? 'bg-[#C45919]/8 text-[#C45919]' : badge.icon === 'file' ? 'bg-slate-100 text-slate-500' : 'bg-slate-100 font-mono text-slate-400'
                }`}>
                  {badge.icon === 'shield' && <ShieldCheck size={12} className="2xl:w-4 2xl:h-4" />}
                  {badge.icon === 'file' && <FileCheck size={12} className="2xl:w-4 2xl:h-4" />}
                  {badge.label}
                </div>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl 2xl:text-[5.5rem] font-extrabold text-[#2B3A4A] tracking-tight leading-[1.1] mb-5 2xl:mb-8">
              {content.heading}
            </h1>
            
            <p className="text-slate-500 text-sm md:text-base lg:text-lg 2xl:text-xl max-w-2xl 2xl:max-w-5xl leading-relaxed">
              {content.description}
            </p>
            <p className="text-xs md:text-sm 2xl:text-base text-slate-400 font-mono mt-4 2xl:mt-6">{content.lastUpdated}</p>

            <div className="mt-8 md:mt-10 2xl:mt-14 h-px bg-gradient-to-r from-[#C45919]/40 via-slate-200 to-transparent" />
          </div>

          {/* ── Sections ── */}
          <div className="space-y-6 md:space-y-10 2xl:space-y-12">

            {/* Section 1 - Engagement Terms */}
            <div className="group p-6 md:p-10 2xl:p-12 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#C45919]/20 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5 2xl:gap-8">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 2xl:w-14 2xl:h-14 rounded-2xl bg-[#C45919]/10 border border-[#C45919]/20 group-hover:bg-[#C45919]/15 transition-colors">
                  <Gavel size={18} className="text-[#C45919] 2xl:w-6 2xl:h-6" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-1 2xl:mb-3">
                    <span className="text-[10px] md:text-[11px] 2xl:text-sm font-mono text-[#C45919]/60 tracking-widest">{content.sections[0].number}</span>
                    <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#2B3A4A]">{content.sections[0].title}</h2>
                  </div>
                  <div className="w-8 2xl:w-12 h-0.5 bg-[#C45919]/30 rounded mb-4 2xl:mb-6" />
                  {/* 🔥 FIXED: Applied 2xl:max-w-6xl so the card stays huge but the text stops before becoming unreadable */}
                  <p className="text-sm md:text-base 2xl:text-xl text-slate-600 leading-relaxed mb-5 2xl:mb-8 2xl:max-w-6xl">
                    {content.sections[0].description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 2xl:gap-5 2xl:max-w-6xl">
                    {(content.sections[0] as any).items?.map((item: string) => (
                      <div key={item} className="flex items-center gap-2 text-xs md:text-sm 2xl:text-base text-slate-500 font-medium">
                        <CheckCircle size={14} className="text-[#C45919] shrink-0 2xl:w-5 2xl:h-5" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 - Authorization & Liability */}
            <div className="group p-6 md:p-10 2xl:p-12 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#C45919]/20 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5 2xl:gap-8">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 2xl:w-14 2xl:h-14 rounded-2xl bg-[#C45919]/10 border border-[#C45919]/20 group-hover:bg-[#C45919]/15 transition-colors">
                  <Scale size={18} className="text-[#C45919] 2xl:w-6 2xl:h-6" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-1 2xl:mb-3">
                    <span className="text-[10px] md:text-[11px] 2xl:text-sm font-mono text-[#C45919]/60 tracking-widest">{content.sections[1].number}</span>
                    <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#2B3A4A]">{content.sections[1].title}</h2>
                  </div>
                  <div className="w-8 2xl:w-12 h-0.5 bg-[#C45919]/30 rounded mb-4 2xl:mb-6" />
                  <p className="text-sm md:text-base 2xl:text-xl text-slate-600 leading-relaxed mb-5 2xl:mb-8 2xl:max-w-6xl">
                    {content.sections[1].description}
                  </p>
                  {/* Warning Box */}
                  {(content.sections[1] as any).warning && (
                    <div className="flex items-start gap-3 2xl:gap-4 p-4 2xl:p-6 bg-red-50 border border-red-100 rounded-2xl 2xl:max-w-6xl">
                      <AlertTriangle size={15} className="text-red-500 mt-0.5 shrink-0 2xl:w-6 2xl:h-6" />
                      <p className="text-xs md:text-sm 2xl:text-lg text-red-600 leading-relaxed">
                        <span className="font-bold">{(content.sections[1] as any).warning.title}</span> {(content.sections[1] as any).warning.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Section 3 - Governing Law */}
            <div className="group p-6 md:p-10 2xl:p-12 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#C45919]/20 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5 2xl:gap-8">
                <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 2xl:w-14 2xl:h-14 rounded-2xl bg-[#C45919]/10 border border-[#C45919]/20 group-hover:bg-[#C45919]/15 transition-colors">
                  <Globe size={18} className="text-[#C45919] 2xl:w-6 2xl:h-6" />
                </div>
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-1 2xl:mb-3">
                    <span className="text-[10px] md:text-[11px] 2xl:text-sm font-mono text-[#C45919]/60 tracking-widest">{content.sections[2].number}</span>
                    <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-[#2B3A4A]">{content.sections[2].title}</h2>
                  </div>
                  <div className="w-8 2xl:w-12 h-0.5 bg-[#C45919]/30 rounded mb-4 2xl:mb-6" />
                  <p className="text-sm md:text-base 2xl:text-xl text-slate-600 leading-relaxed mb-5 2xl:mb-8 2xl:max-w-6xl">
                    {content.sections[2].description}
                  </p>
                  <div className="flex flex-wrap gap-2 2xl:gap-3">
                    {(content.sections[2] as any).tags?.map((tag: string) => (
                      <span key={tag} className="px-3 py-1.5 2xl:px-4 2xl:py-2 bg-white border border-slate-200 rounded-lg text-[10px] md:text-[11px] 2xl:text-sm font-mono text-slate-500 tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative overflow-hidden bg-[#2B3A4A] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 2xl:p-16 shadow-2xl shadow-[#2B3A4A]/20 mt-12 2xl:mt-20">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#C45919]/15 blur-[80px] rounded-full pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 2xl:gap-16">
                <div className="w-full md:w-auto flex-1">
                  <p className="text-[10px] md:text-xs 2xl:text-sm font-mono text-[#C45919]/70 tracking-widest uppercase mb-2 md:mb-3 2xl:mb-4">{content.cta.label}</p>
                  <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-white mb-2 2xl:mb-4">{content.cta.heading}</h2>
                  <p className="text-slate-300 text-sm md:text-base 2xl:text-xl max-w-sm 2xl:max-w-2xl">
                    {content.cta.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 2xl:gap-4 w-full md:w-auto shrink-0 mt-2 md:mt-0">
                  <Link
                    to="/privacy-policy"
                    className="flex flex-1 items-center justify-center gap-2 px-6 py-3.5 2xl:px-8 2xl:py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-sm 2xl:text-base whitespace-nowrap"
                  >
                    <ShieldCheck size={15} className="2xl:w-5 2xl:h-5" /> {content.cta.privacyButtonText}
                  </Link>
                  <a
                    href={`mailto:${content.cta.legalButtonEmail}`}
                    className="flex flex-1 items-center justify-center gap-2 px-6 py-3.5 2xl:px-8 2xl:py-5 bg-[#C45919] hover:bg-[#A34915] text-white font-black rounded-2xl transition-all shadow-lg shadow-[#C45919]/30 active:scale-95 text-sm 2xl:text-base whitespace-nowrap"
                  >
                    {content.cta.legalButtonText}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
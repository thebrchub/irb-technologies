import { Zap, ArrowRight, Globe } from 'lucide-react';
import ThreatDeflector from '../ui/ThreatDeflector';
import { siteContent } from '../../config/siteContent'; 

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const content = siteContent.hero;
  return (
    
    <section id="home" className="relative bg-white pt-30 pb-12 md:pt-40 md:pb-16 xl:pt-32 xl:pb-12 2xl:pt-36 2xl:pb-24 overflow-hidden min-h-[100dvh] 2xl:min-h-0 flex items-center">
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center sm:justify-start">
        <div className="absolute top-[-5%] w-[150%] h-[60%] sm:left-[-10%] sm:w-[50%] sm:h-[50%] bg-amber-500/15 sm:bg-amber-500/5 blur-[90px] sm:blur-[120px] rounded-full z-0"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none z-0 md:opacity-0"></div>

      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 relative z-10 w-full">
        {/* Gap scales up on larger screens without shrinking */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 items-center">
          
          {/* Keep text column same width on xl/smaller; expand visual on 2xl */}
          <div className="xl:col-span-7 2xl:col-span-7 flex flex-col items-start text-left pt-6 sm:pt-4 xl:pt-0">
            
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] xl:text-6xl 2xl:text-[5rem] font-extrabold text-slate-900 tracking-tight lg:leading-[1.05] mb-4 xl:mb-6 w-full">
              {content.headingMain}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">{content.headingHighlight}</span>
            </h1>

            {/* 🔥 FIXED: Upgraded font sizes to match the About section (text-lg lg:text-xl 2xl:text-2xl) */}
            <p className="text-lg lg:text-xl 2xl:text-2xl text-slate-600 leading-relaxed max-w-2xl 2xl:max-w-4xl mx-auto sm:mx-0 mb-6 xl:mb-8">
              {content.descriptionPart1}<strong className="text-slate-900">{content.descriptionHighlight1}</strong>{content.descriptionPart2}<strong className="text-slate-900">{content.descriptionHighlight2}</strong>{content.descriptionPart3}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full mb-6 sm:hidden">
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-center gap-2 text-center">
                 <Globe size={18} className="text-amber-500" />
                 <span className="text-slate-900 font-bold text-xs">{content.mobileCard1Label}</span>
              </div>
              <div className="p-3.5 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-center gap-2 text-center">
                 <Zap size={18} className="text-amber-500" />
                 <span className="text-slate-900 font-bold text-xs">{content.mobileCard2Label}</span>
              </div>
            </div>

            {/* Added items-stretch to ensure these cards match heights if text wraps differently */}
            <div className="hidden sm:grid sm:grid-cols-2 gap-3 2xl:gap-5 w-full max-w-2xl 2xl:max-w-3xl mb-6 xl:mb-8 items-stretch">
              <div className="h-full flex flex-col justify-center p-4 2xl:p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-2 mb-1.5 text-slate-900 font-bold text-sm lg:text-base 2xl:text-lg">
                    <Globe size={16} className="text-amber-500 2xl:w-5 2xl:h-5" /> {content.desktopCard1Title}
                 </div>
                 <p className="text-xs 2xl:text-sm text-slate-600 leading-relaxed font-medium">
                    {content.desktopCard1Description}
                 </p>
              </div>
              
              <div className="h-full flex flex-col justify-center p-4 2xl:p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-2 mb-1.5 text-slate-900 font-bold text-sm lg:text-base 2xl:text-lg">
                    <Zap size={16} className="text-amber-500 2xl:w-5 2xl:h-5" /> {content.desktopCard2Title}
                 </div>
                 <p className="text-xs 2xl:text-sm text-slate-600 leading-relaxed font-medium">
                    {content.desktopCard2Description}
                 </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button 
                onClick={onOpenModal}
                className="group w-full sm:w-auto px-6 py-4 sm:py-3.5 sm:px-8 2xl:px-10 2xl:py-5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold 2xl:text-xl rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_8px_25px_rgba(245,158,11,0.35)] sm:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1"
              >
                {content.ctaButtonLabel} <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              
              <a 
                href={content.secondaryButtonLink}
                className="w-full sm:w-auto px-6 py-4 sm:py-3.5 sm:px-8 2xl:px-10 2xl:py-5 bg-white border border-slate-200 hover:border-amber-300 text-slate-700 hover:text-amber-600 font-bold 2xl:text-xl rounded-xl flex items-center justify-center transition-all hover:bg-amber-50"
              >
                {content.secondaryButtonLabel}
              </a>
            </div>

          </div>

          {/* Visual stays same on xl, expands only on 2xl */}
          <div className="hidden md:flex xl:col-span-5 2xl:col-span-5 relative w-full h-[350px] lg:h-[450px] xl:h-[60vh] max-h-[500px] 2xl:max-h-[700px] items-center justify-center 2xl:justify-end mt-8 xl:mt-0">
             <ThreatDeflector />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Zap, ArrowRight, Globe } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import ThreatDeflector from '../ui/ThreatDeflector';
import { siteContent } from '../../config/siteContent'; 

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  const content = siteContent.hero;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const graphicVariants: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
        delay: 0.3, 
        duration: 0.8,
      },
    },
  };

  return (
    
    
    <section id="home" className="relative bg-[#FDFBF7] pt-28 pb-10 lg:pt-28 lg:pb-16 xl:pt-47 xl:pb-20 3xl:pt-56 3xl:pb-32 overflow-hidden min-h-0 md:min-h-[860px] lg:min-h-0 xl:min-h-[88vh] 3xl:min-h-[90vh] flex items-start md:items-center border-b border-slate-200">
      
      {/* Background radial soft ambient lights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center sm:justify-start z-0">
        <div className="absolute top-[-5%] w-[150%] h-[60%] sm:left-[-10%] sm:w-[50%] sm:h-[50%] bg-amber-500/15 sm:bg-amber-500/5 blur-[90px] sm:blur-[120px] rounded-full"></div>
      </div>

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none z-0 md:opacity-0"></div>

      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 relative z-10 w-full">
        
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-8 2xl:gap-12 items-center">
          
          {/* ─── LEFT COLUMN: Text & CTAs ─── */}
          <motion.div 
            className="xl:col-span-6 2xl:col-span-6 flex flex-col items-center xl:items-start text-center xl:text-left pt-6 sm:pt-4 xl:pt-0 pr-0 2xl:pr-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            <motion.h1 variants={itemVariants} className="text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[5.25rem] font-extrabold text-slate-900 tracking-tight lg:leading-[1.05] 2xl:leading-[1.02] mb-3 xl:mb-4 2xl:mb-8 w-full">
              {content.headingMain}
              <br className="hidden md:block" />
              {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">{content.headingHighlight}</span>
            </motion.h1>

            {/* Description */}
            {/* 🔥 FIXED: Reduced xl:mb-10 to xl:mb-8 to tighten vertical footprint on laptops */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl lg:text-2xl xl:text-[1.75rem] 2xl:text-[2.25rem] text-slate-600 leading-snug max-w-2xl 2xl:max-w-4xl mx-auto xl:mx-0 mb-8 lg:mb-10 xl:mb-8 2xl:mb-20 font-medium tracking-tight">
              {content.descriptionPart3}
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 w-full mb-7 md:hidden">
              <div className="min-h-16 rounded-2xl border border-slate-200 bg-white/90 shadow-[0_8px_24px_rgba(15,23,42,0.08)] px-4 py-3 flex items-center justify-center gap-3 text-center">
                <Globe size={22} className="text-amber-500 shrink-0" />
                <span className="text-sm font-extrabold leading-tight text-slate-900 whitespace-nowrap">SecOps</span>
              </div>
              <div className="min-h-16 rounded-2xl border border-slate-200 bg-white/90 shadow-[0_8px_24px_rgba(15,23,42,0.08)] px-4 py-3 flex items-center justify-center gap-3 text-center">
                <Zap size={22} className="text-amber-500 shrink-0" />
                <span className="text-sm font-extrabold leading-tight text-slate-900 whitespace-nowrap">Rapid Deploy</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 sm:gap-4 w-full xl:w-auto">
              <button 
                onClick={onOpenModal}
                className="group w-full sm:w-auto px-6 py-4 sm:py-3.5 sm:px-8 xl:px-8 xl:py-3.5 2xl:px-10 2xl:py-4.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold xl:text-base 2xl:text-xl rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_8px_25px_rgba(245,158,11,0.35)] sm:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1"
              >
                {content.ctaButtonLabel} <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              
              <a 
                href={content.secondaryButtonLink}
                className="w-full sm:w-auto px-6 py-4 sm:py-3.5 sm:px-8 xl:px-8 xl:py-3.5 2xl:px-10 2xl:py-4.5 bg-white border border-slate-200 hover:border-amber-300 text-slate-700 hover:text-amber-600 font-bold xl:text-base 2xl:text-xl rounded-xl flex items-center justify-center transition-all hover:bg-amber-50"
              >
                {content.secondaryButtonLabel}
              </a>
            </motion.div>

          </motion.div>

          {/* ─── RIGHT COLUMN: Premium Stage ─── */}
          <motion.div 
            variants={graphicVariants}
            initial="hidden"
            animate="visible"

            className="hidden md:flex xl:col-span-6 2xl:col-span-6 relative w-full h-[380px] lg:h-[380px] xl:h-[380px] 2xl:h-[65vh] 2xl:max-h-[750px] items-center justify-center mt-8 xl:mt-0"
          >
            
            <div className="w-full h-full bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] border border-white/60 border-b-slate-200/60 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.14),0_15px_35px_-10px_rgba(15,23,42,0.06)] overflow-hidden flex items-center justify-center relative p-8">
              
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none"></div>

              {/* The ThreatDeflector Animation */}
              <div className="w-full h-full max-w-[500px] 2xl:max-w-[600px] scale-90 xl:scale-100 transform flex items-center justify-center relative z-10 pb-10">
                <ThreatDeflector />
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center bg-white border-t border-x border-slate-200 px-6 xl:px-8 h-12 md:h-14 lg:h-16 rounded-t-[1.5rem] md:rounded-t-[2rem] gap-5 md:gap-8 lg:gap-10 shadow-[0_-10px_35px_rgba(15,23,42,0.03)] z-20 w-max max-w-[95%]">
                
                <div className="flex items-center gap-2.5 text-slate-600 font-medium text-xs md:text-sm xl:text-sm 2xl:text-[1.35rem] leading-relaxed whitespace-nowrap">
                  <Globe size={16} className="text-amber-500 shrink-0 2xl:w-6 2xl:h-6" />
                  <span>{content.desktopCard1Title}</span>
                </div>
                
                <div className="w-px h-4 bg-slate-200 shrink-0"></div>

                <div className="flex items-center gap-2.5 text-slate-600 font-medium text-xs md:text-sm xl:text-sm 2xl:text-[1.35rem] leading-relaxed whitespace-nowrap">
                  <Zap size={16} className="text-amber-500 shrink-0 2xl:w-6 2xl:h-6" />
                  <span>{content.desktopCard2Title}</span>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
import { ArrowLeft, ShieldAlert, Target, ShieldCheck, Clock, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { siteContent } from '../config/siteContent';

const SmeShield = () => {
  const content = siteContent.smeShield;

  // 🔥 ANIMATION: Fully typed Variants to prevent TypeScript errors
  const elementVariants: Variants = {
    hidden: (custom: { direction: string; delay: number }) => ({
      opacity: 0,
      x: custom.direction === 'left' ? -50 : custom.direction === 'right' ? 50 : 0,
      y: custom.direction === 'center' ? 50 : 0,
    }),
    visible: (custom: { direction: string; delay: number }) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        delay: custom.delay, // Stagger effect
        duration: 0.6,
      },
    }),
  };

  return (
    
    <div className="min-h-screen bg-[#FDFBF7] pt-32 md:pt-40 pb-16 md:pb-24 font-sans selection:bg-amber-200 selection:text-amber-900 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent) pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 relative z-10 w-full">
        
        {/* Wrapped in a zero-height container and pulled upwards to prevent pushing content down */}
        <div className="h-0 w-full overflow-visible relative -top-8 md:-top-12 2xl:-top-14">
          <Link to="/#case-studies" className="inline-flex items-center text-sm 2xl:text-base font-bold text-slate-500 hover:text-amber-600 transition-colors group">
            <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" /> {content.backLinkText}
          </Link>
        </div>

        {/* 2-Column Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-20 items-start mb-10 md:mb-12 lg:mb-16">
          
          {/* 🔥 ANIMATED: Text block slides in from the left */}
          <motion.div 
            className="lg:col-span-8 2xl:col-span-8 max-w-4xl 2xl:max-w-none"
            custom={{ direction: 'left', delay: 0.1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={elementVariants}
          >
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-4 md:py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-[10px] md:text-xs 2xl:text-sm font-black uppercase tracking-widest mb-4 md:mb-6 shadow-sm">
              <Globe size={12} className="md:w-3.5 md:h-3.5 2xl:w-4 2xl:h-4" /> {content.badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] 2xl:text-[5.5rem] font-black text-slate-900 tracking-tighter mb-5 lg:mb-6 leading-[1.05] [text-wrap:balance]">
              {content.headingMain}<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">{content.headingHighlight}</span>
            </h1>
            
            <p className="text-lg md:text-xl 2xl:text-2xl text-slate-600 leading-relaxed font-medium max-w-2xl 2xl:max-w-3xl">
              {content.description}
            </p>
          </motion.div>

          {/* 🔥 ANIMATED: Image block slides in from the right */}
          <motion.div 
            className="hidden lg:block lg:col-span-4 2xl:col-span-4 relative flex flex-col items-end mt-6 lg:mt-8 2xl:mt-10"
            custom={{ direction: 'right', delay: 0.3 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={elementVariants}
          >
            <div className="w-full max-w-[320px] xl:max-w-[380px] aspect-[4/3] rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] relative border border-white/20">
              <img 
                src={content.imageUrl}
                alt={content.imageAlt}
                className="block w-full h-full object-cover object-bottom scale-110"
              />
            </div>
          </motion.div>
        </div>

        {/* 🔥 ANIMATED: Stats bar fades up from the center */}
        <motion.div 
          className="w-[calc(100%+3rem)] -mx-6 md:w-full md:mx-0 bg-white md:rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border-y md:border border-stone-200 p-4 md:p-8 2xl:p-10 mb-10 md:mb-16 lg:mb-20 2xl:mb-24"
          custom={{ direction: 'center', delay: 0.2 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={elementVariants}
        >
          <div className="grid grid-cols-3 gap-0 md:gap-8 divide-x divide-stone-200 text-center items-center">
            <div className="px-1 md:px-2">
              <div className="text-[9px] md:text-xs 2xl:text-sm font-bold text-slate-400 uppercase tracking-widest mb-1 md:mb-2 truncate">{content.turnaroundLabel}</div>
              <div className="text-lg md:text-3xl lg:text-4xl 2xl:text-6xl font-black text-slate-900">{content.turnaroundValue}</div>
            </div>
            <div className="px-1 md:px-2">
              <div className="text-[9px] md:text-xs 2xl:text-sm font-bold text-slate-400 uppercase tracking-widest mb-1 md:mb-2 truncate">{content.threatLabel}</div>
              <div className="text-lg md:text-3xl lg:text-4xl 2xl:text-6xl font-black text-red-500">{content.threatValue}</div>
            </div>
            <div className="px-1 md:px-2">
              <div className="text-[9px] md:text-xs 2xl:text-sm font-bold text-slate-400 uppercase tracking-widest mb-1 md:mb-2 truncate">{content.downtimeLabel}</div>
              <div className="text-lg md:text-3xl lg:text-4xl 2xl:text-6xl font-black text-emerald-500">{content.downtimeValue}</div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 2xl:gap-8">
          
          {/* 🔥 ANIMATED: Challenge card sweeps in from the left */}
          <motion.div 
            className="lg:col-span-5 bg-slate-900 text-white rounded-[1.5rem] md:rounded-[2rem] p-6 lg:p-8 2xl:p-10 shadow-xl flex flex-col justify-center relative overflow-hidden group"
            custom={{ direction: 'left', delay: 0.1 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={elementVariants}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-500/20 transition-colors duration-500"></div>
            
            <div className="flex items-center gap-4 mb-5 lg:mb-6 relative z-10">
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl flex items-center justify-center shrink-0">
                <ShieldAlert size={24} className="2xl:w-7 2xl:h-7" />
              </div>
              <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-black m-0">{content.challenge.title}</h3>
            </div>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed relative z-10 m-0">
              {content.challenge.description}
            </p>
          </motion.div>

          {/* 🔥 ANIMATED: Approach card sweeps in from the right */}
          <motion.div 
            className="lg:col-span-7 bg-white border border-stone-200 rounded-[1.5rem] md:rounded-[2rem] p-6 lg:p-8 2xl:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center"
            custom={{ direction: 'right', delay: 0.2 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={elementVariants}
          >
            
            <div className="flex items-center gap-4 mb-5 lg:mb-6">
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 bg-amber-50 border border-amber-100 text-amber-500 rounded-xl flex items-center justify-center shrink-0">
                <Target size={24} className="2xl:w-7 2xl:h-7" />
              </div>
              <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-black text-slate-900 m-0">{content.approach.title}</h3>
            </div>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-5 lg:mb-6">
              {content.approach.description}
            </p>

            <ul className="space-y-3 2xl:space-y-4">
              {content.approach.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 2xl:gap-4">
                  <div className="mt-1 bg-amber-100 p-1.5 rounded-md text-amber-700 shrink-0">
                    {index === 0 ? <Server size={14} className="2xl:w-4 2xl:h-4" strokeWidth={3} /> : <Clock size={14} className="2xl:w-4 2xl:h-4" strokeWidth={3} />}
                  </div>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed m-0">
                    <strong className="text-slate-900">{item.timeRange}:</strong> {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 🔥 ANIMATED: Result card rises from the center */}
          <motion.div 
            className="lg:col-span-12 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-[1.5rem] md:rounded-[2rem] p-6 lg:p-8 2xl:p-10 shadow-xl relative overflow-hidden"
            custom={{ direction: 'center', delay: 0.3 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={elementVariants}
          >
            <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-8 2xl:gap-10">
              <div className="w-14 h-14 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl flex items-center justify-center shrink-0">
                <ShieldCheck size={28} className="text-white lg:w-8 lg:h-8 2xl:w-10 2xl:h-10" />
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-black mb-2 lg:mb-3">{content.result.title}</h3>
                
                <p className="text-amber-50 text-base md:text-lg leading-relaxed w-full m-0">
                  {content.result.description}
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default SmeShield;
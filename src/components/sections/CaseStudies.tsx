import { ShieldAlert, Zap, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { siteContent } from '../../config/siteContent';

const CaseStudies = () => {
  const content = siteContent.caseStudies;
  const iconMap: Record<string, React.ComponentType<any>> = {
    '01': ShieldAlert,
    '02': Zap,
    '03': FileCheck,
  };

  // Animation Variants for Framer Motion
  const cardVariants: Variants = {
    hidden: (custom: { index: number; direction: string }) => ({
      opacity: 0,
      x: custom.direction === 'left' ? -50 : custom.direction === 'right' ? 50 : 0,
      y: custom.direction === 'center' ? 50 : 0,
    }),
    visible: (custom: { index: number; direction: string }) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        delay: custom.index * 0.1, // Stagger effect
        duration: 0.6,
      },
    }),
  };

  // Helper function to determine the entry direction based on grid column position
  const getDirection = (index: number) => {
    if (index % 3 === 0) return 'left'; // First column
    if (index % 3 === 2) return 'right'; // Third column
    return 'center'; // Middle column
  };

  return (
    <section 
      id="case-studies" 
      className="relative bg-[#FDFBF7] pt-4 pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-12 2xl:pt-10 2xl:pb-16 scroll-mt-32 overflow-hidden border-t border-stone-200"
    >
      
      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 relative z-10 w-full">
        
        {/* Header Animation */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-5 md:mb-6 2xl:mb-8 max-w-3xl 2xl:max-w-none flex flex-col items-center mx-auto"
        >
          
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-5 md:mb-6 shadow-sm">
            {content.badge}
          </div>
          
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[4.5rem] font-extrabold text-slate-900 mb-4 md:mb-5 tracking-tight leading-[1.15] md:leading-[1.1] md:[text-wrap:balance]">
            
            <span className="flex flex-col md:hidden">
              <span>{content.headingMain}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 -mt-1">
                {content.headingHighlight}
              </span>
            </span>

            <span className="hidden md:inline">
              {content.headingMain}{' '}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
                {content.headingHighlight}
              </span>
            </span>
          </h2>

          {content.description && (
            <p className="hidden md:block w-full text-center text-lg lg:text-xl 2xl:text-2xl text-slate-600 leading-relaxed font-light">
              {content.description}
            </p>
          )}
        </motion.header>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 2xl:gap-10 items-stretch">
          {content.cases.map((study, index) => {
            const IconComponent = iconMap[study.id];
            const direction = getDirection(index);
            
            return (
              // 🔥 Wrapper with Framer Motion for the slide-in effects!
              <motion.div 
                key={study.id}
                custom={{ index, direction }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="h-full"
              >
                <div className="group relative bg-white border border-stone-200 rounded-[2rem] p-6 md:p-8 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col h-full">
                  
                  <div className="flex justify-between items-center mb-5 md:mb-6 gap-4">
                    
                    <div className="flex flex-row items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 2xl:w-12 2xl:h-12 bg-orange-50/50 border border-orange-100 text-amber-500 rounded-xl flex items-center justify-center group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors shrink-0">
                        <IconComponent size={20} className="2xl:w-6 2xl:h-6" />
                      </div>
                      <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors duration-300 tracking-tight leading-tight m-0">
                        {study.title}
                      </h3>
                    </div>

                    <span className="text-3xl 2xl:text-4xl font-black text-stone-100 group-hover:text-stone-200 transition-colors shrink-0">
                      {study.id}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-[10px] 2xl:text-xs font-bold uppercase tracking-wider rounded-md mb-3 md:mb-4">
                      {study.tag}
                    </div>
                    
                    <p className="hidden md:block text-sm md:text-base 2xl:text-lg text-slate-600 leading-relaxed mb-4">
                      {study.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 border-t border-stone-100">
                    <Link 
                      to={study.link}
                      className="inline-flex items-center text-sm md:text-base 2xl:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                    >
                      {content.readFullCaseLabel} <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
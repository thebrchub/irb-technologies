import React from 'react';
import { Lock, Server, Terminal, Activity, BookOpen, Users } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { siteContent } from '../../config/siteContent';

const Services = () => {
  const content = siteContent.services;
  const iconMap: Record<number, React.ComponentType<any>> = {
    0: Activity,
    1: Server,
    2: Lock,
    3: Terminal,
    4: Users,
    5: BookOpen,
  };
  const iconColors = ['text-amber-600', 'text-slate-700', 'text-emerald-600', 'text-blue-600', 'text-amber-500', 'text-slate-800'];
  
  // 🔥 FIXED: Explicitly typed as Variants, and updated to accept the combined custom object
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
        type: "spring" as const, // 🔥 FIXED: TypeScript now knows this is specifically a spring animation
        damping: 20,
        stiffness: 100,
        delay: custom.index * 0.1, // Stagger effect
        duration: 0.6,
      },
    }),
  };

  // Helper function to determine the entry direction based on grid column position
  const getDirection = (index: number) => {
    if (index % 3 === 0) return 'left'; // First column (0, 3)
    if (index % 3 === 2) return 'right'; // Third column (2, 5)
    return 'center'; // Middle column (1, 4)
  };

  return (
    
    <section id="services" className="bg-white pt-4 pb-8 md:pt-6 md:pb-10 lg:pt-8 lg:pb-12 2xl:pt-10 2xl:pb-16 scroll-mt-20 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_2s]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header Animation */}
        <motion.header 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 2xl:mb-10 max-w-3xl 2xl:max-w-none flex flex-col items-center mx-auto"
        >
          
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 shadow-sm">
            {content.badge}
          </div>
          
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[4.5rem] font-extrabold text-slate-900 mb-0 md:mb-4 tracking-tight leading-[1.15] md:leading-[1.1] md:[text-wrap:balance]">
            
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
          
          <p className="hidden md:block w-full text-center text-lg lg:text-xl 2xl:text-2xl text-slate-600 leading-relaxed font-light mt-2">
             {content.descriptionPart1}<span className="hidden sm:inline"> </span>
          </p>
        </motion.header>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 2xl:gap-10 group/bento items-stretch">
          
          {content.cards.map((card, index) => {
            const IconComponent = iconMap[index];
            const direction = getDirection(index);

            return (
              <motion.div
                key={index}
                // 🔥 FIXED: Combined index and direction into a single object!
                custom={{ index, direction }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="h-full"
              >
                <Card 
                  title={card.title}
                  titleMobile={card.titleMobile}
                  description={card.description}
                  icon={
                    <>
                      <IconComponent className={`md:hidden ${iconColors[index]}`} size={20} />
                      <IconComponent className={`hidden md:block ${iconColors[index]}`} size={24} />
                    </>
                  }
                />
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

const Card = ({ title, titleMobile, description, icon }: { title: string, titleMobile?: string, description: string, icon: React.ReactNode }) => (
  <article className="group relative bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-300 rounded-[1.25rem] md:rounded-[2rem] p-4 sm:p-5 md:p-8 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-center md:justify-start cursor-pointer group-hover/bento:opacity-60 group-hover/bento:blur-[2px] group-hover/bento:scale-[0.98] hover:!opacity-100 hover:!blur-none hover:!scale-100 hover:z-10 h-full">
    
    <div className="hidden md:block absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(245,158,11,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    <div className="relative z-20 flex flex-col h-full justify-center md:justify-start">
      
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 mb-0 md:mb-5">
        <div className="p-2.5 sm:p-3 md:p-4 bg-white border border-slate-200 shadow-sm w-fit rounded-[0.85rem] md:rounded-2xl transform md:group-hover:-translate-y-1 md:group-hover:shadow-md transition-all duration-300 shrink-0">
          {icon}
        </div>
        
        <h3 className="text-base sm:text-lg md:text-2xl 2xl:text-3xl font-semibold md:font-bold text-slate-900 md:group-hover:text-amber-600 transition-colors duration-300 tracking-tight leading-snug md:leading-tight text-center md:text-left">
          <span className="md:hidden">{titleMobile || title}</span>
          <span className="hidden md:inline">{title}</span>
        </h3>
      </div>
      
      <p className="hidden md:block text-sm md:text-base 2xl:text-lg text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
    
  </article>
);

export default Services;
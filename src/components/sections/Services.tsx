import React from 'react';
import { Lock, Server, Terminal, Activity, BookOpen, Users } from 'lucide-react';
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
  return (
    <section id="services" className="bg-white pt-12 pb-24 scroll-mt-24 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_2s]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>
      </div>

      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        
        <header className="mb-16 md:mb-20 max-w-3xl 2xl:max-w-4xl flex flex-col items-center md:items-start mx-auto md:mx-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            {content.badge}
          </div>
          
          <h2 className="text-center md:text-left text-4xl md:text-5xl lg:text-6xl 2xl:text-[4.5rem] font-extrabold text-slate-900 mb-5 md:mb-6 tracking-tight leading-[1.1]">
            {content.headingMain} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
              {content.headingHighlight}
            </span>
          </h2>
          
          <p className="w-full text-center md:text-left text-lg md:text-xl 2xl:text-2xl text-slate-600 leading-relaxed">
             {content.descriptionPart1}<span className="hidden sm:inline"> {content.descriptionPart2}</span>
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 2xl:gap-12 group/bento">
          
          {content.cards.map((card, index) => {
            const IconComponent = iconMap[index];
            return (
              <Card 
                key={index}
                title={card.title}
                description={card.description}
                icon={<IconComponent className={iconColors[index]} />}
              />
            );
          })}

        </div>
      </div>
    </section>
  );
};

const Card = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
  <article className="group relative bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-300 rounded-3xl p-6 md:p-8 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col cursor-pointer group-hover/bento:opacity-60 group-hover/bento:blur-[2px] group-hover/bento:scale-[0.98] hover:!opacity-100 hover:!blur-none hover:!scale-100 hover:z-10">
    
    <div className="hidden md:block absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(245,158,11,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    <div className="relative z-20 mb-auto">
      <div className="mb-5 md:mb-6 p-4 bg-white border border-slate-200 shadow-sm w-fit rounded-2xl transform md:group-hover:-translate-y-2 md:group-hover:shadow-md transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-slate-900 mb-3 md:mb-4 md:group-hover:text-amber-600 transition-colors duration-300">{title}</h3>
      
      <p className="text-sm md:text-base 2xl:text-lg text-slate-600 leading-relaxed">{description}</p>
    </div>
    
  </article>
);

export default Services;
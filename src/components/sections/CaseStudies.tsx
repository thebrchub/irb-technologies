import { ShieldAlert, Zap, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../config/siteContent';

const CaseStudies = () => {
  const content = siteContent.caseStudies;
  const iconMap: Record<string, React.ComponentType<any>> = {
    '01': ShieldAlert,
    '02': Zap,
    '03': FileCheck,
  };

  return (
    <section 
      id="case-studies" 
      className="relative bg-[#FDFBF7] py-16 lg:py-20 2xl:py-24 scroll-mt-24 overflow-hidden border-t border-stone-200"
    >
      
      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 relative z-10 w-full">
        
        {/* 🔥 FIXED: Removed md:items-start so it stays perfectly centered on tablet, matching Services */}
        <header className="mb-10 md:mb-12 2xl:mb-16 max-w-3xl 2xl:max-w-none flex flex-col items-center mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            {content.badge}
          </div>
          
          {/* 🔥 FIXED: Removed manual <br>, added text-wrap:balance, and grouped the gradient as an inline-block */}
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl 2xl:text-[4.5rem] font-extrabold text-slate-900 mb-5 md:mb-6 tracking-tight leading-[1.1] [text-wrap:balance]">
            {content.headingMain}{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
              {content.headingHighlight}
            </span>
          </h2>

          {content.description && (
            <p className="hidden md:block w-full text-center text-lg lg:text-xl 2xl:text-2xl text-slate-600 leading-relaxed font-light">
              {content.description}
            </p>
          )}
        </header>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 2xl:gap-10 items-stretch">
          {content.cases.map((study) => {
            const IconComponent = iconMap[study.id];
            return (
            <div 
              key={study.id} 
              className="group relative bg-white border border-stone-200 rounded-[2rem] p-6 md:p-8 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 2xl:w-12 2xl:h-12 bg-orange-50/50 border border-orange-100 text-amber-500 rounded-xl flex items-center justify-center group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                  <IconComponent size={20} className="2xl:w-6 2xl:h-6" />
                </div>
                <span className="text-3xl 2xl:text-4xl font-black text-stone-100 group-hover:text-stone-200 transition-colors">
                  {study.id}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <div className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-[10px] 2xl:text-xs font-bold uppercase tracking-wider rounded-md mb-3">
                  {study.tag}
                </div>
                
                <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300 tracking-tight">
                  {study.title}
                </h3>
                
                <p className="text-sm md:text-base 2xl:text-lg text-slate-600 leading-relaxed mb-4">
                  {study.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-auto pt-4 border-t border-stone-100">
                <Link 
                  to={study.link}
                  className="inline-flex items-center text-sm md:text-base 2xl:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors"
                >
                  {content.readFullCaseLabel} <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
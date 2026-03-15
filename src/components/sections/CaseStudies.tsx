 
import { ShieldAlert, Zap, FileCheck, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const cases = [
    {
      id: '01',
      title: 'The Mega-Event',
      icon: ShieldAlert,
      description: 'Securing a high-traffic public gathering against real-time threats.',
      tag: 'Enterprise Scale'
    },
    {
      id: '02',
      title: 'The SME Shield',
      icon: Zap,
      description: 'How we helped a local IT firm identify critical vulnerabilities in their client-facing portal within 24 hours.',
      tag: 'Rapid Response'
    },
    {
      id: '03',
      title: 'Compliance for Startups',
      icon: FileCheck,
      description: 'A roadmap for a small business to achieve regulatory compliance without a massive overhead.',
      tag: 'Strategic Advisory'
    }
  ];

  return (
    /* 🔥 UPDATED: bg-[#FDFBF7] for a premium cream look + stone borders 🔥 */
    <section id="case-studies" className="relative bg-[#FDFBF7] py-24 overflow-hidden border-t border-stone-200">
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <h2 className="text-sm font-extrabold text-amber-500 uppercase tracking-widest mb-3">
            Versatility in Action
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Proven security across every scale.
          </h3>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((study) => (
            <div 
              key={study.id} 
              className="group relative bg-white border border-stone-200 rounded-2xl p-8 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-orange-50/50 border border-orange-100 text-amber-500 rounded-xl flex items-center justify-center group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                  <study.icon size={24} />
                </div>
                {/* Changed number color to stone to match cream theme */}
                <span className="text-4xl font-black text-stone-100 group-hover:text-stone-200 transition-colors">
                  {study.id}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                <div className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-[10px] font-bold uppercase tracking-wider rounded-md mb-4">
                  {study.tag}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {study.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {study.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-auto pt-6 border-t border-stone-100">
                <button className="flex items-center text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Read Full Case <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
import { Target, Eye, ShieldCheck, Cpu } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { siteContent } from '../../config/siteContent';

const About = () => {
  const content = siteContent.about;
  return (
    <section className="bg-slate-50 py-20 md:py-24 relative overflow-hidden border-t border-slate-200">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        
        <header id="about" className="max-w-4xl 2xl:max-w-5xl mx-auto mb-16 lg:mb-20 scroll-mt-6">
          <ScrollReveal>
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                {content.badge}
              </div>
              
              <h2 className="text-center text-4xl md:text-5xl lg:text-6xl 2xl:text-[4.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 md:mb-8 max-w-4xl mx-auto">
                {content.headingMain} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">{content.headingHighlight}</span>
              </h2>
              
              <p className="md:hidden text-left text-lg text-slate-600 leading-relaxed w-full">
                {content.descriptionMobile}
              </p>

              <p className="hidden md:block text-center text-lg lg:text-xl 2xl:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {content.descriptionDesktop}
              </p>
            </div>
          </ScrollReveal>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-10 max-w-6xl 2xl:max-w-7xl mx-auto">
          
          <ScrollReveal delay={100}>
            <article className="bg-white p-8 md:p-10 2xl:p-12 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-300 transition-all duration-300 group h-full">
               <div className="w-14 h-14 2xl:w-16 2xl:h-16 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 group-hover:bg-amber-100 transition-colors mb-6 shadow-sm">
                  <Target className="w-7 h-7 2xl:w-8 2xl:h-8 text-amber-600" />
               </div>
               <h3 className="text-2xl 2xl:text-3xl font-bold text-slate-900 mb-4">{content.mission.title}</h3>
               
               <p className="md:hidden text-slate-600 leading-relaxed text-sm">
                 {content.mission.descriptionMobile}
               </p>
               <p className="hidden md:block text-slate-600 leading-relaxed 2xl:text-lg">
                 {content.mission.descriptionDesktop}
               </p>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <article className="bg-white p-8 md:p-10 2xl:p-12 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-300 transition-all duration-300 group h-full">
               <div className="w-14 h-14 2xl:w-16 2xl:h-16 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 group-hover:bg-amber-100 transition-colors mb-6 shadow-sm">
                  <Eye className="w-7 h-7 2xl:w-8 2xl:h-8 text-amber-600" />
               </div>
               <h3 className="text-2xl 2xl:text-3xl font-bold text-slate-900 mb-4">{content.vision.title}</h3>
               
               <p className="md:hidden text-slate-600 leading-relaxed text-sm">
                 {content.vision.descriptionMobile}
               </p>
               <p className="hidden md:block text-slate-600 leading-relaxed 2xl:text-lg">
                 {content.vision.descriptionDesktop}
               </p>
            </article>
          </ScrollReveal>

          <div className="md:col-span-2">
            <ScrollReveal delay={300}>
              <article className="bg-white p-8 md:p-10 2xl:p-12 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-300 transition-all duration-300 group flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                 <div className="w-14 h-14 2xl:w-16 2xl:h-16 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100 group-hover:bg-amber-100 transition-colors shrink-0 shadow-sm">
                    <ShieldCheck className="w-7 h-7 2xl:w-8 2xl:h-8 text-amber-600" />
                 </div>
                 <div>
                   <h3 className="text-2xl 2xl:text-3xl font-bold text-slate-900 mb-3 md:mb-4">{content.whatWeDo.title}</h3>
                   
                   <p className="md:hidden text-slate-600 leading-relaxed text-sm">
                     {content.whatWeDo.descriptionMobile}
                   </p>
                   <p className="hidden md:block text-slate-600 leading-relaxed text-base md:text-lg 2xl:text-xl">
                     {content.whatWeDo.descriptionDesktop}
                   </p>
                 </div>
              </article>
            </ScrollReveal>
          </div>

          <div className="md:col-span-2">
            <ScrollReveal delay={400}>
              <article className="bg-slate-900 p-8 md:p-10 2xl:p-14 rounded-[2rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full group-hover:bg-amber-500/20 transition-colors duration-500"></div>
                 
                 <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 text-left md:text-left">
                    <div className="w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-colors shrink-0">
                        <Cpu className="w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-bold text-white mb-3 md:mb-4">{content.culture.title}</h3>
                      
                      <p className="md:hidden text-slate-300 leading-relaxed text-sm font-light">
                        {content.culture.descriptionMobile}
                      </p>
                      <p className="hidden md:block text-slate-300 leading-relaxed text-base md:text-lg 2xl:text-xl font-light">
                        {content.culture.descriptionDesktop}
                      </p>
                    </div>
                 </div>
              </article>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
import { Target, Eye, ShieldCheck, Cpu } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { siteContent } from '../../config/siteContent';

const About = () => {
  const content = siteContent.about;
  return (
    <section className="bg-slate-50 pt-8 pb-8 md:pt-10 md:pb-12 2xl:pt-12 2xl:pb-16 relative overflow-hidden border-t border-slate-200">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 relative z-10 w-full">
        
       <header id="about" className="max-w-4xl 2xl:max-w-none mx-auto mb-8 md:mb-12 lg:mb-16 2xl:mb-10 scroll-mt-6">
          <ScrollReveal>
            <div className="flex flex-col items-center">
              
              {/* Scaled down pill size for mobile */}
              <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-4 md:py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                {content.badge}
              </div>
              
              {/* Forced 2-line heading for mobile, text-3xl */}
              <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-[4.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] md:leading-[1.1] mb-0 md:mb-8 2xl:mb-4 max-w-4xl 2xl:max-w-none mx-auto md:[text-wrap:balance]">
                
                {/* MOBILE ONLY: 2 exact lines */}
                <span className="flex flex-col md:hidden">
                  <span>{content.headingMain}</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 -mt-1">
                    {content.headingHighlight}
                  </span>
                </span>

                {/* DESKTOP ONLY: Natural wrap */}
                <span className="hidden md:inline">
                  {content.headingMain}{' '}
                  <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
                    {content.headingHighlight}
                  </span>
                </span>

              </h2>
              
              <p className="hidden md:block text-center text-lg lg:text-xl 2xl:text-2xl text-slate-600 leading-relaxed max-w-3xl 2xl:max-w-none mx-auto font-light">
                {content.descriptionDesktop}
              </p>
            </div>
          </ScrollReveal>
        </header>

        {/* 🔥 FIXED: Reverted back to grid-cols-1 on mobile so cards stretch full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10 2xl:gap-10 w-full">
          
          <ScrollReveal delay={100} className="h-full">
            {/* Restored mobile padding to p-6 since it has room again */}
            <article className="bg-white p-6 md:p-8 2xl:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-300 transition-all duration-300 group h-full flex flex-col">
               
               <div className="flex items-start gap-4 md:gap-5 lg:gap-6 h-full">
                 {/* Hidden icon on mobile */}
                 <div className="hidden md:flex w-14 h-14 md:w-16 md:h-16 2xl:w-16 2xl:h-16 bg-amber-50 rounded-2xl items-center justify-center border border-amber-100 group-hover:bg-amber-100 transition-colors shadow-sm shrink-0">
                    <Target className="w-7 h-7 md:w-8 md:h-8 2xl:w-8 2xl:h-8 text-amber-600" />
                 </div>
                 
                 <div className="flex-1 flex flex-col justify-start">
                   {/* Restored mobile text size to text-xl */}
                   <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-slate-900 tracking-tight mb-2 md:mb-3">{content.mission.title}</h3>
                   <p className="md:hidden text-slate-600 leading-relaxed text-sm">
                     {content.mission.descriptionMobile}
                   </p>
                   <p className="hidden md:block text-slate-600 leading-relaxed text-sm md:text-base 2xl:text-lg">
                     {content.mission.descriptionDesktop}
                   </p>
                 </div>
               </div>
               
            </article>
          </ScrollReveal>

          <ScrollReveal delay={200} className="h-full">
            <article className="bg-white p-6 md:p-8 2xl:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-300 transition-all duration-300 group h-full flex flex-col">
               
               <div className="flex items-start gap-4 md:gap-5 lg:gap-6 h-full">
                 {/* Hidden icon on mobile */}
                 <div className="hidden md:flex w-14 h-14 md:w-16 md:h-16 2xl:w-16 2xl:h-16 bg-amber-50 rounded-2xl items-center justify-center border border-amber-100 group-hover:bg-amber-100 transition-colors shadow-sm shrink-0">
                    <Eye className="w-7 h-7 md:w-8 md:h-8 2xl:w-8 2xl:h-8 text-amber-600" />
                 </div>
                 
                 <div className="flex-1 flex flex-col justify-start">
                   <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-slate-900 tracking-tight mb-2 md:mb-3">{content.vision.title}</h3>
                   <p className="md:hidden text-slate-600 leading-relaxed text-sm">
                     {content.vision.descriptionMobile}
                   </p>
                   <p className="hidden md:block text-slate-600 leading-relaxed text-sm md:text-base 2xl:text-lg">
                     {content.vision.descriptionDesktop}
                   </p>
                 </div>
               </div>
               
            </article>
          </ScrollReveal>

          {/* 🔥 FIXED: Reverted back to md:col-span-2 (was col-span-2) so it flows naturally in the 1-column mobile grid */}
          <div className="md:col-span-2">
            <ScrollReveal delay={300}>
              <article className="bg-white p-6 md:p-10 2xl:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-amber-300 transition-all duration-300 group">
                 
                 <div className="flex items-start gap-4 md:gap-5 lg:gap-6">
                   <div className="hidden md:flex w-12 h-12 md:w-16 md:h-16 2xl:w-16 2xl:h-16 bg-amber-50 rounded-[0.85rem] md:rounded-2xl items-center justify-center border border-amber-100 group-hover:bg-amber-100 transition-colors shadow-sm shrink-0">
  <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 2xl:w-8 2xl:h-8 text-amber-600" />
</div>
                   
                   <div className="flex-1 flex flex-col">
                     <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-slate-900 tracking-tight mb-2 md:mb-4 mt-1 md:mt-0">{content.whatWeDo.title}</h3>
                     <p className="md:hidden text-slate-600 leading-relaxed text-sm">
                       {content.whatWeDo.descriptionMobile}
                     </p>
                     <p className="hidden md:block text-slate-600 leading-relaxed text-sm md:text-base 2xl:text-lg">
                       {content.whatWeDo.descriptionDesktop}
                     </p>
                   </div>
                 </div>
                 
              </article>
            </ScrollReveal>
          </div>

          <div className="hidden md:block md:col-span-2">
            <ScrollReveal delay={400}>
              <article className="bg-slate-900 p-8 md:p-10 2xl:p-12 rounded-[2rem] border border-slate-800 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full group-hover:bg-amber-500/20 transition-colors duration-500"></div>
                 
                 <div className="relative z-10 flex items-start gap-5 md:gap-6">
                    <div className="w-14 h-14 md:w-16 md:h-16 2xl:w-16 2xl:h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-colors shrink-0">
                        <Cpu className="w-7 h-7 md:w-8 md:h-8 2xl:w-8 2xl:h-8 text-amber-500" />
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl md:text-2xl 2xl:text-3xl font-bold text-white tracking-tight mb-3 md:mb-4">{content.culture.title}</h3>
                      <p className="md:hidden text-slate-400 leading-relaxed text-sm">
                        {content.culture.descriptionMobile}
                      </p>
                      <p className="hidden md:block text-slate-400 leading-relaxed text-sm md:text-base 2xl:text-lg">
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
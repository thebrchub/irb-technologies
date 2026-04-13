import { ArrowLeft, ShieldAlert, Target, ShieldCheck, Clock, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../config/siteContent';

const MegaEvent = () => {
  const content = siteContent.megaEvent;
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 md:pt-32 pb-24 md:pb-32 font-sans selection:bg-amber-200 selection:text-amber-900 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent) pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 relative z-10 w-full">
        
        <Link to="/#case-studies" className="inline-flex items-center text-sm 2xl:text-base font-bold text-slate-500 hover:text-amber-600 transition-colors mb-10 md:mb-12 2xl:mb-16 group">
          <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" /> {content.backLinkText}
        </Link>

        {/* 🔥 FIXED: Allowed the header container to expand without restrictions on 2xl */}
        <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-none mb-12 2xl:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs 2xl:text-sm font-black uppercase tracking-widest mb-6 shadow-sm">
            <Globe size={14} className="2xl:w-4 2xl:h-4" /> {content.badge}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-[5.5rem] 2xl:whitespace-nowrap font-black text-slate-900 tracking-tighter mb-6 lg:mb-8 leading-[1.05]">
            {content.headingMain}<span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">{content.headingHighlight}</span>
          </h1>
          
          {/* 🔥 FIXED: Added 2xl:whitespace-nowrap and 2xl:max-w-none to force a single line on big screens */}
          <p className="text-lg md:text-xl 2xl:text-2xl 2xl:whitespace-nowrap 2xl:max-w-none text-slate-600 leading-relaxed font-medium max-w-3xl">
            {content.description}
          </p>
        </div>

        <div className="relative w-full mb-20 sm:mb-24 md:mb-28 lg:mb-32 2xl:mb-48 flex flex-col items-center">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[650px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-slate-900/30 z-10"></div>
            <img 
              src={content.imageUrl}
              alt={content.imageAlt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 translate-y-1/2 w-[95%] sm:w-[90%] lg:w-[80%] bg-white rounded-2xl md:rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-200 p-4 sm:p-6 lg:p-8 2xl:p-12 z-20 overflow-hidden">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 2xl:gap-10 divide-x divide-stone-200 text-center items-center">
              <div className="px-1 sm:px-4 md:px-0">
                <div className="text-[9px] sm:text-xs md:text-sm 2xl:text-base font-bold text-slate-400 uppercase tracking-wide md:tracking-widest mb-0.5 md:mb-1 2xl:mb-2 truncate">{content.scaleLabel}</div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-black text-slate-900 whitespace-nowrap">{content.scaleValue}</div>
              </div>
              <div className="px-1 sm:px-4 md:px-0">
                <div className="text-[9px] sm:text-xs md:text-sm 2xl:text-base font-bold text-slate-400 uppercase tracking-wide md:tracking-widest mb-0.5 md:mb-1 2xl:mb-2 truncate">{content.threatLabel}</div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-black text-red-500 whitespace-nowrap">{content.threatValue}</div>
              </div>
              <div className="px-1 sm:px-4 md:px-0">
                <div className="text-[9px] sm:text-xs md:text-sm 2xl:text-base font-bold text-slate-400 uppercase tracking-wide md:tracking-widest mb-0.5 md:mb-1 2xl:mb-2 truncate">{content.uptimeLabel}</div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-5xl font-black text-emerald-500 whitespace-nowrap">{content.uptimeValue}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 2xl:gap-12">
          
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-[2rem] p-8 lg:p-10 2xl:p-16 shadow-xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-500/20 transition-colors duration-500"></div>
            <div className="w-14 h-14 2xl:w-16 2xl:h-16 bg-red-500/20 border border-red-500/30 text-red-400 rounded-2xl flex items-center justify-center mb-6 lg:mb-8">
              <ShieldAlert size={28} className="2xl:w-8 2xl:h-8" />
            </div>
            <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-black mb-4 lg:mb-6">{content.challenge.title}</h3>
            <p className="text-slate-300 text-base lg:text-lg 2xl:text-xl leading-relaxed font-medium">
              {content.challenge.description}
            </p>
          </div>

          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-[2rem] p-8 lg:p-10 2xl:p-16 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center">
            <div className="w-14 h-14 2xl:w-16 2xl:h-16 bg-amber-50 border border-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mb-6 lg:mb-8">
              <Target size={28} className="2xl:w-8 2xl:h-8" />
            </div>
            <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-black text-slate-900 mb-4 lg:mb-6">{content.approach.title}</h3>
            <p className="text-slate-600 text-base lg:text-lg 2xl:text-xl leading-relaxed font-medium mb-6 lg:mb-8">
              We deployed an agile <strong className="text-slate-900">{content.approach.rapidEventVAPT}</strong> protocol exactly 48 hours before the massive influx of traffic.
            </p>
            <ul className="space-y-4 2xl:space-y-6">
              {content.approach.items.map((item, index) => (
                <li key={index} className="flex items-start gap-4 2xl:gap-5">
                  <div className="mt-1 bg-amber-100 p-1.5 2xl:p-2 rounded-md text-amber-700">{index === 0 ? <Server size={16} className="2xl:w-5 2xl:h-5" strokeWidth={3} /> : <Clock size={16} className="2xl:w-5 2xl:h-5" strokeWidth={3} />}</div>
                  <p className="text-slate-600 font-medium text-base lg:text-lg 2xl:text-xl"><strong className="text-slate-900">{item.label}:</strong> {item.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-12 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-[2rem] p-8 lg:p-10 2xl:p-16 shadow-xl relative overflow-hidden mt-4 lg:mt-6 2xl:mt-4">
            <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 2xl:gap-16">
              <div className="w-16 h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl lg:rounded-3xl flex items-center justify-center shrink-0">
                <ShieldCheck size={32} className="text-white lg:w-10 lg:h-10 2xl:w-12 2xl:h-12" />
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-black mb-4 lg:mb-6">{content.result.title}</h3>
                <p className="text-amber-50 text-base lg:text-lg 2xl:text-xl leading-relaxed font-medium w-full">
                  {content.result.description}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MegaEvent;
import { ArrowLeft, ShieldAlert, Target, ShieldCheck, Clock, Server, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const MegaEvent = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-32 font-sans selection:bg-amber-200 selection:text-amber-900 relative overflow-hidden">
      
      {/* Subtle Background Grid for that Tech Feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent) pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Navigation */}
        {/* 🔥 Changed `to="/"` to `to="/#case-studies"` so it jumps perfectly to the grid! */}
        <Link to="/#case-studies" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-amber-600 transition-colors mb-12 group">
        <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
        </Link>

        {/* Header Section */}
        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
            <Globe size={14} /> Enterprise Scale
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-[5.5rem] font-black text-slate-900 tracking-tighter mb-8 leading-[1.05]">
            Securing The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Mega-Event.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
            How we protected a high-traffic public gathering against real-time, coordinated cyber threats without a single second of downtime.
          </p>
        </div>

        {/* 🎬 Cinematic Hero Banner with Floating Stats */}
        <div className="relative w-full mb-32 lg:mb-40">
          <div className="w-full h-[300px] md:h-[450px] lg:h-[550px] 2xl:h-[650px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative">
            {/* Dark overlay for premium contrast */}
            <div className="absolute inset-0 bg-slate-900/30 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1540039155732-d6824b5ce662?auto=format&fit=crop&q=80&w=2000" 
              alt="Massive crowd at a stadium event" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* 📊 Floating Impact Bar */}
          <div className="absolute -bottom-16 lg:-bottom-12 left-1/2 -translate-x-1/2 w-[90%] lg:w-[80%] bg-white rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-200 p-6 lg:p-8 z-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone-200 text-center">
              <div className="pt-4 md:pt-0">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Scale</div>
                <div className="text-3xl lg:text-4xl font-black text-slate-900">2.5M+ Users</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Threat Level</div>
                <div className="text-3xl lg:text-4xl font-black text-red-500">Extreme</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Uptime</div>
                <div className="text-3xl lg:text-4xl font-black text-emerald-500">100%</div>
              </div>
            </div>
          </div>
        </div>

        {/* 🧩 Editorial Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Column: The Challenge */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-[2rem] p-8 lg:p-12 shadow-xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-500/20 transition-colors duration-500"></div>
            <div className="w-14 h-14 bg-red-500/20 border border-red-500/30 text-red-400 rounded-2xl flex items-center justify-center mb-8">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-3xl font-black mb-6">The Challenge</h3>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              A massive international event was expecting millions of concurrent digital interactions. The attack surface was enormous, and threat intelligence indicated planned DDoS and intrusion attempts targeting the core ticketing and broadcast APIs.
            </p>
          </div>

          {/* Right Column: Our Approach */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-[2rem] p-8 lg:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center">
            <div className="w-14 h-14 bg-amber-50 border border-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mb-8">
              <Target size={28} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-6">Our Approach</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
              We deployed an agile <strong className="text-slate-900">Rapid Event VAPT</strong> protocol exactly 48 hours before the massive influx of traffic.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-amber-100 p-1.5 rounded-md text-amber-700"><Server size={16} strokeWidth={3} /></div>
                <p className="text-slate-600 font-medium"><strong className="text-slate-900">Infrastructure:</strong> Segmented the critical network nodes and established a strict Zero-Trust perimeter around payment gateways.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-amber-100 p-1.5 rounded-md text-amber-700"><Clock size={16} strokeWidth={3} /></div>
                <p className="text-slate-600 font-medium"><strong className="text-slate-900">Execution:</strong> Set up a 24/7 live-monitoring War Room to intercept, analyze, and neutralize volumetric attacks in real-time.</p>
              </li>
            </ul>
          </div>

          {/* Bottom Row: The Result */}
          <div className="lg:col-span-12 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-[2rem] p-8 lg:p-12 shadow-xl relative overflow-hidden mt-4 lg:mt-8">
            <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl flex items-center justify-center shrink-0">
                <ShieldCheck size={40} className="text-white" />
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-black mb-4">The Result</h3>
                <p className="text-amber-50 text-lg lg:text-xl leading-relaxed font-medium max-w-4xl">
                  100% uptime maintained. We successfully deflected 4 major volumetric DDoS attempts and patched 3 critical zero-day API vulnerabilities on the fly, securing the digital experience for over 2.5 million users without them ever noticing.
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
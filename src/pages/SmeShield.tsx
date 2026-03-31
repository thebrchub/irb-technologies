import { ArrowLeft, Zap, Target, ShieldCheck, Clock, ShieldAlert, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmeShield = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-32 font-sans selection:bg-amber-200 selection:text-amber-900 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent) pointer-events-none -z-10"></div>

      <div className="max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        
        <Link to="/#case-studies" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-amber-600 transition-colors mb-12 group">
          <ArrowLeft size={16} className="mr-2 transform group-hover:-translate-x-1 transition-transform" /> Back to Case Studies
        </Link>

        <div className="max-w-4xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
            <Zap size={14} /> Rapid Response
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-[5.5rem] font-black text-slate-900 tracking-tighter mb-8 leading-[1.05]">
            The SME <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Shield.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
            A 24-hour turnaround audit that saved a local IT firm's client-facing portal from a critical data exposure vulnerability.
          </p>
        </div>

        <div className="relative w-full mb-32 lg:mb-40 flex flex-col items-center">
          <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] 2xl:h-[650px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-slate-900/20 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
              alt="Cybersecurity Code" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-0 translate-y-1/2 w-[95%] sm:w-[90%] lg:w-[80%] bg-white rounded-2xl md:rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-stone-200 p-4 sm:p-6 lg:p-8 z-20 overflow-hidden">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 divide-x divide-stone-200 text-center items-center">
              <div className="px-1 sm:px-4 md:px-0">
                <div className="text-[9px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wide md:tracking-widest mb-0.5 md:mb-1 truncate">Turnaround</div>
                <div className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 whitespace-nowrap">&lt; 24 Hrs</div>
              </div>
              <div className="px-1 sm:px-4 md:px-0">
                <div className="text-[9px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wide md:tracking-widest mb-0.5 md:mb-1 truncate">Threat Level</div>
                <div className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-red-500 whitespace-nowrap">Critical</div>
              </div>
              <div className="px-1 sm:px-4 md:px-0">
                <div className="text-[9px] sm:text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wide md:tracking-widest mb-0.5 md:mb-1 truncate">Downtime</div>
                <div className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-emerald-500 whitespace-nowrap">Zero</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-[2rem] p-8 lg:p-12 shadow-xl flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-red-500/20 transition-colors duration-500"></div>
            <div className="w-14 h-14 bg-red-500/20 border border-red-500/30 text-red-400 rounded-2xl flex items-center justify-center mb-8">
              <ShieldAlert size={28} />
            </div>
            <h3 className="text-3xl font-black mb-6">The Challenge</h3>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              A rapidly growing IT services firm noticed anomalous behavior on their primary client portal. With sensitive customer data at risk and a major product launch in exactly 48 hours, they lacked internal visibility and needed immediate, expert intervention.
            </p>
          </div>

          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-[2rem] p-8 lg:p-12 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center">
            <div className="w-14 h-14 bg-amber-50 border border-amber-100 text-amber-500 rounded-2xl flex items-center justify-center mb-8">
              <Target size={28} />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-6">Our Approach</h3>
            <p className="text-slate-600 text-lg leading-relaxed font-medium mb-8">
              We instantly initiated our <strong className="text-slate-900">Health Check Express</strong> protocol. Our response team was active within 60 minutes.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-amber-100 p-1.5 rounded-md text-amber-700"><Clock size={16} strokeWidth={3} /></div>
                <p className="text-slate-600 font-medium"><strong className="text-slate-900">Hour 1-4:</strong> Mapped the application architecture and isolated the anomalous endpoints.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-amber-100 p-1.5 rounded-md text-amber-700"><Activity size={16} strokeWidth={3} /></div>
                <p className="text-slate-600 font-medium"><strong className="text-slate-900">Hour 4-12:</strong> Executed deep penetration tests on exposed APIs, identifying a critical zero-day SQL injection flaw.</p>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-12 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-[2rem] p-8 lg:p-12 shadow-xl relative overflow-hidden mt-4 lg:mt-8">
            <div className="absolute top-[-20%] right-[-5%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl flex items-center justify-center shrink-0">
                <ShieldCheck size={40} className="text-white" />
              </div>
              <div className="flex-1 w-full">
                <h3 className="text-3xl lg:text-4xl font-black mb-4">The Result</h3>
                <p className="text-amber-50 text-lg lg:text-xl leading-relaxed font-medium w-full">
                  We provided an emergency hotfix playbook by hour 18. The vulnerability was successfully patched by their dev team under our supervision. The product launch went ahead seamlessly, completely avoiding a potentially catastrophic breach and severe reputation damage.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SmeShield;
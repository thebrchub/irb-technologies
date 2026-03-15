 
import { Shield, Globe, Lock, Server, Terminal, Activity, BookOpen, Users } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="bg-white py-24 relative overflow-hidden">
      
      {/* Ambient "Always Alive" Corporate Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-slate-400/5 rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_2s]"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* SEO: Proper Header Hierarchy matching the Client Draft */}
        <header className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            Core Offerings
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Protecting your assets, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
              no matter the stage.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
             From specialized Rapid VAPT for mega-events to agile security audits for growing businesses. We ensure you are DPDP ready and inherently secure.
          </p>
        </header>

        {/* 🔥 THE UNIQUE ANIMATION: "Spotlight Focus Grid" 🔥
          Uses group/bento on the parent. When you hover the grid, un-hovered cards dim & blur! 
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 group/bento">
          
          {/* Card 1: Security Health Check */}
          <Card 
            title="Health Check Express" 
            description="A fixed-price, 24-hour turnaround audit. Comprehensive VAPT for websites, APIs, and internal networks to fix loopholes instantly."
            icon={<Activity className="text-amber-600" />}
          >
            <div className="absolute -bottom-2 -right-2 bg-white p-5 rounded-tl-2xl border-t border-l border-slate-200 w-[85%] shadow-xl transform translate-y-0 scale-100 opacity-100 md:translate-y-6 md:scale-95 md:opacity-80 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-end gap-3 h-24 pb-2 border-b border-slate-100">
                 <div className="w-full bg-slate-200 h-[50%] md:h-[40%] rounded-t-sm group-hover:h-[20%] transition-all duration-700 delay-100 relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">VULN</div>
                 </div>
                 <div className="w-full bg-amber-500 h-[80%] md:h-[70%] rounded-t-sm group-hover:h-[100%] transition-all duration-700 delay-150 relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-[10px] text-white font-bold px-2 py-1 rounded shadow-md opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">100%</div>
                 </div>
                 <div className="w-full bg-amber-200 h-[65%] md:h-[60%] rounded-t-sm group-hover:h-[80%] transition-all duration-700 delay-200"></div>
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-slate-500 font-bold tracking-wider">
                 <span>SCANNED</span>
                 <span>SECURED</span>
              </div>
            </div>
          </Card>

          {/* Card 2: Rapid VAPT for Events */}
          <Card 
            title="Rapid Event VAPT" 
            description="Accelerated, high-concurrency security audits designed specifically to protect live mega-event environments from real-time threats."
            icon={<Server className="text-slate-700" />}
          >
             <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl border border-slate-200 w-[80%] shadow-xl transform translate-y-0 scale-100 opacity-100 md:translate-y-6 md:scale-95 md:opacity-80 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-emerald-50 md:bg-slate-50 border border-slate-100 rounded-lg group-hover:bg-emerald-50 transition-colors duration-500">
                      <Globe size={16} className="text-emerald-600 md:text-slate-700 group-hover:text-emerald-600 transition-colors" />
                   </div>
                   <div>
                      <div className="text-xs text-slate-900 font-bold">Event Server 01</div>
                      <div className="text-[10px] font-bold text-emerald-500 md:text-slate-400 group-hover:text-emerald-500 flex items-center gap-1 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 md:bg-slate-300 group-hover:bg-emerald-500 animate-pulse"></span> 
                        <span className="hidden md:inline-block group-hover:hidden">Analyzing</span>
                        <span className="inline-block md:hidden group-hover:inline-block">Traffic Secured</span>
                      </div>
                   </div>
                </div>
                {/* Simulated traffic spike bar */}
                <div className="h-4 w-full flex items-end gap-1 overflow-hidden">
                   {[40, 70, 45, 90, 60, 100, 80, 50].map((h, i) => (
                     <div key={i} className="flex-1 bg-amber-400 rounded-t-sm transition-all duration-500" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}></div>
                   ))}
                </div>
             </div>
             <div className="absolute bottom-2 right-2 w-[80%] h-24 bg-slate-50 rounded-xl border border-slate-200 -z-10 transform translate-y-0 md:translate-y-6 group-hover:translate-y-0 transition-transform duration-500"></div>
          </Card>

          {/* Card 3: Compliance as a Service */}
          <Card 
            title="Compliance as a Service" 
            description="Helping businesses of all sizes navigate the DPDP Act, ISO 27001, and SOC2. We simplify the complex world of data privacy laws."
            icon={<Lock className="text-emerald-600" />}
          >
             <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-slate-100 to-transparent p-6 flex flex-col items-end justify-end transform translate-y-0 opacity-100 md:translate-y-4 md:opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex flex-col gap-2 w-[70%]">
                   <div className="flex items-center justify-between bg-white px-3 py-2 rounded border border-slate-200 shadow-sm opacity-100 md:opacity-0 group-hover:opacity-100 translate-x-0 md:translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-100">
                      <span className="text-[10px] font-bold text-slate-700">DPDP Act</span>
                      <Shield className="w-3 h-3 text-emerald-500" />
                   </div>
                   <div className="flex items-center justify-between bg-white px-3 py-2 rounded border border-slate-200 shadow-sm opacity-100 md:opacity-0 group-hover:opacity-100 translate-x-0 md:translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-200">
                      <span className="text-[10px] font-bold text-slate-700">ISO 27001</span>
                      <Shield className="w-3 h-3 text-emerald-500" />
                   </div>
                </div>
             </div>
          </Card>

          {/* Card 4: Network Consultation */}
          <Card 
            title="Network Consultation" 
            description="Designing secure, segmented networks. We help SMBs secure remote-work setups and mega-events secure onsite infrastructure."
            icon={<Terminal className="text-blue-600" />}
          >
            <div className="absolute -bottom-2 -right-2 bg-slate-900 p-5 rounded-tl-2xl border-t border-l border-slate-200 w-[90%] shadow-2xl transform translate-y-0 scale-100 opacity-100 md:translate-y-6 md:scale-95 md:opacity-80 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
               <div className="flex gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
               </div>
               <div className="space-y-1.5 font-mono text-[11px]">
                  <p className="text-amber-400">$ init_architecture --mode=secure</p>
                  <p className="text-slate-400 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">Segmenting VLANs...</p>
                  <p className="text-slate-400 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">Applying Zero-Trust protocols...</p>
                  <p className="text-emerald-400 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">Infrastructure deployed successfully.</p>
               </div>
            </div>
          </Card>

          {/* Card 5: Cyber Awareness */}
          <Card 
            title="Resilience Training" 
            description="Custom Cyber Awareness and Incident Response [IR] training programs tailored for corporate teams of 5 to 5,000 members."
            icon={<Users className="text-amber-500" />}
          >
             <div className="absolute -bottom-2 -right-2 bg-white w-[85%] p-5 rounded-tl-2xl border border-slate-200 shadow-2xl transform translate-y-0 scale-100 opacity-100 md:translate-y-6 md:scale-95 md:opacity-80 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 opacity-100 md:opacity-0 group-hover:opacity-100 translate-x-0 md:-translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-100">
                   <span className="text-xs font-bold text-slate-700">Phishing Simulation</span>
                   <div className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">100% Pass</div>
                </div>
                <div className="flex items-center justify-between opacity-100 md:opacity-0 group-hover:opacity-100 translate-x-0 md:-translate-x-4 group-hover:translate-x-0 transition-all duration-300 delay-200">
                   <span className="text-xs font-bold text-slate-700">IR Protocol Exam</span>
                   <div className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">100% Pass</div>
                </div>
             </div>
          </Card>
          
           {/* Card 6: IR Playbooks */}
           <Card 
            title="IR Playbooks" 
            description="Custom 'What-to-do-if' actionable guides for your teams to handle hardware failures, data breaches, or DDoS attacks instantly."
            icon={<BookOpen className="text-slate-800" />}
          >
             <div className="absolute bottom-6 right-6 flex flex-col gap-3 w-[85%]">
                <div className="self-end bg-amber-100 border border-amber-200 text-amber-900 text-[11px] font-medium px-3 py-2 rounded-l-lg rounded-tr-lg shadow-sm transform translate-x-0 md:translate-x-4 opacity-100 md:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                   ALERT: DDoS Signature Detected.
                </div>
                <div className="self-start bg-slate-900 text-white text-[11px] font-medium px-3 py-2 rounded-r-lg rounded-tl-lg shadow-md transform translate-x-0 md:-translate-x-4 opacity-100 md:opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-300 flex items-center gap-2">
                   <BookOpen size={12} className="text-amber-500" />
                   Initiating Playbook #4...
                </div>
             </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

// 💡 THE SPOTLIGHT CARD COMPONENT
const Card = ({ title, description, icon, children }: { title: string, description: string, icon: any, children: React.ReactNode }) => (
  // 1. Mobile padding overlap fix (pb-44 md:pb-0)
  // 2. Spotlight CSS: group-hover/bento dims/blurs the sibling cards while hovering one!
  <article className="group relative bg-slate-50 hover:bg-white border border-slate-200 hover:border-amber-300 rounded-3xl p-6 md:p-8 min-h-[480px] md:min-h-[420px] transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col cursor-pointer group-hover/bento:opacity-60 group-hover/bento:blur-[2px] group-hover/bento:scale-[0.98] hover:!opacity-100 hover:!blur-none hover:!scale-100 hover:z-10">
    
    <div className="hidden md:block absolute inset-0 bg-[radial-gradient(400px_at_50%_50%,rgba(245,158,11,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    <div className="relative z-20 mb-auto pb-44 md:pb-0">
      <div className="mb-6 p-4 bg-white border border-slate-200 shadow-sm w-fit rounded-2xl transform md:group-hover:-translate-y-2 md:group-hover:shadow-md transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4 md:group-hover:text-amber-600 transition-colors duration-300">{title}</h3>
      <p className="text-base text-slate-600 leading-relaxed">{description}</p>
    </div>
    
    <div className="absolute bottom-0 right-0 w-full h-[50%] z-10 pointer-events-none">
       {children}
    </div>
  </article>
);

export default Services;
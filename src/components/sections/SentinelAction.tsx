import { motion } from 'framer-motion';
import { BrainCircuit, ScanSearch, ShieldAlert, Check, X, ArrowRight } from 'lucide-react';

const SentinelAction = () => {
  const steps = [
    {
      id: '01',
      title: 'Ingest & Correlate',
      description: 'Sentinel agents deploy in under 8 minutes. Logs and telemetry stream into a real-time graph engine.',
      icon: ScanSearch,
    },
    {
      id: '02',
      title: 'Detect & Score',
      description: 'The AI engine maps lateral movement in real time. Every threat is scored before an analyst sees it.',
      icon: BrainCircuit,
    },
    {
      id: '03',
      title: 'Respond & Resolve',
      description: 'Automated playbooks trigger containment. 74% of incidents auto-close with full CERT-In reporting.',
      icon: ShieldAlert,
    }
  ];

  const comparisonData = [
    { capability: 'CERT-In Native Integration', irb: true, global: 'Partial', indian: 'Partial' },
    { capability: 'DPDP Act Compliance Engine', irb: true, global: false, indian: false },
    { capability: 'India-Specific Threat Intel', irb: true, global: 'Limited', indian: false },
    { capability: 'On-Prem / Air-Gapped Deployment', irb: true, global: 'Limited', indian: true },
    { capability: 'Sub-60s Mean Time to Detect', irb: true, global: true, indian: false },
    { capability: 'SME-Accessible Pricing (INR)', irb: true, global: false, indian: 'Varies' },
    { capability: 'RBI / SEBI Board-Ready Reporting', irb: true, global: false, indian: false },
  ];

  return (
    <section id='sentinel' className="relative bg-[#FBF8F3] py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-0" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24 max-w-3xl"
        >
          <h2 className="text-sm font-black text-[#C45919] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-[#C45919]" /> System Workflow
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-[#2B3A4A] tracking-tight leading-[1.1]">
            From signal to <span className="text-[#C45919]">resolution</span> in seconds.
          </h3>
          <p className="mt-8 text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
            Collapsing the 72-hour threat cycle into a continuous, automated loop running at machine speed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 items-start mb-40">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group h-full"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[44px] left-[80%] w-full h-[2px] bg-stone-200/50 z-0">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-[#C45919] to-transparent"
                  />
                </div>
              )}

              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                className="relative z-10 w-24 h-24 mb-10 p-4 rounded-[2rem] bg-white border border-stone-100 flex items-center justify-center shadow-2xl shadow-stone-200/40"
              >
                 <div className="w-16 h-16 bg-[#FBF8F3] rounded-2xl flex items-center justify-center text-[#C45919]">
                    <step.icon size={32} strokeWidth={1.5} />
                 </div>
              </motion.div>

              <div className="relative z-10">
                 <p className="text-xs font-black text-[#C45919]/40 uppercase tracking-widest mb-4 font-mono">Module {step.id}</p>
                 <h4 className="text-2xl font-bold text-[#2B3A4A] mb-4 flex items-center gap-2 group-hover:text-[#C45919] transition-colors">
                  {step.title} <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                 </h4>
                 <p className="text-base text-slate-500 leading-relaxed font-medium">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-sm font-black text-[#C45919] uppercase tracking-[0.3em] mb-4">The Sentinel Advantage</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-[#2B3A4A] tracking-tight">Built for India. <span className="text-[#C45919]">Not adapted.</span></h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/60 backdrop-blur-md shadow-2xl shadow-stone-200/20"
          >
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="bg-stone-50/80 border-b border-stone-200">
                  <th className="p-8 text-xs font-black text-slate-500 uppercase tracking-widest w-[55%] md:w-auto">Intelligence Metric</th>
                  <th className="p-8 text-xs font-black text-[#C45919] uppercase tracking-widest bg-[#C45919]/5 border-x border-[#C45919]/10 text-center w-[45%] md:w-auto">IRB Sentinel</th>
                  <th className="hidden md:table-cell p-8 text-xs font-black text-slate-500 uppercase tracking-widest text-center">Global SIEMs</th>
                  <th className="hidden md:table-cell p-8 text-xs font-black text-slate-500 uppercase tracking-widest text-center">Indian Alts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {comparisonData.map((row, i) => (
                  <motion.tr 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="hover:bg-white transition-all group"
                  >
                    <td className="p-8 text-slate-800 font-bold text-sm md:text-base">{row.capability}</td>
                    
                    <td className="p-8 bg-[#C45919]/5 border-x border-[#C45919]/10 text-center">
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.3 + (i * 0.1) }}
                        className="flex justify-center"
                      >
                        {/* 🔥 BOLDER TICK */}
                        <Check className="text-[#C45919] w-7 h-7" strokeWidth={3.5} />
                      </motion.div>
                    </td>
                    
                    <td className="hidden md:table-cell p-8 text-slate-700 font-bold text-center italic">
                      {typeof row.global === 'string' ? row.global : (
                        <div className="flex justify-center">
                          {/* 🔥 BOLDER CROSS */}
                          <X size={22} className="text-slate-500 opacity-80" strokeWidth={3} />
                        </div>
                      )}
                    </td>
                    
                    <td className="hidden md:table-cell p-8 text-slate-700 font-bold text-center italic">
                      {typeof row.indian === 'string' ? row.indian : (row.indian ? (
                        <div className="flex justify-center">
                           <Check size={22} className="text-emerald-700" strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="flex justify-center">
                          <X size={22} className="text-slate-500 opacity-80" strokeWidth={3} />
                        </div>
                      ))}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SentinelAction;
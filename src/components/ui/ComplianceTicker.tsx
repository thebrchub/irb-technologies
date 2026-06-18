import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const ComplianceTicker = () => {
  const standards = [
    { name: 'NIST', desc: 'Framework' },
    { name: 'ISO 27001', desc: 'Certified' },
    { name: 'DPDP Act', desc: 'Compliant' },
  ];

  return (
    //     Removed background colors and hard borders. Let it breathe!
    <section className="py-8 md:py-10 relative overflow-hidden bg-transparent">
      
      {/*   PREMIUM TOUCH: Fading top divider instead of a harsh edge-to-edge border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-70"></div>

      <div className="max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16 relative z-10 w-full">
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
          
          {/* Subtle Live Label */}
          <motion.div 
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <div className="relative flex items-center justify-center">
               <span className="absolute w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-60"></span>
               <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.15em] text-center md:text-left m-0">
              Global Security Standards
            </p>
          </motion.div>

          {/* Elegant dot divider for desktop instead of a harsh line */}
          <div className="hidden md:block w-1 h-1 rounded-full bg-slate-300"></div>

          {/* Horizontal Standards List */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-14">
            {standards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.15), duration: 0.5 }}
                className="flex items-center gap-3 group cursor-default"
              >
                {/*   PREMIUM TOUCH: Icons placed in sleek, muted circular badges that light up on hover */}
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-amber-50 group-hover:border-amber-200 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all duration-300">
                  <ShieldCheck size={18} className="text-slate-400 group-hover:text-amber-500 transition-colors duration-300" strokeWidth={2} />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-bold text-slate-700 group-hover:text-slate-900 transition-colors tracking-tight leading-none mb-1">
                    {standard.name}
                  </span>
                  <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">
                    {standard.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ComplianceTicker;
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Lock, Globe, MapPin, Mail, Phone, Server } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
           
           <div className="md:col-span-4 2xl:col-span-3">
              <div className="flex items-center gap-3 mb-6">
                 <img 
                   src="/logo1.svg" 
                   alt="IRB Technology Logo" 
                   className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-md shrink-0" 
                 />
                 <span className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                    IRB <span className="text-amber-500"> Technology</span>
                 </span>
              </div>
              <p className="text-slate-600 text-sm 2xl:text-base leading-relaxed mb-8 pr-4">
                Strategic cybersecurity and operational excellence for the modern enterprise. We secure the digital future of industries globally.
              </p>
              
              
              {/*
              <div className="flex gap-4">
                 {[
                   { icon: Twitter, label: 'Twitter' }, 
                   { icon: Github, label: 'GitHub' }, 
                   { icon: Linkedin, label: 'LinkedIn' }, 
                   { icon: Facebook, label: 'Facebook' }
                 ].map((social, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      aria-label={`Follow us on ${social.label}`}
                      className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                       <social.icon size={18} />
                    </a>
                 ))}
              </div>
              */}
           </div>

           <div className="hidden md:grid md:col-span-4 2xl:col-span-5 grid-cols-2 gap-8 md:gap-12 md:pl-8 2xl:pl-16">
              
            
              <div>
                 <h4 className="text-slate-900 font-bold mb-5 md:mb-6 tracking-wide text-base 2xl:text-lg">Solutions</h4>
                 <ul className="space-y-4 text-sm 2xl:text-base font-medium text-slate-600">
                    {['Rapid Vulnerability Management', 'DPDP Readiness', 'Compliance (CaaS)', 'Expert Consulting', 'Incident Simulation and Response'].map((item) => (
                       <li key={item}>
                         <span className="group flex items-center cursor-default hover:text-amber-600 transition-colors">
                           <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                         </span>
                       </li>
                    ))}
                 </ul>
              </div>

              <div>
                 <h4 className="text-slate-900 font-bold mb-5 md:mb-6 tracking-wide text-base 2xl:text-lg">Company</h4>
                 <nav aria-label="Company Navigation">
                   <ul className="space-y-4 text-sm 2xl:text-base font-medium text-slate-600">
                      {[
                         { name: 'About Us', href: '#about' },
                         { name: 'Services', href: '#services' },
                         { name: 'Case Studies', href: '#case-studies' },
                         { name: 'Back to Top', href: '#home' }
                      ].map((item) => (
                         <li key={item.name}>
                           <a href={item.href} className="group flex items-center text-slate-600 hover:text-amber-600 transition-colors">
                              <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item.name}</span>
                              <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-500" />
                           </a>
                         </li>
                      ))}
                   </ul>
                 </nav>
              </div>
           </div>

           <div className="md:col-span-4 2xl:col-span-4 md:pl-4">
              <h4 className="text-slate-900 font-bold mb-5 md:mb-6 tracking-wide text-base 2xl:text-lg">Global Headquarters</h4>
              
              <address className="not-italic flex flex-col gap-5 text-sm 2xl:text-base font-medium text-slate-600">
                <div className="flex items-start gap-3">
                   <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                   <span className="leading-relaxed">
                     404, Royal Arc Avenue,<br />
                     Above Topchi Cafe, near ABB signal,<br />
                     Mahatma Nagar, Parijat Nagar,<br />
                     Nasik, Maharashtra 422005
                   </span>
                </div>
                
                <a href="mailto:irbtechnology25@gmail.com" className="flex items-center gap-3 hover:text-amber-600 transition-colors">
                   <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                   irbtechnology25@gmail.com
                </a>
                
                <a href="tel:+919146466127" className="flex items-center gap-3 hover:text-amber-600 transition-colors">
                   <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                   +91 91464 66127
                </a>
              </address>
           </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-4">
           
          
           <div className="flex flex-col items-center md:items-start gap-2 text-slate-500 text-sm font-medium text-center md:text-left">
               <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 sm:gap-4">
                   <span>&copy; {new Date().getFullYear()} IRB Technology. All rights reserved.</span>
                   <span className="hidden sm:inline-block text-slate-300">|</span>
                   <div className="flex items-center gap-4">
                       <Link to="/privacy-policy" className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
                       <Link to="/terms-of-service" className="hover:text-amber-600 transition-colors">Terms of Service</Link>
                   </div>
               </div>
               <p className="text-slate-400 text-xs md:text-sm font-medium md:self-center md:text-center xl:self-start xl:text-left">
                   Designed and developed by <a href="https://www.brchub.tech" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-600 hover:underline transition-all font-semibold ml-1">BRC Hub LLP</a>
               </p>
           </div>

      
           <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5 bg-white px-5 py-3 md:px-6 md:py-3.5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
               
            
               <div className="flex items-center gap-2 pr-3 md:pr-4 border-r border-slate-200">
                   <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                   </span>
                   <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Verified</span>
               </div>
               
               <div className="flex items-center gap-1.5 md:gap-2">
                   <Lock size={14} className="text-amber-500" />
                   <span className="text-xs md:text-sm font-bold text-slate-800">SSL <span className="hidden sm:inline text-slate-500 font-semibold">Secured</span></span>
               </div>
               
               <div className="flex items-center gap-1.5 md:gap-2">
                   <Server size={14} className="text-amber-500" />
                   <span className="text-xs md:text-sm font-bold text-slate-800">NIST <span className="hidden sm:inline text-slate-500 font-semibold">Framework</span></span>
               </div>

               <div className="flex items-center gap-1.5 md:gap-2">
                   <ShieldCheck size={14} className="text-amber-500" />
                   <span className="text-xs md:text-sm font-bold text-slate-800">ISO 27001 <span className="hidden sm:inline text-slate-500 font-semibold">Certified</span></span>
               </div>

               <div className="flex items-center gap-1.5 md:gap-2">
                   <Globe size={14} className="text-amber-500" />
                   <span className="text-xs md:text-sm font-bold text-slate-800">DPDP <span className="hidden sm:inline text-slate-500 font-semibold">Compliant</span></span>
               </div>
           </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

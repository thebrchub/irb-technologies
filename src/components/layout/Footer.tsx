import { Link } from 'react-router-dom';
import { ShieldCheck, Twitter, Github, Linkedin, Facebook, ArrowRight, Lock, Globe, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

const Footer = ({ onOpenModal }: FooterProps) => {
  return (
    // Slightly reduced top padding since the CTA block is removed, keeping it tight
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full"></div>
      </div>

      {/* 🔥 FIXED: Expanded max-width to 1920px for large monitors to match all other sections */}
      <div className="relative z-10 max-w-[1440px] xl:max-w-[1600px] 2xl:max-w-[1920px] mx-auto px-6 lg:px-16">
        
        {/* 🔥 FIXED: Commented out the duplicate CTA section to keep the design clean! */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 border-b border-slate-200 pb-16 items-center">
           <div>
              <h3 className="text-3xl md:text-4xl 2xl:text-[2.75rem] font-extrabold text-slate-900 mb-4 tracking-tight">Ready to secure your future?</h3>
              <p className="text-slate-600 max-w-md leading-relaxed text-sm md:text-base 2xl:text-lg">
                 Connect with our cybersecurity experts to discuss your vulnerabilities and build a robust, enterprise-grade defense strategy.
              </p>
           </div>
           
           <div className="flex items-center md:justify-end mt-4 md:mt-0">
              <button 
                onClick={onOpenModal}
                className="group relative inline-flex items-center gap-3 bg-slate-900 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/25 text-sm md:text-base w-full md:w-auto justify-center cursor-pointer"
              >
                Contact Our Team <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </div> 
        */}

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
                 Strategic cybersecurity and operational excellence for the modern enterprise. We secure the digital future of industry leaders globally.
              </p>
              
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
           </div>

           <div className="md:col-span-4 2xl:col-span-5 grid grid-cols-2 gap-8 md:gap-12 md:pl-8 2xl:pl-16">
              
              <div>
                 <h4 className="text-slate-900 font-bold mb-5 md:mb-6 tracking-wide text-base 2xl:text-lg">Solutions</h4>
                 <ul className="space-y-4 text-sm 2xl:text-base font-medium text-slate-600">
                    {['Rapid VAPT', 'DPDP Readiness', 'Compliance (CaaS)', 'Network Consulting', 'IR Playbooks'].map((item) => (
                       <li key={item} className="flex items-center gap-2 group cursor-default">
                         <span className="w-1.5 h-1.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0"></span>
                         <span className="group-hover:text-slate-900 transform group-hover:translate-x-1 transition-all duration-300">{item}</span>
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
                         { name: 'Core Offerings', href: '#services' },
                         { name: 'Architecture', href: '#architecture' },
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

        <div className="pt-8 border-t border-slate-200 flex flex-col gap-8 lg:gap-3">
           
           <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
               
               <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-slate-500 text-sm font-medium text-center lg:text-left">
                   <span>&copy; {new Date().getFullYear()} IRB Technology. All rights reserved.</span>
                   <span className="hidden sm:inline-block text-slate-300">|</span>
                   <div className="flex items-center gap-4">
                       <Link to="/privacy-policy" className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
                       <Link to="/terms-of-service" className="hover:text-amber-600 transition-colors">Terms of Service</Link>
                   </div>
               </div>

               <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-2 text-slate-600 text-xs md:text-sm font-bold uppercase tracking-wider">
                     <Lock size={14} className="text-amber-500" /> SSL Secured
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-xs md:text-sm font-bold uppercase tracking-wider">
                     <Globe size={14} className="text-amber-500" /> DPDP Compliant
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 text-xs md:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 bg-white border border-slate-200 rounded-md shadow-sm">
                     <ShieldCheck size={14} className="text-amber-500" /> ISO 27001
                  </div>
               </div>
           </div>

           <div className="flex justify-center lg:justify-start mt-2">
               <p className="text-slate-400 text-xs md:text-sm font-medium text-center lg:text-left">
                   Designed and developed by <a href="https://www.thebrchub.tech" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-600 hover:underline transition-all font-semibold ml-1">BRC HUB LLP</a>
               </p>
           </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
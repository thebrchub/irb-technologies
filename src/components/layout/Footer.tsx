 
import { Link } from 'react-router-dom';
import { ShieldCheck, Twitter, Github, Linkedin, Facebook, ArrowRight, Lock, Globe, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 pt-24 pb-12 overflow-hidden">
      
      {/* Subtle Corporate Background Accents */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Top Section: CTA & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 border-b border-slate-200 pb-16 items-center">
           <div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Stay ahead of the curve.</h3>
              <p className="text-slate-600 max-w-md leading-relaxed text-lg">
                 Subscribe to our enterprise intelligence newsletter. Receive critical security briefings directly to your inbox.
              </p>
           </div>
           
           <div className="flex items-center md:justify-end">
              <form className="relative w-full max-w-md group" onSubmit={(e) => e.preventDefault()}>
                 <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-xl blur opacity-0 group-focus-within:opacity-20 transition duration-300"></div>
                 
                 <div className="relative flex items-center bg-white rounded-xl border border-slate-300 p-1.5 shadow-sm focus-within:border-amber-500 focus-within:ring-1 focus-within:ring-amber-500 transition-all">
                    <label htmlFor="newsletter-email" className="sr-only">Corporate Email Address</label>
                    <input 
                      id="newsletter-email"
                      type="email" 
                      placeholder="Enter your corporate email" 
                      className="w-full bg-transparent text-slate-900 px-4 py-3 focus:outline-none text-sm font-medium placeholder:text-slate-400"
                      required
                    />
                    <button 
                      type="submit" 
                      aria-label="Subscribe to newsletter"
                      className="bg-slate-900 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2"
                    >
                       Subscribe <ArrowRight size={16} />
                    </button>
                 </div>
              </form>
           </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
           
           {/* Column 1: Brand */}
           <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center shadow-md border border-slate-800">
                    <span className="text-amber-500 font-extrabold text-xl">I</span>
                 </div>
                 <span className="text-2xl font-bold text-slate-900 tracking-tight">
                    IRB <span className="text-amber-500">Technologies</span>
                 </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 pr-4">
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
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-1"
                    >
                       <social.icon size={18} />
                    </a>
                 ))}
              </div>
           </div>

           {/* Column 2: Solutions */}
           <div className="md:col-span-2 md:col-start-6">
              <h4 className="text-slate-900 font-bold mb-6 tracking-wide">Solutions</h4>
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                 {['Rapid VAPT', 'DPDP Readiness', 'Compliance (CaaS)', 'Network Consulting', 'IR Playbooks'].map((item) => (
                    <li key={item} className="flex items-center gap-2 group cursor-default">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="group-hover:text-slate-900 transform group-hover:translate-x-1 transition-all duration-300">{item}</span>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Column 3: Company */}
           <div className="md:col-span-2">
              <h4 className="text-slate-900 font-bold mb-6 tracking-wide">Company</h4>
              <nav aria-label="Company Navigation">
                <ul className="space-y-4 text-sm font-medium text-slate-600">
                   {[
                     { name: 'About Us', href: '#about' },
                     { name: 'Core Offerings', href: '#services' },
                     { name: 'Architecture', href: '#architecture' },
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

           {/* Column 4: Global Headquarters */}
           <div className="md:col-span-3">
              <h4 className="text-slate-900 font-bold mb-6 tracking-wide">Global Headquarters</h4>
              
              <address className="not-italic flex flex-col gap-5 text-sm font-medium text-slate-600">
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

        {/* 🔥 FIX: Separated into a stacked layout for perfect mobile ordering 🔥 */}
        <div className="pt-8 border-t border-slate-200 flex flex-col gap-8 lg:gap-3">
           
           {/* Top Row: Copyright & Badges */}
           <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
               
               {/* Copyright & Legal Links */}
               <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-slate-500 text-sm font-medium text-center lg:text-left">
                   <span>&copy; {new Date().getFullYear()} IRB Technologies. All rights reserved.</span>
                   <span className="hidden sm:inline-block text-slate-300">|</span>
                   <div className="flex items-center gap-4">
                       {/* 🔥 UPDATED: Internal Links for Routing 🔥 */}
                       <Link to="/privacy-policy" className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
                       <Link to="/terms-of-service" className="hover:text-amber-600 transition-colors">Terms of Service</Link>
                   </div>
               </div>

               {/* Badges (Now sits cleanly ABOVE the agency credit on mobile) */}
               <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase tracking-wider">
                     <Lock size={14} className="text-amber-500" /> SSL Secured
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase tracking-wider">
                     <Globe size={14} className="text-amber-500" /> DPDP Compliant
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 text-xs font-bold px-3 py-1.5 bg-white border border-slate-200 rounded-md shadow-sm">
                     <ShieldCheck size={14} className="text-amber-500" /> ISO 27001
                  </div>
               </div>
           </div>

           {/* Bottom Row: Agency Credit (Forced to the absolute bottom on mobile) */}
           <div className="flex justify-center lg:justify-start">
               <p className="text-slate-400 text-xs font-medium text-center lg:text-left">
                   Designed and developed by <a href="https://www.thebrchub.tech" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-600 hover:underline transition-all font-semibold ml-1">BRC HUB LLP</a>
               </p>
           </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
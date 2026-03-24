import React, { useState, useEffect } from 'react';
import { X, Mail, User, Building2, MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    // 1. The Backdrop
    <div 
      className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-500"
      onClick={handleClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* 2. The Modal Container */}
      <div 
        className="relative bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* 🔥 THE PERFECTED CYBER SCANNER 🔥 */}
        <div className="absolute inset-0 z-50 pointer-events-none rounded-3xl overflow-hidden">
          {/* -translate-y-full ensures the line starts exactly at the top edge */}
          <div className="absolute left-0 w-full h-[180px] opacity-0 animate-[scan_1.8s_ease-in-out_forwards] -translate-y-full">
            
            {/* Amber Grid Trail (Trails ABOVE the line, fading to transparent at the top) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.25)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
            
            {/* Leading Razor-Thin Glowing Line (Anchored to the BOTTOM) */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-400 shadow-[0_2px_12px_1px_rgba(245,158,11,0.8)]"></div>
          </div>
        </div>

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-slate-100/80 hover:bg-slate-200 text-slate-600 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* LEFT PANE: Trust & Info (Hidden on mobile) */}
        <div className="hidden md:flex flex-col justify-between w-2/5 bg-slate-900 p-10 relative overflow-hidden shrink-0">
           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-500/20 blur-[80px] rounded-full"></div>
           
           <div className="relative z-10 animate-in fade-in slide-in-from-left-4 duration-700 delay-200 fill-mode-both">
              <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center shadow-lg mb-8">
                <ShieldCheck className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 leading-tight">Secure your enterprise today.</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                 Speak with our security architects to identify vulnerabilities and build a zero-trust infrastructure tailored to your corporate needs.
              </p>
           </div>

           <div className="relative z-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both">
              <div className="flex flex-col gap-1 border-l-2 border-amber-500 pl-4">
                 <span className="text-white font-bold text-sm">Rapid Response</span>
                 <span className="text-slate-400 text-xs">Guaranteed callback within 2 hours.</span>
              </div>
              <div className="flex flex-col gap-1 border-l-2 border-slate-700 pl-4">
                 <span className="text-white font-bold text-sm">Confidentiality</span>
                 <span className="text-slate-400 text-xs">All inquiries are under strict NDA.</span>
              </div>
           </div>
        </div>

        {/* RIGHT PANE: Form Area */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-12 bg-white relative overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* SUCCESS STATE */}
          {isSubmitted ? (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center py-12 animate-in zoom-in duration-500">
               <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
               </div>
               <h3 className="text-3xl font-extrabold text-slate-900 mb-3">Request Received</h3>
               <p className="text-slate-600 max-w-sm mb-8">
                  Thank you. An IRB  Technology security architect will be in touch with you shortly via your corporate email.
               </p>
               <button 
                  onClick={handleClose}
                  className="px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-lg"
               >
                  Close Window
               </button>
            </div>
          ) : (
            
            /* FORM STATE */
            <div className="animate-in fade-in duration-700 delay-100 fill-mode-both pb-2">
              <h2 id="modal-title" className="text-2xl font-extrabold text-slate-900 mb-2 pr-8 mt-2 md:mt-0">Request an Audit</h2>
              <p className="text-sm text-slate-500 mb-6 md:mb-8">Fill out the details below to route you to the right specialist.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                
                {/* Grid for compact fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                   {/* Full Name */}
                   <div className="space-y-1.5">
                     <label htmlFor="name" className="text-[11px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                           <User size={16} className="text-slate-400" />
                        </div>
                        <input 
                          id="name" 
                          type="text" 
                          required
                          className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400" 
                          placeholder="John Doe" 
                        />
                     </div>
                   </div>

                   {/* Corporate Email */}
                   <div className="space-y-1.5">
                     <label htmlFor="email" className="text-[11px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Corporate Email</label>
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                           <Mail size={16} className="text-slate-400" />
                        </div>
                        <input 
                          id="email" 
                          type="email" 
                          required
                          className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400" 
                          placeholder="john@company.com" 
                        />
                     </div>
                   </div>
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-[11px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Company Name</label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Building2 size={16} className="text-slate-400" />
                     </div>
                     <input 
                       id="company" 
                       type="text" 
                       required
                       className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400" 
                       placeholder="Acme Corp" 
                     />
                  </div>
                </div>

                {/* Service Interest (Select) */}
                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-[11px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Primary Interest</label>
                  <select 
                    id="service" 
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none cursor-pointer"
                  >
                     <option value="network">Network Discovery & Mapping</option>
                     <option value="pentest">Penetration Testing</option>
                     <option value="cloud">Cloud Security Architecture</option>
                     <option value="endpoint">Endpoint Protection</option>
                     <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-[11px] md:text-xs font-bold text-slate-700 uppercase tracking-wide">Project Details</label>
                  <div className="relative">
                     <div className="absolute top-3 left-3.5 pointer-events-none">
                        <MessageSquare size={16} className="text-slate-400" />
                     </div>
                     <textarea 
                       id="message" 
                       rows={2} 
                       required
                       className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl pl-10 pr-4 py-2.5 md:py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400 resize-none md:rows-3" 
                       placeholder="Tell us about your infrastructure goals..." 
                     ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold text-base md:text-lg py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 mt-2 md:mt-4"
                >
                  {isSubmitting ? (
                     <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                     </span>
                  ) : (
                     <>Submit Request <ArrowRight size={18} /></>
                  )}
                </button>
                
                <p className="text-center text-[10px] text-slate-400 font-medium">
                   By submitting, you agree to our <a href="#" className="underline hover:text-amber-500">Privacy Policy</a>.
                </p>

              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ContactModal;
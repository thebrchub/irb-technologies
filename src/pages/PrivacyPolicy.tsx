 
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Database, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    /* 🔥 Tightened top spacing (pt-24) and ensured mt-16 for Navbar clearance */
    <div className="min-h-screen bg-white text-slate-600 pt-24 pb-20 px-6 md:px-12 lg:px-16 mt-16">
      <div className="max-w-5xl mx-auto">
        
        <Link to="/" className="inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-700 mb-8 transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Strategic security data protocols for IRB Technologies clients.
              <br />Document Ref: IRB-PP-2026-V3 | Last Updated: March 15, 2026
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              <Lock size={12} /> Encrypted
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2 bg-amber-50 rounded-lg text-[10px] font-bold text-amber-600 uppercase tracking-wider">
              <ShieldCheck size={12} /> DPDP Compliant
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <section className="max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <FileText className="text-amber-500" /> 1. Commitment to Confidentiality
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              At IRB Technologies, we recognize that the data we handle is the lifeblood of your enterprise. Our engagement protocols are designed to ensure that no piece of information—whether system architecture, source code, or internal network maps—is ever exposed beyond the necessary authorized personnel.
            </p>
          </section>

          {/* Section 2 - Improved Grid */}
          <section className="max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Eye className="text-amber-500" /> 2. Scope of Data Processing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">Administrative Data</h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  Contact details, billing info, and corporate identity used strictly for contract management and project updates.
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-200/50">
                <h3 className="font-bold text-slate-900 mb-3 text-lg">Technical Intelligence</h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  Vulnerability metadata, system response headers, and audit logs captured during authorized penetration testing.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Database className="text-amber-500" /> 3. Data Residency
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              All technical reports and vulnerability data are stored in highly secured, encrypted environments within Indian jurisdictions. We utilize AES-256 bit encryption for all data at rest and TLS 1.3 for all data in transit.
            </p>
          </section>

          {/* 🔥 FIXED: Tighter, centered contact card to remove empty space 🔥 */}
          <section className="max-w-3xl">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-2xl shadow-amber-500/10">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Questions regarding privacy?</h2>
                <p className="text-slate-400 text-sm max-w-sm">
                  Our Data Privacy Officer is available to discuss our encryption standards and testing protocols.
                </p>
              </div>
              <a 
                href="mailto:irbtechnology25@gmail.com" 
                className="flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-black rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
              >
                <Mail size={20} /> Contact DPO
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
 
import { ArrowLeft, Gavel, ShieldCheck, Scale, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white text-slate-600 pt-24 pb-20 px-6 md:px-12 lg:px-16 mt-16">
      <div className="max-w-5xl mx-auto">
        
        <Link to="/" className="inline-flex items-center text-sm font-bold text-amber-600 hover:text-amber-700 mb-8 transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-200 pb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-500 font-medium">
              Operational framework and service agreement for IRB Technologies.
              <br />Document Ref: IRB-TOS-2026-V1 | Last Updated: March 15, 2026
            </p>
          </div>
          <div className="flex gap-3">
             <div className="flex items-center gap-1.5 px-4 py-2 bg-amber-50 rounded-lg text-[10px] font-bold text-amber-600 uppercase tracking-wider">
              <ShieldCheck size={12} /> Verified Service
            </div>
          </div>
        </div>

        <div className="space-y-16 max-w-4xl">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Gavel className="text-amber-500" /> 1. Engagement Terms
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              By requesting an audit or using our security services, you enter into a binding agreement with IRB Technologies. These terms govern the scope of our security assessments, reporting, and consulting engagements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Scale className="text-amber-500" /> 2. Authorization & Liability
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Client warrants that they have full authority to authorize penetration testing on the target assets. IRB Technologies is not liable for incidental system downtime that may occur during aggressive security auditing, though we utilize industry-standard safety protocols to minimize risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Globe className="text-amber-500" /> 3. Governing Law
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              These terms are governed by the laws of India. Any disputes arising from our services shall be subject to the exclusive jurisdiction of the courts in Nashik, Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
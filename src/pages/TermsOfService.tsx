import { ArrowLeft, Gavel, ShieldCheck, Scale, Globe, AlertTriangle, FileCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    /* 🔥 Added 2xl:px-24 for massive monitors to match Privacy Policy */
    <div className="min-h-screen bg-white text-slate-600 pt-32 pb-20 px-6 md:px-12 lg:px-16 2xl:px-24">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">

        <Link to="/" className="inline-flex items-center text-sm md:text-base font-bold text-[#C45919] hover:text-[#A34915] mb-8 md:mb-10 transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* ── Header ── */}
        <div className="mb-12 md:mb-14">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C45919]/8 rounded-full text-[10px] md:text-xs font-bold text-[#C45919] uppercase tracking-wider">
              <ShieldCheck size={12} /> Verified Service
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
              <FileCheck size={12} /> Legally Binding
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-[10px] md:text-xs font-mono text-slate-400 tracking-wider">
              IRB-TOS-2026-V1
            </div>
          </div>

          {/* 🔥 Scaled heading to prevent clipping on small phones */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#2B3A4A] tracking-tight leading-[1.1] mb-5">
            Terms of Service
          </h1>
          {/* 🔥 Text scales from text-sm (mobile) to text-lg (desktop) */}
          <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
            Operational framework and service agreement for IRB Technology. By using our services, you agree to the terms outlined in this document.
          </p>
          <p className="text-xs md:text-sm text-slate-400 font-mono mt-4">Last Updated: March 15, 2026</p>

          <div className="mt-8 md:mt-10 h-px bg-gradient-to-r from-[#C45919]/40 via-slate-200 to-transparent" />
        </div>

        {/* ── Sections ── */}
        <div className="space-y-6 md:space-y-10">

          {/* Section 1 */}
          {/* 🔥 Adaptive Padding: p-6 on mobile, p-10 on desktop */}
          <div className="group p-6 md:p-10 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#C45919]/20 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5">
              <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-[#C45919]/10 border border-[#C45919]/20 group-hover:bg-[#C45919]/15 transition-colors">
                <Gavel size={18} className="text-[#C45919]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] md:text-[11px] font-mono text-[#C45919]/60 tracking-widest">01</span>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2B3A4A]">Engagement Terms</h2>
                </div>
                <div className="w-8 h-0.5 bg-[#C45919]/30 rounded mb-4" />
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5">
                  By requesting an audit or using our security services, you enter into a binding agreement with IRB Technology. These terms govern the scope of our security assessments, reporting, and consulting engagements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Written SOW required', 'Scope-bound testing', 'Report within SLA'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-xs md:text-sm text-slate-500 font-medium">
                      <CheckCircle size={14} className="text-[#C45919] shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="group p-6 md:p-10 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#C45919]/20 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5">
              <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-[#C45919]/10 border border-[#C45919]/20 group-hover:bg-[#C45919]/15 transition-colors">
                <Scale size={18} className="text-[#C45919]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] md:text-[11px] font-mono text-[#C45919]/60 tracking-widest">02</span>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2B3A4A]">Authorization & Liability</h2>
                </div>
                <div className="w-8 h-0.5 bg-[#C45919]/30 rounded mb-4" />
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5">
                  Client warrants that they have full authority to authorize penetration testing on the target assets. IRB Technology is not liable for incidental system downtime that may occur during aggressive security auditing, though we utilize industry-standard safety protocols to minimize risk.
                </p>
                {/* Warning Box */}
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl">
                  <AlertTriangle size={15} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-xs md:text-sm text-red-600 leading-relaxed">
                    <span className="font-bold">Important:</span> Unauthorized testing without written client consent constitutes a legal violation. All engagements require a signed Statement of Work before commencement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="group p-6 md:p-10 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#C45919]/20 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5">
              <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-[#C45919]/10 border border-[#C45919]/20 group-hover:bg-[#C45919]/15 transition-colors">
                <Globe size={18} className="text-[#C45919]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] md:text-[11px] font-mono text-[#C45919]/60 tracking-widest">03</span>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2B3A4A]">Governing Law</h2>
                </div>
                <div className="w-8 h-0.5 bg-[#C45919]/30 rounded mb-4" />
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5">
                  These terms are governed by the laws of India. Any disputes arising from our services shall be subject to the exclusive jurisdiction of the courts in Nashik, Maharashtra.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Indian Law', 'Nashik Jurisdiction', 'Maharashtra Courts', 'DPDP Act 2023'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] md:text-[11px] font-mono text-slate-500 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden bg-[#2B3A4A] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl shadow-[#2B3A4A]/20">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#C45919]/15 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
              <div className="w-full md:w-auto">
                <p className="text-[10px] md:text-xs font-mono text-[#C45919]/70 tracking-widest uppercase mb-2 md:mb-3">Agreement Status: Binding on Use</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Have questions before signing?</h2>
                <p className="text-slate-300 text-sm md:text-base max-w-sm">
                  Our legal team is available to clarify any clause before you engage with our services.
                </p>
              </div>
              
              {/* 🔥 BUTTON FIX: Stacked buttons that are w-full on mobile, side-by-side on desktop */}
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
                <Link
                  to="/privacy-policy"
                  className="flex flex-1 items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-sm whitespace-nowrap"
                >
                  <ShieldCheck size={15} /> Privacy Policy
                </Link>
                <a
                  href="mailto:irbtechnology25@gmail.com"
                  className="flex flex-1 items-center justify-center gap-2 px-6 py-3.5 bg-[#C45919] hover:bg-[#A34915] text-white font-black rounded-2xl transition-all shadow-lg shadow-[#C45919]/30 active:scale-95 text-sm whitespace-nowrap"
                >
                  Contact Legal Team
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
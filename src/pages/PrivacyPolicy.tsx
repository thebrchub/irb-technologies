import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, Database, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    /* 🔥 Added 2xl:px-24 for massive monitors */
    <div className="min-h-screen bg-white text-slate-600 pt-32 pb-20 px-6 md:px-12 lg:px-16 2xl:px-24">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto">

        <Link to="/" className="inline-flex items-center text-sm md:text-base font-bold text-[#C45919] hover:text-[#A34915] mb-8 md:mb-10 transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* ── Header ── */}
        <div className="mb-12 md:mb-14">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Lock size={12} /> AES-256 Encrypted
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C45919]/8 rounded-full text-[10px] md:text-xs font-bold text-[#C45919] uppercase tracking-wider">
              <ShieldCheck size={12} /> DPDP Compliant
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-[10px] md:text-xs font-mono text-slate-400 tracking-wider">
              IRB-PP-2026-V3
            </div>
          </div>

          {/* 🔥 Scaled heading to prevent clipping on small phones */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#2B3A4A] tracking-tight leading-[1.1] mb-5">
            Privacy Policy
          </h1>
          {/* 🔥 Text scales from text-sm (mobile) to text-lg (desktop) */}
          <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
            Strategic security data protocols for IRB Technology clients. This document outlines how we collect, handle, and protect your data during and after security engagements.
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
                <FileText size={18} className="text-[#C45919]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] md:text-[11px] font-mono text-[#C45919]/60 tracking-widest">01</span>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2B3A4A]">Commitment to Confidentiality</h2>
                </div>
                <div className="w-8 h-0.5 bg-[#C45919]/30 rounded mb-4" />
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  At IRB Technology, we recognize that the data we handle is the lifeblood of your enterprise. Our engagement protocols are designed to ensure that no piece of information — whether system architecture, source code, or internal network maps — is ever exposed beyond the necessary authorized personnel.
                </p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Zero-knowledge handling', 'Need-to-know access', 'Signed NDAs always'].map(item => (
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
                <Eye size={18} className="text-[#C45919]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] md:text-[11px] font-mono text-[#C45919]/60 tracking-widest">02</span>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2B3A4A]">Scope of Data Processing</h2>
                </div>
                <div className="w-8 h-0.5 bg-[#C45919]/30 rounded mb-4" />
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                  We process only what is strictly necessary to deliver our security services. Data is categorized and handled according to its sensitivity level.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 md:p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#C45919]/25 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C45919]" />
                      <h3 className="font-bold text-[#2B3A4A] text-sm md:text-base">Administrative Data</h3>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed text-slate-500">
                      Contact details, billing info, and corporate identity used strictly for contract management and project updates.
                    </p>
                  </div>
                  <div className="p-4 md:p-5 bg-white rounded-2xl border border-slate-200 hover:border-[#C45919]/25 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C45919]" />
                      <h3 className="font-bold text-[#2B3A4A] text-sm md:text-base">Technical Intelligence</h3>
                    </div>
                    <p className="text-xs md:text-sm leading-relaxed text-slate-500">
                      Vulnerability metadata, system response headers, and audit logs captured during authorized penetration testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="group p-6 md:p-10 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#C45919]/20 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-5">
              <div className="shrink-0 flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-[#C45919]/10 border border-[#C45919]/20 group-hover:bg-[#C45919]/15 transition-colors">
                <Database size={18} className="text-[#C45919]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] md:text-[11px] font-mono text-[#C45919]/60 tracking-widest">03</span>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2B3A4A]">Data Residency & Encryption</h2>
                </div>
                <div className="w-8 h-0.5 bg-[#C45919]/30 rounded mb-4" />
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-5">
                  All technical reports and vulnerability data are stored in highly secured, encrypted environments within Indian jurisdictions. We utilize AES-256 bit encryption for all data at rest and TLS 1.3 for all data in transit.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AES-256 at rest', 'TLS 1.3 in transit', 'Indian jurisdiction', 'Zero third-party sharing'].map(tag => (
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
              <div className="max-w-xl">
                <p className="text-[10px] md:text-xs font-mono text-[#C45919]/70 tracking-widest uppercase mb-2 md:mb-3">Privacy Officer Contact</p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Questions regarding privacy?</h2>
                <p className="text-slate-300 text-sm md:text-base">
                  Our Data Privacy Officer is available to discuss our encryption standards and testing protocols.
                </p>
              </div>
              
              {/* 🔥 BUTTON FIX: w-full and justify-center added for flawless mobile UX */}
              <a
                href="mailto:irbtechnology25@gmail.com"
                className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#C45919] hover:bg-[#A34915] text-white font-black rounded-2xl transition-all shadow-lg shadow-[#C45919]/30 active:scale-95 whitespace-nowrap"
              >
                <Mail size={18} /> Contact DPO
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
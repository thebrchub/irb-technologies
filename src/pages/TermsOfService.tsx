import { ArrowLeft, Gavel, ShieldCheck, Scale, Globe, AlertTriangle, FileCheck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white text-slate-600 pt-32 pb-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">

        <Link to="/" className="inline-flex items-center text-sm font-bold text-[#C45919] hover:text-[#A34915] mb-10 transition-colors group">
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* ── Header ── */}
        <div className="mb-14">
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C45919]/8 rounded-full text-[10px] font-bold text-[#C45919] uppercase tracking-wider">
              <ShieldCheck size={10} /> Verified Service
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              <FileCheck size={10} /> Legally Binding
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-[10px] font-mono text-slate-400 tracking-wider">
              IRB-TOS-2026-V1
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#2B3A4A] tracking-tight leading-none mb-5">
            Terms of Service
          </h1>
          <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
            Operational framework and service agreement for IRB  Technology. By using our services, you agree to the terms outlined in this document.
          </p>
          <p className="text-xs text-slate-400 font-mono mt-3">Last Updated: March 15, 2026</p>

          <div className="mt-8 h-px bg-gradient-to-r from-[#C45919]/40 via-slate-200 to-transparent" />
        </div>

        {/* ── Sections ── */}
        <div className="space-y-10">

          {/* 1 */}
          <div className="group p-8 md:p-10 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#C45919]/20 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-2xl bg-[#C45919]/10 border border-[#C45919]/20 group-hover:bg-[#C45919]/15 transition-colors">
                <Gavel size={18} className="text-[#C45919]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[11px] font-mono text-[#C45919]/60 tracking-widest">01</span>
                  <h2 className="text-xl font-bold text-[#2B3A4A]">Engagement Terms</h2>
                </div>
                <div className="w-8 h-0.5 bg-[#C45919]/30 rounded mb-4" />
                <p className="text-slate-600 leading-relaxed mb-5">
                  By requesting an audit or using our security services, you enter into a binding agreement with IRB  Technology. These terms govern the scope of our security assessments, reporting, and consulting engagements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {['Written SOW required', 'Scope-bound testing', 'Report within SLA'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <CheckCircle size={13} className="text-[#C45919] shrink-0" /> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="group p-8 md:p-10 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#C45919]/20 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-2xl bg-[#C45919]/10 border border-[#C45919]/20 group-hover:bg-[#C45919]/15 transition-colors">
                <Scale size={18} className="text-[#C45919]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[11px] font-mono text-[#C45919]/60 tracking-widest">02</span>
                  <h2 className="text-xl font-bold text-[#2B3A4A]">Authorization & Liability</h2>
                </div>
                <div className="w-8 h-0.5 bg-[#C45919]/30 rounded mb-4" />
                <p className="text-slate-600 leading-relaxed mb-5">
                  Client warrants that they have full authority to authorize penetration testing on the target assets. IRB  Technology is not liable for incidental system downtime that may occur during aggressive security auditing, though we utilize industry-standard safety protocols to minimize risk.
                </p>
                {/* Warning */}
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-2xl">
                  <AlertTriangle size={15} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-red-600 leading-relaxed">
                    <span className="font-bold">Important:</span> Unauthorized testing without written client consent constitutes a legal violation. All engagements require a signed Statement of Work before commencement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="group p-8 md:p-10 rounded-3xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-[#C45919]/20 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
            <div className="flex items-start gap-5">
              <div className="shrink-0 flex items-center justify-center w-11 h-11 rounded-2xl bg-[#C45919]/10 border border-[#C45919]/20 group-hover:bg-[#C45919]/15 transition-colors">
                <Globe size={18} className="text-[#C45919]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[11px] font-mono text-[#C45919]/60 tracking-widest">03</span>
                  <h2 className="text-xl font-bold text-[#2B3A4A]">Governing Law</h2>
                </div>
                <div className="w-8 h-0.5 bg-[#C45919]/30 rounded mb-4" />
                <p className="text-slate-600 leading-relaxed mb-5">
                  These terms are governed by the laws of India. Any disputes arising from our services shall be subject to the exclusive jurisdiction of the courts in Nashik, Maharashtra.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Indian Law', 'Nashik Jurisdiction', 'Maharashtra Courts', 'DPDP Act 2023'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[11px] font-mono text-slate-500 tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden bg-[#2B3A4A] rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[#2B3A4A]/20">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#C45919]/15 blur-[80px] rounded-full pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <p className="text-[10px] font-mono text-[#C45919]/70 tracking-widest uppercase mb-3">Agreement Status: Binding on Use</p>
                <h2 className="text-2xl font-bold text-white mb-2">Have questions before signing?</h2>
                <p className="text-slate-300 text-sm max-w-sm">
                  Our legal team is available to clarify any clause before you engage with our services.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  to="/privacy-policy"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-sm whitespace-nowrap"
                >
                  <ShieldCheck size={15} /> Privacy Policy
                </Link>
                <a
                  href="mailto:irbtechnology25@gmail.com"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C45919] hover:bg-[#A34915] text-white font-black rounded-2xl transition-all shadow-lg shadow-[#C45919]/30 active:scale-95 text-sm whitespace-nowrap"
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
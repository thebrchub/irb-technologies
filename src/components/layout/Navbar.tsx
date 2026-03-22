import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Lock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onOpenModal: () => void;
}

const MOBILE_STYLES = `
  @keyframes mob-bg-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes mob-line-in {
    from { transform: scaleX(0); opacity: 0; }
    to   { transform: scaleX(1); opacity: 1; }
  }
  @keyframes mob-link-in {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes mob-cta-in {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes mob-scan {
    from { background-position: 0 0; }
    to   { background-position: 0 60px; }
  }
  @keyframes mob-glow-pulse {
    0%,100% { opacity: 0.5; }
    50%     { opacity: 1; }
  }
  @keyframes mob-cursor-blink {
    0%,100% { opacity: 1; }
    50%     { opacity: 0; }
  }
  .mob-bg-in       { animation: mob-bg-in 0.3s ease forwards; }
  .mob-scan-lines  {
    animation: mob-scan 3s linear infinite;
    background-image: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 3px,
      rgba(245,158,11,0.03) 3px,
      rgba(245,158,11,0.03) 4px
    );
  }
  .mob-link-0 { animation: mob-link-in 0.4s cubic-bezier(0.23,1,0.32,1) 0.15s both; }
  .mob-link-1 { animation: mob-link-in 0.4s cubic-bezier(0.23,1,0.32,1) 0.22s both; }
  .mob-link-2 { animation: mob-link-in 0.4s cubic-bezier(0.23,1,0.32,1) 0.29s both; }
  .mob-link-3 { animation: mob-link-in 0.4s cubic-bezier(0.23,1,0.32,1) 0.36s both; }
  .mob-link-4 { animation: mob-link-in 0.4s cubic-bezier(0.23,1,0.32,1) 0.43s both; }
  .mob-cta    { animation: mob-cta-in  0.5s cubic-bezier(0.23,1,0.32,1) 0.52s both; }
  .mob-line   { animation: mob-line-in 0.6s cubic-bezier(0.23,1,0.32,1) 0.1s  both; transform-origin: left; }
  .mob-glow   { animation: mob-glow-pulse 2.5s ease-in-out infinite; }
  .mob-cursor { animation: mob-cursor-blink 1s step-end infinite; }
`;

const Navbar = ({ onOpenModal }: NavbarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home',          href: '/#home',         index: '01' },
    { name: 'About Us',      href: '/#about',        index: '02' },
    { name: 'Architecture',  href: '/#architecture', index: '03' },
    { name: 'Core Offerings',href: '/#services',     index: '04' },
    { name: 'Sentinel',      href: '/#sentinel',     index: '05' },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MOBILE_STYLES }} />

      <nav
        className={`fixed top-8 left-0 right-0 z-50 flex justify-center transition-transform duration-500 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-[200%]'
        }`}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            relative bg-white/90 backdrop-blur-2xl border border-slate-200
            rounded-full shadow-2xl shadow-slate-200/50 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden
            flex items-center justify-between
            ${isHovered ? 'w-[950px] px-6' : 'w-[280px] md:w-[170px] px-3'}
            h-16
          `}
        >
          {/* LEFT: LOGO */}
          <Link to="/" className="flex items-center gap-3 min-w-max cursor-pointer z-10">
            <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 rounded-full shadow-lg shadow-slate-900/20">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 tracking-tight leading-none">IRB</span>
              <span className="text-[10px] text-amber-500 font-mono tracking-widest leading-none">TECH</span>
            </div>
          </Link>

          {/* CENTER: NAV LINKS */}
          <div className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            hidden md:flex items-center gap-1 transition-all duration-500 delay-75
            ${isHovered ? 'opacity-100 translate-y-[-50%]' : 'opacity-0 translate-y-[100%] pointer-events-none'}
          `}>
            <div className="flex items-center bg-slate-50/80 rounded-full px-2 py-1 border border-slate-200 whitespace-nowrap shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-amber-700 hover:bg-amber-100/80 rounded-full transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: ACTION BUTTON */}
          <div className={`
            hidden md:flex items-center gap-4 min-w-max transition-all duration-500 delay-100
            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}
          `}>
            <div className="h-6 w-[1px] bg-slate-200" />
            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-amber-500 hover:text-white transition-colors shadow-[0_0_15px_rgba(15,23,42,0.2)] whitespace-nowrap"
            >
              <Lock size={14} className="text-current" />
              Get Audit
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden ml-auto z-20">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-amber-100 hover:text-amber-700 text-slate-900 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>

          <div className={`absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-slate-500/0 opacity-0 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : ''}`} />
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          MOBILE MENU — full cyber treatment
      ═══════════════════════════════════════ */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950 mob-bg-in flex flex-col overflow-hidden">

          {/* Scanline texture */}
          <div className="absolute inset-0 mob-scan-lines pointer-events-none" />

          {/* Ambient amber glow top-right */}
          <div className="absolute top-[-20%] right-[-20%] w-[70%] h-[70%] bg-amber-500/8 blur-[120px] rounded-full pointer-events-none mob-glow" />
          {/* Ambient glow bottom-left */}
          <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] bg-amber-600/6 blur-[100px] rounded-full pointer-events-none" />

          {/* Top bar */}
          <div className="relative z-10 flex items-center justify-between px-6 pt-8 pb-6">
            {/* Logo */}
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-amber-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                <ShieldCheck className="w-5 h-5 text-slate-900" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-none">IRB</span>
                <span className="text-[10px] text-amber-400 font-mono tracking-widest leading-none">TECH</span>
              </div>
            </Link>

            {/* Close */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 hover:border-amber-500 hover:text-amber-400 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Divider line */}
          <div className="mob-line mx-6 h-[1px] bg-gradient-to-r from-amber-500/60 via-amber-400/30 to-transparent" />

          {/* Status terminal line */}
          <div className="relative z-10 px-6 pt-4 pb-2">
            <p className="font-mono text-[11px] text-amber-500/70 tracking-widest uppercase">
              <span className="text-amber-500/40">{'>'}</span> SECURE_SESSION_ACTIVE
              <span className="mob-cursor ml-1 text-amber-400">_</span>
            </p>
          </div>

          {/* Nav links */}
          <nav className="relative z-10 flex flex-col px-4 pt-4 flex-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                onTouchStart={() => setActiveLink(link.name)}
                onTouchEnd={() => setActiveLink(null)}
                className={`mob-link-${i} group relative flex items-center justify-between px-4 py-4 rounded-2xl mb-1 transition-all duration-200
                  ${activeLink === link.name
                    ? 'bg-amber-500/15 border border-amber-500/40'
                    : 'border border-transparent hover:bg-slate-800/60 hover:border-slate-700/60'
                  }`}
              >
                {/* Index + name */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-amber-500/50 tracking-widest w-5">{link.index}</span>
                  <span className="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors tracking-tight">
                    {link.name}
                  </span>
                </div>

                {/* Arrow */}
                <ChevronRight
                  size={16}
                  className="text-slate-600 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-200"
                />

                {/* Left accent bar on hover */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-[60%] bg-amber-500 rounded-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="relative z-10 px-6 pb-10 mob-cta">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6" />
            <button
              onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-2xl text-base font-extrabold shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.55)] transition-all active:scale-95"
            >
              <Lock size={18} />
              Start Security Audit
            </button>
            <p className="text-center text-[11px] text-slate-600 font-mono mt-3 tracking-wider">
              ENCRYPTED · CONFIDENTIAL · COMPLIANT
            </p>
          </div>

        </div>
      )}
    </>
  );
};

export default Navbar;
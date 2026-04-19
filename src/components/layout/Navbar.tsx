import { useState, useEffect, useRef } from 'react';
import { Menu, X, Lock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onOpenModal: () => void;
}

const MOBILE_STYLES = `
  @keyframes mob-bg-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes mob-line-in { from { transform: scaleX(0); opacity: 0; } to { transform: scaleX(1); opacity: 1; } }
  @keyframes mob-link-in { from { opacity: 0; transform: translateX(-24px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes mob-cta-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes mob-scan { from { background-position: 0 0; } to { background-position: 0 60px; } }
  @keyframes mob-glow-pulse { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }
  @keyframes mob-cursor-blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
  .mob-bg-in       { animation: mob-bg-in 0.3s ease forwards; }
  .mob-scan-lines  {
    animation: mob-scan 3s linear infinite;
    background-image: repeating-linear-gradient( 0deg, transparent, transparent 3px, rgba(196,89,25,0.03) 3px, rgba(196,89,25,0.03) 4px );
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
  // const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  // const [isExpanded, setIsExpanded] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const [activeLink, setActiveLink] = useState<string | null>(null);
  const expandTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 🔥 FIXED: Navbar stays expanded, but hides/shows on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
        // isExpanded stays true always
      } else if (currentScrollY > scrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < scrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (expandTimeout.current) clearTimeout(expandTimeout.current);
    };
  }, [scrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home',           href: '/#home',         index: '01' },
    { name: 'About Us',       href: '/#about',        index: '02' },
    { name: 'Core Offerings', href: '/#services',     index: '04' },
    { name: 'Case Studies',   href: '/#case-studies', index: '05' },
  ];

  // 🔥 FIXED: Always expanded, shows/hides on scroll
  const effectiveExpanded = true; // Navbar stays expanded always

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MOBILE_STYLES }} />

      <nav
        
        className={`fixed left-0 right-0 z-50 flex justify-center transition-transform duration-500 ease-in-out mt-1 md:mt-4 ${
          isVisible ? 'translate-y-4' : '-translate-y-[150%]'
        }`}
      >
        <div
          className={`
            relative backdrop-blur-2xl border border-white/[0.08] rounded-full
            shadow-2xl shadow-black/50
            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden
            flex items-center justify-between h-16
            ${effectiveExpanded
              ? 'w-[95vw] lg:w-[70vw] xl:w-[65vw] max-w-[900px] 2xl:max-w-[1000px] pl-3 lg:pl-4 2xl:pl-5 pr-3 lg:pr-5 2xl:pr-6'
              : 'w-[240px] lg:w-[200px] pl-2 lg:pl-3 pr-2 lg:pr-3'}
          `}
          style={{
            background: 'rgba(10, 18, 28, 0.82)',
            boxShadow:
              '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.4)',
          }}
        >
          {/* Top glass highlight line */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-[1px] rounded-full pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)' }}
          />

          {/* Logo */}
          <Link to="/" className="flex items-center min-w-max cursor-pointer z-10">
            <div className="relative flex items-center h-12 shrink-0">
              <img
                src="/logow.svg"
                alt="IRB Tech Logo"
                className="h-9 lg:h-10 w-auto object-contain drop-shadow-md"
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <div
            className={`
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              hidden lg:flex items-center gap-1 transition-all duration-500 delay-100
              ${effectiveExpanded
                ? 'opacity-100 translate-y-[-50%]'
                : 'opacity-0 translate-y-[100%] pointer-events-none'}
            `}
          >
            <div
              className="flex items-center rounded-full px-1 py-1 gap-0.5 whitespace-nowrap"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 text-xs lg:text-sm font-black tracking-tight text-white/80 hover:text-white rounded-full transition-all duration-200"
                  style={{ letterSpacing: '-0.2px' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.10)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div
            className={`
              hidden lg:flex items-center gap-4 min-w-max transition-all duration-500 delay-150
              ${effectiveExpanded
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10 pointer-events-none'}
            `}
          >
            <div className="h-6 w-[1px]" style={{ background: 'rgba(255,255,255,0.12)' }} />
            <button
              onClick={onOpenModal}
              className="flex items-center gap-2 text-white px-5 py-2 rounded-full text-xs lg:text-sm font-black tracking-tight transition-all duration-200 whitespace-nowrap active:scale-95"
              style={{
                background: '#C45919',
                letterSpacing: '-0.2px',
                boxShadow: '0 0 20px rgba(196,89,25,0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#A34915';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#C45919';
              }}
            >
              <Lock size={14} strokeWidth={2.5} />
              Get Audit
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden ml-auto z-20">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-300 transition-colors"
              style={{ background: 'rgba(10,18,28,0.7)', border: '1px solid rgba(255,255,255,0.10)' }}
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Warm orange inner glow overlay */}
          <div
            className="absolute inset-0 pointer-events-none rounded-full"
            style={{
              background:
                'radial-gradient(ellipse at 60% 50%, rgba(196,89,25,0.07) 0%, transparent 70%)',
              opacity: effectiveExpanded ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          />
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#1a232d] mob-bg-in flex flex-col overflow-hidden overscroll-none h-[100dvh]">
          <div className="absolute inset-0 mob-scan-lines pointer-events-none" />
          <div className="absolute top-[-20%] right-[-20%] w-[70%] h-[70%] bg-[#C45919]/10 blur-[120px] rounded-full pointer-events-none mob-glow" />

          <div className="relative z-10 flex items-center justify-between px-6 pt-8 pb-6">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center min-w-max">
              <div className="relative flex items-center h-10 shrink-0">
                <img
                  src="/logo_w.svg"
                  alt="IRB Tech Logo"
                  className="h-8 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
              </div>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-stone-700 bg-[#2B3A4A] text-slate-300 hover:border-[#C45919] hover:text-[#C45919] transition-all"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mob-line mx-6 h-[1px] bg-gradient-to-r from-[#C45919]/60 via-[#C45919]/30 to-transparent" />

          <div className="relative z-10 px-6 pt-4 pb-2">
            <p className="font-mono text-[11px] text-[#C45919]/80 font-bold tracking-widest uppercase">
              <span className="text-[#C45919]/40">{'>'}</span> SECURE_SESSION_ACTIVE
              <span className="mob-cursor ml-1 text-[#CF7D16]">_</span>
            </p>
          </div>

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
                    ? 'bg-[#C45919]/15 border border-[#C45919]/40'
                    : 'border border-transparent hover:bg-white/5 hover:border-white/10'
                  }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono font-bold text-[10px] text-[#C45919]/60 tracking-widest w-5">{link.index}</span>
                  <span className="text-xl font-black text-slate-100 group-hover:text-white transition-colors tracking-tight">
                    {link.name}
                  </span>
                </div>
                <ChevronRight size={16} className="text-slate-500 group-hover:text-[#C45919] group-hover:translate-x-1 transition-all duration-200" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 group-hover:h-[60%] bg-[#C45919] rounded-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="relative z-10 px-6 pb-10 mob-cta">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent mb-6" />
            <button
              onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-3 bg-[#C45919] hover:bg-[#A34915] text-white px-8 py-4 rounded-2xl text-base font-black shadow-lg shadow-[#C45919]/30 transition-all active:scale-95 tracking-tight"
            >
              <Lock size={18} strokeWidth={2.5} />
              Start Security Audit
            </button>
            <p className="text-center text-[11px] text-slate-400 font-mono font-bold mt-3 tracking-wider">
              ENCRYPTED · CONFIDENTIAL · COMPLIANT
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
import { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Lock } from 'lucide-react';
import { Link} from 'react-router-dom'; // 🔥 Added useLocation for smart routing

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar = ({ onOpenModal }: NavbarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 1. Scroll Logic (Headroom Effect)
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

  // 🔥 Smart Links: If not on home page, prepend "/" so it navigates back first
  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Us', href: '/#about' },
    { name: 'Architecture', href: '/#architecture' },
    { name: 'Core Offerings', href: '/#services' },
  ];

  return (
    <>
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
            ${isHovered ? 'w-[900px] px-6' : 'w-[280px] md:w-[170px] px-3'} 
            h-16
          `}
        >
          {/* 1. LEFT: LOGO */}
          <Link to="/" className="flex items-center gap-3 min-w-max cursor-pointer z-10">
             <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 rounded-full shadow-lg shadow-slate-900/20">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
             </div>
             <div className={`flex flex-col`}>
                <span className="text-lg font-bold text-slate-900 tracking-tight leading-none">IRB</span>
                <span className="text-[10px] text-amber-500 font-mono tracking-widest leading-none">TECH</span>
             </div>
          </Link>

          {/* 2. CENTER: NAVIGATION LINKS */}
          <div className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            hidden md:flex items-center gap-1 transition-all duration-500 delay-75
            ${isHovered ? 'opacity-100 translate-y-[-50%]' : 'opacity-0 translate-y-[100%] pointer-events-none'}
          `}>
             <div className="flex items-center bg-slate-50/80 rounded-full px-2 py-1 border border-slate-200 whitespace-nowrap shadow-inner">
                {navLinks.map((link) => (
                  /* 🔥 Swapped <a> for <Link> to handle Cross-Page Navigation */
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

          {/* 3. RIGHT: ACTION BUTTON */}
          <div className={`
             hidden md:flex items-center gap-4 min-w-max transition-all duration-500 delay-100
             ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}
          `}>
             <div className="h-6 w-[1px] bg-slate-200"></div>
             
             <button 
                onClick={onOpenModal}
                className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-amber-500 hover:text-white transition-colors shadow-[0_0_15px_rgba(15,23,42,0.2)] whitespace-nowrap"
             >
                <Lock size={14} className="text-current" />
                Get Audit
             </button>
          </div>

          {/* 4. MOBILE TOGGLE */}
          <div className="md:hidden ml-auto z-20">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-amber-100 hover:text-amber-700 text-slate-900 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>

          <div className={`absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-slate-500/0 opacity-0 transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : ''}`}></div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl animate-in fade-in duration-200">
           <div className="flex justify-end p-6">
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-900 hover:bg-amber-100 hover:text-amber-700 transition-colors"
              >
                 <X size={24} />
              </button>
           </div>
           
           <div className="flex flex-col items-center justify-center h-[75vh] gap-8">
              {navLinks.map((link) => (
                 /* 🔥 Mobile Links use <a> for better hash scrolling on same-page */
                 <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-500 hover:to-amber-500 transition-all text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                 >
                    {link.name}
                 </a>
              ))}
              
              <div className="w-16 h-[2px] bg-slate-200 my-4"></div>

              <button 
                 onClick={() => { onOpenModal(); setIsMobileMenuOpen(false); }}
                 className="flex items-center gap-3 bg-amber-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
              >
                 <Lock size={20} />
                 Start Security Audit
              </button>
           </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
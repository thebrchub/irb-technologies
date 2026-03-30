import HolographicLogo from './HolographicLogo';

const ThreatDeflector = () => {
  const paths = [
    { id: 0, nx: 100, ny: 50, sx: 75, sy: 50 },
    { id: 1, nx: 85.35, ny: 85.35, sx: 67.67, sy: 67.67 },
    { id: 2, nx: 50, ny: 100, sx: 50, sy: 75 },
    { id: 3, nx: 14.64, ny: 85.35, sx: 32.32, sy: 67.67 },
    { id: 4, nx: 0, ny: 50, sx: 25, sy: 50 },
    { id: 5, nx: 14.64, ny: 14.64, sx: 32.32, sy: 32.32 },
    { id: 6, nx: 50, ny: 0, sx: 50, sy: 25 },
    { id: 7, nx: 85.35, ny: 14.64, sx: 67.67, sy: 32.32 },
  ];

  const generateStyles = () => {
    let styles = '';
    paths.forEach((p) => {
      styles += `
        @keyframes safe-fly-${p.id} {
          0% { top: ${p.ny}%; left: ${p.nx}%; opacity: 0; transform: translate(-50%, -50%) translateZ(2px) scale(0.5); }
          15% { opacity: 1; transform: translate(-50%, -50%) translateZ(2px) scale(1); }
          85% { opacity: 1; }
          100% { top: 50%; left: 50%; opacity: 0; transform: translate(-50%, -50%) translateZ(2px) scale(0.5); }
        }
        @keyframes threat-fly-${p.id} {
          0% { top: ${p.ny}%; left: ${p.nx}%; opacity: 0; transform: translate(-50%, -50%) translateZ(2px) scale(0.8); background: #ef4444; box-shadow: 0 0 15px #ef4444; }
          15% { opacity: 1; transform: translate(-50%, -50%) translateZ(2px) scale(1.2); }
          75% { top: ${p.sy}%; left: ${p.sx}%; opacity: 1; transform: translate(-50%, -50%) translateZ(2px) scale(1.2); background: #ef4444; box-shadow: 0 0 15px #ef4444; }
          85% { top: ${p.sy}%; left: ${p.sx}%; opacity: 1; transform: translate(-50%, -50%) translateZ(2px) scale(3.5); background: #f59e0b; box-shadow: 0 0 30px #f59e0b; border: 2px solid white; }
          100% { top: ${p.sy}%; left: ${p.sx}%; opacity: 0; transform: translate(-50%, -50%) translateZ(2px) scale(5); background: transparent; box-shadow: 0 0 0px #f59e0b; border: 2px solid transparent; }
        }
      `;
    });
    
    styles += `
      @keyframes beam-flicker {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 0.8; }
      }
      @keyframes radar-rotate {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
    `;
    return styles;
  };

  const packets = paths.flatMap((_, i) => [
    { id: `s-${i}-1`, pathId: i, isThreat: false, delay: i * 0.2, dur: 3 },
    { id: `s-${i}-2`, pathId: i, isThreat: false, delay: (i * 0.2) + 1, dur: 3 },
    { id: `s-${i}-3`, pathId: i, isThreat: false, delay: (i * 0.2) + 2, dur: 3 },
    { id: `t-${i}`, pathId: i, isThreat: true, delay: (i * 0.8) + 0.5, dur: 2.5 },
  ]);

  return (
    <div className="w-full h-full bg-transparent relative flex items-center justify-center pointer-events-none">
      <style dangerouslySetInnerHTML={{ __html: generateStyles() }} />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-amber-500/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div 
        className="relative w-[150%] aspect-square sm:w-[120%] md:w-[100%] max-w-[600px]"
        style={{ transform: 'perspective(1200px) rotateX(60deg) rotateZ(45deg)', transformStyle: 'preserve-3d' }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-60">
          <circle cx="50%" cy="50%" r="50%" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="50%" cy="50%" r="37.5%" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="6 6" />
          {paths.map(p => (
            <line key={p.id} x1="50%" y1="50%" x2={`${p.nx}%`} y2={`${p.ny}%`} stroke="#e2e8f0" strokeWidth="2" />
          ))}
        </svg>

        {/* ── Radar sweep: conic-gradient fan ── */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ transform: 'translateZ(1px)' }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: `conic-gradient(
                from 0deg at 50% 50%,
                rgba(245,158,11,0.00)   0deg,
                rgba(245,158,11,0.00) 270deg,
                rgba(245,158,11,0.04) 278deg,
                rgba(245,158,11,0.10) 290deg,
                rgba(245,158,11,0.20) 305deg,
                rgba(245,158,11,0.35) 320deg,
                rgba(245,158,11,0.50) 340deg,
                rgba(245,158,11,0.65) 355deg,
                rgba(245,158,11,0.70) 360deg
              )`,
              animation: 'radar-rotate 6s linear infinite',
            }}
          />
        </div>

        {packets.map((pkt) => (
          <div
            key={pkt.id}
            className="absolute rounded-full"
            style={{
              width: pkt.isThreat ? '8px' : '5px',
              height: pkt.isThreat ? '8px' : '5px',
              backgroundColor: pkt.isThreat ? 'transparent' : '#16a34a', 
              boxShadow: pkt.isThreat ? 'none' : '0 0 10px #16a34a',
              animation: `${pkt.isThreat ? 'threat-fly' : 'safe-fly'}-${pkt.pathId} ${pkt.dur}s linear infinite`,
              animationDelay: `${pkt.delay}s`,
              transformStyle: 'preserve-3d',
              transform: 'translateZ(2px)'
            }}
          />
        ))}

        {/* The perfectly aligned, grounded Amber Shield Boundary */}
        <div 
          className="absolute top-1/2 left-1/2 w-[50%] h-[50%] rounded-full border-[3px] border-amber-500/60 bg-amber-500/10 shadow-[0_0_50px_rgba(245,158,11,0.3)] animate-[pulse_3s_ease-in-out_infinite]"
          style={{ transform: 'translate(-50%, -50%) translateZ(5px)' }}
        />
        
        {/* Layer 1: Core Base */}
        <div 
          className="absolute top-1/2 left-1/2 w-[25%] h-[25%] rounded-full border border-slate-300 bg-slate-100 shadow-xl"
          style={{ transform: 'translate(-50%, -50%) translateZ(15px)' }}
        />

        {/* Layer 2: Core Mid */}
        <div 
          className="absolute top-1/2 left-1/2 w-[20%] h-[20%] rounded-full border-2 border-slate-300 bg-slate-800 shadow-2xl"
          style={{ transform: 'translate(-50%, -50%) translateZ(30px)' }}
        />

        {/* Layer 3: Flat Core Top */}
        <div 
          className="absolute top-1/2 left-1/2 w-[15%] h-[15%] rounded-full border-2 border-amber-400 bg-slate-900 shadow-[0_0_30px_rgba(245,158,11,0.6)] backdrop-blur-md"
          style={{ transform: 'translate(-50%, -50%) translateZ(45px)' }}
        />

        {/* Holographic Projection Beam */}
        <div 
          className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none"
          style={{ transform: 'translateZ(46px)', transformStyle: 'preserve-3d' }}
        >
          <div className="absolute top-[-6px] left-[-6px] w-[12px] h-[12px] rounded-full bg-amber-200 shadow-[0_0_15px_5px_rgba(245,158,11,0.8)] animate-[pulse_2s_ease-in-out_infinite]" />
          <div 
            className="absolute"
            style={{ 
              bottom: '0px',
              left: '-100px',
              width: '200px', 
              height: '80px',
              transformOrigin: 'bottom center',
              transform: 'rotateZ(-45deg) rotateX(-90deg)',
              background: 'linear-gradient(to top, rgba(245,158,11,0.6) 0%, rgba(245,158,11,0) 100%)',
              clipPath: 'polygon(20% 0, 80% 0, 50% 100%)',
              filter: 'blur(3px)',
              animation: 'beam-flicker 4s linear infinite',
            }}
          />
        </div>

        {/* Holographic Logo */}
        <div 
          className="absolute top-1/2 left-1/2"
          style={{ transform: 'translate(-50%, -50%) translateZ(110px)', transformStyle: 'preserve-3d' }}
        >
          <HolographicLogo />
        </div>

      </div>
    </div>
  );
};

export default ThreatDeflector;
import React, { useEffect, useRef } from 'react';

const HolographicLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const physics = useRef({
    rotX: 0,
    rotY: 0,
    velX: 0,
    velY: 1.2,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
  });

  useEffect(() => {
    let animationFrameId: number;
    const loop = () => {
      const p = physics.current;
      if (!p.isDragging) {
        p.velX *= 0.92;
        p.rotX *= 0.90;
        p.velY += (1.2 - p.velY) * 0.05;
      }
      p.rotX += p.velX;
      p.rotY += p.velY;
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateX(${p.rotX}deg) rotateY(${p.rotY}deg)`;
      }
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    physics.current.isDragging = true;
    physics.current.lastMouseX = e.clientX;
    physics.current.lastMouseY = e.clientY;
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!physics.current.isDragging) return;
    const deltaX = e.clientX - physics.current.lastMouseX;
    const deltaY = e.clientY - physics.current.lastMouseY;
    physics.current.velY = deltaX * 0.6;
    physics.current.velX = -deltaY * 0.6;
    physics.current.lastMouseX = e.clientX;
    physics.current.lastMouseY = e.clientY;
  };
  const handlePointerUp = () => { physics.current.isDragging = false; };

  const styles = `
    /* Main logo flicker */
    @keyframes hologram-flicker {
      0%,100% { opacity: 0.92; filter: drop-shadow(0 0 14px rgba(245,158,11,0.95)) brightness(1.3) contrast(1.1); }
      28%     { opacity: 0.85; filter: drop-shadow(0 0  6px rgba(245,158,11,0.50)) brightness(1.05) contrast(1.0); }
      30%     { opacity: 0.98; filter: drop-shadow(0 0 28px rgba(245,158,11,1.00)) brightness(1.8)  contrast(1.2); }
      31%     { opacity: 0.80; filter: drop-shadow(0 0  4px rgba(245,158,11,0.40)) brightness(0.95) contrast(0.9); }
      32%     { opacity: 0.94; filter: drop-shadow(0 0 18px rgba(245,158,11,0.90)) brightness(1.4)  contrast(1.1); }
      67%     { opacity: 0.97; filter: drop-shadow(0 0 24px rgba(245,158,11,1.00)) brightness(1.7)  contrast(1.2); }
      68%     { opacity: 0.83; filter: drop-shadow(0 0  5px rgba(245,158,11,0.45)) brightness(1.0)  contrast(1.0); }
    }

    /* Chromatic red ghost — filter only, no position box */
    @keyframes chroma-r {
      0%,100% { transform: translateX(-1.5px); opacity: 0.4; }
      50%     { transform: translateX( 1.5px); opacity: 0.25; }
    }

    /* Chromatic cyan ghost */
    @keyframes chroma-c {
      0%,100% { transform: translateX( 1.5px); opacity: 0.32; }
      50%     { transform: translateX(-1.5px); opacity: 0.20; }
    }

    /* Glitch slice — clip-path on the img itself */
    @keyframes glitch-slice {
      0%,88%,100% { opacity: 0; clip-path: inset(0 0 100% 0); }
      90% { opacity: 0.85; clip-path: inset(15% 0 55% 0); transform: translateX(-3px); }
      93% { opacity: 0.65; clip-path: inset(48% 0 18% 0); transform: translateX( 3px); }
      96% { opacity: 0;    clip-path: inset(0   0 100% 0); }
    }

    /* Sheen — animates filter brightness in a wave to fake a sweep */
    @keyframes holo-sheen {
      0%,100% { filter: drop-shadow(0 0 14px rgba(245,158,11,0.95)) brightness(1.3) contrast(1.1); }
      50%     { filter: drop-shadow(0 0 20px rgba(245,158,11,1.00)) brightness(1.7) contrast(1.15); }
    }
  `;

  const imgClass = "w-14 h-14 sm:w-16 sm:h-16 object-contain absolute";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      <div style={{ transform: 'rotateZ(-45deg) rotateX(-90deg)', transformStyle: 'preserve-3d' }}>
        <div
          ref={containerRef}
          className="relative flex items-center justify-center cursor-grab active:cursor-grabbing w-32 h-32"
          style={{ touchAction: 'none', transformStyle: 'preserve-3d' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Chromatic red ghost — img only, no wrapper */}
          <img src="/logo.svg" alt="" aria-hidden draggable={false} className={imgClass}
            style={{
              filter: 'sepia(1) saturate(8) hue-rotate(-20deg) drop-shadow(0 0 3px rgba(255,80,0,0.5))',
              mixBlendMode: 'screen',
              animation: 'chroma-r 2.6s ease-in-out infinite',
            }}
          />

          {/* Chromatic cyan ghost — img only */}
          <img src="/logo.svg" alt="" aria-hidden draggable={false} className={imgClass}
            style={{
              filter: 'sepia(1) saturate(8) hue-rotate(150deg) drop-shadow(0 0 3px rgba(0,220,255,0.4))',
              mixBlendMode: 'screen',
              animation: 'chroma-c 2.6s ease-in-out infinite',
            }}
          />

          {/* Main logo — flicker + sheen via filter animation */}
          <img
            src="/logo.svg"
            alt="IRB Tech Logo"
            className={imgClass}
            draggable={false}
            style={{
              mixBlendMode: 'screen',
              animation: 'hologram-flicker 3.5s infinite, holo-sheen 2.5s ease-in-out infinite',
              position: 'relative',
              zIndex: 2,
            }}
          />

          {/* Glitch slice — clip-path directly on img, no wrapper */}
          <img src="/logo.svg" alt="" aria-hidden draggable={false} className={imgClass}
            style={{
              filter: 'drop-shadow(0 0 10px rgba(245,158,11,1)) brightness(2)',
              mixBlendMode: 'screen',
              animation: 'glitch-slice 5s linear infinite',
              opacity: 0,
              zIndex: 3,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HolographicLogo;
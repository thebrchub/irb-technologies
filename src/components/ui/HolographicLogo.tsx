import React, { useEffect, useRef } from 'react';

const HolographicLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Custom lightweight physics engine for the swipe-to-spin momentum
  const physics = useRef({
    rotX: 0,
    rotY: 0,
    velX: 0,
    velY: 1.2, // Base auto-spin speed
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
  });

  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      const p = physics.current;

      if (!p.isDragging) {
        // Friction: Slow down the wild spinning when the user lets go
        p.velX *= 0.92; 
        // Spring Physics: Right itself back to standing perfectly vertical (rotX = 0)
        p.rotX *= 0.90; 
        // Decay: Smoothly return Y-axis velocity to the baseline auto-spin speed
        p.velY += (1.2 - p.velY) * 0.05; 
      }

      // Apply velocity to rotation
      p.rotX += p.velX;
      p.rotY += p.velY;

      // Directly manipulate the DOM for 60FPS performance
      if (containerRef.current) {
        containerRef.current.style.transform = `rotateX(${p.rotX}deg) rotateY(${p.rotY}deg)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    loop();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // --- TOUCH & MOUSE HANDLERS ---
  const handlePointerDown = (e: React.PointerEvent) => {
    physics.current.isDragging = true;
    physics.current.lastMouseX = e.clientX;
    physics.current.lastMouseY = e.clientY;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!physics.current.isDragging) return;
    
    const deltaX = e.clientX - physics.current.lastMouseX;
    const deltaY = e.clientY - physics.current.lastMouseY;
    
    // Moving mouse/finger horizontally rotates Y. Moving vertically tilts X.
    physics.current.velY = deltaX * 0.6;
    physics.current.velX = -deltaY * 0.6;
    
    physics.current.lastMouseX = e.clientX;
    physics.current.lastMouseY = e.clientY;
  };

  const handlePointerUp = () => {
    physics.current.isDragging = false;
  };

  // Holographic styling & flickering
  const styles = `
    .hologram-element {
      /* The drop-shadow applies perfectly to the alpha channel of transparent PNGs/SVGs */
      filter: drop-shadow(0 0 15px rgba(245,158,11,0.8)) brightness(1.2) contrast(1.1);
      mix-blend-mode: screen;
      opacity: 0.9;
      animation: hologram-flicker 4s infinite;
    }
    
    @keyframes hologram-flicker {
      0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 15px rgba(245,158,11,0.8)) brightness(1.2); }
      33% { opacity: 0.85; filter: drop-shadow(0 0 10px rgba(245,158,11,0.6)) brightness(1.1); }
      34% { opacity: 0.95; filter: drop-shadow(0 0 25px rgba(245,158,11,1)) brightness(1.5); }
      66% { opacity: 0.9; filter: drop-shadow(0 0 15px rgba(245,158,11,0.8)) brightness(1.2); }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      {/* Base Plane: Reverses the grid tilt to stand perfectly vertical */}
      <div style={{ transform: 'rotateZ(-45deg) rotateX(-90deg)', transformStyle: 'preserve-3d' }}>
         
         {/* Interactive Physics Wrapper */}
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
           
           {/* Your Logo Image (SVG or PNG) */}
           <img 
             src="/logo.svg" /* Just change this to /logo.png if needed! */
             alt="IRB Tech Logo" 
             className="w-14 h-14 sm:w-16 sm:h-16 object-contain hologram-element"
             draggable={false} 
           />
           
         </div>
      </div>
    </>
  );
};

export default HolographicLogo;
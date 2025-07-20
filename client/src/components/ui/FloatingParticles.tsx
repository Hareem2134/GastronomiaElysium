import { useEffect, useRef } from 'react';

const FloatingParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random horizontal position
      particle.style.left = Math.random() * 100 + '%';
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // Random opacity
      particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
      
      containerRef.current?.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 10000);
    };

    // Create particles periodically
    const interval = setInterval(createParticle, 500);

    // Initial particles
    for (let i = 0; i < 10; i++) {
      setTimeout(createParticle, i * 200);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="floating-particles" />;
};

export default FloatingParticles;
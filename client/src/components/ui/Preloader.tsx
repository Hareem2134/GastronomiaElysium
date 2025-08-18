import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className="fixed inset-0 bg-charcoal flex items-center justify-center z-50 transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="text-center -translate-y-16">
        <div className="text-white text-4xl font-serif mb-8 animate-pulse">
          Welcome to Gastronomia Elysium
        </div>
        <div className="w-32 h-1 bg-gold rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-gold to-[hsl(var(--gold-light))] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

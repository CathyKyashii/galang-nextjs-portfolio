'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const DetailedSakura = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 150 150" 
    className={`${className} fill-current overflow-visible`}
  >
    <g transform="translate(75,75) scale(1.3)">
      <circle cx="0" cy="0" r="6" className="opacity-30" />
      {Array.from({ length: 5 }).map((_, i) => (
        <path
          key={i}
          d="M0,0 C-15,-25 -25,-45 0,-50 C25,-45 15,-25 0,0"
          className="opacity-60" 
          transform={`rotate(${i * 72})`}
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <path
          key={`out-${i}`}
          d="M0,0 C-16,-26 -26,-46 0,-51 C26,-46 16,-26 0,0"
          className="stroke-current fill-none stroke-[1.5]" 
          transform={`rotate(${i * 72})`}
        />
      ))}
    </g>
  </svg>
);

export default function PreLoader({ onCompleteAction }: { onCompleteAction: () => void }) {
  const [progress, setProgress] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [flowers, setFlowers] = useState<any[]>([]);

  useEffect(() => {
    const generatedFlowers = Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * -20,
      duration: Math.random() * 8 + 10,
      scale: Math.random() * 0.6 + 0.4,
    }));
    
    setFlowers(generatedFlowers);
    setHasMounted(true);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onCompleteAction, 900);
          return 100;
        }
        return prev + 1.2;
      });
    }, 40);
    
    return () => clearInterval(timer);
  }, [onCompleteAction]);

  return (
    <motion.div 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {hasMounted && flowers.map((flower) => (
          <motion.div
            key={flower.id}
            initial={{ y: "-10%", x: `${flower.x}vw`, opacity: 0 }}
            animate={{ 
              y: "110vh", 
              opacity: [0, 0.7, 0.7, 0], // MUCH stronger opacity
              rotate: 360,
              x: `${flower.x + 8}vw` 
            }}
            transition={{
              duration: flower.duration,
              delay: flower.delay,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{ 
              width: `${30 * flower.scale}px`, 
              height: `${30 * flower.scale}px`,
              // Using inline style for the "Original Pink" glow to bypass light Tailwind defaults
              filter: "drop-shadow(0 0 5px #ec4899)" 
            }}
          >
            {/* Using text-pink-500 with high internal opacity */}
            <DetailedSakura className="w-full h-full text-pink-500" />
          </motion.div>
        ))}
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Deep Pink Glow */}
        <div className="absolute w-125 h-125 bg-[#be185d]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 mb-16 relative"
        >
          {/* Main Logo using vivid pink */}
          <DetailedSakura className="w-full h-full text-pink-500 drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]" />
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 flex flex-col items-center gap-5">
          <div className="w-full h-0.5 bg-zinc-900 relative overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-pink-600 shadow-[0_0_20px_#ec4899]"
            />
          </div>
          
          <div className="w-full flex justify-between text-[8px] uppercase tracking-[0.8em] font-bold text-zinc-500">
            <span className="animate-pulse">Loading</span>
            <span className="text-pink-500">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
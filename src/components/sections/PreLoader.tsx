'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PreLoader({ onCompleteAction }: { onCompleteAction: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onCompleteAction, 500);
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
      <div className="relative z-10 flex flex-col items-center">
        
        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.1em" }}
          className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter"
        >
          CATHY.<span className="text-pink-500"></span>DEV<span className="text-pink-500">.</span>
        </motion.h1>

        <div className="w-64 flex flex-col items-center gap-3">
          <div className="w-full h-0.5 bg-zinc-900 relative overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full relative bg-pink-500 shadow-[0_0_15px_#ec4899]"
            >
              <motion.div
                animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: "linear-gradient(90deg, #ec4899 0%, #ffffff 50%, #ec4899 100%)",
                  backgroundSize: "200% 100%",
                }}
              />
            </motion.div>
          </div>
          
          <div className="text-[8px] uppercase tracking-[0.4em] font-bold text-zinc-600 animate-pulse">
            Loading Experience
          </div>
        </div>
      </div>
    </motion.div>
  );
}
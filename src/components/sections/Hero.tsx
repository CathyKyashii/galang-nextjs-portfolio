'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import SocialIcon from '../ui/SocialIcon';

// --- FULL-PAGE CHARCOAL ISOMETRIC GRID ---
const IsometricGrid = () => {
  const tiles = Array.from({ length: 1200 });

  return (
    <div className="absolute inset-0 z-0 bg-[#0a0a0a] overflow-hidden">
      <div
        className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] grid grid-cols-30 md:grid-cols-40 gap-px"
        style={{
          transform: 'rotateX(60deg) rotateZ(-45deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {tiles.map((_, i) => (
          <motion.div
            key={i}
            // MOBILE: Automatic shimmer for touch devices
            // WEB (md:): Remains static (transparent) to allow only manual hover interaction
            animate={typeof window !== 'undefined' && window.innerWidth < 768 ? {
              backgroundColor: ["rgba(236, 72, 153, 0)", "rgba(236, 72, 153, 0.04)", "rgba(236, 72, 153, 0)"]
            } : { backgroundColor: "rgba(236, 72, 153, 0)" }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            className="aspect-square border-[0.5px] border-pink-500/5 transition-all duration-300 ease-out md:hover:bg-pink-500 md:hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] md:hover:duration-0 pointer-events-none md:pointer-events-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default function Hero() {
  const roles = ["Graphic Designer", "UI/UX Designer", "Frontend Developer"];
  const [index, setIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => roles[index].slice(0, latest));

  useEffect(() => {
    const controls = animate(count, roles[index].length, {
      type: "tween", duration: 1.5, ease: "easeInOut",
      onComplete: () => {
        setTimeout(() => {
          animate(count, 0, { type: "tween", duration: 1, ease: "easeInOut",
            onComplete: () => setIndex((prev) => (prev + 1) % roles.length),
          });
        }, 2000);
      },
    });
    return () => controls.stop();
  }, [index, count, roles]);

  const socials = [
    { name: 'github', url: 'https://github.com/CathyKyashii' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/catherinemaegalang' },
    { name: 'instagram', url: 'https://www.instagram.com/cathyyshiii/' },
    { name: 'facebook', url: 'https://www.facebook.com/catherine.mae.galang.2025' }
  ];

  return (
    <section id="prologue" className="relative min-h-svh flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <IsometricGrid />

      {/* 
          WEB: Grid layout (lg:grid-cols-2) with left alignment.
          MOBILE: Flex column with center alignment.
      */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* --- PORTRAIT (Top on Mobile) --- */}
        <div className="flex relative justify-center lg:justify-end items-center w-full order-1 lg:order-2">
          <div className="relative group w-full max-w-60 md:max-w-107.5 aspect-4/5 p-[1.5px] overflow-hidden rounded-[24px]">
            {/* Smooth Rotation for border glow (Automatic for all views as it enhances the UI) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-full z-0"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, transparent 60%, #ec4899 80%, transparent 100%)'
              }}
            />
            
            <div className="relative z-10 w-full h-full overflow-hidden bg-[#0a0a0a] rounded-[22.5px]">
              <img src="/portrait.svg" alt="Catherine Mae Galang" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>

        {/* --- TEXT CONTENT --- */}
        <div className="flex flex-col items-center lg:items-start w-full order-2 lg:order-1 text-center lg:text-left">
          <motion.div className="mb-4 flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-pink-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-pink-400 uppercase">
              Open for Opportunities
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tighter uppercase leading-[1.1]">
            <span className="bg-linear-to-r from-white via-pink-100 to-pink-500 bg-clip-text text-transparent">
              Catherine Mae Galang
            </span>
          </h1>

          <div className="flex items-center gap-2 h-10 mb-6">
            <motion.h2 className="text-lg md:text-3xl lg:text-4xl font-bold text-zinc-300 uppercase tracking-widest">
              {displayText}
            </motion.h2>
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-0.75 h-6 md:h-10 bg-pink-500" />
          </div>

          <p className="text-zinc-400 max-w-md text-sm md:text-base font-medium leading-relaxed mb-10 text-justify lg:text-left">
            Crafting the intersection of high-end design and functional code. I transform complex ideas into intuitive digital experiences.
          </p>

          {/* Centered socials on mobile, left-aligned on web */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6"> 
            {socials.map((social, idx) => (
              <motion.div 
                key={social.name} 
                animate={{ y: [0, -5, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
              >
                <SocialIcon name={social.name} url={social.url} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase">
          Scroll to Explore
        </span>
        <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center p-1.5">
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} 
            className="w-1 h-1.5 bg-pink-500 rounded-full" 
          />
        </div>
      </div>
    </section>
  );
}
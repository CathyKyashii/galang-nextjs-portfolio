'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ShootingStarGrid = () => (
  <div className="absolute inset-0 z-0 bg-[#f8f9fa] dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-300">
    <style jsx global>{`
      :root { 
        --track-line-light: rgba(255, 105, 180, 0.08); 
        --star-color-light: rgba(255, 105, 180, 0.4); 
        --track-line-dark: rgba(255, 105, 180, 0.06); 
        --star-color-dark: rgba(255, 105, 180, 0.3); 
      }
      @keyframes streak-v { 0% { transform: translateY(-100%); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateY(100vh); opacity: 0; } }
      @keyframes streak-h { 0% { transform: translateX(-100%); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translateX(100vw); opacity: 0; } }
      .star-base { position: absolute; filter: blur(1.5px); opacity: 0; z-index: 1; }
      .track-line-v { position: absolute; width: 1px; height: 100%; background: var(--track-line-light); z-index: 0; }
      .dark .track-line-v { background: var(--track-line-dark); }
      .track-line-h { position: absolute; width: 100%; height: 1px; background: var(--track-line-light); z-index: 0; }
      .dark .track-line-h { background: var(--track-line-dark); }
    `}</style>

    {[...Array(10)].map((_, i) => (
      <div key={`grid-v-${i}`} className="track-line-v opacity-70 dark:opacity-100" style={{ left: `${i * 10}%` }} />
    ))}
    {[...Array(10)].map((_, i) => (
      <div key={`grid-h-${i}`} className="track-line-h opacity-70 dark:opacity-100" style={{ top: `${i * 10}%` }} />
    ))}

    {[...Array(5)].map((_, i) => (
      <div key={`v-${i}`}>
        <div 
          className="star-base w-[1.5px] h-36" 
          style={{ 
            left: `${(i + 1) * 16}%`, 
            top: '-150px', 
            background: `linear-gradient(to bottom, transparent, var(--star-color-light), #FF69B4)`, 
            animation: `streak-v ${6 + (i % 3)}s linear infinite ${i * 1.5}s` 
          }} 
        />
      </div>
    ))}
    {[...Array(5)].map((_, i) => (
      <div key={`h-${i}`}>
        <div 
          className="star-base h-[1.5px] w-36" 
          style={{ 
            top: `${(i + 1) * 16}%`, 
            left: '-150px', 
            background: `linear-gradient(to right, transparent, var(--star-color-light), #FF69B4)`, 
            animation: `streak-h ${6 + (i % 3)}s linear infinite ${i * 1.5}s` 
          }} 
        />
      </div>
    ))}
  </div>
);

export default function Hero() {
  const roles = [
    "UI/UX DESIGNER & GRAPHIC DESIGNER",
    "PROJECT COORDINATOR & DESIGN ASSOCIATE",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(fullText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="prologue" className="relative min-h-screen w-full flex items-center justify-center bg-[#f8f9fa] dark:bg-[#0a0a0a] text-zinc-900 dark:text-white overflow-hidden py-24 transition-colors duration-300">
      <ShootingStarGrid />

      <div className="hidden lg:flex relative z-20 w-full max-w-[98rem] items-center justify-between px-10 xl:px-16 py-12 gap-16">
        
        <div className="flex flex-col justify-center w-full max-w-2xl z-20 gap-6">
          <p className="text-zinc-600 dark:text-zinc-400 text-lg font-medium">I'm</p>
          
          <h1 className="text-5xl xl:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white normal-case leading-tight">
            Catherine Mae Galang
          </h1>

          <div className="h-10 flex items-center">
            <span className="text-xl xl:text-2xl font-bold uppercase tracking-wider bg-linear-to-r from-[#FF69B4] via-[#FF1493] to-purple-600 bg-clip-text text-transparent">
              {displayedText}<span className="animate-pulse text-[#FF69B4]">|</span>
            </span>
          </div>

          <p className="text-zinc-700 dark:text-zinc-300 text-base xl:text-lg leading-relaxed font-normal">
            I craft intuitive digital experiences for web and mobile, translating complex workflows into elegant interfaces and human-centered design systems.
          </p>

          <div className="p-4 rounded-xl bg-zinc-900/4 dark:bg-white/3 border border-zinc-300 dark:border-white/10 backdrop-blur-md shadow-md">
            <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
              Rooted in the Philippines, shaping global digital futures — driven by the belief that exceptional design is where empathy meets rigorous execution.
            </p>
          </div>

          <div className="pt-2">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact') || document.getElementById('footer');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 rounded-xl bg-[#FF69B4] hover:bg-[#ff52aa] text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-[#FF69B4]/30 flex items-center gap-2 w-fit uppercase tracking-wider cursor-pointer"
            >
              Get In Touch
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-6 mt-3 border-t border-zinc-300 dark:border-white/10">
            <div>
              <h3 className="text-2xl font-extrabold text-[#FF69B4] uppercase tracking-wide">3 Y.</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 uppercase tracking-wider font-medium">Design Exp</p>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[#FF69B4] uppercase tracking-wide">Strategic</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 uppercase tracking-wider font-medium">Product Vision</p>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[#FF69B4] uppercase tracking-wide">100%</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 uppercase tracking-wider font-medium">Quality Focused</p>
            </div>
          </div>
        </div>

        <div className="relative z-20 flex justify-center items-center shrink-0">
          <div className="absolute inset-0 bg-[#FF69B4]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative mask-[linear-gradient(to_bottom,black_82%,transparent_100%)]">
            <img 
              src="/portrait.svg" 
              alt="Catherine Mae Galang" 
              className="h-168 xl:h-184 w-auto object-cover object-top drop-shadow-2xl" 
            />
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:hidden relative z-20 w-full min-h-screen flex flex-col items-start justify-center px-6 py-16 text-left gap-6">
        <div className="space-y-1 w-full">
          <p className="text-base font-medium text-zinc-600 dark:text-zinc-400">I'm</p>
          <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white normal-case">Catherine Mae Galang</h1>
        </div>
        
        <div className="h-10 flex items-center w-full">
          <div className="text-sm font-bold uppercase tracking-wider bg-linear-to-r from-[#FF69B4] via-[#FF1493] to-purple-600 bg-clip-text text-transparent">
            {displayedText}<span className="animate-pulse">|</span>
          </div>
        </div>

        <p className="text-base text-zinc-700 dark:text-zinc-300 w-full leading-relaxed">
          I craft intuitive digital experiences for web and mobile, translating complex workflows into elegant interfaces and human-centered design systems.
        </p>

        <div className="p-4 rounded-xl bg-zinc-900/4 dark:bg-white/3 border border-zinc-300 dark:border-white/10 backdrop-blur-md shadow-md w-full">
          <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium">
            Rooted in the Philippines, shaping global digital futures — driven by the belief that exceptional design is where empathy meets rigorous execution.
          </p>
        </div>

        <div className="w-full pt-1">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact') || document.getElementById('footer');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3.5 rounded-xl bg-[#FF69B4] text-white font-bold text-sm shadow-md uppercase tracking-wider cursor-pointer"
          >
            Get In Touch
          </button>
        </div>

        <div className="relative w-full flex justify-center my-4">
          <div className="relative w-72 mask-[linear-gradient(to_bottom,black_85%,transparent_100%)]">
              <img src="/portrait.svg" alt="Catherine Mae Galang" className="w-full h-112 object-cover mx-auto drop-shadow-xl" />
          </div>
        </div>

        <div className="w-full flex justify-center pt-2">
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-300 dark:border-white/10 w-full max-w-xs text-center">
            <div>
              <h3 className="text-lg font-extrabold text-[#FF69B4] uppercase">3 Y.</h3>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 uppercase font-medium">Design Exp</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#FF69B4] uppercase">Strategic</h3>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 uppercase font-medium">Vision</p>
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-[#FF69B4] uppercase">100%</h3>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 uppercase font-medium">Quality</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
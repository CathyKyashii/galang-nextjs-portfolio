'use client';
import { motion, useMotionValue, useTransform, animate, useSpring } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import SocialIcon from '../ui/SocialIcon';

export default function Hero() {
  const roles = ["UI/UX Designer", "Frontend Developer", "Graphic Designer"];
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => roles[index].slice(0, latest));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const controls = animate(count, roles[index].length, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
      onComplete: () => {
        setTimeout(() => {
          animate(count, 0, {
            type: "tween",
            duration: 1,
            ease: "easeInOut",
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
    <section id="prologue" className="relative min-h-screen flex items-center pt-20 pb-32 lg:py-0 bg-background transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18]"
          style={{
            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
            backgroundSize: '45px 45px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 30%, black, transparent)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10 text-center lg:text-left">
        
        <div className="z-10 flex flex-col items-center lg:items-start w-full">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="order-1 mb-4 flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-pink-500/20 bg-pink-500/5 backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-pink-500"></span>
            </span>
            <span className="text-[9px] md:text-xs font-bold tracking-[0.15em] text-pink-600 dark:text-pink-400 uppercase">
              Open for Opportunities
            </span>
          </motion.div>

          <h1 className="order-2 text-3xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 md:mb-4 tracking-tighter uppercase leading-[1.1]">
            <span className="bg-linear-to-r from-pink-600 via-pink-400 to-pink-300 dark:from-white dark:via-pink-200 dark:to-pink-400 bg-clip-text text-transparent">
              Catherine Mae Galang
            </span>
          </h1>

          <div className="order-3 lg:hidden relative flex justify-center items-center w-full py-8" style={{ perspective: "1200px" }}>
            <motion.div className="absolute w-[70%] aspect-square bg-pink-500/20 blur-[60px] rounded-full z-0" />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-60"
            >
              <div className="relative aspect-4/5 overflow-hidden border border-white/20 dark:border-pink-500/30 shadow-2xl bg-zinc-950 rounded-[20px]">
                <img src="/portrait.svg" alt="Catherine Mae Galang" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

          <div className="order-4 flex items-center gap-2 h-8 md:h-12">
            <motion.h2 className="text-lg md:text-3xl lg:text-4xl font-semibold text-zinc-800 dark:text-zinc-300">
              {displayText}
            </motion.h2>
            <motion.div 
              animate={{ opacity: [0, 1, 0] }} 
              transition={{ duration: 0.8, repeat: Infinity }} 
              className="w-0.5 h-5 md:w-1 md:h-10 bg-pink-500 shadow-[0_0_8px_#ec4899]" 
            />
          </div>

          <p className="order-5 text-foreground/80 mt-4 md:mt-6 max-w-70 sm:max-w-md md:max-w-xl lg:max-w-2xl text-xs md:text-lg font-light leading-relaxed text-justify">
            Crafting the intersection of high-end design and functional code. 
            I transform complex ideas into intuitive digital experiences by merging technical precision with creative flair.
          </p>

          <div className="order-6 flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mt-8"> 
            {socials.map((social, idx) => (
              <motion.div 
                key={social.name}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.2
                }}
              >
                <motion.div 
                  whileHover={!isMobile ? { scale: 1.15, filter: "brightness(1.2)" } : {}} 
                  whileTap={{ scale: 0.9 }}
                >
                  <SocialIcon name={social.name} url={social.url} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <div 
          className="hidden lg:flex relative justify-center items-center h-full w-full"
          onMouseMove={(e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
            mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
          }}
          onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          ref={containerRef}
          style={{ perspective: "1200px" }}
        >
          <motion.div className="absolute w-[80%] aspect-square bg-pink-500/20 blur-[120px] rounded-full z-0" />
          <motion.div 
            style={{ rotateX, rotateY }}
            className="relative z-10 w-full lg:max-w-107.5"
          >
            <div className="relative aspect-4/5 overflow-hidden border border-white/20 dark:border-pink-500/30 shadow-2xl bg-zinc-950 rounded-[24px]">
              <img src="/portrait.svg" alt="Catherine Mae Galang" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* STABLE SCROLL INDICATOR (Always Visible, No Flickering) */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          
          {/* Mouse Outer Shell */}
          <div className="w-6 h-10 md:w-7 md:h-11.5 rounded-full border border-foreground/30 dark:border-white/20 flex justify-center p-1.5">
            {/* Animated Dot - Smooth Constant Loop */}
            <motion.div 
              animate={{ 
                y: [0, 12, 0] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-1 md:w-1.5 h-2 md:h-2.5 bg-pink-500 rounded-full shadow-[0_0_10px_#ec4899]"
            />
          </div>

          {/* Text Label */}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            className="text-[8px] md:text-[11px] font-bold tracking-[0.4em] md:tracking-[0.5em] text-foreground uppercase whitespace-nowrap"
          >
            Scroll to Explore
          </motion.span>
        </div>
      </div>
    </section>
  );
}
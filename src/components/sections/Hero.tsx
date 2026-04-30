'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import SocialIcon from '../ui/SocialIcon';

export default function Hero() {
  const roles = ["UI/UX Designer", "Frontend Developer", "Graphic Designer"];
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => roles[index].slice(0, latest));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
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
    <section 
      id="prologue" 
      className="relative min-h-screen flex items-center pt-24 md:pt-32 lg:pt-20 bg-background transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-12 items-center relative z-10 text-center lg:text-left">
        
        <div className="relative flex justify-center items-center h-full order-first lg:order-last w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-64 md:max-w-96 lg:max-w-112.5 aspect-4/5 flex items-center justify-center bg-transparent"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
            }}
          >
            <img 
              src="/portrait.svg"
              alt="Catherine Mae Galang" 
              className="w-full h-full object-contain scale-[1.05] lg:scale-[1.1]"
            />
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink-500/5 dark:bg-pink-500/10 blur-[80px] md:blur-[120px] rounded-full z-0 pointer-events-none transition-colors duration-500" />
        </div>

        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 flex flex-col items-center lg:items-start w-full"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mt-2 md:mt-4 mb-4 leading-tight tracking-tighter">
            <span className="bg-linear-to-r from-pink-600 via-pink-400 to-pink-300 dark:from-white dark:via-pink-200 dark:to-pink-400 bg-clip-text text-transparent uppercase">
              Catherine Mae Galang
            </span>
          </h1>

          <div className="flex items-center gap-2 h-10 md:h-12">
            <motion.h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-zinc-800 dark:text-zinc-300">
              {displayText}
            </motion.h2>
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="w-0.75 h-6 md:h-10 bg-pink-500 shadow-[0_0_8px_#ec4899]"
            />
          </div>

          {/* --- UPDATED WHITE DESCRIPTION --- */}
          <p className="text-foreground/90 mt-6 md:mt-8 max-w-md md:max-w-xl lg:max-w-2xl leading-relaxed text-base md:text-lg lg:text-xl font-light">
            BS Computer Science student at STI College Ortigas-Cainta, focused on creating intuitive and visually stunning digital experiences. 
            Merging technical expertise with creative flair to build modern web solutions.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 mt-8 md:mt-10"> 
            {socials.map((social, i) => (
              <motion.div
                key={social.name}
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15
                }}
                
                className={isMobile ? "pointer-events-none" : "pointer-events-auto"}
              >
                <SocialIcon name={social.name} url={social.url} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
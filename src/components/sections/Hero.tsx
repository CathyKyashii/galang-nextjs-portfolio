'use client';
import { motion, useMotionValue, useTransform, animate, useScroll, Variants } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import SocialIcon from '../ui/SocialIcon';

const PaletteButton = ({ text, onClick, variant }: { text: string, onClick: () => void, variant: 'projects' | 'contact' }) => {
  const isProjects = variant === 'projects';
  
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`
        group relative px-6 py-3 lg:px-10 lg:py-4 rounded-full overflow-hidden transition-all duration-500
        border text-[10px] lg:text-[11px] font-black tracking-[0.25em] uppercase backdrop-blur-md
        ${isProjects 
          ? 'bg-pink-400/80 dark:bg-white border-pink-500/20 dark:border-white text-zinc-950 shadow-lg' 
          : 'bg-zinc-900/90 dark:bg-zinc-900 border-zinc-800 dark:border-zinc-700 text-white shadow-xl'
        }
      `}
    >
      <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
        isProjects ? 'bg-white/20' : 'bg-white/5'
      }`} />

      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

const ShootingStarGrid = () => {
  return (
    <div className="absolute inset-0 z-0 bg-zinc-50 dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500">
      <style jsx global>{`
        :root {
          --track-line: rgba(236, 72, 153, 0.08);
          --star-color: rgba(236, 72, 153, 0.25); 
        }
        @keyframes streak-v {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes streak-h {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        .star-base { position: absolute; filter: blur(1.5px); opacity: 0; z-index: 1; }
        .track-line { position: absolute; background: var(--track-line); z-index: 0; }
        
        /* 
           KILL ALL INTERACTIVE EFFECTS ON MOBILE 
           - Removes parallax (transform)
           - Removes glowy hover (box-shadow/filter)
           - Only applied on mobile screen
        */
        @media (max-width: 1023px) {
          .social-icon-container * {
            transform: none !important;
            transition: none !important;
            box-shadow: none !important;
            filter: none !important;
          }
        }
      `}</style>

      {[...Array(12)].map((_, i) => (
        <div key={`v-${i}`}>
          <div className="track-line w-px h-full" style={{ left: `calc(50% + ${(i - 6) * 100}px)`, top: 0 }} />
          <div className="star-base w-[1.5px] h-40" style={{ left: `calc(50% + ${(i - 6) * 100}px)`, top: '-200px', background: `linear-gradient(to bottom, transparent, var(--star-color), #ec4899)`, animation: `streak-v ${7+(i%5)}s linear infinite ${i*1.8}s` }} />
        </div>
      ))}

      {[...Array(10)].map((_, i) => (
        <div key={`h-${i}`}>
          <div className="track-line h-px w-full" style={{ top: `calc(50% + ${(i - 5) * 100}px)`, left: 0 }} />
          <div className="star-base w-40 h-[1.5px]" style={{ top: `calc(50% + ${(i - 5) * 100}px)`, left: '-200px', background: `linear-gradient(to right, transparent, var(--star-color), #ec4899)`, animation: `streak-h ${8+(i%4)}s linear infinite ${i*2.2}s` }} />
        </div>
      ))}
    </div>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const roles = ["Graphic Designer", "UI/UX Designer", "Frontend Developer"];
  const [index, setIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => roles[index].slice(0, latest));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, -100]); 
  const opacityScroll = useTransform(scrollYProgress, [0, 0.5], [1, 0]); 

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { name: 'github', url: 'https://github.com/CathyKyashii' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/catherinemaegalang' },
    { name: 'instagram', url: 'https://www.instagram.com/cathyyshiii/' },
    { name: 'facebook', url: 'https://www.facebook.com/catherine.mae.galang.2025' }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut", 
        staggerChildren: 0.2 
      } 
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="prologue" 
      className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-zinc-50 dark:bg-[#0a0a0a] py-6 lg:py-0 transition-colors duration-500"
    >
      <ShootingStarGrid />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: yTranslate, opacity: opacityScroll }}
        className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8 flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-16 items-center relative z-10"
      >
        
        {/* Mobile Title */}
        <div className="lg:hidden w-full text-center mb-1">
          <h1 className="text-2xl font-bold tracking-tighter uppercase leading-tight whitespace-nowrap">
            <span className="bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Catherine Mae Galang
            </span>
          </h1>
        </div>

        {/* Profile Image Container */}
        <div className="flex relative justify-center lg:justify-end items-center w-full order-1 lg:order-2">
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-56 md:max-w-110 aspect-4/5"
          >
            <div className="absolute -inset-8 lg:-inset-12 bg-pink-500/10 dark:bg-pink-500/5 blur-[80px] rounded-full z-0" />
            
            <div className="relative z-10 w-full h-full overflow-hidden rounded-[32px] lg:rounded-[48px] border border-pink-200 dark:border-white/10 bg-pink-50 dark:bg-black backdrop-blur-3xl shadow-2xl transition-colors">
              <img src="/portrait.svg" alt="Catherine Mae Galang" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-pink-200/40 dark:from-black/80 via-transparent to-transparent" />
            </div>

            <div className="lg:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 w-fit flex items-center gap-3 p-2 px-4 bg-white/90 dark:bg-zinc-900/95 backdrop-blur-2xl rounded-full border border-pink-500/20 shadow-xl z-20 whitespace-nowrap">
               <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-600"></span>
                  </span>
                  <span className="text-[9px] font-black tracking-widest text-pink-500 dark:text-pink-400 uppercase">Available</span>
               </div>
               <div className="w-px h-3 bg-pink-200 dark:bg-zinc-700" />
               <p className="text-[9px] font-bold text-pink-600 dark:text-zinc-400 tracking-widest uppercase">PH Based</p>
            </div>

            <div className="hidden lg:block absolute -bottom-4 -right-4 p-3 px-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-xl border border-pink-100 dark:border-white/10 shadow-2xl z-20 whitespace-nowrap">
              <p className="text-[10px] font-bold text-pink-500 dark:text-pink-400 tracking-[0.25em] uppercase">Based in Philippines</p>
            </div>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start w-full order-2 lg:order-1 text-center lg:text-left mt-4 lg:mt-0">
          <motion.div className="hidden lg:flex mb-8 items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/40 bg-pink-500/10 dark:bg-pink-500/15 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-pink-600 shadow-[0_0_8px_rgba(219,39,119,0.5)]"></span>
            </span>
            <span className="text-[9px] font-black tracking-[0.3em] text-pink-600 dark:text-pink-500 uppercase">Open for Opportunities</span>
          </motion.div>

          <h1 className="hidden lg:block text-6xl lg:text-7xl font-bold mb-4 tracking-tighter uppercase leading-tight lg:leading-[1.05]">
            <span className="bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent">
              Catherine Mae Galang
            </span>
          </h1>

          <div className="flex items-center gap-2 h-6 lg:h-10 mb-2 lg:mb-10">
            <motion.h2 className="text-lg md:text-3xl lg:text-4xl font-semibold text-pink-500 uppercase tracking-widest">{displayText}</motion.h2>
            <div className="w-0.5 h-4 lg:h-9 bg-pink-500/60 animate-pulse" />
          </div>

          <p className="text-zinc-600 dark:text-white/90 max-w-70 lg:max-w-xl text-xs lg:text-lg font-semibold leading-relaxed mb-6 lg:mb-10 text-center lg:text-justify px-2 lg:px-0 opacity-80">
            Crafting the intersection of high-end design and functional code. I transform complex ideas into intuitive digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 lg:mb-12 w-[80%] sm:w-auto">
            <PaletteButton text="View Projects" variant="projects" onClick={() => scrollToSection('projects')} />
            <PaletteButton text="Get in touch" variant="contact" onClick={() => scrollToSection('contact')} />
          </div>

          <div className="flex gap-6 lg:gap-8"> 
            {socials.map((social, i) => (
              <motion.div
                key={social.name}
                className="social-icon-container"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2
                }}
              >
                <SocialIcon name={social.name} url={social.url} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mouse Scroll Indicator */}
      <div className="absolute bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="w-5 h-8 lg:w-7 lg:h-11 rounded-full border-2 border-zinc-400 dark:border-white/30 flex justify-center p-1 lg:p-2">
            <motion.div 
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.6)]"
            />
          </div>
          <span className="text-[7px] lg:text-[9px] font-black tracking-[0.4em] text-zinc-400 dark:text-white/40 uppercase">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
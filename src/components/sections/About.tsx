'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Defines the "scroll length" to 300% of the viewport for a controlled 3-step narrative
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const sections = [
    {
      id: "01",
      tag: "THE GENESIS",
      title: "Where It Started",
      description: "Hi! I'm Catherine, but you can call me Cathy. A Computer Science student specializing in UI/UX Design and Frontend Development. I leverage technical logic and creative execution to turn complex problems into robust, user-focused digital experiences that harmonize aesthetics with intuitive functional performance. Long before writing my first line of code, I immersed myself in the principles of graphic design—exploring how color theory influences user psychology and how complex systems work behind the scenes to capture human attention."
    },
    {
      id: "02",
      tag: "MY JOURNEY",
      title: "My Interest Evolved",
      description: "As my creative curiosity scaled, I transitioned from static publication materials to the dynamic world of Product Design. Immersing myself in Figma, I began architecting intuitive user journeys and high-fidelity prototypes that prioritize usability without sacrificing style. This passion naturally evolved into a deep-seated interest in Frontend development. I wasn't just satisfied with how a site looked; I wanted to understand the 'how' behind the screen."
    },
    {
      id: "03",
      tag: "THE VISION",
      title: "The Digital Architect",
      description: "Today, I am dedicated to bridging the gap between design and code, creating digital products that harmonize aesthetics with intuitive functional performance. Driven by continuous learning and a detail-oriented mindset, I aim to be a versatile professional 'IT girl' capable of handling the entire product lifecycle. My goal is simple: to build purposeful, high-impact digital solutions that effortlessly elevate the human experience through technology."
    }
  ];

  // Map scroll progress to the section index for the scroll-triggered reveal
  const indexTransform = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-white dark:bg-[#0a0a0a]">
      <section className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* BACKGROUND DECOR - Hidden on small mobile to maximize content space */}
        <div className="absolute top-12 left-6 md:left-[calc((100vw-80rem)/2+1.5rem)] pointer-events-none select-none z-0 hidden xs:block">
          <h2 className="text-6xl md:text-[9vw] font-black text-black/3 dark:text-white/3 uppercase leading-none tracking-tighter">
            ABOUT
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between gap-10 md:gap-20 lg:gap-24">
            
            {/* LEFT: IMAGE REVEAL - Optimized for all devices */}
            <motion.div 
              initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
              className="relative w-full max-w-65 sm:max-w-[320px] md:max-w-105 aspect-4/5 rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl shrink-0"
            >
              <img 
                src="/AboutImage.jpg" 
                alt="Catherine Galang Portrait" 
                className="w-full h-full object-cover grayscale-20 hover:grayscale-0 transition-all duration-1000" 
              />
            </motion.div>

            {/* RIGHT: MASK-REVEAL TEXT CONTENT */}
            <div className="w-full flex flex-col justify-center min-h-95 md:min-h-120">
              <AnimatePresence mode="wait">
                {sections.map((section, i) => (
                  Math.round(indexTransform.get()) === i && (
                    <motion.div key={i} className="max-w-2xl">
                      
                      {/* Tagline Reveal */}
                      <div className="overflow-hidden mb-4 md:mb-6">
                        <motion.div
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "-100%" }}
                          transition={{ duration: 0.6, ease: "circOut" }}
                          className="flex items-center gap-4"
                        >
                          <span className="text-pink-500 font-mono text-xs md:text-sm font-bold tracking-widest">
                            {section.id}
                          </span>
                          <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold">
                            {section.tag}
                          </span>
                          <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800" />
                        </motion.div>
                      </div>
                      
                      {/* Title Mask Reveal */}
                      <div className="overflow-hidden mb-4 md:mb-6">
                        <motion.h3 
                          initial={{ y: "100%" }}
                          animate={{ y: 0 }}
                          exit={{ y: "-100%" }}
                          transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-tight"
                        >
                          {section.title}
                        </motion.h3>
                      </div>
                      
                      {/* Paragraph Soft Slide */}
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-medium"
                      >
                        {section.description}
                      </motion.p>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>

              {/* DYNAMIC PROGRESS BAR INDICATOR */}
              <div className="flex gap-4 mt-8 md:mt-12">
                {sections.map((_, i) => (
                  <div key={i} className="relative h-0.5 w-12 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                    {Math.round(indexTransform.get()) === i && (
                      <motion.div 
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.6)]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
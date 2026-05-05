'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    {
      id: "01",
      tag: "THE GENESIS",
      title: "Where It Started",
      description: "Hi! I'm Catherine, but you can call me Cathy. A Computer Science student specializing in UI/UX Design and Frontend Development. I leverage technical logic and creative execution to turn complex problems into robust, user-focused digital experiences."
    },
    {
      id: "02",
      tag: "MY JOURNEY",
      title: "My Interest Evolved",
      description: "As my creative curiosity scaled, I transitioned from static publication materials to the dynamic world of Product Design. Immersing myself in Figma, I began architecting intuitive user journeys and high-fidelity prototypes."
    },
    {
      id: "03",
      tag: "THE VISION",
      title: "The Digital Architect",
      description: "Today, I am dedicated to bridging the gap between design and code. My goal is simple: to build purposeful, high-impact digital solutions that effortlessly elevate the human experience through technology."
    }
  ];

  return (
    <section id="about" className="relative min-h-screen w-full bg-white dark:bg-[#080808] py-16 md:py-24 transition-colors duration-500 overflow-hidden">
      
      {/* 1. LAYERED HEADER - Adjusted scale for Mobile */}
      <div className="relative flex flex-col items-center justify-center mb-16 md:mb-32">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="absolute text-6xl sm:text-7xl md:text-[12rem] font-black tracking-tighter text-zinc-100 dark:text-zinc-900/20 select-none z-0 whitespace-nowrap"
        >
          ABOUT
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-6xl font-black tracking-[0.15em] md:tracking-[0.2em] text-zinc-900 dark:text-white uppercase">
            ABOUT ME
          </h2>
          <div className="h-1 md:h-1.5 w-16 md:w-24 bg-pink-500 mt-2 md:mt-4 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.4)]" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* 2. IMAGE SECTION - Responsive Badge Alignment */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-75 sm:max-w-95 md:max-w-110">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative aspect-4/5 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl z-10"
              >
                <img 
                  src="/AboutImage.jpg" 
                  alt="Galang Portfolio" 
                  className="w-full h-full object-cover dark:brightness-90" 
                />
              </motion.div>

              {/* REFINED COMPACT BADGE - Centered on Mobile, Offset on Desktop */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:-right-10 lg:translate-x-0 z-20 w-[90%] sm:w-64 md:w-72"
              >
                <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200 dark:border-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[8px] md:text-[9px] font-mono font-black tracking-widest text-zinc-400 uppercase">
                        Active Now
                      </span>
                    </div>
                    <span className="text-[8px] md:text-[9px] font-mono text-pink-500 font-bold border border-pink-500/20 px-2 py-0.5 rounded-full">
                      v2.0
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-lg md:text-xl font-black tracking-tight text-zinc-900 dark:text-white uppercase">
                      GALANG
                    </h4>
                    <div className="flex items-center gap-2">
                      <p className="text-zinc-500 dark:text-zinc-400 font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-wider">
                        UI/UX & Frontend
                      </p>
                      <div className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                      <p className="text-zinc-500 dark:text-zinc-400 font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-wider">
                        Manila, PH
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* 3. TEXT INTERACTION SECTION - Improved Spacing for Thumb-reach */}
          <div className="flex flex-col pt-12 md:pt-8 lg:pt-0">
            {/* Scrollable Tabs on small screens to prevent wrapping */}
            <div className="flex lg:inline-flex p-1 bg-zinc-100 dark:bg-zinc-900/50 rounded-xl md:rounded-2xl mb-8 md:mb-12 w-full lg:w-fit overflow-x-auto no-scrollbar">
              {sections.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 md:flex-none relative px-4 md:px-6 py-2.5 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black font-mono transition-all duration-300 ${
                    activeTab === idx ? "text-white" : "text-zinc-400"
                  }`}
                >
                  <span className="relative z-10">{sec.id}</span>
                  {activeTab === idx && (
                    <motion.div 
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-pink-500 rounded-lg md:rounded-xl shadow-lg shadow-pink-500/30"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-70 md:min-h-80 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4 md:space-y-6"
                >
                  <div className="space-y-2 md:space-y-3">
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="h-px w-6 md:w-8 bg-pink-500" />
                      <span className="text-pink-500 font-mono text-[10px] md:text-xs font-black tracking-widest uppercase">
                        {sections[activeTab].tag}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white leading-[1.1] md:leading-[0.95] tracking-tighter uppercase">
                      {sections[activeTab].title}
                    </h3>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-lg leading-relaxed max-w-lg">
                    {sections[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10">
                <button 
                  onClick={() => setActiveTab((activeTab + 1) % sections.length)}
                  className="group flex items-center gap-4 md:gap-5"
                >
                  <div className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full border-2 border-zinc-200 dark:border-zinc-800 group-active:scale-95 group-hover:border-pink-500 transition-all">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-zinc-400 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <span className="text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-zinc-400">
                    Next Chapter
                  </span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
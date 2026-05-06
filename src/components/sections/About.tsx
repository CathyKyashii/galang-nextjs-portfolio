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
      description: "My journey as a developer is rooted in the belief that code is only as powerful as the interface it powers. I specialize in crafting high-performance frontend systems that prioritize accessibility and scalable architecture. I leverage technical logic to turn complex problems into robust, user-focused digital experiences."
    },
    {
      id: "02",
      tag: "MY JOURNEY",
      title: "Interactive Evolution",
      description: "Transitioning from static design to the dynamic world of Product Design allowed me to master the art of the user journey. Immersing myself in Figma, I architect high-fidelity prototypes where every micro-interaction is intentional, ensuring that the transition from design to development is seamless and pixel-perfect."
    },
    {
      id: "03",
      tag: "THE VISION",
      title: "The Digital Architect",
      description: "My vision today is centered on the seamless harmony between structural integrity and human-centric design. I view every digital product as a living ecosystem where performance and beauty must coexist. I am dedicated to architecting immersive environments that respond intuitively to user intent, building high-impact solutions that consciously elevate the standard of the modern human experience."
    }
  ];

  const handleNext = () => setActiveTab((prev) => (prev + 1) % sections.length);
  const handleBack = () => setActiveTab((prev) => (prev - 1 + sections.length) % sections.length);

  return (
    <section id="about" className="relative min-h-screen w-full bg-white dark:bg-[#080808] py-12 md:py-24 transition-colors duration-500 overflow-hidden flex flex-col justify-center">
      
      {/* 1. CREATIVE HEADER WITH AUTOMATIC FLOATING */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 mb-12 md:mb-24 w-full">
        <div className="relative flex flex-col items-center lg:items-start justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.12, y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 md:-top-20 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 text-6xl sm:text-8xl md:text-[15rem] font-black tracking-tighter select-none z-0 whitespace-nowrap text-transparent"
            style={{ WebkitTextStroke: "1px currentColor" }}
          >
            DISCOVER
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center lg:items-start pt-4 text-center lg:text-left"
          >
            <div className="flex items-center gap-4 mb-2">
               <div className="hidden lg:block h-px w-8 bg-zinc-300 dark:bg-zinc-800" />
               <span className="text-pink-500 font-mono text-[10px] md:text-sm font-bold tracking-[0.3em]">PERSONAL PROFILE</span>
               <div className="h-px w-8 md:w-12 bg-zinc-300 dark:bg-zinc-800" />
            </div>
            
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter text-zinc-900 dark:text-white uppercase flex flex-col leading-none">
              <span className="text-pink-500">ABOUT</span>
              <span className="lg:ml-20 outline-text">MYSELF.</span>
            </h2>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 md:h-2 w-full max-w-[200px] md:max-w-none bg-gradient-to-r from-transparent via-pink-500 lg:from-pink-500 lg:to-transparent mt-4 md:mt-6 rounded-full relative"
            >
                <motion.div 
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 h-full w-2 md:w-4 bg-pink-400 blur-sm" 
                />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-center">
          
          {/* 2. IMAGE SECTION WITH AUTOMATIC ENTRANCE & GLOW */}
          <div className="relative flex justify-center lg:justify-start w-full">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[400px]"
            >
              <motion.div 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative aspect-4/5 rounded-[1.25rem] md:rounded-[2rem] overflow-hidden shadow-2xl z-10 border border-zinc-200 dark:border-zinc-800"
              >
                <img 
                  src="/AboutImage.jpg" 
                  alt="Galang Portfolio" 
                  className="w-full h-full object-cover dark:brightness-90" 
                />
              </motion.div>
              {/* Automatic Pulsing Glow */}
              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-500 rounded-full blur-3xl -z-10" 
              />
            </motion.div>
          </div>

          {/* 3. CONTENT SECTION WITH JUSTIFIED TEXT */}
          <div className="flex flex-col items-center lg:items-start text-left pt-4 lg:pt-0">
            
            <div className="flex p-1 bg-zinc-100 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800/50 rounded-xl md:rounded-2xl mb-6 md:mb-12 w-fit shadow-inner">
              {sections.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => setActiveTab(idx)}
                  className={`relative px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black font-mono transition-all duration-300 ${
                    activeTab === idx ? "text-white" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                  }`}
                >
                  <span className="relative z-10">{sec.id}</span>
                  {activeTab === idx && (
                    <motion.div 
                      layoutId="activeTabPill"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      className="absolute inset-0 bg-pink-500 rounded-lg md:rounded-xl shadow-lg shadow-pink-500/30"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[280px] md:min-h-[320px] flex flex-col justify-between items-center lg:items-start w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "anticipate" }}
                  className="space-y-4 md:space-y-6 w-full flex flex-col items-center lg:items-start"
                >
                  <div className="space-y-2 md:space-y-3 flex flex-col items-center lg:items-start">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "auto" }}
                      className="flex items-center gap-3 md:gap-4 overflow-hidden"
                    >
                      <div className="h-px w-6 md:w-8 bg-pink-500" />
                      <span className="text-pink-500 font-mono text-[10px] md:text-xs font-black tracking-widest uppercase">
                        {sections[activeTab].tag}
                      </span>
                    </motion.div>
                    <h3 className="text-3xl md:text-6xl font-black text-zinc-900 dark:text-white leading-[1.1] md:leading-[0.95] tracking-tighter uppercase text-center lg:text-left">
                      {sections[activeTab].title}
                    </h3>
                  </div>

                  {/* JUSTIFIED TEXT FOR WEB AND MOBILE */}
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-lg leading-relaxed max-w-lg text-justify font-medium">
                    {sections[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* NAVIGATION ARROWS */}
              <div className="mt-8 md:mt-12 flex flex-col items-center lg:items-end w-full gap-3 md:gap-4">
                <span className="text-[8px] md:text-[9px] font-black tracking-[0.3em] uppercase text-zinc-400">
                  Navigate Chapters
                </span>
                <div className="flex items-center gap-3">
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={handleBack}
                        className="flex items-center justify-center h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-zinc-200 dark:border-zinc-800 hover:border-pink-500 hover:bg-pink-500/5 group transition-colors"
                    >
                        <svg className="w-4 h-4 md:w-6 md:h-6 text-zinc-400 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                    </motion.button>

                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNext}
                        className="flex items-center justify-center h-10 w-10 md:h-14 md:w-14 rounded-full border-2 border-zinc-200 dark:border-zinc-800 hover:border-pink-500 hover:bg-pink-500/5 group transition-colors"
                    >
                        <svg className="w-4 h-4 md:w-6 md:h-6 text-zinc-400 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
        @media (min-width: 768px) {
          .outline-text {
            -webkit-text-stroke: 1.5px currentColor;
          }
        }
      `}</style>
    </section>
  );
}
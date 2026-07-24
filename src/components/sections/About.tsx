'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen w-full bg-white dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500 flex items-center justify-center py-20 lg:py-28">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] dark:opacity-[0.04]">
        <h2 className="text-[15vw] font-black uppercase tracking-widest text-zinc-900 dark:text-white" 
            style={{ WebkitTextStroke: "1px currentColor", color: "transparent" }}>
          STRATEGY
        </h2>
      </div>

      <div className="relative w-full max-w-[100rem] mx-auto px-6 md:px-24 z-10">
        
        <div className="mb-12 lg:mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-px w-6 bg-pink-500" />
            <span className="text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Personal Profile
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white"
          >
            About <span className="text-pink-500 font-light italic">Myself.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-start group"
          >
            <div className="absolute -inset-4 bg-pink-500/5 dark:bg-pink-500/2 rounded-[32px] lg:rounded-[44px] blur-xl transition-all duration-700 group-hover:scale-105 group-hover:bg-pink-500/10" />
            
            <div className="relative w-full max-w-md aspect-4/5 rounded-[24px] lg:rounded-[36px] overflow-hidden border border-zinc-200 dark:border-white/10 bg-zinc-900 shadow-xl transition-all duration-500 shadow-pink-500/5 group-hover:shadow-pink-500/10 group-hover:border-pink-500/30">
              <img 
                src="AboutImage.PNG" 
                alt="Catherine" 
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col space-y-6 pt-2"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-zinc-950 dark:text-white leading-snug tracking-tight text-justify">
              Bridging <span className="text-pink-500">product ownership, business analysis</span>, and UI/UX execution.
            </h3>
            
            <p className="text-sm lg:text-base text-zinc-800 dark:text-zinc-100 leading-relaxed font-normal text-justify">
              Hi! I'm Catherine, but you can call me <strong className="text-zinc-950 dark:text-white font-bold">Cathy</strong>. As a Computer Science student and multi-disciplinary professional, I specialize in comprehensive product delivery through <strong className="text-pink-500 font-bold">product ownership</strong>, <strong className="text-pink-500 font-bold">business & systems analysis</strong>, and <strong className="text-pink-500 font-bold">UI/UX design</strong>. My expertise spans conducting stakeholder interviews and surveys, defining and evaluating organizational processes, and performing detailed data analysis and reporting.
            </p>
            
            <p className="text-sm lg:text-base text-zinc-800 dark:text-zinc-100 leading-relaxed font-normal text-justify">
              Beyond analytical problem-solving, I have a deep passion for <strong className="text-zinc-950 dark:text-white font-bold">project coordination</strong>—keeping cross-functional teams synchronized and driving strategic execution from conception to deployment.
            </p>

            <div className="pt-6 border-t border-zinc-200 dark:border-white/10 mt-2">
              <p className="text-pink-500 font-mono text-[10px] tracking-widest uppercase mb-2 font-bold">Product & Business Philosophy</p>
              <p className="text-zinc-900 dark:text-zinc-100 text-sm md:text-base font-medium italic tracking-wide text-justify border-l-2 border-pink-500 pl-4 py-1 bg-zinc-50 dark:bg-white/2 rounded-r-lg">
                "Data analysis informs the strategy, process evaluation aligns the business, and user-centric design delivers the experience."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
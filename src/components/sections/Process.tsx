'use client';
import { motion } from 'framer-motion';
import { Search, Network, Palette, Rocket } from 'lucide-react';
import { useRef } from 'react';

const workProcesses = [
  {
    title: "Research & Define",
    tag: "Discovery & Brief",
    icon: <Search className="w-5 h-5 text-pink-500" />,
    description: "Analyzing design briefs, stakeholder interviews, and target audience insights to define core project requirements and uncover creative directions tailored for modern branding and web standards."
  },
  {
    title: "Architecture & Ideation",
    tag: "Wireframing & Flow",
    icon: <Network className="w-5 h-5 text-pink-500" />,
    description: "Structuring intuitive user journeys, information architecture, sketching initial creative concepts, and building interactive wireframes to establish robust visual hierarchies."
  },
  {
    title: "Visual & Graphic Design",
    tag: "UI & Assets",
    icon: <Palette className="w-5 h-5 text-pink-500" />,
    description: "Bringing concepts to life by designing high-fidelity user interfaces, responsive layouts, and eye-catching graphic branding assets with meticulous attention to detail in Figma."
  },
  {
    title: "Prototype & Launch",
    tag: "Testing & Handoff",
    icon: <Rocket className="w-5 h-5 text-pink-500" />,
    description: "Iterating through usability testing and interactive prototyping, followed by seamless design system handoffs and developer asset delivery for optimal production."
  }
];

export default function ProcessSection() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      id="process" 
      className="relative min-h-screen w-full bg-white dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500 flex items-start justify-center py-24 lg:py-32"
    >
      {/* SUBTLE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] dark:opacity-[0.04]">
        <h2 className="text-[15vw] font-black uppercase tracking-widest text-zinc-900 dark:text-white" 
            style={{ WebkitTextStroke: "1px currentColor", color: "transparent" }}>
          PROCESS
        </h2>
      </div>

      <div className="relative max-w-352 mx-auto w-full px-6 md:px-12 z-10">
        
        <div className="mb-16 lg:mb-20 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-px w-6 bg-pink-500" />
            <span className="text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Workflow & Methodology
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white"
          >
            Work <span className="text-pink-500 font-light italic">Process.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 pt-2"
          >
            <div className="space-y-5">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white uppercase leading-snug">
                Engineering <span className="text-pink-500">Web Experiences</span> Through Design
              </h3>
              
              <div className="space-y-4 text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed text-justify">
                <p>
                  As a UI/UX Designer and Project Coordinator, my design workflow goes beyond aesthetics. I translate analytical data insights and core business requirements into user-centered digital solutions.
                </p>
                <p>
                  Every website and interface I build follows a strict iterative lifecycle—from initial discovery and wireframing to high-fidelity design execution and developer handoff. By bridging creativity with technical feasibility, I ensure scalable, high-performing web applications that resonate with target audiences.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-wider text-pink-500 font-bold">
                  Human-Centered & Scalable Execution
                </span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 sm:pt-4">
            {workProcesses.map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mt-4 pt-6 px-6 pb-6 rounded-tr-[2.5rem] rounded-br-[2.5rem] rounded-bl-[2.5rem] rounded-tl-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40 hover:border-pink-500 shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:shadow-none hover:shadow-[0_20px_40px_rgba(236,72,153,0.08)] transition-all duration-300 flex flex-col justify-between group overflow-visible hover:-translate-y-1.5"
              >
                <div className="absolute -top-7 -left-5 w-16 h-16 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 shadow-lg flex flex-col items-center justify-center z-30 group-hover:border-pink-500 group-hover:scale-105 transition-all duration-300">
                  <span className="text-[8px] font-mono tracking-wider uppercase text-zinc-400 dark:text-zinc-500 font-semibold">Step</span>
                  <span className="text-sm font-black text-pink-500 font-mono">0{index + 1}</span>
                </div>

                <div className="mt-2">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold uppercase tracking-wide text-zinc-950 dark:text-white group-hover:text-pink-500 transition-colors">
                      {process.title}
                    </h4>
                    <div className="p-2.5 rounded-2xl bg-pink-500/10 group-hover:bg-pink-500/20 group-hover:rotate-6 transition-all duration-300">
                      {process.icon}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed text-justify">
                    {process.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-pink-500 transition-colors">
                  <span>Focus: {process.tag}</span>
                  <span className="w-6 h-px bg-zinc-300 dark:bg-zinc-700 group-hover:w-10 group-hover:bg-pink-500 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
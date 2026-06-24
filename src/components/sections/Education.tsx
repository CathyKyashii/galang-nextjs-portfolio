'use client';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "STI College Ortigas-Cainta",
    period: "2022 — Present",
    logo: "/sti.svg",
    coursework: ["Data Structures and Algorithms", "Human-Computer Interactions", "Game Development", "Software Engineering", "Web Development Technologies"],
    achievements: ["Consistent Academic Scholar", "Deans Lister 2022-2025", "Thesis Capstone: Outright Passed", "Creatives Officer", "Best Business Concept Paper Award (2023)"],
  },
  {
    degree: "Science, Technology, Engineering, Mathematics",
    institution: "STI College Ortigas-Cainta",
    period: "2020 — 2022",
    logo: "/sti.svg",
    coursework: ["Pre-Calculus & Basic Calculus", "General Biology & Chemistry", "Physics Fundamentals", "Research Project"],
    achievements: ["STEM Track Complete with High Honor", "Grade 11-12 Secretary", "Aperture Media Officer"],
  },
  {
    degree: "Junior High School",
    institution: "Shining Light Christian College, Inc.",
    period: "2016 — 2020",
    logo: "/slcc.svg",
    coursework: ["Mathematics", "Science", "English/Communication", "Computer/ICT", "Filipino & Social Studies"],
    achievements: ["Consistent Academic Performance", "SSG Partylist - Representative"],
  },
];

export default function Education() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      id="education" 
      className="relative min-h-screen w-full bg-white dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500 flex items-center justify-center py-24 lg:py-32"
    >
      {/* SUBTLE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] dark:opacity-[0.04]">
        <h2 className="text-[15vw] font-black uppercase tracking-widest text-zinc-900 dark:text-white" 
            style={{ WebkitTextStroke: "1px currentColor", color: "transparent" }}>
          ACADEMIC
        </h2>
      </div>

      {/* FIXED CONTAINER */}
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8 z-10">
        
        {/* UNIFIED HEADER */}
        <div className="mb-20 lg:mb-24 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-px w-6 bg-pink-500" />
            <span className="text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Education Timeline
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white"
          >
            Academic <span className="text-pink-500 font-light italic">Milestones.</span>
          </motion.h2>
        </div>

        {/* TIMELINE ARCHITECTURE */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800/80 ml-4 md:ml-8 space-y-16 lg:space-y-24 max-w-6xl">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative pl-10 md:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* ANIMATED TIMELINE NODE POINT */}
              <motion.div 
                initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
                whileInView={{ backgroundColor: "#ec4899" }}
                viewport={{ once: false, margin: "-20%" }} 
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute -left-2.25 top-2 h-4 w-4 rounded-full border-2 border-pink-500 z-20" 
              />

              {/* BRAND LOGO SCROLL ANIMATION WRAPPER */}
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-15%" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                className="lg:col-span-3 w-20 h-20 md:w-24 md:h-24 relative p-1 flex items-center justify-center lg:justify-start shrink-0 select-none"
              >
                <img 
                  src={edu.logo} 
                  alt="" 
                  className="w-full h-full object-contain filter dark:brightness-95" 
                />
              </motion.div>

              {/* TEXT SUMMARY BLOCK */}
              <div className="lg:col-span-9 space-y-5 w-full">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="text-pink-500 font-mono text-[10px] font-bold tracking-wider uppercase bg-pink-50 dark:bg-pink-500/4 px-2.5 py-0.5 rounded-md">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-snug uppercase pt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 font-semibold tracking-wide text-sm">
                    {edu.institution}
                  </p>
                </div>

                {/* DOUBLE COLUMN SUB-DETAILS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5 border-t border-zinc-100 dark:border-zinc-900">
                  {/* CURRICULUM */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
                      <BookOpen size={15} className="text-pink-500" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Curriculum Focus</span>
                    </div>
                    <ul className="space-y-2.5">
                      {edu.coursework.map((item) => (
                        <li key={item} className="text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed flex gap-3 text-justify">
                          <span className="h-1.5 w-1.5 rounded-full bg-pink-500/70 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ACHIEVEMENTS */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-950 dark:text-white">
                      <Trophy size={15} className="text-pink-500" />
                      <span className="text-[11px] font-bold uppercase tracking-widest">Achievements</span>
                    </div>
                    <ul className="space-y-2.5">
                      {edu.achievements.map((item) => (
                        <li key={item} className="text-sm text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed flex gap-2.5 text-justify">
                          <ArrowUpRight size={14} className="text-pink-500 shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
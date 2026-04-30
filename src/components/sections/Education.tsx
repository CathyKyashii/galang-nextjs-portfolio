'use client';
import { motion } from 'framer-motion';
import { BookOpen, Trophy } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "STI College Ortigas-Cainta",
    period: "2022 — Present",
    logo: "/sti.svg",
    side: "left",
    coursework: ["Data Structures and Algorithms", "Human-Computer Interactions", "Game Development", "Software Engineering", "Web Development Technologies"],
    achievements: ["Consistent Academic Scholar", "Thesis Capstone: Outright Passed", "Creatives Officer", "Best Business Concept Paper Award - Entrepreneurial Mind (2023)"],
  },
  {
    degree: "Science, Technology, Engineering, Mathematics",
    institution: "STI College Ortigas-Cainta",
    period: "2020 — 2022",
    logo: "/sti.svg",
    side: "right",
    coursework: ["Pre-Calculus & Basic Calculus", "General Biology & Chemistry", "Physics Fundamentals", "Research / Capstone Project"],
    achievements: ["STEM Track Complete with High Honor", "Research Paper Lead", "Grade 11-12 Secretary"],
  },
  {
    degree: "Junior High School",
    institution: "Shining Light Christian College, Inc.",
    period: "2016 — 2020",
    logo: "/slcc.svg",
    side: "left",
    coursework: ["Mathematics", "Science", "English/Communication", "Computer/ICT", "Filipino & Social Studies"],
    achievements: ["Consistent Academic Performance", "SSG Partylist - Representative"],
  },
];

export default function Education() {
  return (
    <section 
      id="education" 
      // REMOVED: px-6 here to prevent double-padding and misalignment
      className="min-h-screen w-full bg-background transition-colors duration-500 py-32 relative overflow-hidden flex flex-col items-center snap-start"
    >
      
      {/* HEADER - Added px-6 lg:px-8 to match Navbar alignment */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24 w-full max-w-7xl px-6 lg:px-8"
      >
        <span className="text-pink-500 text-[11px] uppercase tracking-[1em] font-black block mb-4">
            PROFILE — 2
        </span>
        <h2 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-none">
          Academic <span className="text-zinc-500 italic font-light font-serif">Milestones.</span>
        </h2>
      </motion.div>

      {/* TIMELINE CONTAINER - Added px-6 lg:px-8 to align content edges with Navbar items */}
      <div className="max-w-7xl w-full px-6 lg:px-8 relative">
        
        {/* VERTICAL LINE */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent, var(--border) 10%, var(--border) 90%, transparent)'
          }}
        />

        <div className="space-y-24 relative z-10">
          {educationData.map((edu, i) => (
            <div key={i} className={`group relative flex items-center w-full pointer-events-none ${edu.side === 'left' ? 'justify-start' : 'justify-end'}`}>
              
              {/* THE DIAMOND */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 z-20 transition-all duration-500 rotate-45 
                bg-background border-2 border-border group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:shadow-[0_0_15px_#ec4899]" 
              />

              {/* LOGO */}
              <div className="absolute left-1/2 -translate-x-1/2 z-40 transition-all duration-500 group-hover:scale-110 pointer-events-auto">
                <img 
                    src={edu.logo} 
                    alt={`${edu.institution} logo`} 
                    className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.6)]" 
                />
              </div>

              {/* HORIZONTAL CONNECTOR */}
              <div 
                className={`absolute top-1/2 -translate-y-1/2 h-0.5 transition-all duration-500 z-10
                bg-border group-hover:bg-pink-500 group-hover:shadow-[0_0_10px_#ec4899]
                ${edu.side === 'left' ? 'left-[46%] right-[50%]' : 'right-[46%] left-[50%]'}`} 
              />

              {/* CONTENT BOX */}
              <motion.div 
                initial={{ opacity: 0, x: edu.side === 'left' ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`w-full md:w-[46%] p-8 md:p-10 rounded-3xl bg-card border border-border backdrop-blur-3xl relative 
                  transition-all duration-500 pointer-events-auto
                  group-hover:border-pink-500/40 group-hover:bg-card/80 group-hover:-translate-y-2`}
              >
                <div className="mb-8 border-b border-border pb-6">
                    <h3 className="text-foreground text-2xl md:text-3xl font-black leading-tight mb-3 transition-colors">
                        {edu.degree}
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-pink-500 text-[11px] font-black uppercase tracking-[0.2em]">{edu.period}</p>
                      <p className="text-muted-foreground text-xs font-bold uppercase tracking-wide transition-colors">{edu.institution}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-pink-500" />
                      <span className="text-foreground text-[10px] font-black uppercase tracking-widest transition-colors">Coursework</span>
                    </div>
                    <ul className="space-y-3">
                      {edu.coursework.map(item => (
                        <li key={item} className="text-muted-foreground text-[13px] font-medium leading-snug flex items-start gap-2.5 transition-colors">
                          <span className="text-pink-500 mt-1.5 w-1 h-1 rounded-full bg-pink-500 shrink-0 shadow-[0_0_5px_#ec4899]" /> 
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Trophy size={16} className="text-pink-500" />
                      <span className="text-foreground text-[10px] font-black uppercase tracking-widest transition-colors">Achievements</span>
                    </div>
                    <ul className="space-y-3">
                      {edu.achievements.map(item => (
                        <li key={item} className="text-muted-foreground text-[13px] font-medium leading-snug flex items-start gap-2.5 transition-colors">
                          <span className="text-pink-500 mt-1.5 w-1 h-1 rounded-full bg-pink-500 shrink-0 shadow-[0_0_5px_#ec4899]" /> 
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
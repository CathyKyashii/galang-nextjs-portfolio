'use client';
import { motion } from 'framer-motion';
import { Layout, Code2, GitBranch, Terminal, Briefcase, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const skillGroups = [
  {
    title: "Design & Creative Tools",
    icon: <Layout size={18} />,
    description: "Crafting intuitive digital experiences and high-fidelity prototypes.",
    skills: ["UI/UX Design", "Wireframing", "User Flow", "Prototyping", "Figma", "Framer", "GSAP"],
  },
  {
    title: "Technical Stack",
    icon: <Code2 size={18} />,
    description: "Building scalable web solutions with modern frameworks.",
    skills: ["HTML", "CSS3/Tailwind", "React", "JavaScript", "PHP", "Next.js", "TypeScript", "Python", "Java", "C#"],
  },
  {
    title: "Development Workflow",
    icon: <GitBranch size={18} />,
    description: "Version control and seamless deployment pipelines.",
    skills: ["Git & GitHub", "Visual Studio Code", "Vercel"],
  },
  {
    title: "Productivity",
    icon: <Terminal size={18} />,
    description: "Organizing complex projects for efficient delivery.",
    skills: ["Notion", "ClickUp", "Obsidian", "Microsoft Office"],
  },
  {
    title: "Professional Strengths",
    icon: <Briefcase size={18} />,
    description: "Soft skills bridging the gap between code and collaboration.",
    skills: ["Teamwork", "Adaptability", "Problem-Solving", "Communication", "Time Management"],
  }
];

export default function Competencies() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      id="mastery" 
      className="relative min-h-screen w-full bg-white dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500 flex items-center justify-center py-20 lg:py-28"
    >
      {/* SUBTLE BACKGROUND TEXT - Matching About/Education */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] dark:opacity-[0.04]">
        <h2 className="text-[15vw] font-black uppercase tracking-widest text-zinc-900 dark:text-white" 
            style={{ WebkitTextStroke: "1px currentColor", color: "transparent" }}>
          MASTERY
        </h2>
      </div>

      {/* FIXED CONTAINER */}
      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8 z-10">
        
        {/* UNIFIED HEADER - Consistent with other pages */}
        <div className="mb-16 lg:mb-20 text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-px w-6 bg-pink-500" />
            <span className="text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Skill Expertise
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white"
          >
            Core <span className="text-pink-500 font-light italic">Competencies.</span>
          </motion.h2>
        </div>

        {/* MODERN GRID ARCHITECTURE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-y-20">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-start"
            >
              {/* TOP ACCENT LINE AND INDEX */}
              <div className="w-full flex items-center justify-between mb-6">
                <div className="h-0.5 w-12 bg-pink-500/20 group-hover:w-full transition-all duration-700 ease-out" />
                <span className="text-[10px] font-mono font-bold text-zinc-300 dark:text-zinc-800 ml-4 group-hover:text-pink-500 transition-colors">
                  0{i + 1}
                </span>
              </div>

              {/* ICON & TITLE */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-pink-500 transition-transform duration-500 group-hover:scale-110">
                  {group.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-zinc-950 dark:text-white uppercase tracking-tight">
                  {group.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed mb-6 text-justify">
                {group.description}
              </p>

              {/* SKILL CLOUD */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 border border-zinc-100 dark:border-zinc-800/50 bg-zinc-50 dark:bg-white/2 px-3 py-1 rounded-md transition-all duration-300 hover:border-pink-500/50 hover:text-pink-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* FINAL CTA BLOCK (Optional) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden lg:flex flex-col justify-center items-center border-2 border-dashed border-zinc-100 dark:border-zinc-900 rounded-3xl p-8 text-center"
          >
            <Sparkles className="text-pink-500 mb-4 animate-pulse" size={24} />
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-loose">
              Continuously evolving<br/>with new technologies
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layout, Code2, GitBranch, Terminal, Briefcase, Sparkles } from 'lucide-react';
import { useRef } from 'react';

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.97 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 25 } 
  },
  hover: {
    y: -10,
    transition: { type: "spring" as const, stiffness: 400, damping: 20 }
  }
};

const iconVariants = {
  initial: { rotate: 0, scale: 1 },
  hover: { 
    rotate: [0, -15, 15, -10, 10, 0], 
    scale: 1.15,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as const
    }
  }
};

const skillGroups = [
  {
    title: "Design & Creative Tools",
    icon: <Layout size={22} />,
    description: "Transforming concepts into intuitive digital experiences.",
    skills: ["UI/UX Design", "Wireframing", "User Flow", "Prototyping", "Figma", "Framer", "GSAP"],
    span: "lg:col-span-2"
  },
  {
    title: "Technical Skills",
    icon: <Code2 size={22} />,
    description: "Building scalable web solutions with modern languages.",
    skills: ["HTML", "CSS3/Tailwind", "React", "JavaScript", "PHP", "Next.js", "TypeScript", "Python", "Java", "C#"],
    span: "lg:col-span-1"
  },
  {
    title: "Development Workflow",
    icon: <GitBranch size={22} />,
    description: "Streamlining deployment and version control efficiency.",
    skills: ["Git & GitHub", "Visual Studio Code", "Vercel"],
    span: "lg:col-span-1"
  },
  {
    title: "Productivity & Project Management",
    icon: <Terminal size={22} />,
    description: "Organizing complex projects for seamless delivery.",
    skills: ["Notion", "ClickUp", "Obsidian", "Microsoft Office Suit"],
    span: "lg:col-span-1"
  },
  {
    title: "Professional Strengths",
    icon: <Briefcase size={22} />,
    description: "Soft skills that bridge the gap between code and collaboration.",
    skills: ["Teamwork", "Adaptability", "Attention to Detail", "Problem-Solving", "Communication", "Time Management"],
    span: "lg:col-span-1"
  }
];

function SkillCard({ group }: { group: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 35 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 35 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      variants={cardVariants}
      initial="initial"
      whileInView="whileInView"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative ${group.span} flex perspective-1000`}
    >
      {/* Dynamic Border/Glow */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-pink-500/10 dark:bg-pink-500/5 border border-pink-500/30 dark:border-pink-500/20 transition-all duration-300 group-hover:border-pink-500/60 group-hover:shadow-[0_0_40px_rgba(236,72,153,0.1)]" />
      <div className="absolute -inset-1 bg-pink-500/15 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Content Box */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative w-full h-full bg-white dark:bg-[#080808] rounded-[2.5rem] p-8 md:p-10 flex flex-col z-10 m-px overflow-hidden"
      >
        <div className="flex justify-between items-start mb-8">
          <motion.div 
            variants={iconVariants}
            className="w-14 h-14 rounded-2xl bg-pink-50 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-500 transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white"
          >
            {group.icon}
          </motion.div>
          <Sparkles size={16} className="text-pink-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
        </div>

        <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-3 tracking-tighter uppercase leading-none">
          {group.title}
        </h3>
        
        <p className="text-zinc-500 dark:text-zinc-400 text-[10.5px] mb-10 uppercase tracking-widest font-semibold leading-relaxed">
          {group.description}
        </p>

        <div className="flex flex-wrap gap-2.5 mt-auto">
          {group.skills.map((skill: string) => (
            <motion.span 
              key={skill}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-2 rounded-full bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 text-[10px] font-bold text-zinc-600 dark:text-zinc-500 uppercase tracking-widest transition-all hover:text-pink-500 hover:border-pink-500/30"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Competencies() {
  return (
    <section 
      id="mastery" 
      className="w-full min-h-screen bg-white dark:bg-black py-40 flex flex-col items-center snap-start relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(236,72,153,0.04),transparent_70%)] pointer-events-none" />

      {/* HEADER: Aligned to match Academic Milestones spacing and format */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center mb-24 w-full max-w-7xl px-6 lg:px-8 z-10"
      >
        <span className="text-pink-500 text-[11px] uppercase tracking-[1em] font-black block mb-4">
            MASTERY
        </span>
        <h2 className="text-6xl md:text-8xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter leading-none">
          Core <span className="text-zinc-500 dark:text-zinc-500 italic font-light font-serif">Competencies.</span>
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ 
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.05 }
        }}
        viewport={{ once: true }}
        className="max-w-7xl w-full px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10 perspective-2000"
      >
        {skillGroups.map((group, idx) => (
          <SkillCard key={idx} group={group} />
        ))}
      </motion.div>
    </section>
  );
}
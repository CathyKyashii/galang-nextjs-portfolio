'use client';
import { motion } from 'framer-motion';
import { Layout, Code2, GitBranch, Terminal, Briefcase, Sparkles } from 'lucide-react';

const skillGroups = [
  {
    title: "Design & Creative Tools",
    icon: <Layout size={24} />,
    description: "Crafting intuitive digital experiences and high-fidelity prototypes.",
    skills: ["UI/UX Design", "Wireframing", "User Flow", "Prototyping", "Figma", "Framer", "GSAP"],
  },
  {
    title: "Technical Stack",
    icon: <Code2 size={24} />,
    description: "Building scalable web solutions with modern frameworks.",
    skills: ["HTML", "CSS3/Tailwind", "React", "JavaScript", "PHP", "Next.js", "TypeScript", "Python", "Java", "C#"],
  },
  {
    title: "Development Workflow",
    icon: <GitBranch size={24} />,
    description: "Version control and seamless deployment pipelines.",
    skills: ["Git & GitHub", "Visual Studio Code", "Vercel"],
  },
  {
    title: "Productivity",
    icon: <Terminal size={24} />,
    description: "Organizing complex projects for efficient delivery.",
    skills: ["Notion", "ClickUp", "Obsidian", "Microsoft Office"],
  },
  {
    title: "Professional Strengths",
    icon: <Briefcase size={24} />,
    description: "Soft skills bridging the gap between code and collaboration.",
    skills: ["Teamwork", "Adaptability", "Problem-Solving", "Communication", "Time Management"],
  }
];

export default function Competencies() {
  return (
    <section id="mastery" className="py-24 bg-white dark:bg-[#0a0a0a] w-full transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white">
            Core <span className="text-pink-500 font-light italic">Competencies.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-3xl transition-all duration-500 
                         bg-zinc-100 dark:bg-zinc-900/20 
                         border border-zinc-200 dark:border-zinc-800 
                         hover:border-pink-300 dark:hover:border-pink-500/50
                         hover:shadow-[0_10px_30px_-5px_rgba(236,72,153,0.15)] 
                         hover:bg-pink-50/80 dark:hover:bg-gradient-to-br dark:hover:from-zinc-900 dark:hover:to-pink-950/20"
            >
              <div className="text-pink-500 mb-6 transition-transform duration-500 group-hover:scale-110">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-2 uppercase tracking-tight">
                {group.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                {group.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-[10px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Placeholder/CTA Block */}
          <div className="flex flex-col justify-center items-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 text-center">
            <Sparkles className="text-pink-500 mb-4" size={24} />
            <p className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
              Continuously evolving
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
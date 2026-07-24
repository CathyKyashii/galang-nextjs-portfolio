'use client';
import { motion } from 'framer-motion';
import { Layout, Code2, GitBranch, Terminal, Briefcase, CheckCircle2 } from 'lucide-react';

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
    skills: ["HTML", "CSS3/Tailwind", "React", "JavaScript", "Next.js", "Python", "Java"],
  },
  {
    title: "Development Workflow",
    icon: <GitBranch size={24} />,
    description: "Version control and seamless deployment pipelines.",
    skills: ["Git & GitHub", "Visual Studio Code", "Vercel"],
  },
   {
    title: "Product Ownership",
    icon: <CheckCircle2 size={24} />,
    description: "Managing backlogs, stakeholder alignment, product delivery, and cross-functional coordination.",
    skills: ["Product Backlog Management", "User Stories & Acceptance Criteria", "Agile & Scrum Methodologies", "Stakeholder Management", "User Research", "Sprint Planning", "Project Coordination", "Risk & Schedule Tracking"],
  },
   {
    title: "Productivity & Analysis",
    icon: <Terminal size={24} />,
    description: "Organizing complex projects and evaluating business processes.",
    skills: ["Notion", "ClickUp", "Obsidian", "Microsoft Office", "Business Analysis", "Systems Analysis", "Conducting Interviews & Surveys", "Data Analysis & Reporting", "Evaluating Organizational Processes", "Requirements Mapping", "Process Flowcharts"],
  },
  {
    title: "Professional Strengths",
    icon: <Briefcase size={24} />,
    description: "Soft skills bridging the gap between code and collaboration.",
    skills: ["Teamwork", "Adaptability", "Problem-Solving", "Communication", "Time Management", "Stakeholder Facilitation"],
  }
];

export default function Competencies() {
  return (
    <section id="mastery" className="py-24 bg-white dark:bg-[#0a0a0a] w-full transition-colors duration-500">
      <div className="max-w-[100rem] mx-auto px-6 md:px-24">
        
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-3"
          >
            <div className="h-px w-6 bg-pink-500" />
            <span className="text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Expertise
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white"
          >
            Core <span className="text-pink-500 font-light italic">Competencies.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#111] overflow-hidden transition-all duration-500 hover:border-pink-500/30"
            >
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-pink-500 mb-6 bg-pink-500/10 w-12 h-12 flex items-center justify-center rounded-lg group-hover:rotate-12 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-3 uppercase tracking-wider">
                  {group.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-full group-hover:border-pink-500/50 group-hover:text-pink-500 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
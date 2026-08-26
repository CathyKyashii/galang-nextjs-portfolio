'use client';
import { motion } from 'framer-motion';
import { Layout, Code2, GitBranch, CheckCircle2, Layers } from 'lucide-react';

export default function Competencies() {
  return (
    <section id="mastery" className="py-28 bg-white dark:bg-[#050505] text-zinc-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[100rem] mx-auto px-6 md:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 dark:border-zinc-800/80 pb-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="h-px w-6 bg-pink-500" />
              <span className="text-pink-600 dark:text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                Expertise & Capabilities
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase"
            >
              Core <span className="text-pink-600 dark:text-pink-500 font-light italic">Mastery.</span>
            </motion.h2>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md font-light">
            A strategic synthesis of technical execution, creative interface design, and agile product management.
          </p>
        </div>

        {/* Bento Grid Mosaic Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* 1. Design & Creative Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 lg:col-span-2 bg-linear-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-900/90 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800/80 p-8 rounded-3xl relative overflow-hidden group hover:border-pink-500/40 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 text-pink-500/10 dark:text-pink-500/20 group-hover:text-pink-500/30 transition-colors">
              <Layout size={64} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <span className="inline-block p-3 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl mb-6">
                <Layout size={24} />
              </span>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-2">Design & Prototyping</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 max-w-md font-light">
                Crafting intuitive digital experiences, user flows, and high-fidelity interactive prototypes.
              </p>
              <div className="flex flex-wrap gap-2">
                {["UI/UX Design", "Wireframing", "User Flows", "Prototyping", "Figma", "Framer", "GSAP"].map((skill) => (
                  <span key={skill} className="text-xs font-mono tracking-wider bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg shadow-2xs dark:shadow-none">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. Technical Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="md:col-span-1 lg:col-span-2 bg-linear-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-900/90 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800/80 p-8 rounded-3xl relative overflow-hidden group hover:border-pink-500/40 transition-all duration-500"
          >
            <div className="relative z-10">
              <span className="inline-block p-3 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl mb-6">
                <Code2 size={24} />
              </span>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-2">Technical Stack</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-light">
                Building scalable, performant web applications using modern frameworks.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind CSS", "JavaScript", "Python", "Java", "HTML/CSS"].map((skill) => (
                  <span key={skill} className="text-xs font-mono tracking-wider bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg shadow-2xs dark:shadow-none">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. Product Ownership */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="md:col-span-1 lg:col-span-2 bg-linear-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-900/90 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800/80 p-8 rounded-3xl relative overflow-hidden group hover:border-pink-500/40 transition-all duration-500"
          >
            <div className="relative z-10">
              <span className="inline-block p-3 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl mb-6">
                <CheckCircle2 size={24} />
              </span>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-2">Product Ownership</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-light">
                Managing backlogs, sprint planning, and cross-functional product coordination.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Backlog Management", "User Stories", "Agile / Scrum", "Stakeholder Management", "User Research", "Sprint Planning"].map((skill) => (
                  <span key={skill} className="text-xs font-mono tracking-wider bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg shadow-2xs dark:shadow-none">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4. Analysis & Operations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="md:col-span-1 lg:col-span-2 bg-linear-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-900/90 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800/80 p-8 rounded-3xl relative overflow-hidden group hover:border-pink-500/40 transition-all duration-500"
          >
            <div className="relative z-10">
              <span className="inline-block p-3 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl mb-6">
                <Layers size={24} />
              </span>
              <h3 className="text-xl font-bold tracking-wide uppercase mb-2">Analysis & Operations</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-light">
                Evaluating business processes, workflow mapping, and complex system documentation.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Business Analysis", "Systems Analysis", "Process Flowcharts", "Notion", "ClickUp", "Data Reporting"].map((skill) => (
                  <span key={skill} className="text-xs font-mono tracking-wider bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg shadow-2xs dark:shadow-none">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 5. Workflow & Professional Strengths */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="md:col-span-3 lg:col-span-4 bg-linear-to-r from-zinc-50 via-zinc-100/50 to-zinc-50 dark:from-zinc-900/90 dark:via-zinc-900/60 dark:to-zinc-950 border border-zinc-200 dark:border-zinc-800/80 p-8 rounded-3xl relative overflow-hidden group hover:border-pink-500/40 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <span className="p-3 bg-pink-500/10 text-pink-600 dark:text-pink-400 rounded-2xl shrink-0">
                <GitBranch size={24} />
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-wide uppercase mb-1">Workflow & Professional Strengths</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light">Version control pipelines, deployment, and team collaboration soft skills.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:max-w-xl justify-start md:justify-end">
              {["Git & GitHub", "Vercel", "VS Code", "Problem-Solving", "Communication", "Adaptability", "Time Management"].map((skill) => (
                <span key={skill} className="text-xs font-mono tracking-wider bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg shadow-2xs dark:shadow-none">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
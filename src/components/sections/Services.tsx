'use client';
import { motion } from 'framer-motion';
import { Monitor, Palette, Users, ClipboardCheck } from 'lucide-react';

const servicesList = [
  {
    num: "01",
    title: "Web Design",
    icon: <Monitor size={22} />,
    description: "Architecting clean, responsive, and user-centric digital web experiences with modern design systems and intuitive user flows.",
  },
  {
    num: "02",
    title: "Graphic Design",
    icon: <Palette size={22} />,
    description: "Developing compelling visual identities, marketing assets, and striking creative branding that connect deeply with audiences.",
  },
  {
    num: "03",
    title: "Design Team Lead",
    icon: <Users size={22} />,
    description: "Directing creative workflows, guiding multidisciplinary design teams, aligning vision, and elevating overall output quality.",
  },
  {
    num: "04",
    title: "Project Manager & Coordinator",
    icon: <ClipboardCheck size={22} />,
    description: "Owning the full product lifecycle, driving cross-functional alignment, organizing sprints, and ensuring seamless execution.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white dark:bg-[#050505] text-zinc-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[100rem] mx-auto px-6 md:px-24 relative z-10">
        
        {/* Unique Asymmetric Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end border-b border-zinc-200 dark:border-zinc-800/80 pb-12">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="h-px w-6 bg-pink-500" />
              <span className="text-pink-600 dark:text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                Core Offerings
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight uppercase"
            >
              What I <span className="text-pink-600 dark:text-pink-500 font-light italic">Provide.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed"
            >
              Bridging the gap between creative aesthetic vision and structured execution—delivering comprehensive digital solutions from concept to launch.
            </motion.p>
          </div>
        </div>

        {/* Unique Numbered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group relative bg-linear-to-br from-zinc-50/80 to-zinc-100/40 dark:from-zinc-900/60 dark:to-zinc-950/80 border border-zinc-200/80 dark:border-zinc-800/80 p-8 md:p-10 rounded-3xl overflow-hidden hover:border-pink-500/40 transition-all duration-500 shadow-xs"
            >
              {/* Subtle Background Watermark Number */}
              <span className="absolute top-4 right-6 text-6xl md:text-7xl font-black font-mono text-zinc-200/50 dark:text-zinc-800/30 group-hover:text-pink-500/10 transition-colors pointer-events-none">
                {service.num}
              </span>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-pink-600 dark:text-pink-400 bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 w-14 h-14 flex items-center justify-center rounded-2xl shadow-xs group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <span className="font-mono text-xs tracking-widest text-pink-600 dark:text-pink-500 font-bold uppercase">
                      Service {service.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-wide text-zinc-950 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
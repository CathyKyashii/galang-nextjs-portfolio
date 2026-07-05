'use client';
import { motion } from 'framer-motion';

const experiences = [
  { 
    role: "Lead UI/UX Designer", 
    company: "HANDS | Habulan and Ngo Design Studio Co.", 
    date: "Feb 2026 - Present", 
    desc: "Spearheaded end-to-end website redesign, modernizing brand identity through high-fidelity prototyping and to ensure successful project delivery." 
  },
  { 
    role: "UI/UX Designer Intern", 
    company: "SupSoft Tech, Makati City, Philippines", 
    date: "Feb 2026 - Apr 2026", 
    desc: "Architected UI systems for diverse platforms, bridging the gap between complex design handoffs and technical implementation by collaborating with developers." 
  },
  { 
    role: "Volunteer Graphic Designer", 
    company: "Arduino Day Philippines", 
    date: "Jan 2026 - Mar 2026", 
    desc: "Produced high-impact creative assets for large-scale tech events, ensuring strict brand consistency under tight deadlines while maintaining top quality visuals." 
  },
  { 
    role: "Creatives Officer", 
    company: "ALPHA", 
    date: "Aug 2024 - Jan 2025", 
    desc: "Developed unique visual branding strategies for active campaigns, transforming abstract communication goals into tangible designs to maximize total audience engagement." 
  }
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
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
              Experience
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white"
          >
            Career <span className="text-pink-500 font-light italic">Journey.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group relative h-112.5 p-8 flex flex-col justify-end border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-zinc-50 dark:bg-[#111] md:hover:border-pink-500/50 transition-all duration-500"
            >
              <div className="absolute top-8 left-8 text-pink-500/10 text-8xl font-black select-none md:group-hover:text-pink-500/20 transition-colors duration-500">
                0{i + 1}
              </div>

              <div className="relative z-10 space-y-3">
                <span className="text-pink-500 font-mono text-[10px] tracking-[0.2em] uppercase">{exp.date}</span>
                <h3 className="text-xl font-bold uppercase leading-snug">{exp.role}</h3>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{exp.company}</p>
                {/* Line color changes on hover for desktop only */}
                <div className="w-12 h-px bg-zinc-300 dark:bg-zinc-700 md:group-hover:bg-pink-500 transition-colors duration-300" />
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
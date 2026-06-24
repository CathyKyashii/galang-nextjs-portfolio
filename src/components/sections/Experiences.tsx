'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Lead UI/UX Designer",
    company: "HANDS | Habulan and Ngo Design Studio Co.",
    date: "Feb 2026 - Present",
    desc: "Spearheaded end-to-end website redesign, modernizing brand identity through high-fidelity prototyping and direct developer collaboration."
  },
  {
    role: "UI/UX Designer Intern",
    company: "SupSoft Tech",
    date: "Feb 2026 - Apr 2026",
    desc: "Architected UI systems for diverse platforms, bridging the gap between complex design handoffs and technical implementation."
  },
  {
    role: "Volunteer Graphic Designer",
    company: "Arduino Day Philippines",
    date: "Jan 2026 - Mar 2026",
    desc: "Produced high-impact creative assets for large-scale tech events, ensuring strict brand consistency under tight deadlines."
  },
  {
    role: "Creatives Officer",
    company: "ALPHA",
    date: "Aug 2024 - Jan 2025",
    desc: "Translated abstract communication goals into tangible visual designs, optimizing layouts for maximum campaign engagement."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-white dark:bg-[#0a0a0a] w-full transition-colors duration-500">
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white">
            Career <span className="text-pink-500 font-light italic">Journey.</span>
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {experiences.map((exp, index) => (
            <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-3xl transition-all duration-500 
                        bg-zinc-100 dark:bg-zinc-900/20 
                        border border-zinc-200 dark:border-zinc-800
                        hover:border-pink-300
                        hover:shadow-[0_10px_30px_-5px_rgba(236,72,153,0.15)]
                        hover:bg-pink-50/80 dark:hover:bg-linear-to-br dark:hover:from-zinc-900 dark:hover:to-pink-950/20"
                >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="text-pink-600 dark:text-pink-500 font-bold text-[10px] tracking-[0.2em] uppercase">
                    {exp.date}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white mt-3 mb-2 leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-6">
                    {exp.company}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
                <div className="mt-8">
                  <div className="w-10 h-0.75 bg-zinc-300 dark:bg-zinc-700 group-hover:bg-pink-500 transition-colors duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
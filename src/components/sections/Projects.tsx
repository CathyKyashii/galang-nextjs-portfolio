'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Unified Project Database
const allProjects = [
  // --- WEB DESIGNS ---
  { title: "HANDS Group", date: "2026", desc: "Spearheaded the end-to-end redesign to modernize the brand's digital presence for an architecture portfolio, prioritizing a high-fidelity, accessible solution.", role: "Lead Web Designer", platform: "Architecture Portfolio", link: "https://hands-redesign.vercel.app/", image: "/handsanimation.svg", cat: "web" },
  { title: "ChronoTask", date: "2024", desc: "Architected a scalable frontend using React and Tailwind CSS, implementing optimized state management to handle complex AI-augmented project workflows.", role: "Front-end Developer", platform: "SaaS Productivity", link: "https://hands-thesis-prototype.vercel.app/", image: "/chronotask.svg", cat: "web" },
  { title: "TMC Food Hub", date: "2026", desc: "Designed a premier delivery service interface connecting users to local restaurants.", role: "Web Designer", platform: "Food Delivery", link: "https://foodhub.tmc-innovations.com/#", image: "/tmcfoodhub.png", cat: "web" },
  
  // --- ACADEMIC DESIGNS ---
  { title: "PrioriApp Magazine", date: "2024", desc: "Magazine-style layout for mobile app.", role: "Designer", platform: "Figma", link: "#", image: "/PrioriApp_magazine.png", cat: "academic" },
  { title: "Priori-App Features", date: "2024", desc: "Detailed product/service feature mapping for mobile interface.", role: "Designer", platform: "Canva & Figma", link: "#", image: "/PrioriApp_features.png", cat: "academic" },
  { title: "ChronoTask Tarpaulin", date: "2025", desc: "Tarpaulin layout for the final defense presentation of ChronoTasks.", role: "Designer", platform: "Canva & Figma", link: "#", image: "/ChronoTask_Tarpaulin.png", cat: "academic" },
  { title: "ChronoTask Brochure front", date: "2025", desc: "Front Brochure layout for the final defense presentation of ChronoTasks.", role: "Designer", platform: "Canva & Figma", link: "#", image: "/ChronoTask_Brochure-front.png", cat: "academic" },
  { title: "ChronoTask Brochure back", date: "2025", desc: "Back Brochure layout for the final defense presentation of ChronoTasks.", role: "Designer", platform: "Canva & Figma", link: "#", image: "/ChronoTask_Brochure-back.png", cat: "academic" },
  { title: "ChronoTask Certificate", date: "2025", desc: "ChronoTask certificate of completion for the team.", role: "Designer", platform: "Canva", link: "#", image: "/CertofCompletion.png", cat: "academic" },


  // --- CREATIVE DESIGNS ---
  { title: "National Heroes Day", date: "2024", desc: "Social media promotional graphic.", role: "Designer", platform: "Social Media", link: "#", image: "/hero.png", cat: "creative" }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'web' | 'academic' | 'creative'>('web');

  return (
    <section id="projects" className="relative min-h-screen w-full bg-white dark:bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.02] dark:opacity-[0.04]">
        <h2 className="text-[15vw] font-black uppercase tracking-widest text-zinc-900 dark:text-white" style={{ WebkitTextStroke: "1px currentColor", color: "transparent" }}>WORKS</h2>
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-8 z-10">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-6 bg-pink-500" />
            <span className="text-pink-500 font-mono text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Selected Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase text-zinc-950 dark:text-white">
            Featured <span className="text-pink-500 font-light italic">Projects.</span>
          </h2>

          <div className="mt-10 flex gap-2">
            {(['web', 'academic', 'creative'] as const).map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all ${activeCategory === cat ? "bg-pink-500 border-pink-500 text-white" : "border-zinc-200 dark:border-zinc-800 text-zinc-500"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {allProjects.filter(p => p.cat === activeCategory).map((project) => (
              <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={project.title} className="group border border-zinc-100 dark:border-zinc-900 rounded-2xl overflow-hidden bg-zinc-50 dark:bg-zinc-900/20 flex flex-col">
                <div className="aspect-4/3 relative overflow-hidden">
                   {/* Conditional logic for alignment: use object-top for the tarpaulin, otherwise default to object-cover */}
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className={`object-cover group-hover:scale-105 transition-transform duration-500 ${project.title === "ChronoTask_Tarpaulin" ? "object-top" : ""}`} 
                   />
                </div>
                <div className="p-6 grow">
                  <span className="text-[9px] font-bold text-pink-500 uppercase tracking-widest">{project.date}</span>
                  <h3 className="text-xl font-bold mt-1 mb-3 text-zinc-950 dark:text-white uppercase leading-tight">{project.title}</h3>
                  <p className="text-xs text-zinc-500 mb-6 leading-relaxed">{project.desc}</p>
                  
                  <div className="border-t border-zinc-200 dark:border-zinc-800 pt-4 text-[10px] space-y-3">
                    <p className="font-bold text-zinc-800 dark:text-zinc-300">ROLE: <span className="font-normal text-zinc-500">{project.role}</span></p>
                    <p className="font-bold text-zinc-800 dark:text-zinc-300">PLATFORM: <span className="font-normal text-zinc-500">{project.platform}</span></p>
                  </div>
                </div>
                
                {project.link !== "#" && (
                  <div className="p-6 pt-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-zinc-950 dark:bg-white text-white dark:text-black py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-pink-500 transition-colors">
                      Explore Project <ExternalLink size={11} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
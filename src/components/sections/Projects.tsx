'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Monitor, Smartphone, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const projects = [
  {
    title: "HANDS Group Website Redesign Project",
    date: "January 2026",
    description: "Spearheaded the end-to-end redesign to modernize the brand's digital presence for an architecture portfolio, prioritizing a high-fidelity, accessible solution.",
    role: "Lead Web Designer",
    platform: "Architecture Portfolio",
    link: "https://hands-redesign.vercel.app/",
    image: "/handsanimation.svg",
    hoverEffect: "grayscale-to-color"
  },
  {
    title: "ChronoTask: AI Augmented Project Management System",
    date: "November 2024",
    description: "Architected a scalable frontend using React and Tailwind CSS, implementing optimized state management to handle complex AI-augmented project workflows.",
    role: "Front-end Developer & Documentation",
    platform: "SaaS Productivity Tool",
    link: "https://hands-thesis-prototype.vercel.app/", 
    image: "/chronotask.svg",
    hoverEffect: "subtle-zoom"
  },
  {
    title: "TMC Food Hub",
    date: "April 2026",
    description: "Designed a premier delivery service interface connecting users to local restaurants. Focused on a clean, appetizing UI that facilitates fast, reliable, and convenient dining at your fingertips.",
    role: "Web Designer",
    platform: "Food Delivery Platform",
    link: "https://foodhub.tmc-innovations.com/#",
    image: "/tmcfoodhub.png",
    hoverEffect: "grayscale-to-color"
  }
];

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="projects" className="w-full bg-white dark:bg-black py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <span className="text-pink-500 text-[10px] uppercase tracking-[0.8em] font-black block mb-4">
            WORKS
          </span>
          <h2 className="text-5xl md:text-8xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter leading-none">
            Featured <span className="text-zinc-500 italic font-serif font-light dark:text-zinc-800">Projects.</span>
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} isMobile={isMobile} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project, isMobile, index }: { project: any, isMobile: boolean, index: number }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });

  const scaleMobile = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const grayscaleScroll = useTransform(scrollYProgress, [0, 0.8], ["grayscale(100%)", "grayscale(0%)"]);

  return (
    <div ref={itemRef} className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      
      {/* CONTENT SIDE */}
      <div className={`lg:col-span-5 space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : 'order-2 lg:order-1'}`}>
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-fit">
              <Calendar size={12} className="text-pink-500" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">{project.date}</span>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] font-black text-zinc-900 dark:text-white uppercase tracking-tighter leading-[1.1]">
            {project.title}
          </h3>
          
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed text-justify">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 border-y border-zinc-100 dark:border-zinc-900 py-6">
            <div className="flex-1 min-w-35 space-y-1.5">
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-pink-500">Role</p>
                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-200 uppercase leading-snug">{project.role}</p>
            </div>
            <div className="flex-1 min-w-35 space-y-1.5">
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-pink-500">Platform</p>
                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-200 uppercase leading-snug">{project.platform}</p>
            </div>
        </div>

        <div className="flex items-center gap-6 pt-2">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-black px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all hover:bg-pink-500 dark:hover:bg-pink-500 dark:hover:text-white shadow-xl">
                Explore Project <ExternalLink size={12} />
            </a>
            <div className="flex gap-4 text-zinc-300 dark:text-zinc-800">
                <Monitor size={18} />
                <Smartphone size={18} />
            </div>
        </div>
      </div>

      {/* IMAGE SIDE WITH SLOWER MOVING BORDER */}
      <div className={`lg:col-span-7 w-full ${index % 2 !== 0 ? 'lg:order-1' : 'order-1 lg:order-2'}`}>
        <motion.div
          style={{ scale: isMobile ? scaleMobile : 1 }}
          className="relative aspect-16/10 w-full p-1.25 rounded-2xl overflow-hidden group cursor-pointer shadow-2xl"
        >
          {/* Enhanced Beam Effect Layer (Slower Pink "Snake" Rotation) */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_60%,#ec4899_85%,transparent_100%)] opacity-100 z-0"
          />
          
          {/* Subtle Secondary Glow Layer */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_60%,#ec4899_85%,transparent_100%)] filter blur-2xl opacity-50 z-0"
          />

          {/* Inner Content Container */}
          <div className={`relative h-full w-full rounded-[12px] overflow-hidden z-10 border border-white/10 ${project.title.includes("ChronoTask") ? 'bg-white' : 'bg-zinc-100 dark:bg-[#0a0a0a]'}`}>
            <motion.div 
                style={{ filter: (isMobile && project.hoverEffect === 'grayscale-to-color') ? grayscaleScroll : undefined }}
                className={`w-full h-full relative transition-all duration-700 ease-in-out 
                  ${project.hoverEffect === 'grayscale-to-color' ? 'grayscale group-hover:grayscale-0' : ''}`}
            >
                <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    priority
                    className={`${project.title.includes("ChronoTask") ? "object-contain p-12" : "object-cover"} transition-transform duration-1000 group-hover:scale-105`}
                />
            </motion.div>
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}